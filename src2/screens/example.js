import React, { useState } from 'react';


import logo from '../assets/images/logo.png'
import studImg from '../assets/images/Reading_book.png'
import profImg from '../assets/images/Certificate.png'
import studIcon from '../assets/images/Frame.png'
import profIcon from '../assets/images/FrameOne.png'

import { Link } from 'react-router-dom';
import { Row, Col, Form, Button, Container, Alert, Card } from 'react-bootstrap';
import './main.css';

const Example = () => {
    const [show, setShow] = useState(true);
    return (
        <div className="bg py-5 back">
            <Container fluid className="mt-5 py-5">

                <Row className="justify-content-center mb-3">
                    <Col className="text-center" xl={6} lg={6} md={8} sm={12} xs={12}>
                        <img src={logo} />
                    </Col>
                </Row>

                <br />

                <Row className="mt-3">

                    <Col className="py-5" xl={3} lg={6} md={8} sm={10} xs={12}>
                        <img src={studImg} fluid className="studImg" />
                    </Col>

                    <Col className="col" xl={6} lg={6} md={8} sm={10} xs={12}>
                        <Row className="justify-content-center">
                            <div className="h3 text-center title-font fw-bold">
                                Create Account as a
                            </div>
                            <p className="text-center text-info">
                                We will personalise this platform accordingly
                            </p>
                            <Col className="text-center" xl={5} lg={6} md={8} sm={12} xs={12}>
                                <Card style={{cursor: 'pointer'}}  className="ss shadow rounded p-4">
                                    <img className="card-icon mx-3" src={studIcon} />
                                    <Card.Body>
                                        <Card.Title className="text-start title-font fw-bolder">
                                            Student
                                        </Card.Title>
                                        <br />
                                        <Card.Text className="text-start">
                                            <p className="text-info">
                                                Use our syllabus based practice tests to get ahead of yoyr class
                                            </p>
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col className="text-center" xl={5} lg={6} md={8} sm={12} xs={12}>
                                <Card style={{cursor: 'pointer'}} className="ss shadow rounded p-4" >
                                    <img className="card-icon mx-3" src={profIcon} />
                                    <Card.Body>
                                        <Card.Title className="text-start title-font fw-bolder">
                                            Professional
                                        </Card.Title>
                                        <br />
                                        <Card.Text className="text-start">
                                            <p className="text-info">
                                                Use our skill-certification tests to measure where you stand
                                            </p>
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col className="text-center mt-3" xl={10} lg={12} md={12} sm={12} xs={12}>
                                <div className="d-grid text-center">
                                    <Button variant="primary py-2 px-5 text-center" size="lg">
                                        Continue
                                    </Button>
                                </div>
                            </Col>
                        </Row>
                    </Col>

                    <Col className="py-5" xl={3} lg={6} md={8} sm={10} xs={12}>
                        <img src={profImg} fluid className="profImg" />
                    </Col>
                </Row>

            </Container>
        </div>
    );
};

export default Example;
