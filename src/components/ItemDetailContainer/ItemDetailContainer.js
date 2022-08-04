import './ItemDetailContainer.scss';
import ItemDetail from './ItemDetail/ItemDetail';
import products from '../../utils/products.mock'
import {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';

const ItemDetailContainer = () => {

    const [productData, setProductData] = useState({})
    const {id} = useParams();
    
    useEffect(() => {
        filterById();
    }, [])

    const filterById = () => {
        products.some((element) => {
            if(element.id == id) {
                setProductData(element)
            }
        })
    }
    
    return(
        <div className='item-detail-container'>
            <ItemDetail item={productData}/>
        </div>
    )
}

export default ItemDetailContainer;