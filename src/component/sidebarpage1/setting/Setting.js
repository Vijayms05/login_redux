import React from 'react'
import { Tabs, Tab, Row, Col, Button, Container, Form, ListGroup, Badge } from 'react-bootstrap'

const Setting =() =>{
    return(
        <Container fluid>
            <Row>
                <Col lg={10} className="mx-4">
                    <h5 className="mt-5 mx-4 mb-5" style={{color:'#003866'}}>Settings</h5>
                    <div className="mb-5 mx-4 border">
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
                    </div> 
                </Col>
            </Row>  
        </Container>
    );
}
const BillingDetails = () =>{
    return(
        <Form className="mx-4 text-center w-75">    
            <Form.Group className="mt-4 mb-3">                                      
                <select class="form-select form-select-md ">
                    <option selected>Country</option>
                    <option>France</option>
                    <option>Germany</option>
                    <option>Hungary</option>
                </select>                  
            </Form.Group>
            <Form.Group class="mb-4 mt-3 ">  
                <Form.Control  type="text" placeholder="Address Line 1"   className="p-2 mb-2"   />    
                <Form.Control  type="text" placeholder="Address Line 2"   className="p-2 mb-2"   />          
            </Form.Group>
            <Form.Group className="mt-4 mb-3">                       
                <select class="form-select form-select-md ">
                    <option selected>State</option>
                    <option>France</option>
                    <option>Germany</option>
                    <option>Hungary</option>
                </select>
            </Form.Group>  
            
            <Form.Group className="mt-4 mb-3">                  
                <select class="form-select form-select-md ">
                    <option selected>District</option>
                    <option>France</option>
                    <option>Germany</option>
                    <option>Hungary</option>
                </select>
            </Form.Group>  
        </Form>
            
    )
}

const Paymentmethod =()=>{
    return(
        <div className="mx-4 text-center">  
            <div className="mt-4 mb-3">
                <h5 className="text-start">Promotion List </h5>
            </div>
            <ListGroup as="ul" numbered className="mb-3">
                <ListGroup.Item
                    as="li"
                    className="d-flex justify-content-between align-items-start"
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
                </ListGroup>
            {/* <Form.Group className="mb-3 mt-4 w-75 ">  
                <Form.Control  type="text" placeholder="Name"  className="p-2 "   />   
            </Form.Group>
            <Form.Group className="mb-3 w-75 ">  
                <Form.Control  type="text" placeholder="Card Number"  className="p-2 "   />   
            </Form.Group>
            <Form.Group className="mb-3 w-75 ">  
                <Form.Control  type="text" placeholder="CVV"  className="p-2 "   />   
            </Form.Group> */}
        </div>
    )
}

const OrganiasationalDetails = () =>{
    return(         
        <Col lg={6} className="ms-4 mt-5 mb-3 ">
            <p className="text-start  mb-3 "  >
                <Row>
                    <Col>Organization Name </Col> <Col>: &nbsp; Name</Col>  
                </Row>
            </p>
            <p className="text-start  mb-3 "  >
                <Row>
                    <Col>Organization ID   </Col> <Col>: &nbsp; 56BSC2021</Col>  
                </Row>
            </p>
            <p className="text-start  mb-3 "  >
                <Row>
                    <Col>Organization Role   </Col> <Col>: &nbsp; Designer</Col>  
                </Row>
            </p>
        </Col>           
        
    )
}
const Help=()=>{
    return(
        <div className="mt-3">
            <Col lg={6} className="mb-4 mt-5 mx-4">
                <Row className="mb-3">
                    <Col>Privacy Policy</Col>
                    <Col>
                        <button className="btn" style={{backgroundColor:'#298EE0',color:'white', borderRadius:'10px'}}>Click Here</button>
                    </Col>
                </Row>
                <Row className="mb-3">
                    <Col>Terms of Conditions</Col>
                    <Col>
                        <button className="btn" style={{backgroundColor:'#298EE0',color:'white', borderRadius:'10px'}}>Click Here</button>
                    </Col>
                </Row>
                <Row className="mb-3">  
                    <Col>Contact Us</Col>
                    <Col>
                        <button className="btn" style={{backgroundColor:'#298EE0',color:'white', borderRadius:'10px'}}>Click Here</button>
                    </Col>
                </Row>
            </Col>
            <h4 className="text-start mb-3 ms-4" style={{color:'#003866'}}>
                Frequently Asked Questions
            </h4>
            <p className="text-start mb-3 ms-4">
                Q1.1  Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. 
                Velit officia consequat duis enim velit mollit. 
                Exercitation veniam consequat sunt nostrud amet.
            </p>
            <p className="text-start mb-3 ms-4">
                Ans) Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. 
                Exercitation veniam consequat sunt nostrud amet.
            </p>
        </div>
    )
}

export default Setting