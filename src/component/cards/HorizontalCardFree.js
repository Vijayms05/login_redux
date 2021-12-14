import React, {useState} from 'react'
import {  Container, Col, Row, Form, Card, ProgressBar, Table } from 'react-bootstrap'
import Button from '@restart/ui/esm/Button'
import { 
    SearchIcon, 
    Billingrit,
    NumbIcon, 
    ScaleIcon, 
    PlaybtnIcon, 
    ShareIcon, 
    FeedbackIcon, 
    PrintIcon,
    LeftArrow } from '../../assets/images/index'
import { Link } from 'react-router-dom'

const HorizontalCardFree = (props) =>{
    return(
        <>            
            <Card>
                <Card.Body className="billing-add w-100">
                    <Row>
                        <Col  className="cls-fre sub-class text-center mt-3 mb-3" md={4} sm={3} xs={12} >
                            <h2 style={{fontSize:'33px'}}>Class12</h2>
                        </Col>
                        <Col  className="cls-fre hori-content" md={4} sm={6} xs={12} > {/*className="cls-fre"*/}
                            <h4 >Your Current Plan</h4>      
                                <Col style={{textAlign:'center',color:'#298EE0',
                                    fontFamily: 'f1',fontStyle: 'normal',fontWeight: 'bold',
                                    fontSize: '55px',lineHeight: '100px'}}
                                >Free</Col>
                                {/* <Col  className="subscription-class-46 text-center">
                                    <h6 style={{fontSize:'52px',textAlign:'end',color:'#298EE0'}}>46</h6>   
                                </Col>
                                <Col className="subscription-class-days text-center">
                                <h5 style={{fontSize:'27px',textAlign:'start',width:'25',color:'#298EE0'}}> Days Left</h5>
                                </Col> */}
                          
                            {/* <h2 className="">Free</h2> */}
                            {/* <Link to="/billings" className="anal-btn">Go to Billing</Link> */}
                            {/* <Link to="/billings-details" className="anal-btn">Go to Billing</Link> */}
                        </Col>
                        <Col md={4} sm={3} xs={12} className="hori-image" > {/*className="d-none d-md-block" */}
                            <Billingrit />
                            <ScaleIcon />
                            <NumbIcon />
                        </Col>
                    </Row>                    
                </Card.Body>                
            </Card>
        </>
    )
}
export default HorizontalCardFree;