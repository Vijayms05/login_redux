import React, {useState} from 'react'
import {   
    Col, 
    Row, 
    Form, 
    Card, 
    ProgressBar 
} from 'react-bootstrap'
import Button from '@restart/ui/esm/Button'
import HorizontalCard from '../../component/cards/HorizontalCard'
 
import { 
    SearchIcon, 
    PlaybtnIcon, 
    ShareIcon, 
    FeedbackIcon, 
    PrintIcon,
    LeftArrow 
} from '../../assets/images/index'
import { Link } from 'react-router-dom'
import { history } from '../../routes/Routes';

const SubscriptionList = () =>{
    const [filter, setFilter] = useState('')
    const progValue="25";
    // const history= useHistory();
    return(
        <div className="py-md-4 bill-rit">            
            <Row className="mb-4 mt-5 pt-3 pt-md-0 mt-md-0">
                <Col xs={12} sm={6} md={8} lg={6} xl={6} className="my-2">   
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
                <Col xs={12} sm={6} md={4} lg={4} xl={3}  className="sub-filter my-2">
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
                <Link className="back-a mb-3" to="/home"><LeftArrow /> {" "} &nbsp; Back to My Subscrtiptions</Link>
                <Col sm={10} md={10} lg={10} xl={8} className="ps-0 pe-0">
                    <HorizontalCard />                        
                    <h5 className="report-h5 mb-2 mt-4">Skill Building Status</h5>  
                    <div className="lft-skl-bldg">

                        <div className="subs-list-box" onClick={()=> history.push('/test')}>
                            <Row className="justify-content-md-center ">
                                <Col xs={12} sm={12} md={10} lg={6} xl={6} className="text-lg-start text-center mb-2">
                                    <div className="in-sub-list-box">
                                        <div className="play-vid-subs">
                                            <PlaybtnIcon />
                                        </div>
                                        <div class="tit-subs"><h5>English</h5></div>
                                    </div>  
                                </Col>
                                <Col xs={12} sm={12} md={10} lg={6} xl={6} className="mb-2">
                                    <div className="sub-progress float-end">                        
                                        <p className="f3-13 mb-0">Progress</p>    
                                        <div className="prog-bar-subs">
                                            <ProgressBar now={progValue} />
                                            <p className="p-0 mb-0 ms-2">{progValue}%</p>
                                        </div> 
                                    </div>
                                </Col>
                            </Row>                                  
                        </div>

                        <div className="subs-list-box" onClick={()=> history.push({pushname:'/test'})}>
                            <Row className="justify-content-md-center ps-0 pe-0">
                                <Col xs={12} sm={12} md={10} lg={6} className="text-lg-start text-center mb-2">
                                    <div className="in-sub-list-box">
                                        <div className="play-vid-subs">
                                            <PlaybtnIcon />
                                        </div>
                                        <div class="tit-subs"><h5>History</h5></div>
                                    </div>   
                                </Col>
                                <Col xs={12} sm={12} md={10} lg={6} className="mb-2">
                                    <div className="sub-progress float-end">    
                                        <p className="f3-13 mb-0">Progress</p>                    
                                        <div className="prog-bar-subs">
                                            <ProgressBar now={progValue} />
                                            <p className="p-0 mb-0 ms-2">{progValue}%</p>
                                        </div> 
                                    </div>
                                </Col>
                            </Row>
                        </div>

                        <div className="subs-list-box" onClick={()=> history.push({pushname:'/test'})}>
                            <Row className="justify-content-md-center ps-0 pe-0">
                                <Col xs={12} sm={12} md={10} lg={6} className="text-lg-start text-center mb-2">
                                    <div className="in-sub-list-box">
                                        <div className="play-vid-subs">
                                            <PlaybtnIcon />
                                        </div>
                                        <div class="tit-subs"><h5>Arts</h5></div>
                                    </div>  
                                </Col>
                                <Col xs={12} sm={12} md={10} lg={6} className="mb-2">
                                    <div className="sub-progress float-end">                       
                                        <p className="f3-13 mb-0">Progress</p>    
                                        <div className="prog-bar-subs">
                                            <ProgressBar now={progValue} />
                                            <p className="p-0 mb-0 ms-2">{progValue}%</p>
                                        </div> 
                                    </div>   
                                </Col>
                            </Row>                               
                        </div>

                        <div className="subs-list-box" onClick={()=> history.push({pushname:'/test'})}>
                            <Row className="justify-content-md-center ps-0 pe-0">
                                <Col xs={12} sm={12} md={10} lg={6} className="text-lg-start text-center mb-2">
                                    <div className="in-sub-list-box">
                                        <div className="play-vid-subs">
                                            <PlaybtnIcon />
                                        </div>
                                        <div class="tit-subs"><h5>Photography</h5></div>
                                    </div>  
                                </Col>
                                <Col xs={12} sm={12} md={10} lg={6} className="mb-2">
                                    <div className="sub-progress float-end">                       
                                        <p className="f3-13 mb-0">Progress</p>    
                                        <div className="prog-bar-subs">
                                            <ProgressBar now={progValue} />
                                            <p className="p-0 mb-0 ms-2">{progValue}%</p>
                                        </div> 
                                    </div>   
                                </Col>
                            </Row>
                        </div>
                    </div>
                </Col>
                <Col sm={8} md={8} lg={4} xl={3} className="mt-2 skill-smry"  >
                    <Card className="mb-3 base-card-report">                           
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
                            <Button className="anal-btn mb-3" style={{border:'1px solid #45acff'}} 
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