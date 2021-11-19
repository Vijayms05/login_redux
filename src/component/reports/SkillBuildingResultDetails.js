
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


const SkillBuildingResultDetails = () => {
    return (
        <div className="py-md-4 mt-5 mt-md-0 bill-rit">
            <Col md={12} xs className="baselinereport">
            <Row>
                    <Col xs={6} md={6} lg className="mt-3">   
                        <Form.Group  className="w-70 search-box">
                            <Button className="searchrole">
                                <SearchIcon />
                            </Button>
                            <Form.Control type="text"  placeholder="Search My Subscriptions" size="md" className="search-input" />
                        </Form.Group>                
                    </Col>
                    <Col xs={6} md={6} lg className="mt-3">
                        <Form.Select className="select-form" size="lg" style={{width:'250px'}} >
                            <option>Filters</option>
                            <option>Large select</option>
                            <option>Large select</option>
                        </Form.Select>
                    </Col>  
                </Row>                
                <Row>{/*div className="d-lg-flex" className="p-md-0 in-bs-ln"*/}
                    <Col md={9} lg={9}>
                        <Link className="back-a mt-3" to="/home"><LeftArrow /> {""} Back to Results </Link>
                        <h4 className="f1-19 mt-0 mb-3 mt-2" style={{color:'#003866'}}>Skill Building Results</h4>
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
                        <h4 className="f1-16 text-center">Chapter wise Score</h4>
                        <div className="text-start mb-3">
                            <h4 className="f1-17" style={{color:'#003866'}}>Chapter wise Score</h4>
                            <Row>
                                <Col className="p-0" style={{color:'#003866'}}>
                                    <Col className="flex-sb" xs={6} md={4}>
                                        <Col className="p-0 f1-16">Chapter 1</Col>
                                        <Col  className="p-0 f1-16">: 80/100</Col>                                   
                                    </Col>
                                    <Col className="flex-sb" xs={6} md={4}>
                                        <Col className="p-0 f1-16">Chapter 1</Col>
                                        <Col  className="p-0 f1-16">: 80/100</Col>                                   
                                    </Col>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                    <Col md={3} lg={3}  >{/*className="mt-2 skill-smry" */}
                        <Card  >
                            {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                            <Card.Body className="mb-3 mt-2 base-card-report text-center" 
                            style={{ width: '285px' }}>{/*className="skil-sum-tit mb-2 mt-3" */}
                                <Card.Title className="skil-sum-tit mb-2 mt-3"
                                >Result Summary</Card.Title>
                                {/* <h5 className="skil-sum-tit mb-2 mt-3">Result Summary</h5>  */}
                                {/* <h4 className="skil-sum-baslin">Baseline</h4>  */}
                                <Row>{/*class="flex-spc-btw" className="skil-sum-p"*/}
                                    <Col className="skil-sum-text text-start mt-2">Test Name </Col>
                                    <Col className="skil-sum-text mt-2"> :  subject 1 </Col>                            
                                </Row>
                                <Row>
                                    <Col className="skil-sum-text text-start">Role</Col> 
                                    <Col className="skil-sum-text">: UI/UX</Col> 
                                </Row>
                                <Row>
                                    <Col className="skil-sum-text text-start">Date</Col> 
                                    <Col className="skil-sum-text ">: 12 May 2021</Col> 
                                </Row>
                                <Row>
                                    <Col className="skil-sum-text">Overall Score</Col> 
                                    <Col className="skil-sum-text">: 80/100</Col> 
                                </Row>
                                {/* <Link className="anal-btn">Analysis Result</Link> */}
                                {/*                         
                                <h4 className="skil-sum-baslin mt-4">Certification</h4>  */}
                                <Row>
                                    <Col className="skil-sum-text" >Avg Peer Score</Col> 
                                    <Col className="skil-sum-text">: 70/100</Col> 
                                </Row>
                                {/* <Row>
                                    <Col className="skil-sum-text">Rank</Col> 
                                    <Col className="skil-sum-text">: 15/45</Col> 
                                </Row> */}
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
                            </Card.Body>
                        </Card>                        
                    </Col>
                </Row>

                    {/* <div className="mt-2 skill-smry">
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
                </div> */}
            </Col>
        </div>
    )
}

export default SkillBuildingResultDetails
