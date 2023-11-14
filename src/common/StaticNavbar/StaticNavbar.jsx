import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './StaticNavbar.css';

export const StaticNavbar = () => {
  return (
    <Navbar expand="lg" className="bg-dark navbarStatic fixed-top">
      <Container className='container-navbar'>
        <Navbar.Brand><img className='headerLogo' src={'../src/img/logo.png'} alt="Logo" /></Navbar.Brand>
        <Navbar.Brand className='text-white text-navbar-title' href="/">ROCKET <span className='blueColour'>TATTOO</span></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto navbar-links">
            <Nav.Link className='text-navbar items-navbar' href="/">HOME</Nav.Link>
            <Nav.Link className='text-navbar items-navbar' href="/gallery">GALLERY</Nav.Link>
            <Nav.Link className='text-navbar items-navbar' href="/crew">CREW</Nav.Link>
            <Nav.Link className='text-navbar items-navbar' href="/login">LOGIN</Nav.Link>
            <Nav.Link className='text-navbar items-navbar' href="/register">REGISTER</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
