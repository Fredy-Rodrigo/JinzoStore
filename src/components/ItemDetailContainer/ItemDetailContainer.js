import './ItemDetailContainer.scss';
import ItemDetail from './ItemDetail/ItemDetail';
import products from '../../utils/products.mock'
import {useState, useEffect} from 'react';

const ItemDetailContainer = () => {
    const [figura, setFigura] = useState([]);

    const getFigura = new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve(products[0]);
        }, 2000)
    })

    useEffect(() => {
        getFigura
        .then((response) => {
            setFigura(response);
        })
        .catch((error) => {
            console.log('ocurrio un error al hacer la llamada');
        })
    }, [])
    return(
        <div className='item-detail-container'>
            <ItemDetail item={figura}/>
        </div>
    )
}

export default ItemDetailContainer;