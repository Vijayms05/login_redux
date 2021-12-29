import React, { useEffect, useState } from 'react'
import {
    Container,
    Col,
    Row,
    Form,
    Card,
    ProgressBar,
    Table
} from 'react-bootstrap'
import Button from '@restart/ui/esm/Button'
import { Link } from 'react-router-dom'
import {
    SearchIcon,
    Billingrit,
    NumbIcon,
    ScaleIcon,
    TickIcon
} from '../../assets/images'
import HorizontalCardFree from '../../component/cards/HorizontalCardFree'
import { useLocation } from 'react-router-dom';

const BillingDetails = (props) => {
    const location = useLocation();
    console.log(location);
    var data = location.state.data;
    const [billingFilter, setFilter] = useState('')
    const [days, setDays] = useState('')
    useEffect(() => {

    }, [])
    return (
        <div className="py-md-2 px-2 bill-rit ms-2">
            <Row className="mb-4 mt-5 pt-5 mt-md-4 pt-md-0">
                <Col xs={12} md={6} lg={6} className="billing-search-box mb-2">
                    <Form.Group className="w-90 search-box">
                        <Button className="searchrole">
                            <SearchIcon />
                        </Button>
                        <Form.Control
                            type="text"
                            placeholder="Search My Subscriptions"
                            size="md"
                            className="search-input rounded-pill" />
                    </Form.Group>
                </Col>
                <Col xs={12} md={6} lg={6} className="billing-search-box mb-2">
                    <Form.Select
                        className="select-form " size="md"
                        onChange={e => setFilter(e.target.value)}
                    >
                        <option selected> Select Filters </option>
                        <option value='1'>Large select</option>
                        <option value='2'>Large select</option>
                    </Form.Select>
                </Col>
            </Row>
            <div className="m-auto">
                <Row className="justify-content-center justify-content-xl-start">
                    <h5 className="report-h5 mt-2 mt-md-0 my-2 my-md-3">Billing</h5>
                    <Col sm={12} md={12} lg={10} xl={8} className="mx-2 mt-2"  >
                        {/* <HorizontalCardFree data={data} /> */}
                        <Col className="cls-fre sub-class text-center mt-3 mb-3">
                            <h2 style={{ fontSize: '33px' }}>{data.course.name}</h2>
                        </Col>
                        {/* <Card>
                            <Card.Body className="billing-add billing-details-card">
                                <Row>
                                    <Col className="cls-fre text-center mt-3 mb-3 billing-details-text" sm={4} >
                                    <h2 style={{fontSize:'33px'}}>Class12</h2>
                                    </Col>
                                    <Col className="cls-fre text-center mt-4 billing-search-box " sm={5} > className="cls-fre"
                                    <h4 style={{fontSize:'22px'}}>Your Current Plan</h4>                                   
                                    <h1 style={{fontSize:'65px'}}>Free</h1>
                                    </Col>
                                    <Col className="billing-search-box"> className="d-none d-md-block"
                                    <Billingrit />
                                    <ScaleIcon />
                                    <NumbIcon />
                                    </Col>
                                    </Row>                    
                                    </Card.Body>                
                                </Card> */}
                    </Col>
                </Row>
                <Row className="mt-5">
                    <Col lg={6} md={12} sm={12} xs={12} className="p-0">
                        <h5 className="report-h5 my-3">Upgrade Now</h5>
                        <Row>
                            <h4 className="plan-h4 p-0 mt-4"> Plan Validity</h4>
                            <Col xs={12} sm={6} md={6} lg={6} className="p-0">
                                <h4 className="plan-h4"> {data.validity}</h4>
                                {/* <Form.Select
                                    className="select-form w-50" size="md"
                                    onChange={e => setDays(e.target.value)}>
                                    <option selected>Select Days </option>
                                    <option value='1'>30 Days</option>
                                    <option value='2'>30 Days</option>
                                </Form.Select> */}
                            </Col>
                        </Row>
                        <Row className="mt-3 wt-we-get">
                            <h5 className="report-h5 mt-2 mb-2">What you get</h5>
                            <p className="mb-2">For most business that what to optimized wen queiries</p>
                            <ul>
                                <li><TickIcon />All limited links</li>
                                <li><TickIcon />Own analuystics platform</li>
                                <li><TickIcon />Chat Support</li>
                                <li><TickIcon />Optimized Hashtags</li>
                                <li><TickIcon />Unlimited Users</li>
                            </ul>
                        </Row>
                    </Col>
                    <Col lg={6} md={12} sm={12} xs={12} className="p-0 mb-3 billing-details-buy">
                        <h5 className="report-h5 my-3">Total</h5>
                        <p className="f1-35 mb-0 dark-green-light" style={{ lineHeight: '30px' }}>Rs 560</p>
                        <div className="price-down">
                            <h5 className="">Price Breakdown</h5>
                            <div className="price-down-in">
                                <p>Plan Cost</p>
                                <p>Rs 400</p>
                            </div>
                            <div className="price-down-in">
                                <p>Gst 18% </p>
                                <p>Rs 50</p>
                            </div>
                            <div className="price-down-in tl-top">
                                <p>Total </p>
                                <p>Rs 50</p>
                            </div>
                        </div>
                        <Button className="buy-now-btn">Buy Now</Button>
                    </Col>
                </Row>
            </div>
        </div>
    );
}

export default BillingDetails;