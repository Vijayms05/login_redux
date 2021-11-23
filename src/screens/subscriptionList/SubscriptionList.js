import React, {useState} from 'react'
import {  Container, Col, Row, Form, Card, ProgressBar, Table } from 'react-bootstrap'
import Button from '@restart/ui/esm/Button'
import HorizontalCard from '../../component/cards/HorizontalCard'
 
import { 
    SearchIcon, 
    Billingrit,
    NumbIcon, 
    ScaleIcon, 
    PlaybtnIcon, 
    ShareIcon, 
    FeedbackIcon, 
    PrintIcon,
    LeftArrow } from '../../assets/images/index'
import { Link, useHistory} from 'react-router-dom'

const SubscriptionList = () =>{
    const [filter, setFilter] = useState('')
    const progValue="25";
    const history= useHistory();
    return(
        <div className="py-md-4 bill-rit">            
            <Row className="mb-4 mt-5 mt-md-0">
                <Col xs={12} sm={6} md={5} lg={6} className="mb-2">   
                    <Form.Group  className="w-100 search-box">
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
                <Col xs={12} sm={6} md={3} lg={3}  className=" mb-2">
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
            <Row>
                <Link className="back-a " to="/home"><LeftArrow /> {" "} Back to My Subscrtiptions</Link>
                <Col md={8} lg={8}>
                    <HorizontalCard />                        
                    <h5 className="report-h5 mb-2 mt-4">Skill Building Status</h5>  
                    <div className="lft-skl-bldg">
                        <div className="subs-list-box" onClick={()=> history.push('/test')}>
                            <div className="in-sub-list-box">
                                <div className="play-vid-subs">
                                    <PlaybtnIcon />
                                </div>
                                <div class="tit-subs"><h5>English</h5></div>
                            </div>                    
                            <div>                        
                                <p className="f3-13 mb-0">Progress</p>    
                                <div className="prog-bar-subs">
                                    <ProgressBar now={progValue} />
                                    <p className="p-0 mb-0 ms-2">{progValue}%</p>
                                </div> 
                            </div>                                
                        </div>
                        <div className="subs-list-box" onClick={()=> history.push('/test')}>
                            <div className="in-sub-list-box">
                                <div className="play-vid-subs">
                                    <PlaybtnIcon />
                                </div>
                                <div class="tit-subs"><h5>History</h5></div>
                            </div>                    
                            <div>    
                                <p className="f3-13 mb-0">Progress</p>                    
                                <div className="prog-bar-subs">
                                    <ProgressBar now={progValue} />
                                    <p className="p-0 mb-0 ms-2">{progValue}%</p>
                                </div> 
                            </div>
                        </div>
                        <div className="subs-list-box" onClick={()=> history.push('/test')}>
                            <div className="in-sub-list-box">
                                <div className="play-vid-subs">
                                    <PlaybtnIcon />
                                </div>
                                <div class="tit-subs"><h5>Arts</h5></div>
                            </div>                    
                            <div>                        
                                <p className="f3-13 mb-0">Progress</p>    
                                <div className="prog-bar-subs">
                                    <ProgressBar now={progValue} />
                                    <p className="p-0 mb-0 ms-2">{progValue}%</p>
                                </div> 
                            </div>                                
                        </div>
                        <div className="subs-list-box" onClick={()=> history.push('/test')}>
                            <div className="in-sub-list-box">
                                <div className="play-vid-subs">
                                    <PlaybtnIcon />
                                </div>
                                <div class="tit-subs"><h5>Photography</h5></div>
                            </div>                    
                            <div>                        
                                <p className="f3-13 mb-0">Progress</p>    
                                <div className="prog-bar-subs">
                                    <ProgressBar now={progValue} />
                                    <p className="p-0 mb-0 ms-2">{progValue}%</p>
                                </div> 
                            </div>                                
                        </div>
                    </div>
                </Col>
                <Col md={3} lg={3} className="mt-2 skill-smry"  >
                    <Card style={{ width: '16rem' }} className="mb-3 base-card-report">                           
                        <Card.Body>
                            <Card.Title className="skil-sum-tit mb-2 mt-3"
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
                            <Button className="anal-btn" style={{border:'1px solid #45acff'}} 
                            onClick={()=> history.push('/baseline')}>Analysis Result</Button>
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
                    </Card>                        
                </Col>                       
            </Row>                          
        </div>
    );
}

export default SubscriptionList;