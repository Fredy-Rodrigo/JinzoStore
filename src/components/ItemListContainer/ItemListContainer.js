import ItemCount from './ItemCount/ItemCount';
import './ItemListContainer.scss';

const ItemListContainer = (props) => {
    const {categoria} = props;

    const product1 = {
        title:"shaka",
        price:"50",
        image:"saint-seiya-shaka.webp",
        stock: 0,
        initial: 0
    }
    const product2 = {
        title:"shura",
        price:"50",
        image:"saint-seiya-shura.webp",
        stock: 10,
        initial: 1
    }

    const addProduct = () => {
        console.log("Proximamente funcion para añadir al carrito");
    }

    return (
        <div className='item-list-container'>
            <h2>{categoria}</h2>
            <ItemCount data={product1} action={addProduct}/>
            <ItemCount data={product2} action={addProduct}/>
        </div>
    )
}

export default ItemListContainer;