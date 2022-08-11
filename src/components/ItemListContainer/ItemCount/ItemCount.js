import './ItemCount.scss';
import{useState, useContext} from 'react';//hook que nos permite definir y actualizar estados
import { CartContext } from '../../../context/CartContext';

const ItemCount = ({data, setQuantitySelected}) => {
    const {addProductToCart} = useContext(CartContext);

    const [counter, setCounter] = useState(0);//definiendo un estado, valor inicial de 0

    const addNumber = () => {
        if(data.stock !== 0) {
            if (counter<data.stock) setCounter(counter+1);
        }
    }
    
    const substractNumber = () => {
        if(data.stock !== 0) {
            if (counter>data.initial) setCounter(counter-1);
        }
    }

    const onAdd = () => {
        addProductToCart(data, counter);
        setQuantitySelected(counter);
    }

    return (
        <div className='item-count'>  
            <div className='contador'>
                <button onClick={substractNumber}>-</button>
                <p>{counter}</p>
                <button onClick={addNumber}>+</button>
            </div>
            <button onClick={onAdd}>Añadir al carrito</button>
        </div>
    )
}
 
export default ItemCount;