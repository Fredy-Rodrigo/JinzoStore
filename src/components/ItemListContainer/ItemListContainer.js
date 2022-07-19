import './ItemListContainer.scss';
const ItemListContainer = (props) => {
    const {categoria} = props;
    return (
        <div className='item-list-container'>
            <h2>{categoria}</h2>
        </div>
    )
}

export default ItemListContainer;