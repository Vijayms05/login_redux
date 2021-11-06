import React, {useState} from 'react'
import {  Container, Col, Row, Form, Card, ProgressBar, Table } from 'react-bootstrap'
import Button from '@restart/ui/esm/Button'
import { SearchIcon, Billingrit,NumbIcon, ScaleIcon, PlaybtnIcon, ShareIcon, FeedbackIcon, PrintIcon } from '../../assets/images'
import { Link } from 'react-router-dom'

const SubscriptionList = () =>{
    const progValue="25";
    return(
        <div className="py-md-4 bill-rit">
            <Col>
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
                            <option>Filter</option>
                            <option>Large select</option>
                            <option>Large select</option>
                        </Form.Select>
                    </Col>
                </Row> 
                <div className="m-auto">
                    <div className="tl-skl-bldg"> 
                        <Col className="lft-skl-bldg">
                            {/* <Row> 
                                <h5 className="report-h5 mt-2">Skill-Building Status</h5>  
                            </Row>     */}
                            <Row className="billing-add w-100">
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
                            <h5 className="report-h5 mb-2 mt-4">Skill Building Status</h5>  
                            <div className="subs-list-box">
                                <div className="in-sub-list-box">
                                    <div className="play-vid-subs">
                                        <PlaybtnIcon />
                                    </div>
                                    <div class="tit-subs"><h5>English</h5></div>
                                </div>                    
                                <div>                        
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
                                    <div className="prog-bar-subs">
                                        <ProgressBar now={progValue} />
                                        <p className="p-0 mb-0 ms-2">{progValue}%</p>
                                    </div> 
                                </div>
                            </div>
                        </Col>
                        <div className="mt-2 skill-smry">
                            <h5 className="skil-sum-tit mb-2">Skill Summary</h5> 
                            <h4 className="skil-sum-baslin">Baseline</h4> 
                            <div class="flex-spc-btw">
                                <p className="skil-sum-p">Ranking</p> 
                                <p className="skil-sum-p">: 12/62</p> 
                            </div>
                            <div class="flex-spc-btw">
                                <p className="skil-sum-p">Score</p> 
                                <p className="skil-sum-p">: 60%</p> 
                            </div>
                            <Link className="anal-btn">Analysis Result</Link>
                            
                            <h4 className="skil-sum-baslin mt-4">Certification</h4> 
                            <div class="flex-spc-btw">
                                <p className="skil-sum-p">Ranking</p> 
                                <p className="skil-sum-p">: 12/62</p> 
                            </div>
                            <div class="flex-spc-btw">
                                <p className="skil-sum-p">Score</p> 
                                <p className="skil-sum-p">: 60%</p> 
                            </div>
                            <Link className="anal-btn">Analysis Result</Link>
                            
                            <h4 className="skil-sum-baslin mt-4 text-center">Action</h4>
                            <Link className="actn-btn">
                                <ShareIcon />
                                Share</Link> 
                                <Link className="actn-btn">
                                <PrintIcon />
                                Print</Link>
                                <Link className="actn-btn">
                                <FeedbackIcon />
                                Feed Back</Link>
                        </div>
                    </div>     
                </div>
            </Col>
        </div>
    );
}

export default SubscriptionList;