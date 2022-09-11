import './NavBar.scss';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import CartWidget from './CartWidget/CartWidget';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import db from '../../utils/firebaseConfig';

const NavBar = () => {

    const [listProducts, setListProducts] = useState([])
    const [productoBuscado, setProductoBuscado] = useState('')
    const [productoFiltrado, setProductoFiltrado] = useState([])

    // capturar texto del input
    const handleChange = (e) => {
        setProductoBuscado(e.target.value);
    }

    // filtrar busqueda segun lo que se escriba en el input
    const filtrar = (palabraBuscada) => {
        let filtro = listProducts.filter((element) => element.title.toLowerCase().includes(palabraBuscada.toLowerCase()));

        palabraBuscada?
        setProductoFiltrado(filtro) :
        setProductoFiltrado([])   
    }

    // traer data de firestore
    const getProducts = async () => {
        const productCollection = collection(db, 'productos');
        const productSnapshot = await getDocs(productCollection);
        const productList = productSnapshot.docs.map((doc) => {
            let product = doc.data();
            product.id = doc.id;
            return product;
        })
        return productList;
    }
    
    useEffect(()=>{
        getProducts()
        .then((res) => {
            setListProducts(res);
            filtrar(productoBuscado);
        })
    },[productoBuscado])
    
    // limpiar lista de busqueda cuando ya se seleccione un producto
    const limpiarInput = () => {
        setProductoBuscado('')
    }

    return (
        <>
        <Navbar variant="dark" className='logo-busqueda-carrito'>
            <Container>
                <Link to="/" className='logo'>
                        <img
                        alt="JINZO STORE logo"
                        src={'./assets/images/logo.png'}
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                        />{' '}
                        JinzoStore
                </Link>
                
                <Container>
                    <Row className="justify-content-md-center">
                    <Col lg={6}>
                    <Form className="d-flex">
                        <Form.Control
                        type="search"
                        placeholder="Busca tu producto..."
                        className="me-2"
                        aria-label="Search"
                        onChange={handleChange}
                        />
                        <Button variant="outline-light">Search</Button>
                    </Form>
                    </Col>
                    </Row>
                </Container>

                <div className="display">
                    {
                        productoFiltrado!==[]?
                        productoFiltrado.map((element) => {
                            return(
                                    <Link to={`/item/${element.id}`} onClick={limpiarInput}><p key={element.id} className="element">{element.title}</p></Link>
                            )
                        })
                        :
                        <p></p>
                    }
                </div>

                <Nav>
                    <Nav.Item>
                        <Nav.Link>
                            <CartWidget/>
                        </Nav.Link>
                    </Nav.Item>
                </Nav>
            </Container>
        </Navbar>
        
        <Navbar variant="dark" expand="lg" className='lista-navegacion'>
            <Container>
            <Container>
                <Row>
                <Col>
                    <Nav className="justify-content-center">
                        <Link to="/" className="text-white">Inicio</Link>
                        <NavDropdown title="Categoría" id="basic-nav-dropdown" className="text-white subitems">
                            <Link to="/categoria/1" className='nav-subitem'>Caballeros del Zodiaco</Link>
                            <Link to="/categoria/2" className='nav-subitem'>Dragon Ball Z</Link>
                            <Link to="/categoria/3" className='nav-subitem'>One Piece</Link>
                        </NavDropdown>
                        <Link to="/ofertas" className="text-white">Ofertas</Link>
                        <Link to="/contacto" className="text-white">Contacto</Link>
                    </Nav>
                </Col>
                </Row>
            </Container>
            </Container>
        </Navbar>
        </>
    )
}

export default NavBar;