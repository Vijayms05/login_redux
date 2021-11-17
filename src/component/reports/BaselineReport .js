
import React, {useState} from 'react'
import {  
    Container, 
    Col, 
    Row, 
    Form, 
    Card, 
    ProgressBar, 
    Table 
} from 'react-bootstrap'

import Button from '@restart/ui/esm/Button'

import { 
    SearchIcon,
    LeftArrow, 
    Billingrit,
    NumbIcon, 
    ScaleIcon,
    PrintIcon,
    ShareIcon,
    FeedbackIcon    
} from '../../assets/images'
import { Link } from 'react-router-dom'
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  
];


function BaselineReport() {
    return (
        <div className="py-md-4 mt-5 mt-md-0 bill-rit">
            <Col md={12} xs className="baselinereport">
                <Row className="mb-4 mt-4">
                    <Col xs={6} md={6} lg={8} className="ps-0">   
                        <Form.Group  className="w-100 search-box">
                            <Button className="searchrole">
                                <SearchIcon />
                            </Button>
                            <Form.Control type="text"  placeholder="Search My Subscriptions" size="md" className="search-input" />
                        </Form.Group>                
                    </Col>
                    <Col xs={6} md={6} lg={4}  className="pe-0">
                        <Form.Select className="select-form" size="lg" >
                            <option>Filters</option>
                            <option>Large select</option>
                            <option>Large select</option>
                        </Form.Select>
                    </Col>
                </Row>                 
                <Row>{/*className="d-lg-flex" */}
                    <Col className="p-md-0 in-bs-ln" md={9}>
                        <Link className="back-a" to="/home"><LeftArrow /> {""} Back to Results </Link>
                        <h4 className="f1-19 mt-0 mb-3" style={{color:'#003866'}}>Baseline Results</h4>
                        <div className="tl-br-cht">
                            <ResponsiveContainer width="100%" height="100%">
                                <BarChart className="bar-chart"
                                    data={data}
                                >
                                    <CartesianGrid strokeDasharray="0" />
                                    <XAxis dataKey="name" />
                                    <YAxis />
                                    <Tooltip />
                                    <Legend />
                                    <Bar dataKey="uv" fill="#298EE0" barSize={60}/>
                                </BarChart> 
                            </ResponsiveContainer>
                        </div> 
                        <h4 className="f1-16 text-center">Subject wise Score</h4>
                        <div className="text-start mb-3 mt-3">
                            <h4 className="f1-17 mb-2" style={{color:'#003866'}}>Subject wise Score</h4>
                            <Row>                                
                                <Col className="flex-sb p-0" xs={6} md={4} style={{color:'#003866'}}>
                                    <Col className="p-0 f1-16">Subject 1</Col>
                                    <Col  className="p-0 f1-16">: 80/100</Col>                                   
                                </Col>
                                <Col className="flex-sb" xs={6} md={4} style={{color:'#003866'}}>
                                    <Col className="p-0 f1-16">Subject 1</Col>
                                    <Col  className="p-0 f1-16">: 80/100</Col>                                   
                                </Col>
                                <Col className="flex-sb p-0" xs={6} md={4} style={{color:'#003866'}}>
                                    <Col className="p-0 f1-16">Subject 1</Col>
                                    <Col  className="p-0 f1-16">: 80/100</Col>                                   
                                </Col>
                            </Row>
                            <Row>                                
                                <Col className="flex-sb p-0" xs={6} md={4} style={{color:'#003866'}}>
                                    <Col className="p-0 f1-16">Subject 1</Col>
                                    <Col  className="p-0 f1-16">: 80/100</Col>                                   
                                </Col>
                                <Col className="flex-sb" xs={6} md={4} style={{color:'#003866'}}>
                                    <Col className="p-0 f1-16">Subject 1</Col>
                                    <Col  className="p-0 f1-16">: 80/100</Col>                                   
                                </Col>
                                <Col className="flex-sb p-0" xs={6} md={4} style={{color:'#003866'}}>
                                    <Col className="p-0 f1-16">Subject 1</Col>
                                    <Col  className="p-0 f1-16">: 80/100</Col>                                   
                                </Col>
                            </Row>
                        </div>
                    </Col>
                    <Col md={3}>{/* className="mt-2 skill-smry" */}
                        <h5 className="skil-sum-tit mb-2">Skill Summary</h5> 
                        {/* <h4 className="skil-sum-baslin">Baseline</h4>  */}
                        <Row >{/*class="flex-spc-btw" className="skil-sum-p"*/}
                            <Col>Test Name </Col>
                            <Col> : Baseline </Col>                            
                        </Row>
                        <div class="flex-spc-btw">
                            <p className="skil-sum-p">Role</p> 
                            <p className="skil-sum-p">: UI/UX</p> 
                        </div>
                        <div class="flex-spc-btw">
                            <p className="skil-sum-p">Date</p> 
                            <p className="skil-sum-p">: 12 May 2021</p> 
                        </div>
                        <div class="flex-spc-btw">
                            <p className="skil-sum-p">Overall Score</p> 
                            <p className="skil-sum-p">: 80/100</p> 
                        </div>
                        {/* <Link className="anal-btn">Analysis Result</Link> */}
{/*                         
                        <h4 className="skil-sum-baslin mt-4">Certification</h4>  */}
                        <div class="flex-spc-btw">
                            <p className="skil-sum-p">Avg Peer Score</p> 
                            <p className="skil-sum-p">: 70/100</p> 
                        </div>
                        <div class="flex-spc-btw">
                            <p className="skil-sum-p">Rank</p> 
                            <p className="skil-sum-p">: 15/45</p> 
                        </div>
                        <h5 className="skil-sum-tit mb-2 mt-4">View Answers</h5>
                        <Link className="anal-btn">View</Link>
                        
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
                    </Col>
                </Row>
            </Col>
        </div>
    )
}

export default BaselineReport
