import logo from '../../assets/images/logo.png';
import cart from '../../assets/icons/cart.svg';
import './NavBar.scss';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const NavBar = () => {
    return (
        <>
        <Navbar bg="primary" variant="dark">
            <Container>
                <Navbar.Brand href="#home">
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
                            <img
                            alt=""
                            src={cart}
                            width="20"
                            height="20"
                            className="d-inline-block align-center"/>
                        </Nav.Link>
                    </Nav.Item>
                </Nav>
            </Container>
        </Navbar>
        {/* <div className="navegar">
            <ul>
                <li>Inicio</li>
                <li>Catálogo</li>
                <li>Ofertas</li>
                <li>Próximamente</li>
            </ul>
        </div> */}
        <Navbar bg="primary" variant="dark" expand="lg">
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