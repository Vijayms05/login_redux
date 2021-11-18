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

const SubscriptionList = () =>{
    const progValue="25";
    return(
        <div className="py-md-4 bill-rit">
            <Col>
                <Row className="mb-4 mt-5 mt-md-0">
                    <Col xs={12} sm={6} md={6} lg={8} className="mb-2">   
                        <Form.Group  className="w-100 search-box">
                            <Button className="searchrole">
                                <SearchIcon />
                            </Button>
                            <Form.Control type="text"  placeholder="Search..." size="md" className="search-input" />
                        </Form.Group>                
                    </Col>
                    <Col xs={12} sm={6} md={6} lg={4}  className=" mb-2">
                        <Form.Select className="select-form" size="lg" >
                            <option>Filter</option>
                            <option>Large select</option>
                            <option>Large select</option>
                        </Form.Select>
                    </Col>
                </Row> 
                 {/* <div className="m-auto">  */}
                    <Row> {/* className="tl-skl-bldg" */}
                        <Link className="back-a " to="/home"><LeftArrow /> {" "} Back to My Subscrtiptions</Link>
                        <Col md={9} lg={9} className="mt-2">
                            <Row className="billing-add w-100">
                                <Col className="cls-fre">
                                    <h2>Class12</h2>
                                </Col>
                                <Col className="cls-fre" > {/*className="cls-fre"*/}
                                    <h4 className="mb-0">Your Current Plan</h4>                                   
                                    <Row>
                                        <Col  className="subscription-class-46">
                                            46
                                        </Col>
                                        <Col className="subscription-class-days">
                                            Days Left
                                        </Col>
                                    </Row>
                                    {/* <h2 className="">Free</h2> */}
                                    {/* <Link to="/billings" className="anal-btn">Go to Billing</Link> */}
                                    <Link to="/billings-details" className="anal-btn mb-1 ">Go to Billing</Link>
                                </Col>
                                <Col className="d-none d-md-block"></Col>
                                <Billingrit />
                                <ScaleIcon />
                                <NumbIcon />
                            </Row> 
                            <h5 className="report-h5 mb-2 mt-4">Skill Building Status</h5>  
                            <div className="lft-skl-bldg">
                                <div className="subs-list-box">
                                    <div className="in-sub-list-box">
                                        <div className="play-vid-subs">
                                            <PlaybtnIcon />
                                        </div>
                                        <div class="tit-subs"><h5>English</h5></div>
                                    </div>                    
                                    <div>                        
                                        <p className="f3-13 mb-0">Progress</p>    
                                        <div className="prog-bar-subs">
                                            <ProgressBar now={progValue} />
                                            <p className="p-0 mb-0 ms-2">{progValue}%</p>
                                        </div> 
                                    </div>                                
                                </div>
                                <div className="subs-list-box">
                                    <div className="in-sub-list-box">
                                        <div className="play-vid-subs">
                                            <PlaybtnIcon />
                                        </div>
                                        <div class="tit-subs"><h5>History</h5></div>
                                    </div>                    
                                    <div>    
                                        <p className="f3-13 mb-0">Progress</p>                    
                                        <div className="prog-bar-subs">
                                            <ProgressBar now={progValue} />
                                            <p className="p-0 mb-0 ms-2">{progValue}%</p>
                                        </div> 
                                    </div>
                                </div>
                                <div className="subs-list-box">
                                    <div className="in-sub-list-box">
                                        <div className="play-vid-subs">
                                            <PlaybtnIcon />
                                        </div>
                                        <div class="tit-subs"><h5>Arts</h5></div>
                                    </div>                    
                                    <div>                        
                                        <p className="f3-13 mb-0">Progress</p>    
                                        <div className="prog-bar-subs">
                                            <ProgressBar now={progValue} />
                                            <p className="p-0 mb-0 ms-2">{progValue}%</p>
                                        </div> 
                                    </div>                                
                                </div>
                                <div className="subs-list-box">
                                    <div className="in-sub-list-box">
                                        <div className="play-vid-subs">
                                            <PlaybtnIcon />
                                        </div>
                                        <div class="tit-subs"><h5>Photography</h5></div>
                                    </div>                    
                                    <div>                        
                                        <p className="f3-13 mb-0">Progress</p>    
                                        <div className="prog-bar-subs">
                                            <ProgressBar now={progValue} />
                                            <p className="p-0 mb-0 ms-2">{progValue}%</p>
                                        </div> 
                                    </div>                                
                                </div>
                            </div>
                        </Col>
                        <Col md={3} lg={3}  >{/*className="mt-2 skill-smry" */}
                            <Card style={{ width: '16rem' }} className="mb-3 base-card-report">
                                {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                                <Card.Body>{/*className="skil-sum-tit mb-2 mt-3" */}
                                    <Card.Title className="skil-sum-tit mb-2 mt-3"
                                    >Skill Summary</Card.Title>
                                    {/* <h5 className="skil-sum-tit mb-2 mt-3">Result Summary</h5>  */}
                                    {/* <h4 className="skil-sum-baslin">Baseline</h4>  */}
                                    <Row>{/*class="flex-spc-btw" className="skil-sum-p"*/}
                                        <Col className="skil-sum-baslin text-start mt-2">Baseline </Col>
                                                                    
                                    </Row>
                                    <Row className='mt-2'>
                                        <Col className="skil-sum-text text-start">Ranking </Col> 
                                        <Col className="skil-sum-text">: 16/45</Col> 
                                    </Row>
                                    <Row>
                                        <Col className="skil-sum-text text-start">Score</Col> 
                                        <Col className="skil-sum-text ">: 80%</Col> 
                                    </Row>
                                    <Link to="/basline" className="anal-btn">Analysis Result</Link>
                                    <Row>{/*class="flex-spc-btw" className="skil-sum-p"*/}
                                        <Col className="skil-sum-baslin text-start mt-2">Certification </Col>
                                    </Row>
                                    <Row className='mt-2'>
                                        <Col className="skil-sum-text text-start">Ranking </Col> 
                                        <Col className="skil-sum-text">: 16/45</Col> 
                                    </Row>
                                    <Row>
                                        <Col className="skil-sum-text text-start">Score</Col> 
                                        <Col className="skil-sum-text ">: 80%</Col> 
                                    </Row>
                                    <Link to="/certificate-result" className="anal-btn">Analysis Result</Link>
                                
                                    {/*                                 
                                    <h5 className="skil-sum-tit mb-2 mt-4">View Answers</h5>
                                    <Link className="anal-btn">View</Link> */}
                                    
                                    <h4 className="skil-sum-baslin mt-5 text-center">Actions</h4>
                                    <Link className="actn-btn">
                                        <ShareIcon /> Share
                                    </Link> 
                                    <Link className="actn-btn">
                                        <PrintIcon /> Print
                                    </Link>
                                    <Link className="actn-btn">
                                        <FeedbackIcon /> Feed Back
                                    </Link>
                                </Card.Body>
                            </Card>                        
                        </Col>                       
                    </Row>     
                {/* </div> */}
            </Col>
        </div>
    );
}

export default SubscriptionList;