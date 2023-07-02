import { Row, Col, Container, Card, Button } from 'react-bootstrap';
import React from 'react';
import Crypto from '../image/crypto.png';
import News from '../image/news.png';
import expense from '../image/expense.png';
import '../css/Projects.css';

export default function Projects() {
    return (
        <Container fluid className='theam' id="projects">
            <h1 className='text-center text-light mb-5'>My Projects</h1>
            <Row className='d-flex'>

                <Col lg={4} md={4} sm={12} className='col-flexing'>
                    <Card className='project-card' style={{width : "27rem", height : "33rem" ,textAlign : "center", border: 0}}>
                        <Card.Img variant="top" src={News} />
                        <Card.Body>
                            <Card.Title>News Application - To Show All Breaking News</Card.Title>
                            <Card.Text>
                                <h6 className='subheading'>JAN.2021 - MAR.2021</h6>
                                This is my first live project which I developed for show the daily breaking news. It can show all category wise news and user can also search the news in search bar.
                                <h6 className='subheading'>ReactJS, Bootstrap & NewsAPI</h6>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>

                <Col lg={4} md={4} sm={12} className='col-flexing'>
                    <Card className='project-card' style={{width : "27rem", height : "33rem" ,textAlign : "center", border: 0}}>
                        <Card.Img variant="top" src={Crypto} />
                        <Card.Body>
                            <Card.Title>Crypto Hunter - Crypto Currency Tracking Application</Card.Title>
                            <Card.Text>
                                <h6 className='subheading'>JUN.2021 - SEPT.2021</h6>
                                This project is developed for tracking the crypto currency details. It can show all the crypto currency data and it also show the particular crypto currency data with graph.
                                <h6 className='subheading'>ReactJS, NodeJS, MongoDB, Express, MaterialUI</h6>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>

                <Col lg={4} md={4} sm={12} className='col-flexing'>
                    <Card className='project-card'  style={{width : "27rem", height : "33rem" ,textAlign : "center",border: 0}}>
                        <Card.Img variant="top" src={expense } />
                        <Card.Body>
                            <Card.Title>Expense Tracker - Expense Reimbursement System</Card.Title>
                            <Card.Text>
                                <h6 className='subheading'>FEB.2022 - MAY.2022</h6>
                                This project is developed for tracking the expense of employes. In this application employee can raise the expense with their recipt and that can be approved by admin. User can see the status of the request.
                                <h6 className='subheading'>ReactJS, NodeJS, MongoDB, Express & Bootstrap</h6>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>

            </Row>
        </Container>
    )
}
