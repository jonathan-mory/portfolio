import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-scroll';

export default function Header() {
  return (
    <header>
      <Navbar expand="md" fixed="top" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">Jonathan Mory.</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-nav-bar-nav">
            <Nav className="ms-auto" as="ul">
              <Nav.Link href="#presentation">Présentation</Nav.Link>
              <Nav.Link href="#skills">Compétences</Nav.Link>
              <Nav.Link href="#projects">Projets</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}
