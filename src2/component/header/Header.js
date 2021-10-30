import React, { useState } from 'react'

import { Navbar, Container, Image,  NavDropdown, Form, FormControl, Button, Nav, Row, Col } from 'react-bootstrap'
import search from '../../images/search.png'
import logo from '../../images/logo/logo.png'

const Header = ()=>{  
    return(
        <>
            <Navbar bg="white" expand="lg">
                <Container fluid>
                    <Navbar.Toggle aria-controls="navbarScroll" /> 
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <div className="text-center">
                                    <div className="mt-3"><Image src={logo}/></div>
                                    <h6 className="mb-3" >measure to lead</h6>
                                    <h5 className="mb-0 text-start px-5 fw-normal">
                                        Welcome back,
                                    </h5>
                                    <h5 className="mb-3 px-5  text-start">
                                        Sierra Ferguson
                                    </h5>
                                    <div className=" mb-4 px-5 ">
                                        <p className="text-primary text-center" 
                                            style={{backgroundColor:'lightgrey', width:'150px',height:'25px', fontSize:'15px'}}
                                        >Your plan: Free</p>
                                    </div>
                                    <h5 className="text-primary text-start px-5 fw-bold mb-3">
                                        Menu
                                    </h5>                      
                                </div>
                                <Nav defaultActiveKey="/home" className="flex-column">                                   
                                                                   
                                    <Nav.Link eventKey="link-1">Link</Nav.Link>
                                    <Nav.Link eventKey="link-2">Link</Nav.Link>
                                    <Nav.Link eventKey="disabled" disabled>
                                        Disabled
                                    </Nav.Link>
                                </Nav>
                                                      
                            
                                                               
                            </Nav>
                        </Navbar.Collapse>
                </Container>
            </Navbar>
            
        </>
    )

}
export default Header;