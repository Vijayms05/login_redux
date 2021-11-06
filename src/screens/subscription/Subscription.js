import React, {useState} from 'react'
import {  Container, Col, Row, Form, Card, ProgressBar } from 'react-bootstrap'
import {SearchIcon, PlaybtnIcon, BookBackImg} from '../../assets/images/index'
import '../../screens/home/Home.css'
import '../../screens/home/responsive.css'
import Button from '@restart/ui/esm/Button'
import { Link } from 'react-router-dom'

const Subscription = () =>{
    return(
        <Col className="py-md-0 mt-5 mt-md-0">   
            <Row>
                <Col xs={6} md={6} lg={8} className="mb-4 mt-2">   
                    <Form.Group  className="w-100 search-box">
                        <Button className="searchrole">
                            <SearchIcon />
                        </Button>
                        <Form.Control type="text"  placeholder="Search..." size="md" className="search-input" />
                    </Form.Group>                
                </Col>
                <Col xs={6} md={6} lg={4} className="mb-4 mt-2" >
                    <Form.Select className="select-form" size="lg" >
                        <option>Large select</option>
                        <option>Large select</option>
                        <option>Large select</option>
                    </Form.Select>
                </Col>
            </Row>   
            <Row className="sub-search">   
                <Col xs={12} md={6} lg={8} className="">   
                    <h5 className="mb-2 mb-md-0">My Subscriptions</h5>    
                </Col> 
                <Col xs={12} md={6} lg={4}>   
                    <Form.Group  className="w-100 search-box">
                        <Button className="searchrole">
                            <SearchIcon />
                        </Button>
                        <Form.Control type="text"  placeholder="Search..." size="md" className="search-input" />
                    </Form.Group>                
                </Col>
            </Row>
            <Row>
                <Col className="role-tit">
                    <h5>Role based tests</h5>
                </Col>
            </Row>
            <Row>
                <Col xl={3} lg={4} md={6} xs={6} className="mb-3 w1400-20 sub-lst">
                    <Link to="/subscription-list">
                        <Card> 
                            <Card.Body hover>
                                <Card.Title className="mb-3">
                                    Class 12
                                </Card.Title>
                                <Card.Text className="sub-active mb-1 mt-2"> 
                                    Subscription : Active
                                </Card.Text>
                                <Card.Text className="mb-2" style={{fontSize:'15px'}}>
                                    Donec sed erat ut magna suscipit mattis. Aliquam erat volutpat. 
                                    Morbi in orci risus. Donec pretium
                                </Card.Text> 
                                <Card.Text className="text-start">In Process</Card.Text>
                                <ProgressBar now={30} label="30%" />
                                <div className="play-vid">
                                <PlaybtnIcon />
                                </div>
                            </Card.Body>
                        </Card>  
                    </Link>   
                </Col>   
            </Row>
             <Row>
                <Col className="role-tit">
                    <h5>Book-Qs</h5>
                </Col>
            </Row>
            <Row>
                <Col xl={3} lg={4} md={6} xs={6} className="mb-3 w1400-20">
                    <Link className="book-box w-100">
                    <BookBackImg />
                        <div className="play-vid-box">
                            <div className="play-vid-in">
                                <PlaybtnIcon />
                            </div>
                        </div>
                    </Link>
                </Col>
            </Row>          
        </Col>
    );
}

export default Subscription