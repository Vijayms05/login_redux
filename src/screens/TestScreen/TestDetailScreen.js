import React, {useState} from 'react'
import {  Container, Col, Row, Form, Card, ProgressBar, Table, Tab, Tabs } from 'react-bootstrap'
import Button from '@restart/ui/esm/Button'
import { SearchIcon, } from '../../assets/images/index'
import Baseline from '../../component/TestTab/Baseline'
import SkillBuilding from '../../component/TestTab/SkillBuilding'
import Certification from '../../component/TestTab/Certification'

const TestDetailScreen = () =>{
    return(
        <div className="py-md-4 mt-5 mt-md-0 bill-rit m-auto">
            <Row className="mb-4 mt-4">
                <Col xs={6} md={6} lg={8} className="ps-0">   
                    <Form.Group  className="w-100 search-box">
                        <Button className="searchrole">
                            <SearchIcon />
                        </Button>
                        <Form.Control type="text"  placeholder="Search Test Name" size="md" className="search-input" />
                    </Form.Group>                
                </Col>
                <Col xs={6} md={6} lg={4}  className="pe-0">
                    <Form.Select className="select-form" size="lg" >
                        <option selected>Filter</option>
                        <option value="1">Large select</option>
                        <option value="2">Large select</option>
                    </Form.Select>
                </Col>
            </Row> 
            <div className="m-auto rit-tst mt-5 ms-1">
                <Row> 
                    <h5 className="report-h5 mb-2">Tests</h5>  
                </Row> 
                <Row>
                    <Col xs={6} md={6} lg={4}  className="p-0 mt-3  ">
                        <Form.Select className="select-form" size="lg" >
                            <option>Select Rol/Book-Qs</option>
                            <option>Large select</option>
                            <option>Large select</option>
                        </Form.Select>
                    </Col>
                </Row>
                <Col xs={10} md={10} lg  className="p-0 border mt-4">
                    <Tabs defaultActiveKey="home" id="uncontrolled-tab-example" className="mt-2 test-tab">
                        <Tab eventKey="home" title="Baseline" className="test-name">
                            <Baseline />
                        </Tab>
                        <Tab eventKey="profile" title="Skill Building"  className="test-name">
                            <SkillBuilding />
                        </Tab>
                        <Tab eventKey="contact" title="Certification"  className="test-name">
                            <Certification />
                        </Tab>
                    </Tabs>
                </Col>
           </div>
        </div>
    )
}

export default TestDetailScreen;