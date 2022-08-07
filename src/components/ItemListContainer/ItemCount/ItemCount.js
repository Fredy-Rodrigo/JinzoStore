import './ItemCount.scss';
import{useState} from 'react';//hook que nos permite definir y actualizar estados

const ItemCount = ({data, setQuantitySelected}) => {
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
        setQuantitySelected(counter);
    }

    return (
        <div className='item-count'>
            {/* <img src={`./assets/images/${image}`} alt={title}/>
            <p>{title}</p>
            <p>$ {price}</p> */}
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