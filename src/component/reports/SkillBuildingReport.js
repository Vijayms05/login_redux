import React, {useState} from 'react'

import {  Container, Col, Row, Form, Card, ProgressBar, Table, Tab, Tabs, Accordion } from 'react-bootstrap'
import Button from '@restart/ui/esm/Button'
import { Link } from 'react-router-dom'
import { SearchIcon } from '../../assets/images'

const SkillBuildingReport = () =>{
    return(
        <div className="py-md-2 mt-3 mt-md-0 bill-rit">
            <Row className="mt-3 mt-md-3 pt-3 pt-md-0">
                <Col xs={12} md={6} lg={8} className="mb-3">   
                    <Form.Group  className="search-box">
                        <Button className="searchrole">
                            <SearchIcon />
                        </Button>
                        <Form.Control type="text"  placeholder="Search My Subscriptions" size="md" className="search-input" />
                    </Form.Group>                
                </Col>
                <Col xs={12} md={6} lg={4} className="mb-3">
                    <Form.Select className="select-form" size="lg" >
                        <option>Filters</option>
                        <option>Large select</option>
                        <option>Large select</option>
                    </Form.Select>
                </Col>  
            </Row> 
        
            <p className="f1-17 p-0 dark-blue my-4" >Search Building Reports</p>
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
                                        <td className="in-box-table   skill-in-box-table"> 
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