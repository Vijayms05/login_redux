import React, {useState} from 'react'
import {  Container, Col, Row, Form, Card, ProgressBar, Table, Tab, Tabs, Accordion } from 'react-bootstrap'
import Button from '@restart/ui/esm/Button'

const Certification = () =>{
    return(
        
        <Col>
            <h6>Test Name</h6>
            <div className="in-box-tab">
                    <p>UI - UX Baseline</p>
                <div className="in-box-tab me-2">
                    <Button>Task Test</Button>
                    <div className="test-dot-tabl"></div>
                </div>
            </div>
        </Col>
    )
}

export default Certification;