import React, {useState} from 'react'
import {  Container, Col, Row, Form, Card, ProgressBar, Table } from 'react-bootstrap'
import Button from '@restart/ui/esm/Button'
import { SearchIcon } from '../../../assets/images'
import { Link } from 'react-router-dom'

const BillingPage = () =>{
    return(
        <div className="py-md-4 bill-rit">
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
            <div className="m-auto">
            <Row> 
                <h5 className="report-h5">Billings</h5>  
           </Row>
           <div className="row-table">
                <Table  className="mt-2 table-name">
                    <thead>
                        <tr className="tr-name">
                            <th>Role/Book-Q</th>
                            <th>Plan</th>
                            <th>Subscription Period</th>
                            <th>Subscription Cost</th>
                            <th>Journey Status</th>
                            <th colSpan="2">Invoice</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><a className="degree-a" href="/billings-details">B Tech 3rd Year</a></td>
                            <td>Paid</td>
                            <td>90Days</td>
                            <td>Rs.365</td>
                            <td><Link to="" className="cert-btn">Certified</Link></td>
                            <td style={{color:'#298EE0'}} >
                                <div className="d-flex align-items-center">
                                    <Button className="down-load-btn">Download Invoice</Button>
                                        <div className="dot-tabl"></div>
                                </div>
                            </td>                               
                        </tr>                           
                    </tbody>
                </Table>  
            </div>
            </div>
        </div>
    );
}

export default BillingPage;