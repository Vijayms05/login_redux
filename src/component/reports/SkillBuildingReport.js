
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


function SkillBuildingReport() {
    return (
        <Container fluid>
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
                <Row className="mt-1">
                    <Col md={9}>                       
                        <div className="mb-3 ms-4 mt-4 ">
                            <h4 className="text-start" style={{color:'#003866'}}>Skill Building Results</h4>
                        </div>              
                        <Col className="mb-3 ">
                            <BarChart
                                width={825}
                                height={325}
                                data={data}
                                margin={{
                                    top: 5,
                                    right: 30,
                                    left: 20,
                                    bottom: 5,
                                }}
                            >
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="name" />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                <Bar dataKey="uv" fill="#298EE0" barSize={40}/>
                            </BarChart>  
                            <div className="text-center mb-3">
                                <h4 className="fs-5 fw-bold">Chapter wise Score</h4>
                            </div>
                            <div className="text-start mb-3">
                                <h4 className="fs-5 fw-bold" style={{color:'#003866'}}>Chapter wise Score</h4>
                                <Row>
                                    <Col style={{color:'#003866',fontWeight:'bold'}}>
                                        <Row>
                                            <Col sm={4}>Chapter 1</Col><Col >: 80/100</Col>
                                                                           
                                        </Row>   
                                        <Row>
                                            <Col sm={4} >Chapter 2</Col><Col >: 80/100</Col>                                                                            
                                        </Row>                                       
                                        <Row>
                                            <Col sm={4} >Chapter 3</Col><Col >: 80/100</Col>   
                                        </Row>
                                        <Row>                                           
                                            <Col sm={4} >Chapter 4</Col><Col >: 80/100</Col>                                                                         
                                        </Row>
                                        <Row>                                           
                                            <Col sm={4} >Chapter 5</Col><Col >: 80/100</Col>                                                                         
                                        </Row>
                                        <Row>                                           
                                            <Col sm={4} >Chapter 1</Col><Col >: 80/100</Col>                                                                         
                                        </Row>

                                    </Col>
                                </Row>
                            </div>
                        </Col>
                    </Col>
                    <Col md={3}>
                        <Card >
                            {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
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
                                <p className="mb-3  baselinereport-view">View Answers</p>
                                <Button className="baselinereport-view-btn mb-4">
                                    View
                                </Button>
                                <p className="mb-3  baselinereport-view">Actions</p>
                                <Button className="baselinereport-view-btn mb-3">
                                    <ShareIcon /> Share
                                </Button>
                                <Button className="baselinereport-view-btn mb-3">
                                    <PrintIcon /> Print
                                </Button>
                                <Button className="baselinereport-view-btn mb-3">
                                    <FeedbackIcon /> Feedback
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Col>
        </Container>
    )
}

export default SkillBuildingReport
