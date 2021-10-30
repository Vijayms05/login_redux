import React, {useState} from 'react'

import search from '../../images/search.png'
import playbutton from '../../images/playbutton.png'
import rectangle from '../../images/Rectangle.png'
import reactangleblue from '../../images/RectangleBlue.png'
import cardimage from '../../images/cardImage.png'
import arrowImage from '../../images/ArrowImage.png'


import Header from '../header/Header'

import polygon from '../../images/Polygon-1.png'
import polygontwo from '../../images/Polygon-2.png'
import rectangle3511 from '../../images/Rectangle-3511.png'

import arrowLeft from '../../images/arrowLeft.png'
import shareIcon from '../../images/shareIcon.png'
import feedbackIcon from '../../images/feedback.png'
import printIcon from '../../images/print.png'

// import '../sidebarpage/home/MySubscription.css';

import { history } from '../routes/Routes'
import {  Container, Col, Row, Form, Card, ProgressBar } from 'react-bootstrap'

//  import MySubscription from '../sidebarpage/home/MySubscription'

const MainContent = () =>{
    const [ show, setShow] = useState(false)
    

    const Cardclick = () =>{   
        //  e.preventDefault();  
         
       history.push('/mysubscription')
        
         console.log("button clicked")  
        
    }
    return(
        <Container fluid>   
            <Row className="mb-4 mt-4">
                <Col xs={6} md={6} lg>   
                    <Form.Group  className="m-2 w-100">
                        <img src={search} className="position-absolute " alt="icon" style={{marginLeft:'15px',marginTop:'10px'}} />  
                        <Form.Control type="text"  placeholder="Search..." size="md" className="rounded-pill p-2" />
                    </Form.Group>                
                </Col>
                <Col xs={6} md={6} lg>
                    <div className="from-group m-2 w-100">                                
                        <select className="form-select " aria-label="Default select example">
                            <option selected className="round-pill p-2">label</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>                                    
                    </div>
                </Col>
            </Row>                
                    
                         
            <div className="row mb-4 mt-4 mx-4">
                <div className="col-8">
                    <h5 style={{color:'#003866'}} >My Subscriptions</h5>    
                </div>  
                <div className="col-4">     
                    <div className="form-group mb-3">
                        <img src={search} className="position-absolute " alt="icon" style={{left:'10px',top:'10px'}} />  
                        <input type="text"  size="l" placeholder="Search..." className="form-control rounded-pill" />
                    </div>
                </div>
            </div>
            <div className="col-9 mx-4">
                <h5 className="mb-5 mx-3" style={{color:'#003866', fontSize:'20px'}}>Role based tests</h5>
            </div>
            <div  className="row mb-4 mx-4">
                <div className="col mb-3">
                <Card   onClick={Cardclick} style={{width:'13rem'}}> 
                        <Card.Body hover>
                            <Card.Title className="mb-3" style={{ color:'#00008b',fontSize:'20px'}}>
                                Class 12
                            </Card.Title>
                            <Card.Text className="text-start text-success mb-3" style={{fontSize:'15px'}}> 
                                Subscription : Active
                            </Card.Text>
                            <Card.Text className="mb-2" style={{fontSize:'15px'}}>
                                Donec sed erat ut magna suscipit mattis. Aliquam erat volutpat. 
                                Morbi in orci risus. Donec pretium
                            </Card.Text> 
                            <Card.Text className="text-start">In Process</Card.Text>
                            <ProgressBar variant="primary" now={30} label="30%" />
                            
                            <img src={rectangle} className="position-absolute" alt="icon" style={{width:'47px',height:'47px',fontSize:'15px', right:'12px',top:'8px' }}/>
                            <img src={playbutton} className="position-absolute" alt="icon" style={{fontSize:'15px', right:'26px',top:'22px' }}/>
                        </Card.Body>
                    </Card>
                </div>
                <div className="col mb-3">
                    <Card  onClick={Cardclick} style={{width:'13rem'}}> 
                        <Card.Body hover>
                            <Card.Title className="mb-3" style={{ color:'#00008b',fontSize:'20px'}}>
                                Class 12
                            </Card.Title>
                            <Card.Text className="mb-5" style={{fontSize:'15px'}}>
                                Donec sed erat ut magna suscipit mattis. Aliquam erat volutpat. 
                                Morbi in orci risus. Donec pretium
                            </Card.Text> 
                            <Card.Text className="text-start">In Process</Card.Text>
                            <ProgressBar variant="primary" now={45}label="45%" />
                            
                            <img src={rectangle} className="position-absolute" alt="icon" style={{width:'47px',height:'47px',fontSize:'15px', right:'12px',top:'8px' }}/>
                            <img src={playbutton} className="position-absolute" alt="icon" style={{fontSize:'15px', right:'26px',top:'22px' }}/>
                        </Card.Body>
                    </Card>
                </div>
                <div className="col mb-3">
                    <Card onClick={Cardclick} style={{width:'13rem'}} >                                               
                            <Card.Body >
                                <Card.Title className="mb-3" style={{ color:'#00008b',fontSize:'20px'}}>
                                    Class 12
                                </Card.Title>
                                <Card.Text className="mb-5" style={{fontSize:'15px'}}>
                                    Donec sed erat ut magna suscipit mattis. Aliquam erat volutpat. 
                                    Morbi in orci risus. Donec pretium
                                </Card.Text> 
                                <Card.Text className="text-start">In Process</Card.Text>
                                <ProgressBar variant="primary" now={60} label="60%" />
                                
                                <img src={rectangle} className="position-absolute" alt="icon" style={{width:'47px',height:'47px',fontSize:'15px', right:'12px',top:'8px' }}/>
                                <img src={playbutton} className="position-absolute" alt="icon" style={{fontSize:'15px', right:'26px',top:'22px' }}/>
                            </Card.Body> 
                        
                    </Card>
                   
                </div>
                <div className="col mb-3">
                    <Card onClick={Cardclick} style={{width:'13rem'}}> 
                        <Card.Body hover>
                            <Card.Title className="mb-3" style={{ color:'#00008b',fontSize:'20px'}}>
                                Class 12
                            </Card.Title>
                            <Card.Text className="mb-5" style={{fontSize:'15px'}}>
                                Donec sed erat ut magna suscipit mattis. Aliquam erat volutpat. 
                                Morbi in orci risus. Donec pretium
                            </Card.Text> 
                            <Card.Text className="text-start">In Process</Card.Text>
                            <ProgressBar variant="primary" now={80} label="80%" />

                            <img src={reactangleblue} className="position-absolute" alt="icon" style={{width:'47px',height:'47px',fontSize:'15px', right:'12px',top:'8px' }}/>
                        
                        <img src={playbutton} className="position-absolute" alt="icon" style={{fontSize:'15px', right:'26px',top:'22px' }}/>
                        </Card.Body>
                    </Card>
                </div>
                <div className="col mb-3">
                    <Card   onClick={Cardclick} style={{width:'13rem'}}> 
                        <Card.Body hover>
                            <Card.Title className="mb-3" style={{ color:'#00008b',fontSize:'20px'}}>
                                Class 12
                            </Card.Title>
                            
                            <Card.Text className="mb-5" style={{fontSize:'15px'}}>
                                Donec sed erat ut magna suscipit mattis. Aliquam erat volutpat. 
                                Morbi in orci risus. Donec pretium
                            </Card.Text> 
                            <Card.Text className="text-start">In Process</Card.Text>
                            <ProgressBar variant="primary" now={95} label="95%" />
                            
                            <img src={reactangleblue} className="position-absolute" alt="icon" style={{width:'47px',height:'47px',fontSize:'15px', right:'12px',top:'8px' }}/>
                        
                        <img src={playbutton} className="position-absolute" alt="icon" style={{fontSize:'15px', right:'26px',top:'22px' }}/>
                        </Card.Body>
                    </Card>
                </div>               
            </div>
            <div className="row mb-3 mx-4">
                <div className="col-9" lg={12}>
                    <h5 className="text-start" style={{color:'#003866', fontSize:'20px'}}>Book-Qs</h5>
                </div>
            </div>
            <div className="row mx-4 mb-3">
                <div className="col">
                    {/* <Card style={{width:'225px', height:'290px',display:'flex'}}> */}
                        <div >
                            <img src={cardimage} className="position-relative" style={{width:'200px'}}
                                alt="..."/>     
                        
                            <img src={rectangle} className="position-absolute" alt="icon" 
                            style={{width:'47px',height:'47px',fontSize:'15px', marginLeft:'-126px',marginTop:'105px',justifyContent:'center',alignItems:'center' }}/>
                            <img src={playbutton} className="position-absolute" alt="icon" 
                            style={{fontSize:'18px', marginLeft:'-107px',marginTop:'120px'}}/>
                        </div>
                    {/* </Card> */}
                </div>
                <div className="col" >                                     
                        <img src={arrowImage} className=" position-relative" style={{width:'200px'}}
                            alt="..."/>                      
                        <img src={rectangle} className="position-absolute" alt="icon" 
                            style={{width:'47px',height:'47px',fontSize:'15px', marginLeft:'-125px',marginTop:'100px',justifyContent:'center',alignItems:'center' }}/>
                        <img src={playbutton} className="position-absolute" alt="icon" 
                            style={{fontSize:'18px',  marginLeft:'-110px',marginTop:'115px'}}/>                                        
                </div>
            </div>          
        </Container>
            
          
    );
}

export default MainContent