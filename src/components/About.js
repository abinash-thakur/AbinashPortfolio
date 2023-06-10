import React from 'react';
import '../css/About.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Container,Button } from 'react-bootstrap';

export default function About() {
    return (
            <Container id="about" fluid className='aboutMain'>
                <Row className='p-0 m-0'>
                    <Col lg={6} md={12} sm={12} className='p-5'>
                            <div className='aboutRight'>
                                <h1>About Me</h1>
                                <p>I am an B.TECH graduate and am currently working for Antino Labs Gurugram, Haryana. Antino is my first step into the IT industry where I am learning and growing with a good technical team that moves ahead together, supporting and motivating one another.</p>
                                <tbody>
                                    <tr>
                                        <td>Name</td>
                                        <td>:</td>
                                        <td>Abinash Thakur</td>
                                    </tr>
                                    <tr>
                                        <td>Company</td>
                                        <td>:</td>
                                        <td>Antino Labs Private Ltd.</td>
                                    </tr>
                                    <tr>
                                        <td>Location</td>
                                        <td>:</td>
                                        <td>Gurugram Haryana, India</td>
                                    </tr>
                                    <tr>
                                        <td>Tech Stack</td>
                                        <td>:</td>
                                        <td>NodeJs | MERN Stack</td>
                                    </tr>
                                    <tr>
                                        <td>Email</td>
                                        <td>:</td>
                                        <td>thakurabinash299@gmail.com</td>
                                    </tr>
                                    <tr>
                                        <td>Phone</td>
                                        <td>:</td>
                                        <td>7609889809</td>
                                    </tr>
                                </tbody>
                            </div>

                            <div className='my-5'>
                                <Button className='rounded-0 btnstyle my-2'>Download Resume</Button>
                                <Button className='ms-2 rounded-0 btnstyle'>See Projects</Button>
                            </div>
                    </Col>
                    <Col lg={6} md={12} sm={12} className='abt-image'>
                    </Col>
                </Row>
            </Container>
    )
}
