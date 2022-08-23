import './Cart.scss';
import { useContext, useState } from 'react';
import { CartContext } from '../../context/CartContext';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-regular-svg-icons';
import { Link } from 'react-router-dom';
import Modal from '../Modal/Modal';
import db from '../../utils/firebaseConfig.js';
import { collection, addDoc} from 'firebase/firestore';

const Cart = () => {
    const [showModal, setShowModal] = useState(false);
    const {cartProduct, deleteCartById} = useContext(CartContext);
    const [success, setSuccess] = useState()
    
    let total = 0;
    cartProduct.forEach(element => {
        total = total + element.quantity*element.price;
    });

    const [order, setOrder] = useState({
        items: cartProduct.map((product) => {
            return{
                id: product.id,
                title: product.title,
                price: product.price
            }
        }),
        buyer:{},
        date: new Date().toLocaleString(),
        total: total
    })

    const [formData, setFormData] = useState({
        name:'',
        phone:'',
        email:''
    })

    const handleChange = (e) => { 
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    const submitData = (e) => {
        e.preventDefault();
        console.log('orden : ', {...order, buyer: formData});
        pushData({...order, buyer: formData})
    }

    const pushData = async (newOrder) => {
        const collectionOrder = collection(db, 'ordenes');
        const orderDoc = await addDoc(collectionOrder, newOrder);
        setSuccess(orderDoc.id);
        console.log('orden generada', orderDoc);
    }

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
                <button onClick={()=>setShowModal(true)}>Completar compra</button>
            </div>
            {
                showModal && 
                <Modal title='Datos de contacto' close={()=>setShowModal(false)}>
                    {
                        success? 
                        (
                            <>
                                <h4>Su orden se generó correctamente</h4>
                                <p>Nro de orden: {success}</p>
                            </>
                        ) :
                        (
                            <form onSubmit={submitData}>
                                <input type='text' name='name' placeholder='Ingrese su nombre' value={formData.name} onChange={handleChange}/>
                                <input type='tel' name='phone' placeholder='Número telefónico' value={formData.phone} onChange={handleChange}/>
                                <input type='email' name='email' placeholder='Ingrese su e-mail' value={formData.email} onChange={handleChange}/>
                                <button type='submit'>Enviar</button>
                            </form>
                        )
                    }
                </Modal>
            }
        </div>
    )
}

export default Cart;