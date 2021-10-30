import React from 'react'

import search from '../../images/search.png'
import {  Container, Col, Row, Form, Card, ProgressBar, Navbar, Nav, NavDropdown,FormControl,Button } from 'react-bootstrap'

const Topbar =()=>{
    return(
        <>            
            <Navbar bg="white" expand="lg" className="mx-4" top>     
                <Container fluid>        
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">  
                        <Nav>
                            <Row>
                                <Col lg={8}>
                                    <Form className="w-90 mx-4" style={{marginLeft:'75px'}}>
                                        <Form.Group className="mb-3">
                                            <img src={search} className="position-absolute " alt="icon" style={{left:'10px',top:'10px'}} />  
                                            <Form.Control type="text"  size="lg" placeholder="Search..." className="rounded-pill" />
                                        </Form.Group>
                                    </Form>  
                                </Col>
                            </Row>   
                            <Row>
                                <Col lg={4}>
                                    <div>
                                        <div className="input-group">                       
                                            <select class="form-select  rounded-pill">
                                                <option selected>Filter...</option>
                                                <option>France</option>
                                                <option>Germany</option>
                                                <option>Hungary</option>
                                            </select>
                                        </div>  
                                    </div>     
                                </Col>
                            </Row>   
                        </Nav>                
                    </Navbar.Collapse>    
                </Container>            
            </Navbar>
        </>
    )
}
export default Topbar