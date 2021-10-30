import React from 'react'

import { Link } from 'react-router-dom'
import { Card, Row, Col } from 'react-bootstrap'
import BaselineTest from './BaselineTest'

const Baseline = () =>{
    return(
        <div className="mt-4">
            <h5 className="mx-3 fw-bold">Test name </h5>
            <Card>
                <Card.Body className="mb-3">
                    <Row className="me-auto">
                        <Col md={7}>UI - UX Baseline</Col>
                        <Col md={5}>
                            <Row className="me-auto">
                                <Col>
                                    <a className="btn" style={{backgroundColor:'#4DD188', color:'white'}} href="/baselineTest">Take Test </a>
                                </Col>
                                <Col>
                                    <div 
                                    style={{justifyContent:'end', width: '10px', height: '10px', borderRadius: '50%', backgroundColor: 'black',boxShadow: '0px 15px 0px black, 0px 30px 0px black'}}
                                    ></div>
                                </Col>
                            </Row>                           
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </div>
            
    )
}
export default Baseline;