import './ItemDetail.scss';

const ItemDetail = ({item}) => {
    
    return (
        <div className='item-details'>
            <div className='fotos'>
                <img src={`./assets/images/${item.pictureUrl1}`} alt={'shura'}/>
                <img src={`./assets/images/${item.pictureUrl2}`} alt={'shura'}/>
                <img src={`./assets/images/${item.pictureUrl3}`} alt={'shura'}/>
                <img src={`./assets/images/${item.pictureUrl4}`} alt={'shura'}/>
                <img src={`./assets/images/${item.pictureUrl5}`} alt={'shura'}/>
            </div>
            <div className='foto-principal'>
                <img src={`./assets/images/${item.pictureUrl1}`} alt={'shura'}/>
            </div>
            <div className='descripcion'>
                <p className='titulo'>{item.title}</p>
                <p className='precio'>S/ {item.price}.00</p>
                <p className='desc'>{item.description}</p>
                <button>Añadir al carrito</button>
            </div>
        </div>
    )
}

export default ItemDetail;