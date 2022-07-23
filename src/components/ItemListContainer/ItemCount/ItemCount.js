import './ItemCount.scss';
import{useState} from 'react';//hook que nos permite definir y actualizar estados

const ItemCount = ({data, action}) => {

    const {title, price, image, stock, initial} = data;
    const [counter, setCounter] = useState(initial);//definiendo un estado, valor inicial de 0

    const addNumber = () => {
        if(stock !== 0) {
            if (counter<stock) setCounter(counter+1);
        }
    }
    
    const substractNumber = () => {
        if(stock !== 0) {
            if (counter>initial) setCounter(counter-1);
        }
    }

    return (
        <div className='item-count'>
            <img src={`./assets/images/${image}`} alt={title}/>
            <p>{title}</p>
            <p>$ {price}</p>
            <div className='contador'>
                <button onClick={substractNumber}>-</button>
                <p>{counter}</p>
                <button onClick={addNumber}>+</button>
            </div>
            <button onClick={action}>Añadir al carrito</button>
        </div>
    )
}
 
export default ItemCount;