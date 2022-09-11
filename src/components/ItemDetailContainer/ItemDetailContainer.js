import './ItemDetailContainer.scss';
import ItemDetail from './ItemDetail/ItemDetail';
import {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import db from '../../utils/firebaseConfig';
import {doc, getDoc} from 'firebase/firestore';

const ItemDetailContainer = () => {

    const [productData, setProductData] = useState({})
    const {id} = useParams();

    const getProduct = async () => {
        const docRef = doc(db, 'productos', id);
        const docSnapshot = await getDoc(docRef);

        let product = docSnapshot.data();
        product.id = docSnapshot.id;
        return product;
    }

    useEffect(() => {
        getProduct()
        .then((res) => {
            setProductData(res)
        })
    }, [id])

    
    return(
        <div className='item-detail-container'>
            <ItemDetail item={productData} id={id}/>
        </div>
    )
}

export default ItemDetailContainer;