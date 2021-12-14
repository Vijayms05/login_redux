import React, { useState, useEffect} from 'react'
import {
    Col,
    Row,
    Form,
    Card,
    ProgressBar
} from 'react-bootstrap'
import Button from '@restart/ui/esm/Button'
import HorizontalCard from '../../component/cards/HorizontalCard'
import HomeService from '../../service/HomeService'
import {
    SearchIcon,
    PlaybtnIcon,
    ShareIcon,
    FeedbackIcon,
    PrintIcon,
    LeftArrow,
    Billingrit,
    NumbIcon,
    ScaleIcon,
} from '../../assets/images/index'
import { Link,useLocation } from 'react-router-dom'
import { history } from '../../routes/Routes';

const SubscriptionList = (props) => {
    const [filter, setFilter] = useState('')
    const [subscription_details, setSubscriptionDetails]=useState('');
    
    const progValue = "25";
    // const history= useHistory();
    const location = useLocation();
    useEffect(()=>{
        console.log(location.pathname); // result: '/secondpage'
        console.log(location.state); // result: 'some_value'
        // console.log(location.card_name);

        HomeService.courseDetails({subscription_id: location.state}).then((res)=>{
            const response =res.data;
            console.log(response);
            // setSubscriptionDetails(response.subs);
            if (response?.status == 'success') {
               setSubscriptionDetails(response.subscription);
               
            }else if (response.status == 'error') {
                alert(response?.message);
            } 
          
        }).catch(error => console.log(error))
        
    },[])
    return (
        <div className="py-md-4 bill-rit">
            {subscription_details &&
            <div>
            <Row className="mb-4 mt-5 pt-3 pt-md-0 mt-md-0">
                <Col xs={12} sm={6} md={8} lg={6} xl={6} className="my-2">
                    <Form.Group className="w-100 search-box">
                        <Button className="searchrole">
                            <SearchIcon />
                        </Button>
                        <Form.Control
                            type="text"
                            placeholder="Search Role catalogue"
                            size="md"
                            className="search-input"
                        />
                    </Form.Group>
                </Col>
                <Col xs={12} sm={6} md={4} lg={4} xl={3} className="sub-filter my-2">
                    <Form.Select
                        className="select-form"
                        size="lg"
                        onChange={e => setFilter(e.target.value)} >
                        <option selected>Filter</option>
                        <option value="1">Large select</option>
                        <option value="2">Large select</option>
                    </Form.Select>
                </Col>
            </Row>
            <Row className="justify-content-sm-center justify-content-md-center ps-0 pe-0">
                <Link className="back-a mb-3" to="/home">
                    <LeftArrow /> {" "} &nbsp; Back to Role Based Test
                </Link>                
                <Col sm={10} md={10} lg={10} xl={8} className="ps-0 pe-0">
                    {/* <HorizontalCard /> */}
                    <Card>
                        <Card.Body className="billing-add w-100">
                            <Row>
                                <Col className="cls-fre sub-class text-center mt-3 mb-3" sm={4} xs={12} >
                                    <h2 style={{ fontSize: '42px' }}>
                                        {subscription_details.course.name}
                                    </h2>
                                    <div class="tit-subs">
                                        <h5>No.of attempts {subscription_details.course.certification_test}</h5>
                                    </div>
                                    <div class="tit-subs">
                                        <h5>Price : {subscription_details.price}</h5>
                                    </div>    
                                </Col>
                                <Col className="cls-fre hori-content " sm={5} xs={12} > {/*className="cls-fre"*/}
                                    <h4 >Plan Details</h4>
                                    <Row>
                                        <Col className="subscription-class-46">{/**/}
                                            <h6 
                                                className="text-end text-sm-center text-md-center text-lg-end" 
                                                style={{ fontSize: '52px', color: '#298EE0' }}
                                            >
                                                {subscription_details.validity}
                                            </h6>
                                        </Col>
                                        <Col className="subscription-class-days text-center">{/**/}
                                            <h5 className="text-end text-sm-center text-md-center text-lg-end" 
                                                style={{ fontSize: '27px', width: '25', color: '#298EE0' }}
                                            > 
                                                Days 
                                            </h5>
                                        </Col>
                                    </Row>
                                    {/* <h2 className="">Free</h2> */}
                                    {/* <Link to="/billings" className="anal-btn">Go to Billing</Link> */}
                                    <Link to="/billings-details" className="anal-btn my-3">Go to Billing</Link>
                                </Col>
                                <Col className="hori-image" sm={3} xs={12}> {/*className="d-none d-md-block" */}
                                    <Billingrit />
                                    <ScaleIcon />
                                    <NumbIcon />
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                    <h5 className="report-h5 mb-2 mt-4">
                        Skill Building Status
                    </h5>
                    <div className="lft-skl-bldg">
                        <div className="subs-list-box" onClick={() => history.push('/test')}>                            
                            <Row className="justify-content-md-center ">
                                {
                                    subscription_details.course.subjects.map((card_course,index)=>{
                                        return(
                                            <Col xs={12} sm={12} md={10} lg={6} xl={6} className="text-lg-start text-center mb-2">
                                                <div className="in-sub-list-box" key={index.subject_id}>
                                                    <div className="play-vid-subs">
                                                        <PlaybtnIcon />
                                                    </div>                                                    
                                                    <div class="tit-subs">
                                                        <h5>{card_course.subject.name}</h5>
                                                    </div>
                                                </div>
                                            </Col>
                                        )
                                    })
                                }                              
                               
                            </Row>
                        </div>
                    </div>
                </Col>
                {/* <Col sm={8} md={8} lg={4} xl={3} className="mt-2 skill-smry"  > */}
                    {/* <Card className="mb-3 base-card-report">
                        <Card.Body className="text-center">
                            <Card.Title className="skil-sum-tit mb-3 mt-3"
                            >Skill Summary</Card.Title>
                            <Row>
                                <Col className="skil-sum-baslin text-start mt-2">Baseline </Col>
                            </Row>
                            <Row className='mt-2'>
                                <Col className="skil-sum-text text-start">Ranking </Col>
                                <Col className="skil-sum-text">: 16/45</Col>
                            </Row>
                            <Row>
                                <Col className="skil-sum-text text-start">Score</Col>
                                <Col className="skil-sum-text ">: 80%</Col>
                            </Row>
                            <Button className="anal-btn mb-3" style={{ border: '1px solid #45acff' }}
                                onClick={() => history.push('/baseline')}>Analysis Result</Button>
                            <Row>
                                <Col className="skil-sum-baslin text-start mt-2">Certification </Col>
                            </Row>
                            <Row className='mt-2'>
                                <Col className="skil-sum-text text-start">Ranking </Col>
                                <Col className="skil-sum-text">: 16/45</Col>
                            </Row>
                            <Row>
                                <Col className="skil-sum-text text-start">Score</Col>
                                <Col className="skil-sum-text ">: 80%</Col>
                            </Row>
                            <Link to="/certificate-result" className="anal-btn">
                                Analysis Result
                            </Link>
                            <h4 className="skil-sum-baslin mt-5 text-center">Actions</h4>
                            <Link className="actn-btn">
                                <ShareIcon /> Share
                            </Link>
                            <Link className="actn-btn">
                                <PrintIcon /> Print
                            </Link>
                            <Link className="actn-btn">
                                <FeedbackIcon /> Feed Back
                            </Link>
                        </Card.Body>
                    </Card> */}
                {/* </Col> */}
            </Row>
            </div>
}
        </div>
    );
}

export default SubscriptionList;