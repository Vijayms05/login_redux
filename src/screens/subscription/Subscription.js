import React, {useState} from 'react'
import {  Container, Col, Row, Form, Card, ProgressBar } from 'react-bootstrap'
import {SearchIcon, PlaybtnIcon, BookBackImg,SearchIconRight, EyeIcon} from '../../assets/images/index'
import '../../screens/home/Home.css'
import '../../screens/home/responsive.css'
import Button from '@restart/ui/esm/Button'
import { Link } from 'react-router-dom'

const Subscription = () =>{
   const now = 30

    return(
        <Col className="py-md-0 mt-5 mt-md-0">   
            <Row className="mt-4">
                <Col  xs={12} sm={6} md={7}  className="mb-2 mt-2">   
                    <Form.Group  className="w-100 search-box">
                        <Button className="searchrole">
                            <SearchIcon />
                        </Button>
                        <Form.Control 
                            type="text"  
                            placeholder="Search Role catalogue" 
                            size="md" className="search-input" 
                        />
                    </Form.Group>                
                </Col>
                <Col  xs={12} sm={6} md={3}   className="mb-2 mt-2" >
                    <Form.Select className="select-form" size="lg" >
                        <option>Filters</option>
                        <option>Large select</option>
                        <option>Large select</option>
                    </Form.Select>
                </Col>
            </Row>   
            <Row className="sub-search mt-4">   
                <Col xs={12} md={6} lg={8} >   
                    <h5 className="mb-2 mb-md-0" style={{color:'#003866'}}>My Subscriptions</h5>    
                </Col> 
                <Col xs={12} md={6} lg={4}>   
                    <Form.Group  className="w-90 search-box">                        
                        <Button className="pwd-btn mt-1">
                            <SearchIconRight />
                        </Button>
                        <Form.Control type="text"  placeholder="Search My subscriptions" size="md"  />
                        
                    </Form.Group>                
                </Col>
            </Row>
            <Row>
                <Col className="role-tit">
                    <h5>Role based tests</h5>
                </Col>
            </Row>
            <Row>
                <Col xl={3} lg={4} md={6} sm={6} className="mb-3 sub-lst">
                    <Link to="/subscription-list">
                        <Card> 
                            <Card.Body>
                                <Card.Title className="mb-3">
                                    Class 12
                                </Card.Title>
                                <Card.Text className="sub-active mb-1 mt-2"> 
                                    Subscription : Active
                                </Card.Text>
                                <Card.Text className="mb-2 mt-2" style={{fontSize:'13.5px', fontFamily:'f3'}}>
                                    Donec sed erat ut magna suscipit mattis. Aliquam erat volutpat. 
                                    Morbi in orci risus. Donec pretium
                                </Card.Text> 
                                <Card.Text className="text-start mb-0">In Progress</Card.Text><div>                        
                                    <div className="prog-bar-subscrip d-inline-flex align-items-center justify-content-center">
                                        <ProgressBar now={now} />
                                        <p className="p-0 mb-0 ms-2 f3-13 text-black">{now}%</p>
                                    </div> 
                                </div>
                                <div className="play-vid">
                                    <PlaybtnIcon />
                                </div>
                            </Card.Body>
                        </Card>  
                    </Link>                        
                </Col>  
                <Col xl={3} lg={4} md={6} sm={6} className="mb-3 sub-lst">
                    <Link to="/subscription-list">
                        <Card> 
                            <Card.Body>
                                <Card.Title className="mb-3">
                                    Class 11
                                </Card.Title>
                                {/* <Card.Text className="sub-active mb-1 mt-2"> 
                                    Subscription : Active
                                </Card.Text> */}
                                <Card.Text className="mb-2 mt-5" style={{fontSize:'13.5px', fontFamily:'f3'}}>
                                    Donec sed erat ut magna suscipit mattis. Aliquam erat volutpat. 
                                    Morbi in orci risus. Donec pretium
                                </Card.Text> 
                                <Card.Text className="text-start mb-0">In Progress</Card.Text><div>                        
                                    <div className="prog-bar-subscrip d-inline-flex align-items-center justify-content-center">
                                        <ProgressBar now={now} />
                                        <p className="p-0 mb-0 ms-2 f3-13 text-black">{now}%</p>
                                    </div> 
                                </div>
                                <div className="play-vid">
                                    <PlaybtnIcon />
                                </div>
                            </Card.Body>
                        </Card>  
                    </Link>                        
                </Col> 
                <Col xl={3} lg={4} md={6} sm={6} className="mb-3 sub-lst">
                    <Link to="/subscription-list">
                        <Card style={{background:'#EBEBEB'}}> 
                            <Card.Body>
                                <Card.Title className="mb-3">
                                    Class 10
                                </Card.Title>
                                {/* <Card.Text className="sub-active mb-1 mt-2"> 
                                    Subscription : Active
                                </Card.Text> */}
                                <Card.Text className="mb-2 mt-5" style={{fontSize:'13.5px', fontFamily:'f3'}}>
                                    Donec sed erat ut magna suscipit mattis. Aliquam erat volutpat. 
                                    Morbi in orci risus. Donec pretium
                                </Card.Text> 
                                <Card.Text className="text-start mb-0">In Progress</Card.Text><div>                        
                                    <div className="prog-bar-subscrip d-inline-flex align-items-center justify-content-center">
                                        <ProgressBar now={now} />
                                        <p className="p-0 mb-0 ms-2 f3-13 text-black">{now}%</p>
                                    </div> 
                                </div>
                                <div className="play-vid-not-vist">
                                    <PlaybtnIcon />
                                </div>
                            </Card.Body>
                        </Card>  
                    </Link>                        
                </Col> 
                <Col xl={3} lg={4} md={6} sm={6} className="mb-3 sub-lst">
                    <Link to="/subscription-list">
                        <Card style={{background:'#EBEBEB'}} className="home-card "> 
                            <Card.Body>
                                <Card.Title className="mb-3">
                                    Class 9
                                </Card.Title>
                                {/* <Card.Text className="sub-active mb-1 mt-2"> 
                                    Subscription : Active
                                </Card.Text> */}
                                <Card.Text className="mb-2 mt-5" style={{fontSize:'13.5px', fontFamily:'f3'}}>
                                    Donec sed erat ut magna suscipit mattis. Aliquam erat volutpat. 
                                    Morbi in orci risus. Donec pretium
                                </Card.Text> 
                                <Card.Text className="text-start mb-0">In Progress</Card.Text><div>                        
                                    <div className="prog-bar-subscrip d-inline-flex align-items-center justify-content-center">
                                        <ProgressBar now={now} />
                                        <p className="p-0 mb-0 ms-2 f3-13 text-black">{now}%</p>
                                    </div> 
                                </div>
                                <div className="play-vid-not-vist">
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
                <Col xl={3} lg={4} md={6} sm={6} className="mb-3 w1400-20">
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