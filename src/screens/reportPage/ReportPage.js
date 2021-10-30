import React, {useState} from 'react'
import { history } from '../../component/routes/Routes'
import {  Container, Col, Row, Form, Card, ProgressBar, Table } from 'react-bootstrap'
import Button from '@restart/ui/esm/Button'
import { SearchIcon } from '../../assets/images'

const ReportPage = () =>{
    const [ show, setShow] = useState(false)
    const Cardclick = () => {            
       history.push('/mysubscription')        
         console.log("button clicked")          
    }
    return(
        <Col className="py-md-4">
            <Row className="mb-4 mt-4">
                <Col xs={6} md={6} lg={8}>   
                    <Form.Group  className="w-100 search-box">
                        <Button className="searchrole">
                            <SearchIcon />
                        </Button>
                        <Form.Control type="text"  placeholder="Search..." size="md" className="search-input" />
                    </Form.Group>                
                </Col>
                <Col xs={6} md={6} lg={4} >
                    <Form.Select className="select-form" size="lg" >
                        <option>Large select</option>
                        <option>Large select</option>
                        <option>Large select</option>
                    </Form.Select>
                </Col>
            </Row>   
           <Row>
                <Col>
                    <h5 className="report-h5">Reports</h5>
                    <Table  className="mt-2 table-name">
                        <thead>
                            <tr className="tr-name">
                                <th>My Subscriptions</th>
                                <th>Journey Status</th>
                                <th>Baseline Details</th>
                                <th>Skill Building Score</th>
                                <th>Certification Details</th>
                                <th colSpan="2">Current Rank</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>B Tech 3rd Year</td>
                                <td><a className="cert-btn">Certified</a></td>
                                <td><a style={{backgroundColor:'#298EE0',color:'white'}} className="btn" >Detailed view</a></td>

                                <td><a style={{backgroundColor:'#298EE0',color:'white'}} className="btn">Detailed view</a></td>
                                <td><a style={{backgroundColor:'#298EE0',color:'white'}} className="btn">Detailed view</a></td>
                                <td style={{color:'#298EE0'}} >
                                    <Row>
                                        <Col><a className="rate-btn">15/60</a></Col>
                                        <Col>
                                            <div className="dot-tabl"></div>
                                        </Col>
                                    </Row>
                                </td>                               
                            </tr>
                             <tr>
                                <td>B Tech 3rd Year</td>
                                <td><a className="cert-btn">Certified</a></td>
                                <td><a style={{backgroundColor:'#298EE0',color:'white'}} className="btn" >Detailed view</a></td>

                                <td><a style={{backgroundColor:'#298EE0',color:'white'}} className="btn">Detailed view</a></td>
                                <td><a style={{backgroundColor:'#298EE0',color:'white'}} className="btn">Detailed view</a></td>
                                <td style={{color:'#298EE0'}} >
                                    <Row>
                                        <Col><a className="rate-btn">15/60</a></Col>
                                        <Col>
                                            <div className="dot-tabl"></div>
                                        </Col>
                                    </Row>
                                </td>                               
                            </tr>
                        </tbody>
                    </Table>
                </Col>
           </Row>                 
        </Col>
    );
}

export default ReportPage;