import './ItemListContainer.scss';
import ItemList from './ItemList/ItemList';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { collection, getDocs, query, where } from 'firebase/firestore';
import db from '../../utils/firebaseConfig';

const ItemListContainer = ({ofertas}) => {

    const [listProducts, setListProducts] = useState([]) //creando el estado

    const {categoryId} = useParams();

    // retornando toda la lista de productos
    const getProducts = async () => {
        const productCollection = collection(db, 'productos');
        const productSnapshot = await getDocs(productCollection);
        const productList = productSnapshot.docs.map((doc) => {
            let product = doc.data();
            product.id = doc.id;
            return product;
        })

        // retornando los porductos pero filtrados por categoria
        if(categoryId) {
            const queryFilter = query(productCollection, where('categoria','==',categoryId))
            const productSnapshot = await getDocs(queryFilter);
            const productList = productSnapshot.docs.map((doc) => {
                let product = doc.data();
                product.id = doc.id;
                return product;
            })
            return productList;
        }
        
        return productList;
    }

    useEffect(()=>{
        getProducts()
        .then((res) => {
            
            if(ofertas) {
                let listaOfertas = res.filter((producto) => producto.oferta === true);
                setListProducts(listaOfertas);
            } else {
                setListProducts(res); //guardando el array dentro del estado
            }
        })
    },[categoryId])

    return (
        <div className='item-list-container'>
            <ItemList items={listProducts} />
        </div>
    )
}

export default ItemListContainer;




//EJEMPLOS DE LA CLASE DE PROMESAS

    /* const logPromise = new Promise((resolve, reject)=>{
        resolve("La promesa se cumplio correctamente")
    })

    logPromise
    .then((res)=>{ //llamada, accediendo a la promesa
        console.log(res);
    })
    .catch((error)=>{ // se ejecuta en caso de que la llamada falle
        console.log("la llamada fallo");
    })
    .finally(()=>{
        //por ejemplo desaparece el spinner
    }) */

    /* const logPromise = () => new Promise((resolve, reject)=>{
        resolve("La promesa se cumplio correctamente")
    })

    const getLog = async () => {
        try {
            const responseLog = await logPromise();
            console.log("respuesta desde async function " + responseLog);
        }
        catch(error) {
            console.log(error);
        }
    }
    getLog(); */