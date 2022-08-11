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

const NavBar = () => {
    return (
        <>
        <Navbar variant="dark" className='logo-busqueda-carrito'>
            <Container>
                <Link to="/" className='logo'>
                        <img
                        alt=""
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
                        <Nav.Link href="/" className="text-white">Inicio</Nav.Link>
                        <NavDropdown title="Categoría" id="basic-nav-dropdown">
                            <NavDropdown.Item href="/categoria/1" className='nav-subitem'>Caballeros del Zodiaco</NavDropdown.Item>
                            <NavDropdown.Item href="/categoria/2" className='nav-subitem'>Dragon Ball Z</NavDropdown.Item>
                            <NavDropdown.Item href="/categoria/3" className='nav-subitem'>One Piece</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="/ofertas" className="text-white">Ofertas</Nav.Link>
                        <Nav.Link href="/contacto" className="text-white">Contacto</Nav.Link>
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