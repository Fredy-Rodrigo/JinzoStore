import './ItemDetailContainer.scss';
import ItemDetail from './ItemDetail/ItemDetail';
import products from '../../utils/products.mock'
import {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import db from '../../utils/firebaseConfig';
import {doc, getDoc} from 'firebase/firestore';

const ItemDetailContainer = () => {

    const [productData, setProductData] = useState({})
    const {id} = useParams();
    
    /* const filterById = () => {
        products.some((element) => {
            if(element.id == id) {
                setProductData(element)
            }
        })
    } */

    const getProduct = async () => {
        const docRef = doc(db, 'productos', id);
        const docSnapshot = await getDoc(docRef);

        let product = docSnapshot.data();
        product.id = docSnapshot.id;
        // o tambien product.id = id;
        //console.log('docsnapshot', docSnapshot);
        //console.log('docsnapshot data', docSnapshot.data());
        return product;
    }

    useEffect(() => {
        //filterById();
        getProduct()
        .then((res) => {
            setProductData(res)
        })
    }, [])

    
    return(
        <div className='item-detail-container'>
            <ItemDetail item={productData}/>
        </div>
    )
}

export default ItemDetailContainer;