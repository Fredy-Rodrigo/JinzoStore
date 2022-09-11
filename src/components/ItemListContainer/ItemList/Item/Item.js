import './Item.scss';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const Item = ({item}) => {

    const {id, title, price, pictureUrl, oferta} = item;

    return(
        <Link to={`/item/${id}`} className="card-item">
            <Card style={{ width: '13rem'}}>
                <div className='card-img-container'>
                    <Card.Img variant="top" src={`../assets/images/${pictureUrl}`} className="card-img"/>
                </div>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>S/ {price}.00</Card.Text>
                </Card.Body>
            </Card>
            {
                oferta && <div className="oferta">En oferta</div>
            }
        </Link>
    )
}

export default Item;