import logo from '../../assets/images/logo.png';
import './NavBar.scss';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import CartWidget from './CartWidget/CartWidget';

const NavBar = () => {
    return (
        <>
        <Navbar variant="dark" className='logo-busqueda-carrito'>
            <Container>
                <Navbar.Brand href="#home" className="logo">
                    <img
                    alt=""
                    src={logo}
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                    />{' '}
                    JinzoStore
                </Navbar.Brand>
                
                <Container>
                    <Row className="justify-content-md-center">
                    <Col lg={6}>
                    <Form className="d-flex">
                        <Form.Control
                        type="search"
                        placeholder="Busca tu producto..."
                        className="me-2"
                        aria-label="Search"
                        />
                        <Button variant="outline-light">Search</Button>
                    </Form>
                    </Col>
                    </Row>
                </Container>

                <Nav>
                    <Nav.Item>
                        <Nav.Link eventKey="link-1" className="text-white">Acceder</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="link-2" className="text-white">Carrito</Nav.Link>
                    </Nav.Item>
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
                        <Nav.Link className="text-white">Inicio</Nav.Link>
                        <Nav.Link className="text-white">Catálogo</Nav.Link>
                        <Nav.Link className="text-white">Ofertas</Nav.Link>
                        <Nav.Link className="text-white">Próximamente</Nav.Link>
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