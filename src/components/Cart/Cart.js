import './Cart.scss';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-regular-svg-icons';
import { Link } from 'react-router-dom';

const Cart = () => {
    const {cartProduct, deleteCartById} = useContext(CartContext);

    let total = 0;
    cartProduct.forEach(element => {
        total = total + element.quantity*element.price;
    });

    return (
        <div className='cart'>
            <div className='checkout-title'>Carrito de Checkout</div>
            <div className='lista-productos'>
                {
                    cartProduct.map((product) => {
                        
                        return (
                            <div className='cart-product' key={product.id}>
                                <img className='cart-product-picture' src={`../assets/images/${product.pictureUrl}`} alt={product.title}/>
                                <div className='cart-product-title-price'>
                                    <p className='cart-product-title'>{product.title}</p>
                                    <p className='cart-product-price'>S/{product.price}.00</p>
                                    <p className='cart-product-quantity'>Cantidad: {product.quantity}</p>
                                </div>
                                <div className='cart-product-delete' onClick={()=>deleteCartById(product.id)}>
                                    <FontAwesomeIcon icon={faTrashCan}/>
                                </div>
                            </div>
                        )
                    })
                }
                {
                    cartProduct.length===0? 
                    (<>
                        <p className='sin-productos'>No hay productos en el carrito</p>
                        <Link to='/'><button>Continuar comprando</button></Link>
                    </>
                    ):
                    ''
                }
                
            </div>
            <div className='resumen-productos'>
                <h4>Resumen de la compra</h4>
                <p>Subtotal<span>S/{total}.00</span></p>
                <p>Envío<span>Gratis</span></p>
                <p>Total<span>S/{total}.00</span></p>
                <button>Completar compra</button>
            </div>
            {console.log('productos : ',cartProduct)}
        </div>
    )
}

export default Cart;