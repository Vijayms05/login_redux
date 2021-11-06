import React from 'react';

import {Container, Row, Col, Card, Button} from 'react-bootstrap';
import arrowLeft from '../../../images/arrowLeft.png'
import shareIcon from '../../../images/shareIcon.png'
import printIcon from '../../../images/print.png'
import feedbackIcon from '../../../images/feedback.png'


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
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

function BaselineReport() {
    return (
        <Container fluid>
            <Row className="gx-2">
                <Col lg={9} >
                    <div className="mb-3 mt-4 mx-3 text-start">
                        <a style={{color:'#003866'}} href="/reports"><img src={arrowLeft} alt="left arrow icon" />{" "} Back to Results</a>
                    </div>
                    <div className="mb-3 mx-5 ">
                        <h4 className="text-start" style={{color:'#003866'}}>Baseline Results</h4>
                    </div>
                    <div className="mb-3 mx-5">
                    
                        <BarChart
                            width={1000}
                            height={500}
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
                            <Bar dataKey="uv" fill="#298EE0" barSize={50}/>
                        </BarChart>
                    </div>
                    <div className="text-center mb-3">
                        <h4 className="fs-5 fw-bold">Subject wise Score</h4>
                    </div>
                    <div className="text-start mb-3 mx-5">
                        <h4 className="fs-5 fw-bold" style={{color:'#003866'}}>Subject wise Score</h4>
                        <Row>
                            <Col style={{color:'#003866',fontWeight:'bold'}}>
                                <Row>
                                    <Col >Subject 1</Col><Col >: 80/100</Col>
                                    <Col >Subject 1</Col><Col >: 80/100</Col>
                                    <Col >Subject 1</Col><Col >: 80/100</Col>                                    
                                </Row>  
                                <Row>
                                    <Col >Subject 1</Col><Col >: 80/100</Col>
                                    <Col >Subject 1</Col><Col >: 80/100</Col>
                                    <Col >Subject 1</Col><Col >: 80/100</Col>                                    
                                </Row>  
                                <Row>
                                    <Col >Subject 1</Col><Col >: 80/100</Col>
                                    <Col >Subject 1</Col><Col >: 80/100</Col>
                                    <Col >Subject 1</Col><Col >: 80/100</Col>                                    
                                </Row>                            
                                <Row>
                                    <Col >Subject 1</Col><Col >: 80/100</Col>
                                    <Col >Subject 1</Col><Col >: 80/100</Col>
                                    <Col >Subject 1</Col><Col >: 80/100</Col>                                    
                                </Row>
                            </Col>
                        </Row>
                    </div>
                </Col>
                <Col lg={3}>
                    <Card style={{ width: '23rem' }} className="mb-3 my-3 mt-5">
                        {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                        <Card.Body>
                            <Card.Title style={{color:'#003866'}} className="mt-3 mb-3 text-center">Result Summary</Card.Title>
                            <Card.Text className="mb-3 text-center">
                                <Row style={{color:'#003866', padding:'10px', fontWeight:'bold'}}>
                                    <Col className="px-4">Test Name</Col><Col>: Baseline</Col>
                                </Row>
                                <Row style={{color:'#003866', padding:'10px', fontWeight:'bold'}}>
                                    <Col className="px-4">Role</Col><Col>: UI/UX</Col>
                                </Row>
                                <Row style={{color:'#003866', padding:'10px', fontWeight:'bold'}}>
                                    <Col className="px-4">Date</Col><Col>: 12 May 2021</Col>
                                </Row>
                                <Row style={{color:'#003866', padding:'10px', fontWeight:'bold'}}>
                                    <Col className="px-4">Overall Score</Col><Col>: 80/100</Col>
                                </Row>
                                <Row style={{color:'#003866', padding:'10px', fontWeight:'bold'}}>
                                    <Col className="px-4">Avg Peer Score</Col><Col>: 70/100</Col>
                                </Row>
                                <Row style={{color:'#003866', padding:'10px', fontWeight:'bold'}}>
                                    <Col className="px-4">Rank</Col><Col>: 15/45</Col>
                                </Row>  
                            </Card.Text>
                            <div className="mb-3 text-center" style={{color:'#003866'}}>View Answers</div>
                            <div className="mb-5 text-center">
                                <button className="btn w-50 " style={{backgroundColor:'#40A9FF', color:'white'}}>View</button>
                            </div>
                            <div className="mb-3 text-center" style={{color:'#003866'}}>
                                Actions
                            </div>
                            <div className="mb-3 text-center" style={{color:'#003866'}}>
                                <button className="btn w-50 " style={{backgroundColor:'#40A9FF', color:'white'}}>
                                    <img src={shareIcon} className="px-2" alt="share icon" /> Share
                                </button>
                            </div>
                            <div className="mb-3 text-center" style={{color:'#003866'}}>
                                <button className="btn w-50 " style={{backgroundColor:'#40A9FF', color:'white'}}>
                                    <img src={printIcon} className="px-2" alt="share icon" /> Print
                                </button>
                            </div>
                            <div className="mb-3 text-center" style={{color:'#003866'}}>
                                <button className="btn w-50 " style={{backgroundColor:'#40A9FF', color:'white'}}>
                                    <img src={feedbackIcon} className="px-2" alt="share icon" />Feedback
                                </button>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default BaselineReport
