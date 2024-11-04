import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';

function Header() {
  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg" className="sticky-top">
        <Container>
          <Navbar.Brand href="#home">My Portfolio</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#projects">Projects</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div className="hero bg-dark text-white text-center py-5">
        <Container>
          <h1>Welcome to My Portfolio</h1>
          <p>Explore my work and skills</p>
        </Container>
      </div>
    </>
  );
}

export default Header;