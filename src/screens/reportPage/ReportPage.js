import React, {useState} from 'react'
import { history } from '../../routes/Routes'
import {  Container, Col, Row, Form, Card, ProgressBar, Table } from 'react-bootstrap'
import Button from '@restart/ui/esm/Button'
import { SearchIcon } from '../../assets/images'
import { Link } from 'react-router-dom'

const ReportPage = () =>{
    const [ show, setShow] = useState(false)
    const Cardclick = () => {            
       history.push('/mysubscription')        
         console.log("button clicked")          
    }
    return(
        <div className="py-md-0 mt-md-3 rt-tb-report ms-2">  
            <Row>
                <Col xs={6} md={6} lg={8} className="mt-3">   
                    <Form.Group  className="w-100 search-box">
                        <Button className="searchrole">
                            <SearchIcon />
                        </Button>
                        <Form.Control type="text"  placeholder="Search My Subscriptions" size="md" className="search-input" />
                    </Form.Group>                
                </Col>
                <Col xs={6} md={6} lg={4} className="mt-3" >
                    <Form.Select className="select-form" size="lg" style={{width:'250px'}} >
                        <option>Filters</option>
                        <option>Large select</option>
                        <option>Large select</option>
                    </Form.Select>
                </Col>  
            </Row>  
                <div className="ps-3 mt-5">
                    <h5 className="report-h5 ">Reports</h5>
                </div>
                <div className="px-3 pb-0 m-auto mt-3 "style={{width:'920px'}} >
                    <div className="table-box">{/*  table-name-rep tbl-bx-rpt*/}
                        <Table  className="mt-2  mb-0 table-name table table-border">
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
                                    <td>{/*cert-btn */}
                                        <Link className="btn btn-outline-primary" style={{width:'80px'}}>
                                            Certified
                                        </Link>
                                    </td>
                                    <td className="rep-btn-ln">
                                        <Link to="/basline" 
                                            style={{backgroundColor:'#298EE0',color:'white',width: '110px',
                                            height: '32px',borderRadius:'10px',textAlign:'center'}} 
                                            className="btn" 
                                        >Detailed view</Link></td>

                                    <td className="rep-btn-ln">
                                        <Link to="/skill-building-list" style={{backgroundColor:'#298EE0',color:'white',width: '110px',
                                            height: '32px',borderRadius:'10px',textAlign:'center'}} className="btn"
                                        >Detailed view</Link>
                                    </td>
                                    <td className="rep-btn-ln">
                                        <Link to="/certificate-result" style={{backgroundColor:'#298EE0',color:'white',width: '110px',
                                            height: '32px',borderRadius:'10px'}} className="btn"
                                        >Detailed view</Link>
                                    </td>
                                    <td style={{color:'#298EE0'}} >
                                        <Row>
                                            <Col><Link className="rate-btn">15/60</Link></Col>
                                            <Col style={{marginTop: '22px'}}>
                                                <div className="dot-tabl"></div>
                                            </Col>
                                        </Row>
                                    </td>                               
                                </tr>
                                <tr>
                                    <td>B Tech 3rd Year</td>
                                    <td>{/*cert-btn */}
                                        <Link className="btn btn-outline-primary" style={{width:'80px'}}>
                                            Certified
                                        </Link>
                                    </td>
                                    <td className="rep-btn-ln">
                                        <Link to="/basline" 
                                            style={{backgroundColor:'#298EE0',color:'white',width: '110px',
                                            height: '32px',borderRadius:'10px',textAlign:'center'}} 
                                            className="btn" 
                                        >Detailed view</Link></td>

                                    <td className="rep-btn-ln">
                                        <Link to="/skill-building-list" style={{backgroundColor:'#298EE0',color:'white',width: '110px',
                                            height: '32px',borderRadius:'10px',textAlign:'center'}} className="btn"
                                        >Detailed view</Link>
                                    </td>
                                    <td className="rep-btn-ln">
                                        <Link to="/certificate-result" style={{backgroundColor:'#298EE0',color:'white',width: '110px',
                                            height: '32px',borderRadius:'10px'}} className="btn"
                                        >Detailed view</Link>
                                    </td>
                                    <td style={{color:'#298EE0'}} >
                                        <Row>
                                            <Col><Link className="rate-btn">15/60</Link></Col>
                                            <Col style={{marginTop: '22px'}}>
                                                <div className="dot-tabl"></div>
                                            </Col>
                                        </Row>
                                    </td>                               
                                </tr>
                            </tbody>
                        </Table>
                    </div>        
                </div>        
        </div>
    );
}

export default ReportPage;