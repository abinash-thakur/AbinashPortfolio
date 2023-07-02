import React from 'react';
import '../css/Resume.css';
import { Card,ProgressBar, Container, Row, Col } from 'react-bootstrap';
import { MortarboardFill, Mortarboard, Briefcase, Award, Bicycle, BoxArrowUpRight } from 'react-bootstrap-icons';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export default function Resume() {
    const Internship   = "https://drive.google.com/file/d/1l5k3bKk3CG899_N6LPLvvxp64FdUsivl/view?usp=drive_link";
    const javaJ2E      = "https://drive.google.com/file/d/15WteJH4CGQB8QyWR9upLc0-NCEA_2z9b/view?usp=drive_link";
    const gitgithub    = "https://www.udemy.com/certificate/UC-458cc9ea-aa42-4b60-8246-7d927c991f0b";
    const htmlworkshop = "https://media.geeksforgeeks.org/courses/certificates/286bcf8f477653253f3734e4ab3fc9c1.pdf";
    const sql          = "https://media.geeksforgeeks.org/courses/certificates/f9509671753ad7441b67546262f6b9b9.pdf";

    return (
        <Container fluid id="resume" className='mainresume'>
            <Row className='p-0 m-0'>
                <Col sm={12} md={12} lg={3} className='m-0 ps-5 d-none d-xs-none d-sm-none d-md-block d-lg-block' style={{ color: "white" }}>
                    <div style={{ position: "sticky", top: 120, color: "white" }}>
                        <ul className='vn-list' style={{ listStyle: "none", padding: 0, fontSize: "1.2rem" }}>
                            <a href='#Education'><Mortarboard className='me-4 fs-4 d-inline text-light' /><li className='d-inline'>Education</li> </a>
                            <a href='#Experience'><Briefcase className='me-4 fs-4 d-inline text-light' /><li className='d-inline'>Experience</li>  </a>
                            <a href='#Skills'><Bicycle className='me-4 fs-4 d-inline text-light' /><li className='d-inline'>Skills</li>        </a>
                            <a href='#Certification'><Award className='me-4 fs-4 d-inline text-light' /><li className='d-inline'>Certification</li>   </a>
                        </ul>
                    </div>
                </Col>
                <Col className='edRight p-0' sm={12} md={12} lg={9} >
                    <h1 className='pb-5' id="Education">Education</h1>
                    <Row className='m-0 p-0'>
                        <Col className='d-flex justify-content-center align-center' lg={1} md={1} sm={1}>
                            <div className='icon-style'><MortarboardFill fontSize={30} color='white' /></div>
                        </Col>
                        <Col lg={11} md={11} sm={11} style={{ width: "70%" }}>
                            <h6 className='text-light'>2019-2023</h6>
                            <h3 style={{ color: "#7755a6", marginBottom: "1.2rem" }}>Computer Science & Engineering</h3>
                            <h5 style={{ color: "#7755a6" }}>GIET University, Gunupur Odisha India</h5>
                            <p className='text-light'>I have completed my Bachelor in the department of Computer Science & Engineering from GIET University having the overall CGPA 8.76.</p>
                        </Col>
                        <hr className='text-light'></hr>
                    </Row>

                    <Row className='m-0 p-0'>
                        <Col className='d-flex justify-content-center align-center' lg={1} md={1} sm={1}>
                            <div className='icon-style'><MortarboardFill fontSize={30} color='white' /></div>
                        </Col>
                        <Col lg={11} md={11} sm={11}>
                            <h6 className='text-light'>2017-2019</h6>
                            <h3 style={{ color: "#7755a6", marginBottom: "1.2rem" }}>Intermediate</h3>
                            <h5 style={{ color: "#7755a6" }}>Sai Sristi Higher Secondary School, Bhubaneswar Odisha India</h5>
                            <p className='text-light'>I have completed my Intermediate from Sai Sristi Higher Secondary School Bhubaneswar with PCM stream.</p>
                        </Col>
                        <hr className='text-light'></hr>
                    </Row>

                    <Row style={{ marginBottom: "8rem", marginRight:0 }}>
                        <Col className='d-flex justify-content-center align-center' lg={1} md={1} sm={1}>
                            <div className='icon-style'><MortarboardFill fontSize={30} color='white' /></div>
                        </Col>
                        <Col lg={11} md={11} sm={11}>
                            <h6 className='text-light'>2012-2017</h6>
                            <h3 style={{ color: "#7755a6", marginBottom: "1.2rem" }}>Matriculation</h3>
                            <h5 style={{ color: "#7755a6" }}>Raja A.T High School, Khariar Odisha India</h5>
                            <p className='text-light'>I have completed my Matriculation from Raja A.T High School Khariar with the aggrigate of 66%.</p>
                        </Col>
                        <hr className='text-light'></hr>
                    </Row>

                    <h1 className='pb-5' id="Experience">Experience</h1>
                    <Row className='m-0 p-0'>
                        <Col className='d-flex justify-content-center align-center' lg={1} md={1} sm={1}>
                            <div className='icon-style'><Briefcase fontSize={25} color='white' /></div>
                        </Col>
                        <Col lg={11} md={11} sm={11}>
                            <h6 className='text-light'>2022-2023</h6>
                            <h3 style={{ color: "#7755a6", marginBottom: "1.2rem" }}>Associate Software Developer</h3>
                            <h5 style={{ color: "#7755a6" }}>Antino Labs Private Limited, Gurugram Haryana India</h5>
                            <p className='text-light'>Antino is my first step to IT Industry and here I am working as a NodeJs dveloper as well as focousing on MERN Stack and DEVOPS.</p>
                        </Col>
                        <hr className='text-light'></hr>
                    </Row>

                    <Row style={{ marginBottom: "8rem",marginRight:0 }}>
                        <Col className='d-flex justify-content-center align-center' lg={1} md={1} sm={1}>
                            <div className='icon-style'><Briefcase fontSize={25} color='white' /></div>
                        </Col>
                        <Col lg={11} md={11} sm={11}>
                            <h6 className='text-light'>2021-2022</h6>
                            <h3 style={{ color: "#7755a6", marginBottom: "1.2rem" }}>MERN Stack Developer</h3>
                            <h5 style={{ color: "#7755a6" }}>Erainterfaces Private Limited, Bangalore India - Internship</h5>
                            <ul className='text-light'>
                                <li className='my-3'>Here I know how to manage the project at the Industry level, and they gave me a project(Live Chat application using MERN Stack) with a mentor, and I attended daily scrum meetings.</li>
                                <li>Here actually I am working on the backend part, so I working on node js and express. First, I developed the end-point for login and signup, and then I developed how the user can communicate with each other, that part I developed.</li>
                            </ul>
                        </Col>
                        <hr className='text-light'></hr>
                    </Row>

                    <h1 className='pb-5' id="Skills">Skills</h1>
                    <Row className='p-0' style={{ marginBottom: "8rem",marginRight:0 }}>
                        <Row>
                            <Col sm={12} md={12} lg={3} className='d-flex align-items-center justify-content-center'>
                                <Card style={{ width: '11rem', height: '13rem', backgroundColor: "#7755a6", color: "white", margin : "1rem" }}>
                                    <h4 className='text-center mt-3'>HTML</h4>
                                    <Card.Body className='d-flex flex-column justify-content-center align-items-center'>
                                        <div style={{height: "7rem", width : "7rem" }}>
                                            <CircularProgressbar value={90} text={90+'%'} styles={buildStyles({
                                                textSize: '20px',
                                                strokeLinecap: 'butt',
                                                pathColor: `white`,
                                                textColor: 'white',
                                                trailColor: '#7755a6',
                                                backgroundColor: '#3e98c7',
                                            })}/>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>

                            <Col sm={12} md={12} lg={3} className='d-flex align-items-center justify-content-center'>
                                <Card style={{ width: '11rem', height: '13rem', backgroundColor: "#7755a6", color: "white",  margin : "1rem"}}>
                                    <h4 className='text-center mt-3'>CSS</h4>
                                    <Card.Body className='d-flex flex-column justify-content-center align-items-center'>
                                        <div style={{height: "7rem", width : "7rem" }}>
                                            <CircularProgressbar value={80} text={80+'%'} styles={buildStyles({
                                                textSize: '20px',
                                                strokeLinecap: 'butt',
                                                pathColor: `white`,
                                                textColor: 'white',
                                                trailColor: '#7755a6',
                                                backgroundColor: '#3e98c7',
                                            })}/>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>

                            <Col sm={12} md={12} lg={3} className='d-flex align-items-center justify-content-center'>
                                <Card style={{ width: '11rem', height: '13rem', backgroundColor: "#7755a6", color: "white",  margin : "1rem" }}>
                                    <h4 className='text-center mt-3'>Bootstrap</h4>
                                    <Card.Body className='d-flex flex-column justify-content-center align-items-center'>
                                        <div style={{height: "7rem", width : "7rem" }}>
                                            <CircularProgressbar value={85} text={85+'%'} styles={buildStyles({
                                                textSize: '20px',
                                                strokeLinecap: 'butt',
                                                pathColor: `white`,
                                                textColor: 'white',
                                                trailColor: '#7755a6',
                                                backgroundColor: '#3e98c7',
                                            })}/>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>

                            <Col sm={12} md={12} lg={3} className='d-flex align-items-center justify-content-center'>
                                <Card style={{ width: '11rem', height: '13rem', backgroundColor: "#7755a6", color: "white",  margin : "1rem" }}>
                                    <h4 className='text-center mt-3'>JavaScript</h4>
                                    <Card.Body className='d-flex flex-column justify-content-center align-items-center'>
                                        <div style={{height: "7rem", width : "7rem" }}>
                                            <CircularProgressbar value={80} text={80+'%'} styles={buildStyles({
                                                textSize: '20px',
                                                strokeLinecap: 'butt',
                                                pathColor: `white`,
                                                textColor: 'white',
                                                trailColor: '#7755a6',
                                                backgroundColor: '#3e98c7',
                                            })}/>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>

                        <Row className='my-5'>
                            <Col sm={12} md={12} lg={4}>
                                <Container fluid className='text-light fs-5 m-0 p-0 d-flex justify-content-between'>
                                    <span>ReactJS</span>
                                    <span>60%</span>
                                </Container>
                                <ProgressBar animated now={60} style={{height : "0.3rem"}}/>
                            </Col>
                            <Col sm={12} md={12} lg={4}>
                                <Container fluid className='text-light fs-5 m-0 p-0 d-flex justify-content-between'>
                                    <span>NodeJS</span>
                                    <span>65%</span>
                                </Container>
                                <ProgressBar animated now={65} style={{height : "0.3rem"}}/>
                            </Col>
                            <Col sm={12} md={12} lg={4}>
                                <Container fluid className='text-light fs-5 m-0 p-0 d-flex justify-content-between'>
                                    <span>ExpressJS</span>
                                    <span>70%</span>
                                </Container>
                                <ProgressBar animated now={70} style={{height : "0.3rem"}}/>
                            </Col>
                        </Row>

                        <Row className='mb-5'>
                            <Col sm={12} md={12} lg={4}>
                                <Container fluid className='text-light fs-5 m-0 p-0 d-flex justify-content-between'>
                                    <span>MongoDB</span>
                                    <span>65%</span>
                                </Container>
                                <ProgressBar animated now={65} style={{height : "0.3rem"}}/>
                            </Col>
                            <Col sm={12} md={12} lg={4}>
                                <Container fluid className='text-light fs-5 m-0 p-0 d-flex justify-content-between'>
                                    <span>PostgreSQL</span>
                                    <span>60%</span>
                                </Container>
                                <ProgressBar animated now={65} style={{height : "0.3rem"}}/>
                            </Col>
                            <Col sm={12} md={12} lg={4}>
                                <Container fluid className='text-light fs-5 m-0 p-0 d-flex justify-content-between'>
                                    <span>Redis</span>
                                    <span>60%</span>
                                </Container>
                                <ProgressBar animated now={70} style={{height : "0.3rem"}}/>
                            </Col>
                        </Row>

                        <Row className='mb-5'>
                            <Col sm={12} md={12} lg={4}>
                                <Container fluid className='text-light fs-5 m-0 p-0 d-flex justify-content-between'>
                                    <span>C Language</span>
                                    <span>75%</span>
                                </Container>
                                <ProgressBar animated now={75} style={{height : "0.3rem"}}/>
                            </Col>
                            <Col sm={12} md={12} lg={4}>
                                <Container fluid className='text-light fs-5 m-0 p-0 d-flex justify-content-between'>
                                    <span>Core Java</span>
                                    <span>65%</span>
                                </Container>
                                <ProgressBar animated now={65} style={{height : "0.3rem"}}/>
                            </Col>
                            <Col sm={12} md={12} lg={4}>
                                <Container fluid className='text-light fs-5 m-0 p-0 d-flex justify-content-between'>
                                    <span>Python</span>
                                    <span>40%</span>
                                </Container>
                                <ProgressBar animated now={40} style={{height : "0.3rem"}}/>
                            </Col>
                        </Row>

                        <Row className='mb-5'>
                            <Col sm={12} md={12} lg={4}>
                                <Container fluid className='text-light fs-5 m-0 p-0 d-flex justify-content-between'>
                                    <span>Material UI</span>
                                    <span>60%</span>
                                </Container>
                                <ProgressBar animated now={60} style={{height : "0.3rem"}}/>
                            </Col>
                            <Col sm={12} md={12} lg={4}>
                                <Container fluid className='text-light fs-5 m-0 p-0 d-flex justify-content-between'>
                                    <span>Handlebars</span>
                                    <span>70%</span>
                                </Container>
                                <ProgressBar animated now={70} style={{height : "0.3rem"}}/>
                            </Col>
                            <Col sm={12} md={12} lg={4}>
                                <Container fluid className='text-light fs-5 m-0 p-0 d-flex justify-content-between'>
                                    <span>Bootstrap</span>
                                    <span>85%</span>
                                </Container>
                                <ProgressBar animated now={85} style={{height : "0.3rem"}}/>
                            </Col>
                        </Row>

                        <Row>
                            <Col sm={12} md={12} lg={4}>
                                <Container fluid className='text-light fs-5 m-0 p-0 d-flex justify-content-between'>
                                    <span>GIT & GITHUB</span>
                                    <span>65%</span>
                                </Container>
                                <ProgressBar animated now={65} style={{height : "0.3rem"}}/>
                            </Col>
                            <Col sm={12} md={12} lg={4}>
                                <Container fluid className='text-light fs-5 m-0 p-0 d-flex justify-content-between'>
                                    <span>Linux</span>
                                    <span>60%</span>
                                </Container>
                                <ProgressBar animated now={60} style={{height : "0.3rem"}}/>
                            </Col>
                        </Row>
                    </Row>

                    <h1 className='pb-5' id="Certification">Certification</h1>
                    <Row className='m-0 p-0'>
                        <Col className='d-flex justify-content-center align-center' lg={1} md={1} sm={1}>
                            <div className='icon-style'><Award fontSize={25} color='white' /></div>
                        </Col>
                        <Col lg={11} md={11} sm={11}>

                            <h6 className='text-light'>17 MAY, 2021 - 04 AUG, 2021 <a href={Internship} target='_blank' rel="noreferrer"><BoxArrowUpRight className='text-light fs-5 ms-2'/></a></h6>

                            <h4 style={{ color: "#7755a6", marginBottom: "1.2rem" }}>Certificate Of Internship</h4>
                            <h5 style={{ color: "#7755a6" }}>Erainterfaces Private Limited</h5>
                            <p className='text-light'>Here I know how to manage the project at the Industry level, and they gave me a project(Live Chat application using MERN Stack) with a mentor, and I attended daily scrum meetings.</p>
                        </Col>
                        <hr className='text-light'></hr>
                    </Row>

                    <Row className='m-0 p-0'>
                        <Col className='d-flex justify-content-center align-center' lg={1} md={1} sm={1}>
                            <div className='icon-style'><Award fontSize={25} color='white' /></div>
                        </Col>
                        <Col lg={11} md={11} sm={11}>

                            <h6 className='text-light'>08 MAY, 2022 - 25 SEP, 2022 <a href={javaJ2E} target='_blank' rel="noreferrer"><BoxArrowUpRight className='text-light fs-5 ms-2'/></a></h6>

                            <h4 style={{ color: "#7755a6", marginBottom: "1.2rem" }}>Completing the Talentnext Course On Java J2EE</h4>
                            <h5 style={{ color: "#7755a6" }}>Wiprow Talentnext</h5>
                            <p className='text-light'>I completed this course to learn full stack java development and also know how java is used in a Industry level application. Here I learn core java, J2EE and implement in a live project.</p>
                        </Col>
                        <hr className='text-light'></hr>
                    </Row>

                    <Row className='m-0 p-0'>
                        <Col className='d-flex justify-content-center align-center' lg={1} md={1} sm={1}>
                            <div className='icon-style'><Award fontSize={25} color='white' /></div>
                        </Col>
                        <Col lg={11} md={11} sm={11}>

                            <h6 className='text-light'>26 MAY, 2021<a href={gitgithub} target='_blank' rel="noreferrer"><BoxArrowUpRight className='text-light fs-5 ms-2'/></a></h6>

                            <h4 style={{ color: "#7755a6", marginBottom: "1.2rem" }}>Git and GitHub from Scratch</h4>
                            <h5 style={{ color: "#7755a6" }}>Udemy - Online Learning Platform</h5>
                            <p className='text-light'>As the part of this certification I learned Git and GitHub from basic level as well as hands on testing on my local Computer.</p>
                        </Col>
                        <hr className='text-light'></hr>
                    </Row>

                    <Row className='m-0 p-0'>
                        <Col className='d-flex justify-content-center align-center' lg={1} md={1} sm={1}>
                            <div className='icon-style'><Award fontSize={25} color='white' /></div>
                        </Col>
                        <Col lg={11} md={11} sm={11}>

                            <h6 className='text-light'>10 JAN, 2020 - 10 MAR, 2020 <a href={htmlworkshop} target='_blank' rel="noreferrer"><BoxArrowUpRight className='text-light fs-5 ms-2'/></a></h6>

                            <h4 style={{ color: "#7755a6", marginBottom: "1.2rem" }}>Successfully completed the course on HTML Workshop</h4>
                            <h5 style={{ color: "#7755a6" }}>GeeksForGeeks - Computer Science Learning Portal</h5>
                            <p className='text-light'>I completed this course to learn the concept of HTML from basics to advanced level, and also completed the all challanges level wise that help me to achieve the better understanding of HTML DOM elements. </p>
                        </Col>
                        <hr className='text-light'></hr>
                    </Row>

                    <Row className='m-0 p-0'>
                        <Col className='d-flex justify-content-center align-center' lg={1} md={1} sm={1}>
                            <div className='icon-style'><Award fontSize={25} color='white' /></div>
                        </Col>
                        <Col lg={11} md={11} sm={11}>

                            <h6 className='text-light'>11 APR, 2020 - 11 MAY, 2020 <a href={sql} target='_blank' rel="noreferrer"><BoxArrowUpRight className='text-light fs-5 ms-2'/></a></h6>

                            <h4 style={{ color: "#7755a6", marginBottom: "1.2rem" }}>Successfully completed the course on SQL Foundation</h4>
                            <h5 style={{ color: "#7755a6" }}>GeeksForGeeks - Computer Science Learning Portal</h5>
                            <p className='text-light'>I completed this course to learn SQL from basics to advanced level, during this course I learned DDL, DML, DCL, DQL and TCL. Understood the relational database strucure and schema joining.</p>
                        </Col>
                        <hr className='text-light'></hr>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}
