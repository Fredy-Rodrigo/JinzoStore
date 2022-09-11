import './ItemList.scss'
import Item from './Item/Item';
import CardGroup from 'react-bootstrap/CardGroup';

const ItemList = ({items}) => {
    
    return (
        <CardGroup>
        {items.map((product) => {
            return <Item key={product.id} item={product}/>   
        })}
        </CardGroup>
    )
}

export default ItemList;