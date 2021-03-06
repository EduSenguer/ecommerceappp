
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import spiderman from './img/spiderman.png'

function NavBar() {
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">
        <img
              src={spiderman}
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="spiderman"
            />
            Spiderverse Store</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Comics</Nav.Link>
            <Nav.Link href="#action2">Games</Nav.Link>
            <NavDropdown title="Figures" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Legends</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Bandai
              </NavDropdown.Item>
              <NavDropdown.Item href="#action5">
                Hot Toys
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-danger">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;