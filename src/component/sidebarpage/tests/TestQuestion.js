import React from "react";
import { Card, Col, Container, ProgressBar, Row } from "react-bootstrap";
import testLogo from "../../../images/test_logo.png"
import './TestQuestion.css'
import circleLeft from '../../../images/circle-left.png'
import circleRight from '../../../images/circle-right.png'

const TestQuestion =()=>{
    return(
        <div className="container-fluid">
            <div className="row">
                <div className="col-3 col-md-3 col-sm-4" style={{borderRight:'1px solid lightgrey'}} >                    
                    <div className=" col-12 mb-5 mt-5 mx-4" >
                        <img src={testLogo} alt="test logo" />
                    </div>                    
                    <div className="row">
                        <div className="col-12">
                            <h4 style={{color:'#003866'}}>Test Name</h4>
                            <p style={{color:'#298EE0'}}>Subject name</p>
                        </div>
                        <div className="col-12">
                            <div className="wrapper">
                                <div className="circle"></div>
                            </div>
                        </div>
                    </div>
                    <div className="row mb-3">
                       <div className="col-sm-1">
                            <div style={{width:'35px',height:'35px',borderRadius:'10px',backgroundColor:'green'}}>
                                <p className="position-absolute mx-2 p-1" style={{color:'white', fontSize:'18px'}}>9</p>
                            </div>                            
                       </div>
                       <div className="col-sm-3">
                            <div style={{fontSize:'18px'}}>
                                <p className="position-absolute m-1" >Answerd</p>
                            </div>
                        </div>
                        <div className="col-sm-1">
                            <div style={{width:'35px',height:'35px',borderRadius:'10px',backgroundColor:'green'}}>
                                <p className="position-absolute mx-2 p-1" style={{color:'white', fontSize:'18px'}}>1</p>
                            </div>
                            
                       </div>
                       <div className="col-sm-3">
                            <div style={{fontSize:'20px'}}>
                                <p className="position-absolute m-1" >Current question</p>
                            </div>
                        </div>

                    </div>
                    <div className="row mb-5">
                       <div className="col-sm-1">
                            <div style={{width:'35px',height:'35px',borderRadius:'10px',backgroundColor:'green'}}>
                                <p className="position-absolute mx-2 p-1" style={{color:'white', fontSize:'20px'}}>2</p>
                            </div>
                            
                       </div>
                       <div className="col-sm-3">
                            <div style={{fontSize:'18px'}}>
                                <p className="position-absolute m-1" >Not answerd</p>
                            </div>
                        </div>
                        <div className="col-sm-1">
                            <div style={{width:'35px',height:'35px',borderRadius:'10px',backgroundColor:'green'}}>
                                <p className="position-absolute mx-1 p-1" style={{color:'white', fontSize:'20px'}}>12</p>
                            </div>                            
                       </div>
                       <div className="col-sm-3">
                            <div style={{fontSize:'20px'}}>
                                <p className="position-absolute m-1" >Not visited</p>
                            </div>
                        </div>
                    </div>
                    <div className="row mb-3">
                       <div className="col-sm-1 mx-3">
                            <div style={{width:'35px',height:'35px',borderRadius:'10px',backgroundColor:'green'}}>
                                <p className="position-absolute mx-2 p-1" style={{color:'white', fontSize:'20px'}}>2</p>
                            </div>                            
                       </div>      
                       <div className="col-sm-1 mx-3">
                            <div style={{width:'35px',height:'35px',borderRadius:'10px',backgroundColor:'green'}}>
                                <p className="position-absolute mx-2 p-1" style={{color:'white', fontSize:'20px'}}>2</p>
                            </div>                            
                       </div>                    
                       <div className="col-sm-1 mx-3">
                            <div style={{width:'35px',height:'35px',borderRadius:'10px',backgroundColor:'green'}}>
                                <p className="position-absolute mx-2 p-1" style={{color:'white', fontSize:'20px'}}>2</p>
                            </div>                            
                       </div>   
                       <div className="col-sm-1 mx-3">
                            <div style={{width:'35px',height:'35px',borderRadius:'10px',backgroundColor:'green'}}>
                                <p className="position-absolute mx-2 p-1" style={{color:'white', fontSize:'20px'}}>2</p>
                            </div>                            
                       </div>   
                       <div className="col-sm-1 mx-3">
                            <div style={{width:'35px',height:'35px',borderRadius:'10px',backgroundColor:'green'}}>
                                <p className="position-absolute mx-2 p-1" style={{color:'white', fontSize:'20px'}}>2</p>
                            </div>                            
                       </div>   
                    </div>
                    <div className="row mb-3 ">
                       <div className="col-sm-1 mx-3">
                            <div style={{width:'35px',height:'35px',borderRadius:'10px',backgroundColor:'green'}}>
                                <p className="position-absolute mx-2 p-1" style={{color:'white', fontSize:'20px'}}>2</p>
                            </div>                            
                       </div>      
                       <div className="col-sm-1 mx-3">
                            <div style={{width:'35px',height:'35px',borderRadius:'10px',backgroundColor:'green'}}>
                                <p className="position-absolute mx-2 p-1" style={{color:'white', fontSize:'20px'}}>2</p>
                            </div>                            
                       </div>                    
                       <div className="col-sm-1 mx-3">
                            <div style={{width:'35px',height:'35px',borderRadius:'10px',backgroundColor:'green'}}>
                                <p className="position-absolute mx-2 p-1" style={{color:'white', fontSize:'20px'}}>2</p>
                            </div>                            
                       </div>   
                       <div className="col-sm-1 mx-3">
                            <div style={{width:'35px',height:'35px',borderRadius:'10px',backgroundColor:'green'}}>
                                <p className="position-absolute mx-2 p-1" style={{color:'white', fontSize:'20px'}}>2</p>
                            </div>                            
                       </div>   
                       <div className="col-sm-1 mx-3">
                            <div style={{width:'35px',height:'35px',borderRadius:'10px',backgroundColor:'green'}}>
                                <p className="position-absolute mx-2 p-1" style={{color:'white', fontSize:'20px'}}>2</p>
                            </div>                            
                       </div>   
                    </div>
                    <div className="row mb-3">
                       <div className="col-sm-1 mx-3">
                            <div style={{width:'35px',height:'35px',borderRadius:'10px',backgroundColor:'green'}}>
                                <p className="position-absolute mx-2 p-1" style={{color:'white', fontSize:'20px'}}>2</p>
                            </div>                            
                       </div>      
                       <div className="col-sm-1 mx-3">
                            <div style={{width:'35px',height:'35px',borderRadius:'10px',backgroundColor:'green'}}>
                                <p className="position-absolute mx-2 p-1" style={{color:'white', fontSize:'20px'}}>2</p>
                            </div>                            
                       </div>                    
                       <div className="col-sm-1 mx-3">
                            <div style={{width:'35px',height:'35px',borderRadius:'10px',backgroundColor:'green'}}>
                                <p className="position-absolute mx-2 p-1" style={{color:'white', fontSize:'20px'}}>2</p>
                            </div>                            
                       </div>   
                       <div className="col-sm-1 mx-3">
                            <div style={{width:'35px',height:'35px',borderRadius:'10px',backgroundColor:'green'}}>
                                <p className="position-absolute mx-2 p-1" style={{color:'white', fontSize:'20px'}}>2</p>
                            </div>                            
                       </div>   
                       <div className="col-sm-1 mx-3">
                            <div style={{width:'35px',height:'35px',borderRadius:'10px',backgroundColor:'green'}}>
                                <p className="position-absolute mx-2 p-1" style={{color:'white', fontSize:'20px'}}>2</p>
                            </div>                            
                       </div>   
                    </div>
                    <div className="row mb-3">
                       <div className="col-sm-1 mx-3">
                            <div style={{width:'35px',height:'35px',borderRadius:'10px',backgroundColor:'green'}}>
                                <p className="position-absolute mx-2 p-1" style={{color:'white', fontSize:'20px'}}>2</p>
                            </div>                            
                       </div>      
                       <div className="col-sm-1 mx-3">
                            <div style={{width:'35px',height:'35px',borderRadius:'10px',backgroundColor:'green'}}>
                                <p className="position-absolute mx-2 p-1" style={{color:'white', fontSize:'20px'}}>2</p>
                            </div>                            
                       </div>                    
                       <div className="col-sm-1 mx-3">
                            <div style={{width:'35px',height:'35px',borderRadius:'10px',backgroundColor:'green'}}>
                                <p className="position-absolute mx-2 p-1" style={{color:'white', fontSize:'20px'}}>2</p>
                            </div>                            
                       </div>   
                       <div className="col-sm-1 mx-3">
                            <div style={{width:'35px',height:'35px',borderRadius:'10px',backgroundColor:'green'}}>
                                <p className="position-absolute mx-2 p-1" style={{color:'white', fontSize:'20px'}}>2</p>
                            </div>                            
                       </div>   
                       <div className="col-sm-1 mx-3">
                            <div style={{width:'35px',height:'35px',borderRadius:'10px',backgroundColor:'green'}}>
                                <p className="position-absolute mx-2 p-1" style={{color:'white', fontSize:'20px'}}>2</p>
                            </div>                            
                       </div>   
                    </div>
                    <div className="row mb-5">
                       <div className="col-sm-1 mx-3">
                            <div style={{width:'35px',height:'35px',borderRadius:'10px',backgroundColor:'green'}}>
                                <p className="position-absolute mx-2 p-1" style={{color:'white', fontSize:'20px'}}>2</p>
                            </div>                            
                       </div>      
                       <div className="col-sm-1 mx-3">
                            <div style={{width:'35px',height:'35px',borderRadius:'10px',backgroundColor:'green'}}>
                                <p className="position-absolute mx-2 p-1" style={{color:'white', fontSize:'20px'}}>2</p>
                            </div>                            
                       </div>                    
                       <div className="col-sm-1 mx-3">
                            <div style={{width:'35px',height:'35px',borderRadius:'10px',backgroundColor:'green'}}>
                                <p className="position-absolute mx-2 p-1" style={{color:'white', fontSize:'20px'}}>2</p>
                            </div>                            
                       </div>   
                       <div className="col-sm-1 mx-3">
                            <div style={{width:'35px',height:'35px',borderRadius:'10px',backgroundColor:'green'}}>
                                <p className="position-absolute mx-2 p-1" style={{color:'white', fontSize:'20px'}}>2</p>
                            </div>                            
                       </div>                           
                    </div>
                    <div className="row mb-5">
                        <div className="col-12">
                            <p className="m-3">Question 12 of 24</p>
                            <div class="progress mx-2 w-75">
                                <div class="progress-bar" style={{width:"70%"}}>70%</div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 mb-2 d-grid w-75">
                            <button className="btn p-2" style={{backgroundColor:'#40A9FF',color:'white', fontSize:'18px'}}>View test instructions</button>
                        </div>
                        <div className="col-12 d-grid mb-5 mt-2 w-75">
                        <button className="btn" style={{backgroundColor:'#FF3E3E',color:'white', fontSize:'18px'}}>Finish test</button>
                        </div>
                    </div>
                  
                </div>
                <div className="col-8 col-md-8 col-sm-7 col-12" >
                    <div style={{marginTop:"180px",marginLeft:'52px'}} className=" card text-question-card  p-3">
                        <div className="card-title mt-5 fs-5 text-center">Q1  Who is the prime minister of india ?  </div>
                        <div className="card-text mb-3 text-center" style={{color:'#8FB2BE'}}>Description : find out who is the prime minister of india</div>
                        <div className="card-body">
                            <div className="question">
                                <div className="text-center">                                  
                                    <div><p className="position-absolute option" >A </p>   </div>
                                    <p className="text-start p-2" style={{marginLeft:'75px',color:'#8FB2BE'}}>Jawarlal Nehru</p>
                                </div>
                            </div>
                            <div className="question">
                                <div className="text-center">
                                    <p className="position-absolute option">B </p>   
                                    <p className="text-start p-2" 
                                    style={{marginLeft:'75px' ,color:'#8FB2BE'}}>Current question</p>
                                </div>
                            </div>
                            <div className="question">
                                <div className="text-center">
                                    <p className="position-absolute option">C </p>                                        
                                    <p className="text-start p-2" style={{marginLeft:'75px' ,color:'#8FB2BE'}}>Current question</p>
                                </div>
                            </div>
                            <div className="question">
                                <div className="text-center">                                    
                                    <p className="position-absolute option">D </p>                                    
                                    <p className="text-start p-2" style={{marginLeft:'75px' ,color:'#8FB2BE'}}>Current question</p>
                                </div>
                            </div>
                            <div className="row" >
                                <div className="col">
                                    <a className="btn " style={{backgroundColor:'#40A9FF', color:'white',borderRadius:'15px'}}>
                                        <img src={circleLeft} alt="" style={{color:'white', padding: '10px'}}/>
                                            Previous
                                    </a>
                                </div>
                                <div className="col">                                    
                                    <a className="btn mx-3" style={{backgroundColor:'green', color:'white',borderRadius:'15px',marginRight:'10px'}}>
                                        Next
                                        <img src={circleRight} alt="" style={{color:'white', padding: '10px'}}/>   
                                    </a>                                
                                    <a style={{ color:'green',fontSize:'20px', padding:'10px'}} > Skip </a>
                                    <span className="dots mx-2"></span>
                                    <span className="dots"></span>                                        
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )   
}
export default TestQuestion;