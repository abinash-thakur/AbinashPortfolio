import React from 'react';
import '../css/Navbar.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Col, Row } from 'react-bootstrap';

export default function Navbarcomponent() {
    return (
        <Container fluid>
            <Row>
            <Col sm={12} className='p-0'>
            <Navbar collapseOnSelect expand="lg" variant="dark" className='navbar' fixed='top'>
                        <Container>
                            <Navbar.Brand href="#home">Abinsh Portfolio</Navbar.Brand>
                            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                            <Navbar.Collapse id="responsive-navbar-nav">
                                <Nav className="ms-auto">
                                    <Nav.Link href="#home" >Home</Nav.Link>
                                    <Nav.Link href="#about" >About</Nav.Link>
                                    <Nav.Link href="#resume" >Resume</Nav.Link>
                                    <Nav.Link href="#projects" >Projects</Nav.Link>
                                    <Nav.Link href="#contact" >Contact</Nav.Link>
                                </Nav>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
            </Col>
            </Row>
        </Container>
    )
}
