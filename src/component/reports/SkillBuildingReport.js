import React, {useState} from 'react'

import {  Container, Col, Row, Form, Card, ProgressBar, Table, Tab, Tabs, Accordion } from 'react-bootstrap'
import Button from '@restart/ui/esm/Button'
import { Link } from 'react-router-dom'
import { SearchIcon } from '../../assets/images'

const SkillBuildingReport = () =>{
    return(
        <div className="py-md-4 mt-5 mt-md-0 bill-rit">
        <Row>
            <Col xs={6} md={6} lg={8}>   
                <Form.Group  className="w-100 search-box">
                    <Button className="searchrole">
                        <SearchIcon />
                    </Button>
                    <Form.Control type="text"  placeholder="Search My Subscriptions" size="md" className="search-input" />
                </Form.Group>                
            </Col>
            <Col xs={6} md={6} lg={4} >
                <Form.Select className="select-form" size="lg" style={{width:'250px'}}>
                    <option>Large select</option>
                    <option>Large select</option>
                    <option>Large select</option>
                </Form.Select>
            </Col>
        </Row>  
                <p className="f1-17 mt-3 p-0 mb-0 dark-blue" >Search Building Reports</p>
            <div className="tit-cert-box skl-rpt-bx-tb">
                <Table>
                    <thead>
                        <tr>
                        <th>Subject Name</th>
                        <th>Test Name</th>
                        <th>Chapter</th>
                        <th>Topic</th>
                        <th></th>
                        </tr>
                    </thead>
                </Table>
                <Accordion defaultActiveKey="0" className="txt-tbl-acrd">
                    <Accordion.Item eventKey="0" className="ac-itm">
                        <Accordion.Header className="acc-h1">View Design</Accordion.Header>
                        <Accordion.Body className="p-0">
                            <Table>                                
                                <tbody>
                                    <tr>
                                        <td>sdfsdf</td>
                                        <td>View Design</td>
                                        <td>Proto Typing</td>
                                        <td>Smart Animate</td>
                                        <td className="in-box-table  skill-in-box-table"> 
                                            <Link to="/skill-building-result">Analyze Result</Link>
                                            <Col>
                                                <div className="test-dot-tabl"></div>
                                            </Col>
                                        </td>     
                                    </tr><tr>
                                        <td>dsfsd</td>
                                        <td>View Design</td>
                                        <td>Proto Typing</td>
                                        <td>Smart Animate</td>
                                        <td className="in-box-table  skill-in-box-table"> 
                                            <Link to="/skill-building-result">Analyze Result</Link>
                                            <Col>
                                                <div className="test-dot-tabl"></div>
                                            </Col>
                                        </td>     
                                    </tr>
                                </tbody>
                            </Table>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>Accordion Item #2</Accordion.Header>
                        <Accordion.Body>
                            <Table>                                
                                <tbody>
                                    <tr>
                                        <td></td>
                                        <td>View Design</td>
                                        <td>Proto Typing</td>
                                        <td>Smart Animate</td>
                                        <td className="in-box-table  skill-in-box-table"> 
                                            <Link to="/skill-building-result">Analyze Result</Link>
                                            <Col>
                                                <div className="test-dot-tabl"></div>
                                            </Col>
                                        </td>     
                                    </tr><tr>
                                        <td></td>
                                        <td>View Design</td>
                                        <td>Proto Typing</td>
                                        <td>Smart Animate</td>
                                        <td className="in-box-table  skill-in-box-table"> 
                                            <Link to="/skill-building-result">Analyze Result</Link>
                                            <Col>
                                                <div className="test-dot-tabl"></div>
                                            </Col>
                                        </td>     
                                    </tr>
                                </tbody>
                            </Table>
                        </Accordion.Body>
                    </Accordion.Item>
                    </Accordion>
            </div>
        </div>
    )
}

export default SkillBuildingReport;