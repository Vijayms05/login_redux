
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

import './style.css';
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
                <Row>
                    <Col md={9} className="p-md-0">
                        <Link className="back-a" to="/home"><LeftArrow /> {""} Back to Results </Link>
                        <h4 className="f1-19 mt-0 mb-3" style={{color:'#003866'}}>Baseline Results</h4>
                        <div className="tl-br-cht">
                            <BarChart className="bar-chart"
                                width={750}
                                height={300}
                                data={data}
                            >
                                <CartesianGrid strokeDasharray="0" />
                                <XAxis dataKey="name" />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                <Bar dataKey="uv" fill="#298EE0" barSize={80}/>
                            </BarChart> 
                        </div> 
                        <h4 className="f1-16 text-center">Subject wise Score</h4>
                        <div className="text-start mb-3">
                            <h4 className="f1-17" style={{color:'#003866'}}>Subject wise Score</h4>
                            <Row>
                                <Col className="p-0" style={{color:'#003866'}}>
                                    <Col className="flex-sb" xs={6} md={4}>
                                        <Col className="p-0 f1-16">Subject 1</Col><Col >: 80/100</Col>                                   
                                    </Col>
                                    <Col className="flex-sb" xs={6} md={4}>
                                        <Col className="p-0">Subject 1</Col><Col >: 80/100</Col>                                   
                                    </Col>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                    {/* <Col md={3}>
                        <Card >
                            <Card.Body  className=" baselinereport-card mb-3 ">
                                <Card.Title className="baselinereport-title mt-1 mb-3">
                                    Result Summary
                                </Card.Title>
                                <Card.Text className="baselinereport-text mb-3">                                    
                                    <Row>
                                        <Col className="mb-1">
                                            Test Name
                                        </Col>
                                        <Col className="mb-1">
                                            :{' '}Baseline
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col className="mb-1">
                                            Role
                                        </Col>
                                        <Col className="mb-1">
                                            :{' '}UI/UX
                                        </Col>
                                    </Row>
                                    <Row >
                                        <Col className="mb-1">
                                            Date
                                        </Col>
                                        <Col className="mb-1">
                                            :{' '}12 May 2021
                                        </Col>
                                    </Row>
                                    <Row >
                                        <Col className="mb-1">
                                            Overall Score
                                        </Col>
                                        <Col className="mb-1">
                                            :{' '}80/100
                                        </Col>
                                    </Row>
                                    <Row >
                                        <Col className="mb-1">
                                            Avg Peer Score
                                        </Col>
                                        <Col className="mb-1">
                                            :{' '}70/100
                                        </Col>
                                    </Row>
                                    <Row >
                                        <Col className="mb-1">
                                            Rank
                                        </Col>
                                        <Col className="mb-1">
                                            :{' '}15/45
                                        </Col>
                                    </Row>  
                                </Card.Text>
                                <p className="mb-2  baselinereport-view">View Answers</p>
                                <Button className="baselinereport-view-btn mb-4">
                                    View
                                </Button>
                                <p className="mb-2  baselinereport-view">Actions</p>
                                <Button className="baselinereport-view-btn mb-2">
                                    <ShareIcon /> Share
                                </Button>
                                <Button className="baselinereport-view-btn mb-2">
                                    <PrintIcon /> Print
                                </Button>
                                <Button className="baselinereport-view-btn mb-2">
                                    <FeedbackIcon /> Feedback
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col> */}
                </Row>
            </Col>
        </div>
    )
}

export default BaselineReport
