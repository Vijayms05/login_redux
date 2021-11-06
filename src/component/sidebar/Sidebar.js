import React from 'react';
import {  Row, Col, Nav, Navbar, } from 'react-bootstrap'
import { Link } from 'react-router-dom';

import { Logo, MenuHome, TestHome,  ReportHome, BillingHome, SettingsHome, ProfileHome} from '../../assets/images/index'

const Sidebar =()=>{
  return(  
        <div className="lftMenu pt-3 px-2 px-md-2">
            <Logo />
            <h6 className="logo-tag">
                measure to lead
            </h6>
            <Row>
                <div className="wel-cm-bc">
                    <h4>
                        Welcome back,
                    </h4>
                    <h5>
                        Sierra Ferguson
                    </h5>
                    <p>Your plan: Free</p>
                </div> 
                <Col md={12} sm={6}  className="text-end text-lg-start min-pos-ab">                      
                    <h6 className="menu-tit text-start d-none d-md-block">
                        Menu
                    </h6>
                    <Navbar className="nav-bar-menu" expand="md">
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll">
                            <Nav defaultActiveKey="/home" className="me-auto my-2 my-lg-0 text-start menu-back">
                                <Link className="linka" to="/home">
                                    <MenuHome />
                                    My Subscriptions
                                </Link> 
                                <Link className="linka"  to="/test">
                                    <TestHome />
                                    Tests
                                </Link >
                                <Link className="linka"  to="/report">
                                    <ReportHome />
                                    Reports
                                </Link>
                                <Link className="linka"  to="/billings">
                                    <BillingHome />
                                    Billing
                                </Link>
                                <Link className="linka"  to="/setting">
                                    <SettingsHome />
                                    Settings
                                </Link>
                                <Link className="linka"  to="/profile">
                                    <ProfileHome />
                                    Profile
                                </Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </Col>
            </Row>            
        </div>
  );
}
export default Sidebar


