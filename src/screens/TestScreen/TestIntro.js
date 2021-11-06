import React, {useState} from 'react'
import {  Container, Col, Row, Form, Card, ProgressBar, Table, Tab, Tabs } from 'react-bootstrap'
import Button from '@restart/ui/esm/Button'
import { Link } from 'react-router-dom'

const TestIntro = () =>{
    return(
        <Col className="testIntro pt-3">
            <h3 className="heading-test text-center mb-3">Test Instructions</h3>
            <Row>
                <Col className="text-sm-start">
                    <h5 className="head-tit">Test Name: Test1</h5>
                    <h5 className="head-tit">Subject: Subject1</h5>
                    <h5 className="head-tit">Role: UI/UX</h5>
                </Col>
                <Col className="text-sm-end">                    
                    <h5 className="head-tit">No of Questions: 20</h5>
                    <h5 className="head-tit">Total Score: 100</h5>
                    <h5 className="head-tit">Total Time: 180 Minutes</h5>
                </Col>
            </Row>
            <Col className="parag-test">
                <p>lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
            </Col>
            <Row >
                <Col className="text-sm-start">
                    <Button className="btn-ext">
                        Exit
                    </Button>
                </Col>
                <Link to="/question-page" className="btn-start">
                    Start Test
                </Link>
            </Row>
        </Col>
    )
}

export default TestIntro;