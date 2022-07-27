import './Item.scss';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Item = ({item}) => {
    const {id, title, description, price, pictureUrl} = item;

    return(
        <>
        <Card style={{ width: '15rem'}}>
            <Card.Img variant="top" src={`./assets/images/${pictureUrl}`} className="card-img"/>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>{description}</Card.Text>
                <Card.Text>S/ {price}.00</Card.Text>
                <Button variant="primary">Añadir al carrito</Button>
            </Card.Body>
        </Card>
        </>
    )
}

export default Item;