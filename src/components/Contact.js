import React from 'react';
import '../css/Contact.css';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { HouseGear} from 'react-bootstrap-icons';

export default function Contact() {
    return (
        <Container fluid id="contact">
            <h1 className='text-center text-light'>Contact Me</h1>
            <h3 className='text-center text-light' style={{ fontWeight: "400" }}>I would love to here from you!</h3>
            <Row className='m-0 p-0 container-style'>
                <Col className='col-style' sm={12} md={12} lg={5}>
                    <Row className='mb-1'>Your Name</Row>
                    <Row>
                        <input type="text" className='input-style'></input>
                    </Row>
                    <Row className='mb-1'>Email</Row>
                    <Row>
                        <input type="email" className='input-style'></input>
                    </Row>
                    <Row className='mb-1'>Subject</Row>
                    <Row>
                        <input type="text" className='input-style'></input>
                    </Row>
                    <Row className='mb-1'>Message</Row>
                    <Row>
                        <textarea type="text" className='text-area' rows={5}></textarea>
                    </Row>
                    <Row className='mb-5'>
                        <button className='mybtn'>SUBMIT</button>
                    </Row>
                </Col>
                <Col sm={12} md={12} lg={7} className='contact-corner m-0 p-0'>
                    <Row className='m-0 p-0'>
                        <Col sm={12} md={6} lg={6} className='mb-5 p-0 d-flex justify-content-center'>
                            <Card style={{ width: '23rem', borderRadius:0, backgroundColor: "#7755a6", textAlign: "center", color:"white" }}>
                                <Card.Body className='d-flex flex-column align-items-center'>
                                    <div className='icon-style' style={{border:"2px solid white"}}><HouseGear fontSize={30} color='white'/></div>
                                    <h2 className='mt-3'>Address</h2>
                                    <p>Gurugram, Haryana India</p>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col sm={12} md={6} lg={6} className='mb-5 p-0 d-flex justify-content-center'>
                            <Card style={{ width: '23rem', borderRadius:0, backgroundColor: "#7755a6", textAlign: "center", color:"white" }}>
                                <Card.Body className='d-flex flex-column align-items-center'>
                                    <div className='icon-style' style={{border:"2px solid white"}}><HouseGear fontSize={30} color='white'/></div>
                                    <h2 className='mt-3'>Contact</h2>
                                    <p>+91 7609889809</p>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <Row className='m-0 p-0'>
                        <Col sm={12} md={6} lg={6} className='mb-5 p-0 d-flex justify-content-center'>
                            <Card style={{ width: '23rem', borderRadius:0, backgroundColor: "#7755a6", textAlign: "center", color:"white" }}>
                                <Card.Body className='d-flex flex-column align-items-center'>
                                    <div className='icon-style' style={{border:"2px solid white"}}><HouseGear fontSize={30} color='white'/></div>
                                    <h2 className='mt-3'>Mail</h2>
                                    <p>thakurabinash299@gmail.com</p>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col sm={12} md={6} lg={6} className='mb-5 p-0 d-flex justify-content-center'>
                            <Card style={{ width: '23rem', borderRadius:0, backgroundColor: "#7755a6", textAlign: "center", color:"white" }}>
                                <Card.Body className='d-flex flex-column align-items-center'>
                                    <div className='icon-style' style={{border:"2px solid white"}}><HouseGear fontSize={30} color='white'/></div>
                                    <h2 className='mt-3'>Linkedin</h2>
                                    <p>www.linkedin.com/in/abinashthakur299</p>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}
