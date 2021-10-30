import React, { useState } from 'react'
import { Card, Row, Col, Modal, Button } from 'react-bootstrap'
const Certification = () =>{
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return(
        <div className="mt-3">
            <h5 className="mx-3 fw-bold">Test name </h5>
            <Card>
                <Card.Body>
                    <Row>
                        <Col md={7}>UI - UX  Certification Atempt 1</Col>
                        <Col md={5}>
                            <Row className="me-auto">
                                <Col >
                                    <button className="btn" style={{backgroundColor:'#4DD188', color:'white'}} onClick={handleShow}>Take Test</button>
                                </Col>
                                <Col >
                                    <div 
                                    style={{width: '10px', height: '10px', borderRadius: '50%', backgroundColor: 'black',boxShadow: '0px 15px 0px black, 0px 30px 0px black'}}
                                    ></div>
                                </Col>
                            </Row>                           
                        </Col>
                    </Row>
                </Card.Body>
                <Card.Body className="mb-2">
                    <Row >
                        <Col md={7}>UI - UX  Certification Atempt 2</Col>
                        <Col md={5}>
                            <Row className="me-auto">
                                <Col >
                                    <button className="btn" style={{backgroundColor:'#4DD188', color:'white'}} onClick={handleShow}>Take Test</button>
                                </Col>
                                <Col>
                                    <div
                                    style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: 'black',boxShadow: '0px 15px 0px black, 0px 30px 0px black'}}
                                    ></div>
                                </Col>
                            </Row>                           
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
            <Modal show={show} >
                <Modal.Body className="text-center">
                    <Modal.Title className="mb-2 mt-2">Requirements Not met</Modal.Title>
                    <p>Please complete the required number of skill building tests to unloack certification test</p>
                    <Button variant="success" onClick={handleClose}>Go to Skillbuilding Test</Button> 
                </Modal.Body>               
            </Modal>
        </div>
            
    )
}
export default Certification