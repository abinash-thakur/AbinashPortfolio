import React from 'react';
import '../css/Home.css';
import bgimage from '../image/bg.png';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Typewriter from 'typewriter-effect';
import { ArrowDown } from 'react-bootstrap-icons';
import { Button } from 'react-bootstrap';

export default function Home() {
    return (
        <Container id="home" fluid className='homeContainer'>
            <Row className='p-0 m-0'>
                <Col sm={12} md={12} lg={6} className='leftContainer'>
                    <div>
                        <div>Hi, My name is <nav style={{ color: "#7755a6", display: "inline" }}>Abinash</nav></div>
                        <div>and I am a Passionate</div>
                        <div style={{ color: "#7755a6", fontSize: "2rem" }}>
                            <Typewriter
                                options={{
                                    strings: [`Web Developer`, `MERN Developer`, `DEVOPS Engineer`],
                                    autoStart: true,
                                    loop: true,
                                }}
                                />
                        </div>
                        <div className='my-5'>
                            <Button className='rounded-0 btnstyle'>Download Resume</Button>
                            <Button className='ms-2 rounded-0 btnstyle'>Visit Github</Button>
                        </div>
                    </div>
                </Col>
                <Col sm={12} md={12} lg={6} className='rightContainer' >
                    <img src={bgimage} alt='not found'></img>
                </Col>
            </Row>
            <Row className='p-0 m-0'>
                <Col className='arrowContainer'>
                    <a href='#about'><ArrowDown className='arrow'/></a>
                </Col>
            </Row>
        </Container>
    )
}
