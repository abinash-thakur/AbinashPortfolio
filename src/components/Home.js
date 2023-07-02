import React from 'react';
import '../css/Home.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Typewriter from 'typewriter-effect';
import { ArrowDown, Download, Git } from 'react-bootstrap-icons';
import { Button } from 'react-bootstrap';
import Resume from '../Resume/AbinashResume.pdf';

export default function Home() {
    return (
        <Container id="home" fluid className='homeContainer'>
            <Row className='p-0 m-0'>
                <Col sm={12} md={12} lg={6} className='leftContainer ht-100vh'>
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
                            <a href={Resume} download="Abinash_Resume" target='_blank' rel='noreferrer'><Button className='btnstyle'> <Download />&nbsp;&nbsp;Resume</Button></a>
                            <a href="https://github.com/abinash-thakur" target='_blank'><Button className='ms-2 btnstyle'><Git />&nbsp;&nbsp;Github</Button></a>
                        </div>
                    </div>
                    <div className='arrowContainer'>
                        <a href='#about'><ArrowDown className='arrow'/></a>
                    </div>
                </Col>
                <Col sm={12} md={12} lg={6} className='rightContainer' >
                </Col>
            </Row>
        </Container>
    )
}
