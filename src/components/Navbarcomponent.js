import React from 'react';
import '../css/Navbar.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function Navbarcomponent() {
    return (
        <Navbar collapseOnSelect expand="lg" variant="dark" className='navbar'>
            <Container>
                <Navbar.Brand href="#home">Abinsh Portfolio</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="#home" >Home</Nav.Link>
                        <Nav.Link href="#about" >About</Nav.Link>
                        <Nav.Link href="#pricing" >Resume</Nav.Link>
                        <Nav.Link href="#projects" >Projects</Nav.Link>
                        <Nav.Link href="#contact" >Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
