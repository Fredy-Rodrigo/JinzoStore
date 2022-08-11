import './ItemDetail.scss';
import ItemCount from '../../ItemListContainer/ItemCount/ItemCount';
import { useState } from 'react';
import { Link } from 'react-router-dom'

const ItemDetail = ({item}) => {
    const [quantitySelected, setQuantitySelected] = useState(0);

    return (
        <div className='item-details'>
            <div className='fotos'>
                <img src={`../assets/images/${item.pictureUrl}`} alt={'shura'}/>
                <img src={`../assets/images/${item.pictureUrl1}`} alt={'shura'}/>
                <img src={`../assets/images/${item.pictureUrl2}`} alt={'shura'}/>
                <img src={`../assets/images/${item.pictureUrl3}`} alt={'shura'}/>
                <img src={`../assets/images/${item.pictureUrl4}`} alt={'shura'}/>
            </div>
            <div className='foto-principal'>
                <img src={`../assets/images/${item.pictureUrl}`} alt={'shura'}/>
            </div>
            <div className='descripcion'>
                <p className='titulo'>{item.title}</p>
                <p className='precio'>S/ {item.price}.00</p>
                <p className='desc'>{item.description}</p>
            
                {
                    quantitySelected>0? 
                    <Link to='/ '><button>SEGUIR COMPRANDO</button></Link> : 
                    <ItemCount data={item} setQuantitySelected={setQuantitySelected}/>
                }
            </div>
        </div>
    )
}

export default ItemDetail;