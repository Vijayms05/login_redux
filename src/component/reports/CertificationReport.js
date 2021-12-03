
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

const  CertificationReport = (props) => {
    return (
        <div className="py-md-4 mt-5 mt-md-0 bill-rit">
            <Col md={12} xs={12} className="baselinereport">              
                <Row className="mt-5 mt-md-3 pt-5 pt-md-0">
                    <Col xs={12} sm={6} md={6} className="my-2">   
                        <Form.Group  className="w-70 search-box">
                            <Button className="searchrole">
                                <SearchIcon />
                            </Button>
                            <Form.Control type="text"  placeholder="Search My Subscriptions" size="md" className="search-input" />
                        </Form.Group>                
                    </Col>
                    <Col xs={12} sm={6} md={6} className="my-2">
                        <Form.Select className="select-form" size="lg" >
                            <option>Filters</option>
                            <option>Large select</option>
                            <option>Large select</option>
                        </Form.Select>
                    </Col>  
                </Row>                
                <Row className="justify-content-md-center justify-content-sm-center">{/*className="d-lg-flex" */}
                    <Col xs={12} sm={12} md={12} lg={10} xl={8}>{/*className="p-md-0 in-bs-ln" */}
                        {/* <Link className="back-a mt-4" to="/home"><LeftArrow /> {""} Back to Results </Link> */}
                        <h4 className="f1-19 mt-0 mb-3 mt-3" style={{color:'#003866'}}>Certification Results</h4>
                        <div className="tl-br-cht mt-3 mb-2">
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
                        <h4 className="f1-16 text-center mb-3">Subject wise Score</h4>
                        <div className="text-start mb-3 mt-5">
                            <h4 className="f1-17 my-3" style={{color:'#003866'}}>Subject wise Score</h4>
                            <Row className="justify-content-center justify-content-md-start">                                
                                <Col className="flex-sb p-0" xs={12} md={6} style={{color:'#003866'}}>
                                    <Col className="p-0 f1-16">Subject 1</Col>
                                    <Col  className="p-0 f1-16">: 80/100</Col>                                   
                                </Col>
                                <Col className="flex-sb" xs={12} md={6} style={{color:'#003866'}}>
                                    <Col className="p-0 f1-16">Subject 1</Col>
                                    <Col  className="p-0 f1-16">: 80/100</Col>                                   
                                </Col>
                                <Col className="flex-sb p-0" xs={12} md={6} style={{color:'#003866'}}>
                                    <Col className="p-0 f1-16">Subject 1</Col>
                                    <Col  className="p-0 f1-16">: 80/100</Col>                                   
                                </Col>
                            </Row>
                            <Row>                                
                                <Col className="flex-sb p-0" xs={12} md={6} style={{color:'#003866'}}>
                                    <Col className="p-0 f1-16">Subject 1</Col>
                                    <Col  className="p-0 f1-16">: 80/100</Col>                                   
                                </Col>
                                <Col className="flex-sb" xs={12} md={6} style={{color:'#003866'}}>
                                    <Col className="p-0 f1-16">Subject 1</Col>
                                    <Col  className="p-0 f1-16">: 80/100</Col>                                   
                                </Col>
                                <Col className="flex-sb p-0" xs={12} md={6} style={{color:'#003866'}}>
                                    <Col className="p-0 f1-16">Subject 1</Col>
                                    <Col  className="p-0 f1-16">: 80/100</Col>                                   
                                </Col>
                            </Row>
                        </div>
                    </Col>
                    <Col xs={12} sm={10} md={10} lg={6} xl={4} >{/*className="mt-2 skill-smry" */}
                        <Card className="mb-3 mt-2  base-card-report text-center">
                            {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                            <Card.Body>{/*className="skil-sum-tit mb-2 mt-3" */}
                                <Card.Title className="skil-sum-tit my-4"
                                >Result Summary</Card.Title>
                                {/* <h5 className="skil-sum-tit mb-2 mt-3">Result Summary</h5>  */}
                                {/* <h4 className="skil-sum-baslin">Baseline</h4>  */}
                                <Row>{/*class="flex-spc-btw" className="skil-sum-p"*/}
                                    <Col className="skil-sum-text text-start">Test Name </Col>
                                    <Col className="skil-sum-text"> : Baseline </Col>                            
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
                                <Row>
                                    <Col className="skil-sum-text">Rank</Col> 
                                    <Col className="skil-sum-text">: 15/45</Col> 
                                </Row>
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
            </Col>
        </div>
    )
}

export default CertificationReport
