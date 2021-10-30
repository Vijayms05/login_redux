import React from 'react'

import playbutton from '../../../images/playbutton.png'
import rectangle from '../../../images/Rectangle.png'

import polygon from '../../../images/Polygon-1.png'
import polygontwo from '../../../images/Polygon-2.png'
import rectangle3511 from '../../../images/Rectangle-3511.png'

import arrowLeft from '../../../images/arrowLeft.png'
import shareIcon from '../../../images/shareIcon.png'
import feedbackIcon from '../../../images/feedback.png'
import printIcon from '../../../images/print.png'

import { history } from '../../routes/Routes'

import './MySubsciption.css';

import { Container, Row, Col,Card } from 'react-bootstrap'

const MySubscription =(props)=>{
    
    const MySubscriptionClick = () =>{   
        history.push('/tests')
        
        console.log("button clicked")  
    }
    const MySubscriptionButton=()=>{
        history.push('/billing')
    }
  
    return(
        <Container fluid>
            <Row>
                <Col xs={9} md={9} sm={6} >
                    <div className="mb-3 mt-4 ms-4 text-start">
                        <a href="/mainContent" className="text-start" >
                            <img src={arrowLeft} alt="arrowLeftIcon"/>&nbsp;
                            Back to My Subscriptions
                        </a>
                    </div>  
                    <Col xs={9} className="mt-4 ms-5">
                        <Card className="subscription-card mb-4">
                            <Row >
                                <Col> 
                                    <p className="p-1 fw-bold" 
                                        style={{color:'#298EE0',textAlign:'center',marginTop:'60px',fontSize:'35px'}}
                                    >Class 12</p>
                                </Col>
                                <Col className="text-center">
                                    <p className="mt-3 fw-bold" style={{fontSize:'20px'}}>Your Current Plan </p>
                                    <Row>
                                        <Col>
                                            <p className="fw-bold" style={{color:'#298EE0',fontSize:'35px'}}>45</p>
                                        </Col>
                                        <Col>
                                            <p className="fw-bold" style={{color:'#298EE0',fontSize:'35px'}}>Free</p>
                                        </Col>
                                    </Row>
                                    <div className="text-center mb-2 mt-0">
                                        <button type="submit" className="btn btn-primary" >Go to Billing</button>

                                    </div>                                   
                                </Col>
                                <div className="col">
                                    <div className="billing-lefttriangle" 
                                    style={{left:'498px', borderBottom: '188px solid #298EE0',borderLeft: '174px solid transparent'  }}></div>
                                <div  
                                style={{ position: "absolute",width: '98.8px', height:' 135.82px', left: '527px', top: '20px',
                                        boxShadow: 'inset -5.16938px 0px 0px rgba(0, 0, 0, 0.1)', borderRadius: '11.8157px',background: '#8FB2BE'}}></div>
                                {/* <div className="rectangle-3517"></div> */}
                                <div className="position-absolute" 
                                    style={{ 
                                        width: '12.55px',height:'12.55px', left:'525.32px',
                                        top:'45.03px',background: '#E9FFFF',
                                        boxShadow:'inset 2.21545px 0px 0px rgba(0, 0, 0, 0.25)'
                                    }}></div>
                                <div className="position-absolute" 
                                    style={{                                    
                                        width:'12.55px',height:'12.55px',left:'525.32px',
                                        top:'74.2px',background:'#E9FFFF',
                                        boxShadow:'inset 2.21545px 0px 0px rgba(0, 0, 0, 0.25)'
                                    }}></div>
                                <div className="position-absolute" style={{                                    
                                        width:'12.55px',height:'12.55px',left:'525.32px',top:'104.37px',background:'#E9FFFF',boxShadow:'inset 2.21545px 0px 0px rgba(0, 0, 0, 0.25)'}}></div>
                                <div className="position-absolute" style={{                                    
                                        width:'12.55px',height:'12.55px',left:'525.32px',top:'128.54px',background:'#E9FFFF',boxShadow:'inset 2.21545px 0px 0px rgba(0, 0, 0, 0.25)'}}></div>
                                    <div className="position-absolute" style={{width:'9.82px',height:'4.43px',left:'525.32px',top:'132.6px',background:'#3F616D',borderRadius: '0px 5.90786px 5.90786px 0px'}}></div>
                                    <div className="position-absolute" style={{width:'9.82px',height:'4.43px',left:'525.32px',top:'108.43px',background:'#3F616D',borderRadius: '0px 5.90786px 5.90786px 0px'}}></div>
                                    <div className="position-absolute" style={{width:'9.82px',height:'4.43px',left:'525.32px',top:'78.26px',background:'#3F616D',borderRadius: '0px 5.90786px 5.90786px 0px'}}></div>
                                    <div className="position-absolute" style={{width:'9.82px',height:'4.43px',left:'525.32px',top:'49.09px',background:'#3F616D',borderRadius: '0px 5.90786px 5.90786px 0px'}}></div>
                                    <div className="position-absolute" style={{width:'59.45px',height:'25.85px',left:'550px',top: '56.74px',background: '#C1DEE7',
                                            borderRadius:'5.90786px'
                                        }}></div>
                                    <div className="position-absolute" style={{top:'123.94px',width: '52.06px',height: '5.54px',
                                    left: '550px',                               
                                    background: '#C1DEE7',
                                    borderRadius: '5.90786px'}}></div>
                                    <div className="position-absolute" style={{top: '103.48px',width: '52.06px',height: '5.54px',
                                    left: '550px',                               
                                    background: '#C1DEE7',  
                                    borderRadius: '5.90786px'}}></div>
                                    <div className="position-absolute" 
                                        style=
                                        {{
                                            top: '113.71px',
                                            width: '52.06px',
                                            height: '5.54px',
                                            left: '550px',                               
                                            background: '#C1DEE7',
                                            borderRadius: '5.90786px'}}
                                    ></div>
                                    <div className="position-absolute" style={{width: '6.75px',height: '21.51px',left:'630.41px',top:'100.09px',background: '#4DD188'}}></div>
                                <div className="position-absolute"style={{width: '6.75px',height:'43.44px',left:'630.41px',top:'57.65px',
                                background: '#C4FFDE'}}></div> 
                                    <img src={polygon} className="position-absolute" alt="ploygon" style={{left:'590.45px',top:'142px',width:'30px'}}  />
                                    <img src={polygontwo} className="position-absolute" alt="ploygon" style={{left:'637.45px',top:'90px',width:'35px'}}  />
                                    <img src={rectangle3511} className="position-absolute" alt="ploygon" style={{left:'518px',top:'162px',width:'28px'}}  />
                                </div>
                            </Row>  
                        </Card>
                    </Col>
                    <div className="mb-3 mt-4 mx-3">
                        <h5 className="text-start" style={{fontSize:'17px',color:'#003866'}}>Skill-Building Status</h5>
                    </div>   
                    <div class="mb-4">
                        <div class="card w-80 rounded-pill" style={{backgroundColor:'#ECF6FF'}} onClick={MySubscriptionClick} >
                            <div class="row g-0">
                                <div class="col-sm-3 text-center">
                                    <img src={rectangle} className="position-absolute" alt="icon" style={{width:'47px',height:'47px',fontSize:'15px', left:'30px',top:'15px', }}/>
                                    <img src={playbutton} className="position-absolute" alt="icon" style={{fontSize:'15px', left:'48px',top:'29px' }}/>
                                </div>
                                <div class="col-sm-4">
                                    <div class="card-body">
                                        <h5 class="card-title fs-3 text-start" style={{color:'#003866'}}>English</h5>
                                    </div>
                                </div>
                                <div class="col-sm-4">
                                    <div class="card-body">
                                        <p className='text-start' style={{fontSize:'15px'}}>In progress</p>
                                        <div class="progress mt-2" style={{top:'8px'}}>
                                            <div class="progress-bar" role="progressbar" 
                                            style={{width: "30%",top:'10px'}} aria-valuenow="30" aria-valuemin="0" aria-valuemax="100">30%</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>   
                    <div class="mb-4 ">
                        <div class="card w-80 rounded-pill" style={{backgroundColor:'#ECF6FF'}}>
                            <div class="row g-0">
                                <div class="col-sm-3 text-center">
                                    <img src={rectangle} className="position-absolute" alt="icon" style={{width:'47px',height:'47px',fontSize:'15px', left:'30px',top:'15px', }}/>
                                    <img src={playbutton} className="position-absolute" alt="icon" style={{fontSize:'15px', left:'48px',top:'29px' }}/>
                                </div>
                                <div class="col-sm-4">
                                    <div class="card-body">
                                        <h5 class="card-title fs-3 text-start" style={{color:'#003866'}}>History</h5>
                                    </div>
                                </div>
                                <div class="col-sm-4">
                                    <div class="card-body">
                                        <p className='text-start' style={{fontSize:'15px'}}>In progress</p>
                                        <div class="progress mt-2" style={{top:'8px'}}>
                                            <div class="progress-bar" role="progressbar" 
                                            style={{width: "45%",top:'10px'}} aria-valuenow="45" aria-valuemin="0" aria-valuemax="100">45%</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>   
                    <div class="mb-4">
                        <div class="card w-80 rounded-pill" style={{backgroundColor:'#ECF6FF'}}>
                            <div class="row g-0">
                                <div class="col-sm-3 text-center">
                                    <img src={rectangle} className="position-absolute" alt="icon" style={{width:'47px',height:'47px',fontSize:'15px', left:'30px',top:'15px', }}/>
                                    <img src={playbutton} className="position-absolute" alt="icon" style={{fontSize:'15px', left:'48px',top:'29px' }}/>
                                </div>
                                <div class="col-sm-4">
                                    <div class="card-body">
                                        <h5 class="card-title fs-3 text-start" style={{color:'#003866'}}>Photography</h5>
                                    </div>
                                </div>
                                <div class="col-sm-4">
                                    <div class="card-body">
                                        <p className='text-start' style={{fontSize:'15px'}}>In progress</p>
                                        <div class="progress mt-2" style={{top:'8px'}}>
                                            <div class="progress-bar" role="progressbar" 
                                            style={{width: "60%",top:'10px'}} aria-valuenow="60" aria-valuemin="0" aria-valuemax="100">60%</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>   
                    <div class="mb-4">
                        <div class="card w-80 rounded-pill" style={{backgroundColor:'#ECF6FF'}}>
                            <div class="row g-0">
                                <div class="col-sm-3 text-center">
                                    <img src={rectangle} className="position-absolute" alt="icon" style={{width:'47px',height:'47px',fontSize:'15px', left:'30px',top:'15px', }}/>
                                    <img src={playbutton} className="position-absolute" alt="icon" style={{fontSize:'15px', left:'48px',top:'29px' }}/>
                                </div>
                                <div class="col-sm-4">
                                    <div class="card-body">
                                        <h5 class="card-title fs-3 text-start" style={{color:'#003866'}}>Arts</h5>
                                    </div>
                                </div>
                                <div class="col-sm-4">
                                    <div class="card-body">
                                        <p className='text-start' style={{fontSize:'15px'}}>In progress</p>
                                        <div class="progress mt-2" style={{top:'8px'}}>
                                            <div class="progress-bar" role="progressbar" 
                                            style={{width: "75%",top:'10px'}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">75%</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>   
                    <div class="mb-4">
                        <div class="card w-80 rounded-pill" style={{backgroundColor:'#ECF6FF'}}>
                            <div class="row g-0">
                                <div class="col-sm-3 col-md-3 col-3 text-center">
                                    <img src={rectangle} className="position-absolute" alt="icon" style={{width:'47px',height:'47px',fontSize:'15px', left:'30px',top:'15px', }}/>
                                    <img src={playbutton} className="position-absolute" alt="icon" style={{fontSize:'15px', left:'48px',top:'29px' }}/>
                                </div>
                                <div class="col-sm-4">
                                    <div class="card-body">
                                        <h5 class="card-title fs-3 text-start" style={{color:'#003866'}}>Mathematics</h5>
                                    </div>
                                </div>
                                <div class="col-sm-4">
                                    <div class="card-body">
                                        <p className='text-start' style={{fontSize:'15px'}}>In progress</p>
                                        <div class="progress mt-2" style={{top:'8px'}}>
                                            <div class="progress-bar" role="progressbar" 
                                            style={{width: "90%",top:'10px'}} aria-valuenow="90" aria-valuemin="0" aria-valuemax="100">%</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>          
                </Col>
                <div className="col-3 col-md-3 mt-5 border border-grey fixed-static position-relative px-2" style={{height:'650px', width:'290px'}}>
                    <div className="mt-4 mb-3">
                        <h5 className="text-center mb-3" style={{fontSize:'18px',color:'#003866'}}>Skill Summary</h5>
                    </div> 
                    <div className="mb-3 mx-2">
                       <h5 className="text-start" style={{fontSize:'17px', color:'#003866'}}>Baseline</h5>
                    </div> 
                    <div className="mb-3 mx-2">  
                        <div className="row">
                            <h5 className="text-start col-lg-2 w-50" style={{fontSize:'14px', color:'#003866'}}>Ranking</h5>
                            <h5 className="text-start col-lg-1  w-50" style={{fontSize:'14px', color:'#003866'}}>:&nbsp;16/45</h5>
                        </div>   
                    </div>   
                    <div className="mb-3 mx-2">  
                        <div className="row">
                            <h5 className="text-start col-lg-2 w-50" style={{fontSize:'14px', color:'#003866'}}>Score</h5>
                            <h5 className="text-start col-lg-1  w-50" style={{fontSize:'14px', color:'#003866'}}>:&nbsp; 80%</h5>
                        </div>  
                    </div>      
                    <div className="mb-3 mx-2">  
                        <div className="row justify-content-center">
                            <button type="button" className="btn w-75" style={{backgroundColor:'#40A9FF', color:'white'}}>Analyse Results </button>
                        </div>  
                    </div>     
                    <div className="mb-3 mx-2">
                       <h5 className="text-start" style={{fontSize:'17px', color:'#003866'}}>Certification</h5>
                    </div> 
                    <div className="mb-3 mx-2">  
                        <div className="row">
                            <h5 className="text-start col-lg-2 w-50" style={{fontSize:'14px', color:'#003866'}}>Ranking</h5>
                            <h5 className="text-start col-lg-1  w-50" style={{fontSize:'14px', color:'#003866'}}>:&nbsp;16/45</h5>
                        </div>   
                    </div>   
                    <div className="mb-3 mx-2">  
                        <div className="row">
                            <h5 className="text-start col-lg-2 w-50" style={{fontSize:'14px', color:'#003866'}}>Score</h5>
                            <h5 className="text-start col-lg-1  w-50" style={{fontSize:'14px', color:'#003866'}}>:&nbsp; 80%</h5>
                        </div>  
                    </div>      
                    <div className="mb-3 mx-2">  
                        <div className="row justify-content-center">
                            <button type="button" className="btn w-75" style={{backgroundColor:'#40A9FF', color:'white'}}>Analyse Results </button>
                        </div>  
                    </div>  
                    <div className="mb-3 mx-2">
                        <h5 className="text-center" style={{color:"#003866"}}>Actions</h5>

                    </div> 
                    <div className="mb-3 mx-2">  
                        <div className="row justify-content-center">
                            <button type="button" className="btn w-50" style={{backgroundColor:'#40A9FF', color:'white'}}>
                                <img src={shareIcon} alt="shareIcon" className="text-center px-2"/>Share 
                            </button>
                        </div>  
                    </div>    
                    <div className="mb-3 mx-2">  
                        <div className="row justify-content-center">
                            <button type="button" className="btn w-50" style={{backgroundColor:'#40A9FF', color:'white'}}>
                                <img src={printIcon} alt="shareIcon" className="text-center px-2"/>Print 
                            </button>
                        </div>  
                    </div>   
                    <div className="mb-3 mx-2">  
                        <div className="row justify-content-center">
                            <button type="button" className="btn w-75" style={{backgroundColor:'#40A9FF', color:'white'}}>
                                <img src={feedbackIcon} alt="shareIcon" className="text-center px-2"/>Feedback 
                            </button>
                        </div>  
                    </div>        
                </div>
            </Row>
        </Container>
    );
}
export default MySubscription