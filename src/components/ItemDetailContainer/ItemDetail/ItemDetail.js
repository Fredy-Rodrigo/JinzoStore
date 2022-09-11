import './ItemDetail.scss';
import ItemCount from '../../ItemListContainer/ItemCount/ItemCount';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const ItemDetail = ({item, id}) => {
    const [quantitySelected, setQuantitySelected] = useState(0);
    const [imageSelected, setImageSelected] = useState('');
    
    // cuando se actualice el id, la cantidad regresa a cero
    useEffect (() => {
        setImageSelected(item.pictureUrl);
    },[item])

    useEffect (() => {
        item.id!==id && setQuantitySelected(0);
        console.log(item);
    }, [id])

    return (
        <div className='item-details'>
            <div className='fotos'>
                <img src={`../assets/images/${item.pictureUrl}`} onClick={()=>setImageSelected(item.pictureUrl)} alt={item.title}/>
                <img src={`../assets/images/${item.pictureUrl1}`} onClick={()=>setImageSelected(item.pictureUrl1)} alt={item.title}/>
                <img src={`../assets/images/${item.pictureUrl2}`} onClick={()=>setImageSelected(item.pictureUrl2)} alt={item.title}/>
                <img src={`../assets/images/${item.pictureUrl3}`} onClick={()=>setImageSelected(item.pictureUrl3)} alt={item.title}/>
                <img src={`../assets/images/${item.pictureUrl4}`} onClick={()=>setImageSelected(item.pictureUrl4)} alt={item.title}/>
            </div>
            <div className='foto-principal'>
                <img src={`../assets/images/${imageSelected}`} alt={item.title}/>
            </div>
            <div className='descripcion'>
                <p className='titulo'>{item.title}</p>
                <p className='precio'>S/ {item.price}.00</p>
                {
                    item.oferta && <p className='descuento'>10% de dscto</p>
                }
                <p className='desc'>{item.description}</p>
            
                {
                    quantitySelected>0? 
                    <>
                        <Link to='/cart'><button className='btn-terminar-compra'>Terminar compra</button></Link>
                        <Link to='/'><button className='btn-terminar-compra'>Seguir comprando</button></Link>
                    </>: 
                    <ItemCount data={item} setQuantitySelected={setQuantitySelected}/>
                }
            </div>
        </div>
    )
}

export default ItemDetail;