import React from 'react';

import { Container, Row, Col, Nav, Tab, Navbar } from 'react-bootstrap'

//icons
import profile from '../../images/logo/side_bar/contact.png'
import setting from '../../images/logo/side_bar/setting.png'
import rupee from '../../images/logo/side_bar/rupees.png'
import report from '../../images/logo/side_bar/report.png'
import tests from'../../images/logo/side_bar/test.png'
import home from '../../images/logo/side_bar/home.png'

  import MainContent from '../maincontent/MainContent'
  import Tests from '../sidebarpage/tests/Tests'
  import Report from '../sidebarpage/reports/Report'
  import Billing from '../sidebarpage/billing/Billing'
  import Setting from '../sidebarpage/setting/Setting'
  import Profile from '../sidebarpage/profile/Profile'


const Dashboard = () => {
    return (
        <Container fluid>
            <Tab.Container defaultActiveKey="/mainContent">  
                <Row>
                    <Col xs={12} md={3} lg={2} >
                        {/* <Navbar bg="white" expand="lg">
                            <Container fluid>                                 */}
                                 <div className="main-sidebar border-end">  
                                    {/* <Navbar.Brand>                      
                                        <div className="mt-5 mx-4">
                                            <Logo />
                                        </div>  
                                    </Navbar.Brand>
                                    <Navbar.Toggle aria-controls="navbarScroll" />  */}
                                    <h6 className="mb-3" style={{marginLeft:'40px'}}>
                                        measure to lead
                                    </h6>
                                    <h5 className="mb-0 text-start px-2 fw-normal">
                                        Welcome back,
                                    </h5>
                                    <h5 className="mb-3 px-2 ">
                                        Sierra Ferguson
                                    </h5>
                                    <div className=" mb-4 px-3 ">
                                        <p className="text-primary text-center" 
                                            style={{backgroundColor:'lightgrey', width:'150px',height:'25px', fontSize:'15px'}}
                                        >Your plan: Free</p>
                                    </div>
                                    <h5 className="text-primary px-4 fw-bold mb-3">
                                        Menu
                                    </h5>
                                <Nav variant="tabs" className="flex-column">
                                    <Nav.Item>
                                        <Nav.Link eventKey="mainContent">
                                        <img src={home} alt="home" className=" mx-2 mb-2" />  
                                            My Subscriptions
                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="tests">
                                        <img src={tests} alt="tests" className="mx-2 mb-2"/> 
                                            Tests
                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="report">
                                        <img src={report} alt="reports" className="mx-2 mb-2"/> 
                                            Reports
                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="billing">
                                        <img src={rupee} alt="billing" className="mx-2 mb-2"/>
                                            Billing
                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="setting">
                                        <img src={setting} alt="setting" className="mx-2 mb-2"/>
                                            Setting
                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="profile">
                                        <img src={profile} alt="tests" className="mx-2 mb-2" />
                                            Profile
                                        </Nav.Link>
                                    </Nav.Item>
                                </Nav>
                            </div>  
{/* 
                            </Container>
                        </Navbar> */}
                                  
                    </Col>
                    <Col sm={12} md={9} lg={10} md={{span: 3, offset: 3}} lg={{offset: 2, span:2 }} >
                      <Tab.Content>
                        <Tab.Pane eventKey="mainContent" >
                            <MainContent /> 
                        </Tab.Pane>
                        <Tab.Pane eventKey="tests">
                            <Tests />
                        </Tab.Pane>
                        <Tab.Pane eventKey="report">
                            <Report />
                        </Tab.Pane>
                        <Tab.Pane eventKey="billing">
                            <Billing />
                        </Tab.Pane>
                        <Tab.Pane eventKey="setting">
                            <Setting />
                        </Tab.Pane>
                        <Tab.Pane eventKey="profile">
                            <Profile />
                        </Tab.Pane>
                      </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>  
        </Container>
    );
}
export default Dashboard