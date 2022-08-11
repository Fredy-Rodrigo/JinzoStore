import './ItemList.scss'
import Item from './Item/Item';
import CardGroup from 'react-bootstrap/CardGroup';
import { useContext } from 'react';
import { CartContext } from '../../../context/CartContext';

const ItemList = ({items}) => {

    const {name, setName, handleClick} = useContext(CartContext)
    
    return (
        <CardGroup>
        {items.map((product) => {
            return <Item key={product.id} item={product}/>   
        })}
        </CardGroup>
    )
}

export default ItemList;