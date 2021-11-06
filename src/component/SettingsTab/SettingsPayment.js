import React, {useState} from 'react'
import {  Container, Col, Row, Form, Card, ProgressBar, Table, Tab, Tabs } from 'react-bootstrap'
import Button from '@restart/ui/esm/Button'
import { Link } from 'react-router-dom'

const SettingsPayment = () =>{
    return(
        <Col lg="6" xl="5" sm="8"> 
           
            <Form.Group className="mb-4 mt-3 login-inputGroup" controlId="formBasicEmail">
                <Form.Control 
                className="student-inputField" 
                type="email" 
                placeholder="Name"
                />
            </Form.Group>  
            <Form.Group className="mb-4 mt-3 login-inputGroup" controlId="formBasicEmail">
                <Form.Control 
                className="student-inputField" 
                type="email" 
                placeholder="Card Name"
                />
            </Form.Group>
            <Form.Group className="mb-4 mt-3 login-inputGroup" controlId="formBasicEmail">
                <Form.Control 
                className="student-inputField" 
                type="email" 
                placeholder="CVV"
                />
            </Form.Group>
        </Col>
    )
}

export default SettingsPayment;