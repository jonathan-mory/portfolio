import { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-scroll';
import './Header.scss';

export default function Header() {
  const [offset, setOffset] = useState(-56);

  const updateOffset = () => {
    if (window.innerWidth < 768) {
      setOffset(-200);
    } else {
      setOffset(-56);
    }
  };

  useEffect(() => {
    updateOffset();
    window.addEventListener('resize', updateOffset);
    return () => {
      window.removeEventListener('resize', updateOffset);
    };
  }, []);

  const navItems = [
    { id: 'presentation', label: 'Présentation' },
    { id: 'skills', label: 'Compétences' },
    { id: 'projects', label: 'Projets' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <header>
      <Navbar expand="md" fixed="top" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">Jonathan Mory.</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-nav-bar-nav">
            <Nav className="ms-auto" as="ul">
              {navItems.map(({ id, label }) => (
                <Nav.Item as="li" key={id}>
                  <Link
                    activeClass="active"
                    to={id}
                    spy={true}
                    smooth={true}
                    offset={offset}
                    duration={100}
                    className="nav-link"
                  >
                    {label}
                  </Link>
                </Nav.Item>
              ))}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}
