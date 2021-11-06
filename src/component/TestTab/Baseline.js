import React, {useState} from 'react'
import {  Container, Col, Row, Form, Card, ProgressBar, Table, Tab, Tabs } from 'react-bootstrap'
import Button from '@restart/ui/esm/Button'
import { Link } from 'react-router-dom'

const Baseline = () =>{
    return(
        <Col>
            <h6>Test Name</h6>
            <div className="in-box-tab py-1">
                <p>UI - UX Baseline</p>
                <div className="in-box-tab me-2">
                    <Link to="/testintro">Task Test</Link>
                    <div className="test-dot-tabl"></div>
                </div>
            </div>
        </Col>
    )
}

export default Baseline;