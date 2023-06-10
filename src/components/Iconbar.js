import React from 'react';
import '../css/Iconbar.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Microsoft from '../image/microsoft.png';
import Github from '../image/github.png';
import Linkdin from '../image/linkedin.png';
import Google from '../image/google.png';
import Stackoverflow from '../image/overflowing.png';
import Coding from '../image/coding.png';
export default function Iconbar() {
    return (
        <Container fluid className='iconContainer'>
            <Row>
                <Col lg={2} md={12} sm={12} className='colFlexing'>
                    <img src={Microsoft} alt="not found" className='iconStyle my-4'></img>
                </Col>
                <Col lg={2} md={12} sm={12} className='colFlexing'>
                    <img src={Coding} alt="not found" className='iconStyle my-4'></img>
                </Col>
                <Col lg={2} md={12} sm={12} className='colFlexing'>
                    <img src={Google} alt="not found" className='iconStyle my-4'></img>
                </Col>
                <Col lg={2} md={12} sm={12} className='colFlexing'>
                    <img src={Linkdin} alt="not found" className='iconStyle my-4'></img>
                </Col>
                <Col lg={2} md={12} sm={12} className='colFlexing'>
                    <img src={Stackoverflow} alt="not found" className='iconStyle my-4'></img>
                </Col>
                <Col lg={2} md={12} sm={12} className='colFlexing'>
                    <img src={Github} alt="not found" className='iconStyle my-4'></img>
                </Col>
            </Row>
        </Container>
    )
}
