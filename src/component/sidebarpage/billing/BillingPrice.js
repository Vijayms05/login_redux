import React from 'react'
import  './BillingPrice.css'

import polygon from '../../../images/Polygon-1.png'
import polygontwo from '../../../images/Polygon-2.png'
import rectangle3511 from '../../../images/Rectangle-3511.png'
import { Container, Row, Col, Card } from 'react-bootstrap'

const BillingPrice=()=>{
    return(
        <Container fluid>
            <Row>
                <Col xs={10}>   
                    <p className=" m-4 ms-4 fs-2 mb-4 fw-bold" style={{color:'#003866'}}>Billing</p>                
                    <Card className="subscription-card mb-4 ms-4 ">
                        <Row>
                            <Col> 
                                <p className="p-1 fw-bold " style={{color:'#298EE0',textAlign:'center',marginTop:'60px',fontSize:'35px'}}>Class 12</p>
                            </Col>
                            <Col  className="text-center">
                                <p className="mt-2 fw-bold" style={{fontSize:'18px'}}>Your Current Plan </p>
                                <p className="mt-3 fs-1" style={{fontSize:'35px'}}>Free</p>
                                {/* <Row >
                                    <Col className="col mt-0">
                                        <p className="fw-bold p-1" style={{color:'#298EE0',fontSize:'30px'}}>45</p>
                                    </Col>
                                    <Col className="col">
                                        <p className="fw-bold p-1" style={{color:'#298EE0',fontSize:'32px'}}>Free</p>
                                    </div>
                                </Row> */}
                                {/* <div className="text-center mb-2 mt-0">
                                    <button type="submit" className="btn btn-primary ">Go to Billing</button>
                                </div>                                    */}
                            </Col>
                            <Col>
                                <div className="billing-lefttriangle" 
                                    style={{left:'498px', borderBottom: '188px solid #298EE0',
                                    borderLeft: '174px solid transparent'  }}
                                ></div>
                                <div  
                                    style={{ position: "absolute",width: '98.8px', height:' 131.82px', left: '527px',
                                    top: '16px',boxShadow: 'inset -5.16938px 0px 0px rgba(0, 0, 0, 0.1)', borderRadius: '11.8157px',background: '#8FB2BE'}}
                                ></div>
                                {/* <div className="rectangle-3517"></div> */}
                                <div className="position-absolute" 
                                    style={{ width: '12.55px',height:'12.55px', left:'525.32px',top:'34.03px',background: '#E9FFFF', boxShadow:'inset 2.21545px 0px 0px rgba(0, 0, 0, 0.25)'}}
                                ></div>
                                <div className="position-absolute" 
                                    style={{    width:'12.55px',height:'12.55px',left:'525.32px',  top:'63.2px',background:'#E9FFFF',  boxShadow:'inset 2.21545px 0px 0px rgba(0, 0, 0, 0.25)'}}
                                ></div>
                                <div className="position-absolute" 
                                    style={{ width:'12.55px',height:'12.55px',left:'525.32px',top:'92.37px',background:'#E9FFFF',boxShadow:'inset 2.21545px 0px 0px rgba(0, 0, 0, 0.25)'}}
                                ></div>
                                <div className="position-absolute" 
                                    style={{width:'12.55px',height:'12.55px',left:'525.32px',top:'121.54px',background:'#E9FFFF',boxShadow:'inset 2.21545px 0px 0px rgba(0, 0, 0, 0.25)'}}
                                ></div>
                                <div className="position-absolute" 
                                    style={{width:'9.82px',height:'4.43px',left:'525.32px',top:'125.6px',background:'#3F616D',borderRadius: '0px 5.90786px 5.90786px 0px'}}
                                ></div>
                                <div className="position-absolute" 
                                    style={{width:'9.82px',height:'4.43px',left:'525.32px',top:'96.43px',background:'#3F616D',borderRadius: '0px 5.90786px 5.90786px 0px'}}
                                ></div>
                                <div className="position-absolute" 
                                    style={{width:'9.82px',height:'4.43px',left:'525.32px',top:'67.26px',background:'#3F616D',borderRadius: '0px 5.90786px 5.90786px 0px'}}
                                ></div>
                                <div className="position-absolute" 
                                    style={{width:'9.82px',height:'4.43px',left:'525.32px',top:'38.09px',background:'#3F616D',borderRadius: '0px 5.90786px 5.90786px 0px'}}
                                ></div>
                                <div className="position-absolute" 
                                    style={{width:'59.45px',height:'25.85px',left:'548px',top: '48.74px',background: '#C1DEE7',borderRadius:'5.90786px'}}
                                ></div>
                                <div className="position-absolute" 
                                    style={{top:'122.94px',width: '52.06px',height: '5.54px',left: '550px', background: '#C1DEE7', borderRadius: '5.90786px'}}
                                ></div>
                                <div className="position-absolute" 
                                    style={{top: '104.48px',width: '52.06px',height: '5.54px',left: '550px',background: '#C1DEE7',borderRadius: '5.90786px'}}
                                ></div>
                                <div className="position-absolute" 
                                    style={{top: '113.71px', width: '52.06px',height: '5.54px',left: '550px',background: '#C1DEE7',borderRadius: '5.90786px'}}
                                ></div>
                                <div className="position-absolute" 
                                    style={{width: '6.75px',height: '21.51px',left:'630.41px',top:'98.09px',background: '#4DD188'}}
                                ></div>
                                <div className="position-absolute"style={{width: '6.75px',height:'43.44px',left:'630.41px',top:'54.65px',
                                    background: '#C4FFDE'}}
                                ></div> 
                                <img src={polygon} className="position-absolute" alt="ploygon" 
                                    style={{left:'590.45px',top:'140px',width:'30px'}}  
                                />
                                <img src={polygontwo} className="position-absolute" alt="ploygon" 
                                    style={{left:'637.45px',top:'88px',width:'35px'}}  
                                />
                                <img src={rectangle3511} className="position-absolute" alt="ploygon" 
                                    style={{left:'518px',top:'162px',width:'28px'}}  
                                />                                
                            </Col>
                        </Row>
                    </Card>
                    
                    
               
                
                    <Row >
                        <Col xs={6} >
                            <p className="mt-5 mb-3 ms-3 fs-4" style={{color:'#003866',fontWeight:'bold'}}>Upgrade Now</p>
                            <p className="mb-3 ms-3">Select Plan Validity</p>
                            <div className="ms-3 mb-5 w-75">
                                <select class="form-select" aria-label="Default select example">
                                    <option selected>Open this select menu</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </div>
                            <p className="ms-3 mb-3">What You get</p>
                            <p className="mb-3 ms-3">For most businesses that want <br /> to otpimize web queries</p>
                            <div className="form-check ms-3 mb-3">
                                <input className="form-check-input  m-2 " type="checkbox" style={{width:'25px',height:'25px',color:'#003866'}} />
                                <label className="m-2 " style={{color:'#003866'}}>All limited links</label>
                            </div>
                            <div className="form-check ms-3 mb-3">
                                <input className="form-check-input  m-2 " type="checkbox" style={{width:'25px',height:'25px' ,color:'#003866'}} />
                                <label className="m-2 "  style={{color:'#003866'}}>Own analytics platform</label>
                            </div>
                            <div className="form-check ms-3 mb-3">
                                <input className="form-check-input  m-2 " type="checkbox" style={{width:'25px',height:'25px',color:'#003866'}} />
                                <label className="m-2 "  style={{color:'#003866'}}>Chat support</label>
                            </div>
                            <div className="form-check ms-3 mb-3">
                                <input className="form-check-input  m-2 " type="checkbox" style={{width:'25px',height:'25px',color:'#003866'}} />
                                <label className="m-2 "  style={{color:'#003866'}}>Optimize hashtags</label>
                            </div>
                            <div className="form-check ms-3 mb-3">
                                <input className="form-check-input  m-2 " type="checkbox" style={{width:'25px',height:'25px',color:'#003866'}} />
                                <label className="m-2 "  style={{color:'#003866'}}>Unlimited users</label>
                            </div>
                        </Col>
                        
                        <Col xs={6}>
                            <p className="mt-5 ms-3 mb-2 fs-4" style={{color:'#003866',fontWeight:'bold'}}>Total</p>
                            <p className="mb-3 ms-3" style={{color:'#4DD188',fontWeight:'bold',fontSize:'85px'}}>Rs 450</p>
                            <div className="card text-center mb-4" style={{width:'450px',height:'210px'}}>
                                <div className="card-body">
                                    <div className="card-title mb-3" style={{color:'#003866', fontWeight:'bold', fontSize:'20px'}}>Price Breakdown</div>
                                    <div className="row mb-3 ms-3">
                                        <div className="col">
                                            <div className="card-text">Plan Cost</div>                                    
                                        </div>
                                        <div className="col">
                                            <div className="card-text">Rs 400</div>
                                        </div>
                                    </div>
                                    <div className="row mb-3 ms-3">
                                        <div className="col">
                                            <div className="card-text">Gst 18%</div>
                                        </div>
                                        <div className="col">
                                            <div className="card-text">Rs 50</div>
                                        </div>
                                    </div>
                                    <div><hr className="w-75 ms-5" /></div>
                                    <div className="row mb-5 ms-3">
                                        <div className="col">
                                            <div className="card-text">Total</div>
                                        </div>
                                        <div className="col">
                                            <div className="card-text">Rs 450</div>
                                        </div>
                                    </div>
                                </div>                            
                            </div>
                            <div className="ms-5">
                                <button className="btn w-50" type="submit" style={{backgroundColor:'#4DD188', color:'white'}}>Buy Now</button>
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}
export default BillingPrice