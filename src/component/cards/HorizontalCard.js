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

const HorizontalCard = () =>{
    return(
        <>            
            <Card>
                <Card.Body className="billing-add w-100">
                    <Row>
                        <Col className="cls-fre text-center mt-3 mb-3" sm={4} >
                            <h2 style={{fontSize:'33px'}}>Class12</h2>
                        </Col>
                        <Col className="cls-fre " sm={5} > {/*className="cls-fre"*/}
                            <h4 >Your Current Plan</h4>                                   
                            <Row>
                                <Col  className="subscription-class-46 text-center">{/**/}
                                    <h6 style={{fontSize:'52px',textAlign:'end',color:'#298EE0'}}>46</h6>   
                                </Col>
                                <Col className="subscription-class-days text-center">{/**/}
                                <h5 style={{fontSize:'27px',textAlign:'start',width:'25',color:'#298EE0'}}> Days Left</h5>
                                </Col>
                            </Row>
                            {/* <h2 className="">Free</h2> */}
                            {/* <Link to="/billings" className="anal-btn">Go to Billing</Link> */}
                            <Link to="/billings-details" className="anal-btn">Go to Billing</Link>
                        </Col>
                        <Col > {/*className="d-none d-md-block" */}
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
export default HorizontalCard;