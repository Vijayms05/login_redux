import React, {useState} from 'react'

import {  Container, Col, Row, Form, Card, ProgressBar, Table, Tab, Tabs, Accordion } from 'react-bootstrap'
import Button from '@restart/ui/esm/Button'
import { Link } from 'react-router-dom'

const SkillBuilding = () =>{
    return(
        <div className="tit-cert-box">
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
                                    <td className="in-box-table"> 
                                        <Link to="/testintro">Task Test</Link>
                                        <Col>
                                            <div className="test-dot-tabl"></div>
                                        </Col>
                                    </td>     
                                </tr><tr>
                                    <td>dsfsd</td>
                                    <td>View Design</td>
                                    <td>Proto Typing</td>
                                    <td>Smart Animate</td>
                                    <td className="in-box-table"> 
                                        <Link to="/testintro">Task Test</Link>
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
                                    <td className="in-box-table"> 
                                        <Button>Task Test</Button>
                                        <Col>
                                            <div className="test-dot-tabl"></div>
                                        </Col>
                                    </td>     
                                </tr><tr>
                                    <td></td>
                                    <td>View Design</td>
                                    <td>Proto Typing</td>
                                    <td>Smart Animate</td>
                                    <td className="in-box-table"> 
                                        <Button>Task Test</Button>
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
    )
}

export default SkillBuilding;