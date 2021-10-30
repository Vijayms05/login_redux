

import React, { useState } from 'react'
import arrow from '../../../images/arrow.png'
import { Row, Col, Table, Button, Modal } from 'react-bootstrap'

const SkillBuildingtest =()=>{
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return(
        <div className="text-center">   
            <Row>
                <Col lg={12}>
                    <Table bordered>
                        <thead>
                            <tr>
                                <th>Subject Name</th>
                                <th>Test name</th>
                                <th>Chapter</th>
                                <th>Topic</th>                                                                
                            </tr>
                        </thead>
                        <tbody>
                            <tr >
                                <td colSpan="4">                                    
                                    <div >                                            
                                        <p className="text-start">
                                            <span>
                                                <img src={arrow}  className="position-absolute"alt="arrow" style={{marginLeft:"-465px",}}/>
                                            </span>Visual Design
                                        </p> 
                                        
                                            <Row className="mb-3">
                                                <Col lg={2}></Col>
                                                <Col lg={2}>
                                                    <p>Visual Design</p>
                                                </Col>
                                                <Col lg={2}>
                                                    <p>Prototyping</p>
                                                </Col>
                                                <Col lg={2}>
                                                    <p>Smart animate</p>
                                                </Col>
                                                <Col lg={4}>
                                                    <Row className="me-auto">
                                                        <Col>
                                                            <Button variant="success" size="md" onClick={handleShow}>Take Test</Button>
                                                        </Col>
                                                        <Col>
                                                            <div
                                                            style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'black',boxShadow: '0px 15px 0px black, 0px 30px 0px black'}}
                                                            ></div>
                                                        </Col>
                                                    </Row>
                                                </Col>
                                            </Row>
                                            <Row className="mb-3">
                                                <Col lg={2}></Col>
                                                <Col lg={2}>
                                                    <p>Visual Design</p>
                                                </Col>
                                                <Col lg={2}>
                                                    <p>Prototyping</p>
                                                </Col>
                                                <Col lg={2}>
                                                    <p>Smart animate</p>
                                                </Col>
                                                <Col lg={4}>
                                                    <Row className="me-auto">
                                                        <Col>
                                                            <Button variant="primary" className size="sm">Analyze Results</Button>
                                                        </Col>
                                                        <Col>
                                                            <div
                                                            style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'black',boxShadow: '0px 15px 0px black, 0px 30px 0px black'}}
                                                            ></div>
                                                        </Col>
                                                    </Row>
                                                </Col>
                                            </Row>
                                            <Row className="mb-3">
                                                <Col lg={2}></Col>
                                                <Col lg={2}>
                                                    <p>Visual Design</p>
                                                </Col>
                                                <Col lg={2}>
                                                    <p>Prototyping</p>
                                                </Col>
                                                <Col lg={2}>
                                                    <p>Smart animate</p>
                                                </Col>
                                                <Col lg={4}>
                                                    <Row className="me-auto">
                                                        <Col>
                                                            <Button variant="primary" className size="sm" >Analyze Results</Button>
                                                        </Col>
                                                        <Col>
                                                            <div
                                                            style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'black',boxShadow: '0px 15px 0px black, 0px 30px 0px black'}}
                                                            ></div>
                                                        </Col>
                                                    </Row>
                                                </Col>
                                            </Row>
                                    </div>
                                           

                                </td>
                            </tr>
                            <tr >
                                <td colSpan="4">                                    
                                    <div >                                            
                                        <p className="text-start">
                                            <span>
                                                <img src={arrow}  className="position-absolute"alt="arrow" style={{marginLeft:"-465px",}}/>
                                            </span>Visual Design
                                        </p>                                         
                                            <Row className="mb-3">
                                                {/* <Col lg={2}></Col> */}
                                                <Col lg={2}>
                                                    <p>Visual Design</p>
                                                </Col>
                                                <Col lg={2}>
                                                    <p>Prototyping</p>
                                                </Col>
                                                <Col lg={2}>
                                                    <p>Smart animate</p>
                                                </Col>
                                                <Col lg={4}>
                                                    <Row className="me-auto">
                                                        <Col>
                                                            <Button variant="success" className size="md" onClick={handleShow}>Take Test</Button>
                                                        </Col>
                                                        <Col>
                                                            <div
                                                            style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'black',boxShadow: '0px 15px 0px black, 0px 30px 0px black'}}
                                                            ></div>
                                                        </Col>
                                                    </Row>
                                                </Col>
                                            </Row>
                                            <Row className="mb-3">
                                                <Col lg={2}></Col>
                                                <Col lg={2}>
                                                    <p>Visual Design</p>
                                                </Col>
                                                <Col lg={2}>
                                                    <p>Prototyping</p>
                                                </Col>
                                                <Col lg={2}>
                                                    <p>Smart animate</p>
                                                </Col>
                                                <Col lg={4}>
                                                    <Row className="me-auto">
                                                        <Col>
                                                            <Button variant="primary" className size="sm">Analyze Results</Button>
                                                        </Col>
                                                        <Col>
                                                            <div
                                                            style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'black',boxShadow: '0px 15px 0px black, 0px 30px 0px black'}}
                                                            ></div>
                                                        </Col>
                                                    </Row>
                                                </Col>
                                            </Row>
                                            <Row className="mb-3">
                                                <Col lg={2}></Col>
                                                <Col lg={2}>
                                                    <p>Visual Design</p>
                                                </Col>
                                                <Col lg={2}>
                                                    <p>Prototyping</p>
                                                </Col>
                                                <Col lg={2}>
                                                    <p>Smart animate</p>
                                                </Col>
                                                <Col lg={4}>
                                                    <Row className="me-auto">
                                                        <Col>
                                                            <Button variant="primary" className size="sm">Analyze Results</Button>
                                                        </Col>
                                                        <Col>
                                                            <div
                                                            style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'black',boxShadow: '0px 15px 0px black, 0px 30px 0px black'}}
                                                            ></div>
                                                        </Col>
                                                    </Row>
                                                </Col>
                                            </Row>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                </Col> 
            </Row>      
            <Modal show={show} >
                <Modal.Body className="text-center">
                    <Modal.Title className="mb-2 mt-2">Requirements Not met</Modal.Title>
                    <p>Please complete the baseline test to unlock Skill building Test</p>
                    <Button variant="success" onClick={handleClose}>Go to SkillBuilding Test</Button> 
                </Modal.Body>               
            </Modal>          
        </div>
    )
}
export default SkillBuildingtest