import './ItemListContainer.scss';
import ItemList from './ItemList/ItemList';
import products from '../../utils/products.mock';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {

    const [listProducts, setListProducts] = useState([]) //creando el estado

    const {categoryId} = useParams();

    const filtrarCategoria = products.filter((producto) => producto.categoria === categoryId);
    
    const getProducts = new Promise((resolve, reject) => {
        setTimeout(()=>{
            if(categoryId==="1"||categoryId==="2"||categoryId==="3") {
                resolve(filtrarCategoria);
            } else {
                resolve(products);
            }
        },200)
    })

    useEffect(()=>{
        getProducts
            .then((response) => {
                setListProducts(response) //guardando el array dentro del estado    
            })
            .catch((error) => {
                console.log("ocurrio un error en la llamada");
            })
    })

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