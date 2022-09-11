import './Ofertas.scss';
import ItemListContainer from "../components/ItemListContainer/ItemListContainer";

const Ofertas = () => {
    return (
        <div className='ofertas'>
            <h1>Productos en oferta</h1>
            <ItemListContainer ofertas={true}/>
        </div>
    )
}

export default Ofertas;