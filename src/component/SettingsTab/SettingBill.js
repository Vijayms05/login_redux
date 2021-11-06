import React, {useState} from 'react'
import {  Container, Col, Row, Form, Card, ProgressBar, Table, Tab, Tabs } from 'react-bootstrap'
import Button from '@restart/ui/esm/Button'
import { Link } from 'react-router-dom'

const SettingBill = () =>{
    return(
        <Col lg="6" xl="5" sm="8"> 
            <Form.Select className="form-select mb-3 mt-3 schoolstudent-select" aria-label="Default select example">
                <option selected>Country</option>
                <option value="1">India</option>
                <option value="2">USA</option>
                <option value="3">UAE</option>
            </Form.Select>   
            <Form.Group className="mb-4 mt-3 login-inputGroup" controlId="formBasicEmail">
                <Form.Control 
                className="student-inputField" 
                type="email" 
                placeholder="Address Line 1"
                />
            </Form.Group>  
            <Form.Group className="mb-4 mt-3 login-inputGroup" controlId="formBasicEmail">
                <Form.Control 
                className="student-inputField" 
                type="email" 
                placeholder="Address Line 2"
                />
            </Form.Group>  
            <Form.Select className="form-select mb-3 schoolstudent-select" aria-label="Default select example">
                <option selected>State</option>
                <option value="1">Tamilnadu</option>
                <option value="2">Bangalore</option>
                <option value="3">Assam</option>
            </Form.Select> 
            <Form.Select className="form-select mb-3 schoolstudent-select" aria-label="Default select example">
                <option selected>District</option>
                <option value="1">Chennai</option>
                <option value="2">Madurai</option>
                <option value="3">Trichy</option>
            </Form.Select> 
        </Col>
    )
}

export default SettingBill;