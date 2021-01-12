import { Col, Container, Nav, Navbar, NavDropdown, Row } from "react-bootstrap";
import { BrowserRouter, Link } from "react-router-dom";
import { UriIhm } from "../../constantes/uri-ihm";

const Menu = ({ children }) => {
  return <><Navbar bg="light" expand="lg">
    <Navbar.Brand as={Link} to={UriIhm.accueil} className="nav-link">CSNS</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link as={Link} to={UriIhm.operations}>Opérations</Nav.Link>
        <Nav.Link as={Link} to={UriIhm.dossiers}>Dossier</Nav.Link>
        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
    <Container>
      <Row>
        <Col>
          {children}
        </Col>
      </Row>
    </Container>
  </>
}

export default Menu;