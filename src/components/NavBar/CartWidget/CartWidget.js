import './CartWidget.scss';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCartShopping} from '@fortawesome/free-solid-svg-icons';
import { faTrashCan } from '@fortawesome/free-regular-svg-icons';
import { useContext } from 'react';
import { CartContext } from '../../../context/CartContext';
import Dropdown from 'react-bootstrap/Dropdown';

const CartWidget = () => {
    const {cartProduct, clearProducts, deleteCartById} = useContext(CartContext);
    
    return (
        <Dropdown>
            <Dropdown.Toggle id="dropdown-drop-start">
                <FontAwesomeIcon icon={faCartShopping} >
                    Dropdown Button
                </FontAwesomeIcon>
            </Dropdown.Toggle>

            <Dropdown.Menu>
                    {
                        cartProduct.map((product) => {
                            
                            return (
                                <Dropdown.Item>
                                <div className='cart-product' key={product.id}>
                                    <img className='cart-product-picture' src={`../assets/images/${product.pictureUrl}`}/>
                                    <div className='cart-product-title-price'>
                                        <p className='cart-product-title'>{product.title}</p>
                                        <p className='cart-product-price'>S/{product.price}.00</p>
                                        <p className='cart-product-quantity'>Cantidad: {product.quantity}</p>
                                    </div>
                                    <div className='cart-product-delete' onClick={()=>deleteCartById(product.id)}>
                                        <FontAwesomeIcon icon={faTrashCan}/>
                                    </div>
                                </div>
                                </Dropdown.Item>
                            )
                        })
                    }
                    {
                        cartProduct.length ? 
                        (<button className="button-primary button-padding" onClick={clearProducts}>Vaciar Carrito</button>):
                        <p>No hay productos en el carrito</p>
                    }
            </Dropdown.Menu>
        </Dropdown>
        
    )
}

export default CartWidget;