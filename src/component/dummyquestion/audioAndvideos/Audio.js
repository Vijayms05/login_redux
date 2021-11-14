import React, { useState } from 'react'

import {    
    Pausebutton,
    Rightarrowbutton
} from '../../assets/images/index'
import {
    Col,
    Row,
    Button,
    Card,
    Container,
    ProgressBar

} from 'react-bootstrap'


import './style.css'

const Audio =(props) => { 
   
    return(
        <Container fluid>
            <Col className="wrapper mt-4">
                <h2 className="header-lct ms-5 mb-3" >LCT-HV</h2>               
                <Card sm={8} className="audiorecord-card ms-5 mb-4 mt-5">   
                    <Row>
                        <Card.Title className="title-card question ms-4">Question</Card.Title>
                        <Col sm={2}>
                            <div className="mt-1 ms-4 p-2">
                                <Pausebutton /> 
                            </div>                             
                        </Col>                        
                        <Col sm={7}>
                            <ProgressBar  className="mt-4"  now={60} visuallyHidden />
                        </Col>
                        <Col sm={3}>
                            <Card.Text className="mt-3">
                                {time.m}:{time.s}:{time.ms}
                            </Card.Text>
                        </Col>                        
                    </Row>
                </Card>
                <p className="audio-text text-start ms-5">Description : find out who is the prime minister of india</p>
                <Card sm={9} className="audiorecord-card ms-5 mb-4 mt-5">   
                    <Row>
                        <Col sm={1} className="title-card-option  ms-4 mt-1">A</Col>
                        <Col sm={2}>
                            <div className="mt-1 ms-4 p-2">
                                <Pausebutton /> 
                            </div>                             
                        </Col>                        
                        <Col sm={5}>
                            <ProgressBar  className="mt-4"  now={60} visuallyHidden />
                        </Col>
                        <Col sm={3}>
                            <Card.Text className="mt-3">
                                01:20/01:42
                            </Card.Text>
                        </Col>                        
                    </Row>
                </Card>
                <Card sm={9} className="audiorecord-card ms-5 mb-4 mt-5">   
                    <Row>
                        <Col sm={1} className="title-card-option  ms-4 mt-1">A</Col>
                        <Col sm={2}>
                            <div className="mt-1 ms-4 p-2">
                                <Pausebutton /> 
                            </div>                             
                        </Col>                        
                        <Col sm={5}>
                            <ProgressBar  className="mt-4"  now={60} visuallyHidden />
                        </Col>
                        <Col sm={3}>
                            <Card.Text className="mt-3">
                                01:20/01:42
                            </Card.Text>
                        </Col>                        
                    </Row>
                </Card>
                <Card sm={9} className="audiorecord-card ms-5 mb-4 mt-5">   
                    <Row>
                        <Col sm={1} className="title-card-option  ms-4 mt-1">A</Col>
                        <Col sm={2}>
                            <div className="mt-1 ms-4 p-2">
                                <Pausebutton /> 
                            </div>                             
                        </Col>                        
                        <Col sm={5}>
                            <ProgressBar  className="mt-4"  now={60} visuallyHidden />
                        </Col>
                        <Col sm={3}>
                            <Card.Text className="mt-3">
                                01:20/01:42
                            </Card.Text>
                        </Col>                        
                    </Row>
                </Card>
            </Col>
        </Container>          
    );
}
export default Audio