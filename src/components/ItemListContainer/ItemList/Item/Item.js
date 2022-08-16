import './Item.scss';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../../../../context/CartContext';

const Item = ({item}) => {
    const {addProductToCart} = useContext(CartContext)

    const {id, title, description, price, pictureUrl} = item;

    /* const addToCart = (quantity) => {
        addProductToCart(item ,quantity)
    }
 */
    return(
        <Link to={`/item/${id}`} className="card-item">
            <Card style={{ width: '13rem'}}>
                <Card.Img variant="top" src={`../assets/images/${pictureUrl}`} className="card-img"/>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>S/ {price}.00</Card.Text>
                    {/* <Button variant="primary" onClick={addToCart}>Añadir al carrito</Button> */}
                </Card.Body>
            </Card>
        </Link>
    )
}

export default Item;