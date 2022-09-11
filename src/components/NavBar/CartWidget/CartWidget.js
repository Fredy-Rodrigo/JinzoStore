import './CartWidget.scss';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCartShopping} from '@fortawesome/free-solid-svg-icons';
import { faTrashCan } from '@fortawesome/free-regular-svg-icons';
import { useContext } from 'react';
import { CartContext } from '../../../context/CartContext';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import {Link} from 'react-router-dom';

const CartWidget = () => {
    const {cartProduct, totalProducts, clearProducts, deleteCartById} = useContext(CartContext);
    
    return (
        <DropdownButton
            align="end"
            id="dropdown-menu-align-end"
            title={
                <>
                    {cartProduct.length !== 0 && totalProducts}
                    <FontAwesomeIcon icon={faCartShopping} className="svg-cart"/>
                </>
            }>

            {
                cartProduct.map((product) => {
                    
                    return (
                        <Dropdown.Item key={product.id}>
                            <div className='cart-product'>
                                <img className='cart-product-picture' src={`../assets/images/${product.pictureUrl}`} alt={product.title}/>
                                <div className='cart-product-title-price'>
                                    <p className='cart-product-title'>{product.title}</p>
                                    <p className='cart-product-price'>S/{product.price}.00</p>
                                    <p className='cart-product-quantity'>Cantidad: {product.quantity}</p>
                                </div>
                                <div className='cart-product-delete' onClick={()=>deleteCartById(product.id, product.quantity)}>
                                    <FontAwesomeIcon icon={faTrashCan}/>
                                </div>
                            </div>
                        </Dropdown.Item>
                    )
                })
            }
            {
                cartProduct.length ? 
                (<>
                    <button className="button-primary button-padding" onClick={clearProducts}>Vaciar Carrito</button> 
                    <Link to='/cart'><button className="button-primary">Ver productos</button></Link>
                </>):
                <p className="sin-productos">No hay productos en el carrito</p>
            }
        </DropdownButton>
    )
}
                
export default CartWidget;