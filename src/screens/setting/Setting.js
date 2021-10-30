import React, { useState } from 'react';

import { 
    Container,
    Col,
    Tab,
    Row,
    Tabs,
    Form,
    ListGroup,
    Badge, 
    Button
} from 'react-bootstrap';

import './style.css'

const Setting = (props) =>{
    const [state, setstate] = useState('')
    return(
        <Container fluid>
            <Row>
                <Col sm={12} xs className="mx-4">
                    <h2 className="mt-5 ms-4 mb-5" style={{color:'#003866'}}>Settings</h2>
                    <Col className="setting-nav ms-4">
                        <Tabs
                            defaultActiveKey="home"
                            transition={false}
                            id="noanim-tab-example"
                            className="mb-3 "
                        >
                            <Tab eventKey="home" title="Billing">
                                <BillingDetails />
                            </Tab>
                            <Tab eventKey="promotion" title="Promotion">
                                <Paymentmethod />
                            </Tab>
                            <Tab eventKey="organisation" title="Organiasational Details" >
                                <OrganiasationalDetails />
                            </Tab>
                            <Tab eventKey="help" title="Help" >
                                <Help />
                            </Tab>
                        </Tabs>
                    </Col> 
                </Col>
            </Row>  
        </Container>
    );
}

const BillingDetails = (props) =>{
    return(
        <Col sm={12}>
            <Form className="mx-4 text-center">    
                <Form.Group className="mt-4 mb-3">                                      
                    <select class="form-select billingdetails-text ">
                        <option selected>Country</option>
                        <option>France</option>
                        <option>Germany</option>
                        <option>Hungary</option>
                    </select>                  
                </Form.Group>
                <Form.Group class="mb-4 mt-3  billingdetails-text">  
                    <Form.Control  type="text" placeholder="Address Line 1"   className="p-2 mb-2"   />    
                    <Form.Control  type="text" placeholder="Address Line 2"   className="p-2 mb-2"   />          
                </Form.Group>
                <Form.Group className="mt-4 mb-3 billingdetails-text">                       
                    <select class="form-select form-select-md ">
                        <option selected>State</option>
                        <option>France</option>
                        <option>Germany</option>
                        <option>Hungary</option>
                    </select>
                </Form.Group>                  
                <Form.Group className="mt-4 mb-3 billingdetails-text">                  
                    <select class="form-select form-select-md ">
                        <option selected>District</option>
                        <option>France</option>
                        <option>Germany</option>
                        <option>Hungary</option>
                    </select>
                </Form.Group>  
            </Form>        
        </Col>
    )
}

const Paymentmethod =(props)=>{
    return(
        <Col sm={12} className="p-2 ">
            <h5 className="mt-3 ms-4">Promotion List</h5>           
            <ListGroup as="ul" numbered className="mb-3 text-center">
                <ListGroup.Item
                    as="li"
                    className="d-flex justify-content-between align-items-start "
                >
                    <div className="ms-2 me-auto">
                    <div className="fw-bold">Subheading</div>
                    Cras justo odio
                    </div>
                    <Badge  className="rounded-pill bg-primary">
                        14
                    </Badge>
                </ListGroup.Item>
                <ListGroup.Item
                    as="li"
                    className="d-flex justify-content-between align-items-start"
                >
                    <div className="ms-2 me-auto">
                    <div className="fw-bold">Subheading</div>
                    Cras justo odio
                    </div>
                    <Badge  className="rounded-pill bg-primary">
                        8
                    </Badge>
                </ListGroup.Item>
                <ListGroup.Item
                    as="li"
                    className="d-flex justify-content-between align-items-start"
                >
                    <div className="ms-2 me-auto">
                        <div className="fw-bold">Subheading</div>
                        Cras justo odio
                    </div>
                    <Badge className="rounded-pill bg-primary">
                        14
                    </Badge>
                </ListGroup.Item>
                <ListGroup.Item
                    as="li"
                    className="d-flex justify-content-between align-items-start"
                >
                    <div className="ms-2 me-auto">
                        <div className="fw-bold">Subheading</div>
                        Cras justo odio
                    </div>
                    <Badge className="rounded-pill bg-primary">
                        14
                    </Badge>
                </ListGroup.Item>
            </ListGroup>  
        </Col>
    )
}

const OrganiasationalDetails = () =>{
    return(         
        <Col sm={12} className="ms-4 mt-5 mb-3 ">
            <p className="text-start  mb-3 organisationaldetail" >
                <Row>
                    <Col sm={6}>Organization Name </Col> <Col sm={3}>: &nbsp; Name</Col>  
                </Row>
            </p>
            <p className="text-start  mb-3 organisationaldetail"  >
                <Row>
                    <Col>Organization ID   </Col> <Col>: &nbsp; 56BSC2021</Col>  
                </Row>
            </p>
            <p className="text-start  mb-3 organisationaldetail "  >
                <Row>
                    <Col>Organization Role   </Col> <Col>: &nbsp; Designer</Col>  
                </Row>
            </p>
        </Col>           
        
    )
}

const Help=(props)=>{
    return(
        <Col sm={12}  className='p-1'>
            <Col className="mb-4 mt-3 mx-4">
                <Row className="mb-3">
                    <Col sm={6}>Privacy Policy</Col>
                    <Col sm={3}>
                        <Button className="help-button">Click Here</Button>                       
                    </Col>
                </Row>
                <Row className="mb-3">
                    <Col sm={6}>Terms of Conditions</Col>
                    <Col sm={3}>
                        <Button className="help-button">Click Here</Button> 
                    </Col>
                </Row>
                <Row className="mb-3">  
                    <Col sm={6}>Contact Us</Col>
                    <Col sm={3}>
                        <Button className="help-button">Click Here</Button> 
                    </Col>
                </Row>
            </Col>
            <h4 className="mt-3 mb-3 ms-4">Frequently Asked Questions</h4>
            <p className="text-start mb-3 ms-4 ">
                Q1.1  Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. 
                Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
            </p>
            <p className="text-start mb-5 ms-4">
                Ans) Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. 
                Exercitation veniam consequat sunt nostrud amet.
            </p>
        </Col>
    )
}


export default Setting