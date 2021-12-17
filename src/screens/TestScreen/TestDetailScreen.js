import React, { useEffect, useState } from 'react'
import { Container, Col, Row, Form, Card, ProgressBar, Table, Tab, Tabs } from 'react-bootstrap'
import Button from '@restart/ui/esm/Button'
import { SearchIcon, } from '../../assets/images/index'
import Baseline from '../../component/TestTab/Baseline'
import SkillBuilding from '../../component/TestTab/SkillBuilding'
import Certification from '../../component/TestTab/Certification'
import TestService from '../../service/TestService'
import { ErrorHandler } from '../../service/ErrorHandler'

const TestDetailScreen = () => {
    const [subscriptionId, setSubscriptionId] = useState('');
    const [subscriptonList, setSubscriptonList] = useState([]);
    const [testDetails, setTestDetails] = useState('');
    useEffect(() => {
        TestService.subscriptionDetails().then(result => {
            var response = result.data;
            if (response.status == 'success') {
                setSubscriptonList(response.user_subscriptions);
            }
        }).catch(function (error) {
            ErrorHandler(error);
        });
    }, []);
    const changeSubscriptionId = (e) => {
        setSubscriptionId(e.target.value);
        if (e.target.value != '') {
            TestService.subscriptionTest({ user_subscription_id: e.target.value }).then(result => {
                var response = result.data;
                if (response.status == 'success') {
                    setTestDetails(response);
                }
            }).catch(function (error) {
                ErrorHandler(error);
            });
        } else {
            setTestDetails('');
        }
    }
    return (
        <div className="py-md-4 mt-3 mt-md-0 pt-sm-2 pt-3 pt-md-0 bill-rit m-auto">
            <Row className="mb-0 mt-0 mt-sm-4">
                <Col xs={12} md={6} lg={8} className="mb-2">
                    <Form.Group className="w-100 search-box test-search-box">
                        <Button className="searchrole">
                            <SearchIcon />
                        </Button>
                        <Form.Control type="text" placeholder="Search Test Name" size="md" className="search-input" />
                    </Form.Group>
                </Col>
                <Col xs={12} md={6} lg={4} className="mb-2 test-search-box">
                    <Form.Select className="select-form" size="lg" >
                        <option selected>Filter</option>
                        <option value="1">Large select</option>
                        <option value="2">Large select</option>
                    </Form.Select>
                </Col>
            </Row>
            <div className="m-auto rit-tst mt-0 mt-sm-5  ms-1">
                <Col sm={6}>
                    <h5 className="report-h5 mb-2">Tests</h5>
                </Col>
                <Row>
                    <Col sm={12} md={12} lg={4} className="p-0 mt-3  test-select text-start">
                        <Form.Select value={subscriptionId} onChange={changeSubscriptionId} className="select-form" size="lg" >
                            <option value={""}>Select Rol/Book-Qs</option>
                            {subscriptonList.length > 0 &&
                                subscriptonList.map((item, index) => {
                                    return (
                                        <option value={item.subscription_id}>{item.course.name}</option>
                                    )
                                })}
                        </Form.Select>
                    </Col>
                </Row>
                {testDetails &&
                    <Col xs={12} sm={12} md={12} lg className="p-0 border mt-4 text-center">
                        <Tabs defaultActiveKey="home" id="uncontrolled-tab-example" className="mt-2 test-tab">
                            <Tab eventKey="home" title="Baseline" className="test-name">
                                <Baseline data={testDetails.user_baseline_test} />
                            </Tab>
                            <Tab eventKey="profile" title="Skill Building" className="test-name">
                                <SkillBuilding data={testDetails.skill_building_tests} />
                            </Tab>
                            <Tab eventKey="contact" title="Certification" className="test-name">
                                <Certification data={testDetails.user_subscription} />
                            </Tab>
                        </Tabs>
                    </Col>
                }
            </div>
        </div>
    )
}

export default TestDetailScreen;