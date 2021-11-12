import React, {useState} from 'react'
import {  Container, Col, Row, Form, Card, ProgressBar, Table } from 'react-bootstrap'
import Button from '@restart/ui/esm/Button'
import { SearchIcon, Billingrit,NumbIcon, ScaleIcon, TickIcon } from '../../assets/images'

const BillingDetails = () =>{
    return(
        <div className="py-md-4 bill-rit">
            <Row className="mb-4 mt-4">
                <Col xs={6} md={6} lg={8} className="ps-0">   
                    <Form.Group  className="w-100 search-box">
                        <Button className="searchrole">
                            <SearchIcon />
                        </Button>
                        <Form.Control type="text"  placeholder="Search..." size="md" className="search-input" />
                    </Form.Group>                
                </Col>
                <Col xs={6} md={6} lg={4}  className="pe-0">
                    <Form.Select className="select-form" size="lg" >
                        <option>Large select</option>
                        <option>Large select</option>
                        <option>Large select</option>
                    </Form.Select>
                </Col>
            </Row> 
            <div className="m-auto">
            <Row> 
                <h5 className="report-h5">Billing</h5>  
           </Row>  
           <Row className="billing-add">
                <Col className="cls-fre">
                    <h2 className="">Class12</h2>
                </Col>
                <Col className="cls-fre">
                    <h4 className="">Your Current Plan</h4>
                    <h2 className="">Free</h2>
                </Col>
                <Col></Col>
                <Billingrit />
                <ScaleIcon />
                <NumbIcon />
            </Row> 
            <Row className="mt-3"> 
                <h5 className="report-h5">Upgrade Now</h5>  
           </Row>       
            <Row>
                <Col md={12} lg={6} className="p-0">
                    <Row>
                        <h4 className="plan-h4 p-0 mt-4">Select Plan Validity</h4>
                        <Col xs={6} md={6} lg={4}  className="p-0">
                            <Form.Select className="select-form" size="lg" >
                                <option>30 Days</option>
                                <option>30 Days</option>
                                <option>30 Days</option>
                            </Form.Select>
                        </Col>
                    </Row> 
                    <Row className="mt-3 wt-we-get"> 
                        <h5 className="report-h5">What you get</h5>  
                        <p>For most business that what to optimized wen queiries</p>
                        <ul>
                            <li><TickIcon />All limited links</li>
                            <li><TickIcon />Own analuystics platform</li>
                            <li><TickIcon />Chat Support</li>
                            <li><TickIcon />Optimized Hashtags</li>
                            <li><TickIcon />Unlimited Users</li>
                        </ul>
                    </Row>    
                </Col> 
                <Col md={12} lg={6}  className="p-0">
                    
                <p className="f1-17 mb-1 mt-2">Total</p> 
                <p className="f1-35 mb-0 dark-green-light" style={{lineHeight: '30px'}}>Rs 560</p> 
                    <div className="price-down"> 
                        <h5 className="">Price Breakdown</h5>  
                        <div className="price-down-in">
                            <p>Plan Cost</p>
                            <p>Rs 400</p>
                        </div>
                        <div className="price-down-in">
                            <p>Gst 18% </p>
                            <p>Rs 50</p>
                        </div>
                        <div className="price-down-in tl-top">
                            <p>Total </p>
                            <p>Rs 50</p>
                        </div>
                    </div>  
                    <Button className="buy-now-btn">Buy Now</Button>  
                </Col>   
           </Row>    
        </div>
        </div>
    );
}

export default BillingDetails;