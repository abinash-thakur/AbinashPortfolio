import React from 'react';
import '../css/Resume.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { MortarboardFill, Mortarboard, Briefcase, Award, Bicycle } from 'react-bootstrap-icons';

export default function Resume() {
    return (
        <Container fluid className='mainresume'>
            <Row className='m-0 p-0'>
                <Col sm={12} md={12} lg={4} className='m-0 p-0'>
                    <div className='d-flex justify-content-center' style={{position:"sticky", top:120, color:"white"}}>
                        <ul className='vn-list' style={{listStyle:"none", padding:0, fontSize : "1.2rem"}}>
                            <a href='#Education'>       <li className='p-2'><Mortarboard className='me-4 fs-4'/>Education</li> </a>
                            <a href='#Experience'>      <li className='p-2'><Briefcase className='me-4 fs-4'/>Experience</li>  </a>
                            <a href='#Skills'>          <li className='p-2'><Bicycle className='me-4 fs-4'/>Skills</li>        </a>
                            <a href='#Certification'>   <li className='p-2'><Award className='me-4 fs-4'/>Certification</li>   </a>
                        </ul>
                    </div>
                </Col>
                <Col className='edRight p-0' sm={12} md={12} lg={8}>
                    <h1 className='pb-5'>Education</h1>
                    <Row className='m-0'>
                        <Col className='d-flex justify-content-center align-center' lg={1} md={1} sm={1}>
                            <MortarboardFill fontSize={40} color='white' />
                        </Col>
                        <Col lg={11} md={11} sm={11}>
                            <h6 className='text-light'>2019-2023</h6>
                            <h3 style={{color : "#7755a6",marginBottom : "1.2rem"}}>Computer Science & Engineering</h3>
                            <h5 style={{color : "#7755a6"}}>GIET University, Gunupur Odisha India</h5>
                            <p className='text-light'>I have completed my Bachelor in the department of Computer Science & Engineering from GIET University having the overall CGPA 8.76.</p>
                        </Col>
                        <hr className='text-light'></hr>
                    </Row>

                    <Row className='m-0'>
                        <Col className='d-flex justify-content-center align-center' lg={1} md={1} sm={1}>
                            <MortarboardFill fontSize={40} color='white' />
                        </Col>
                        <Col lg={11} md={11} sm={11}>
                            <h6 className='text-light'>2017-2019</h6>
                            <h3 style={{color : "#7755a6", marginBottom : "1.2rem"}}>Intermediate</h3>
                            <h5 style={{color : "#7755a6"}}>Sai Sristi Higher Secondary School, Bhubaneswar Odisha India</h5>
                            <p className='text-light'>I have completed my Intermediate from Sai Sristi Higher Secondary School Bhubaneswar with PCM stream.</p>
                        </Col>
                        <hr className='text-light'></hr>
                    </Row>

                    <Row style={{marginBottom : "8rem"}}>
                        <Col className='d-flex justify-content-center align-center' lg={1} md={1} sm={1}>
                            <MortarboardFill fontSize={40} color='white' />
                        </Col>
                        <Col lg={11} md={11} sm={11}>
                            <h6 className='text-light'>2012-2017</h6>
                            <h3 style={{color : "#7755a6", marginBottom : "1.2rem"}}>Matriculation</h3>
                            <h5 style={{color : "#7755a6"}}>Raja A.T High School, Khariar Odisha India</h5>
                            <p className='text-light'>I have completed my Matriculation from Raja A.T High School Khariar with the aggrigate of 66%.</p>
                        </Col>
                        <hr className='text-light'></hr>
                    </Row>


                    <h1 className='pb-5'>Experience</h1>
                    <Row className='m-0'>
                        <Col className='d-flex justify-content-center align-center' lg={1} md={1} sm={1}>
                            <MortarboardFill fontSize={40} color='white' />
                        </Col>
                        <Col lg={11} md={11} sm={11}>
                            <h6 className='text-light'>2022-2023</h6>
                            <h3 style={{color : "#7755a6",marginBottom : "1.2rem"}}>Associate Software Developer</h3>
                            <h5 style={{color : "#7755a6"}}>Antino Labs Private Ltd. Gurugram Haryana India</h5>
                            <p className='text-light'>Antino is my first step to IT Industry and here I am working as a NodeJs dveloper as well as focousing on MERN Stack and DEVOPS.</p>
                        </Col>
                        <hr className='text-light'></hr>
                    </Row>

                    <Row className='m-0'>
                        <Col className='d-flex justify-content-center align-center' lg={1} md={1} sm={1}>
                            <MortarboardFill fontSize={40} color='white' />
                        </Col>
                        <Col lg={11} md={11} sm={11}>
                            <h6 className='text-light'>2017-2019</h6>
                            <h3 style={{color : "#7755a6", marginBottom : "1.2rem"}}>Intermediate</h3>
                            <h5 style={{color : "#7755a6"}}>Sai Sristi Higher Secondary School, Bhubaneswar Odisha India</h5>
                            <p className='text-light'>I have completed my Intermediate from Sai Sristi Higher Secondary School Bhubaneswar with PCM stream.</p>
                        </Col>
                        <hr className='text-light'></hr>
                    </Row>

                    <Row className='m-0'>
                        <Col className='d-flex justify-content-center align-center' lg={1} md={1} sm={1}>
                            <MortarboardFill fontSize={40} color='white' />
                        </Col>
                        <Col lg={11} md={11} sm={11}>
                            <h6 className='text-light'>2012-2017</h6>
                            <h3 style={{color : "#7755a6", marginBottom : "1.2rem"}}>Matriculation</h3>
                            <h5 style={{color : "#7755a6"}}>Raja A.T High School, Khariar Odisha India</h5>
                            <p className='text-light'>I have completed my Matriculation from Raja A.T High School Khariar with the aggrigate of 66%.</p>
                        </Col>
                        <hr className='text-light'></hr>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}
