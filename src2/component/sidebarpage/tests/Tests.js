import React from 'react'
import { Tabs, Tab, Row, Col,Card, Button, Container,Form, Table } from 'react-bootstrap'
// import rightArrow from '../../../images/ar'
import arrow from '../../../images/arrow.png'

import Baseline from './Baseline';
import Certification from './Certification';
import SkillBuildingtest  from './SkillBuildingtest';
const Tests =() =>{
    return(
        <Container fluid >
            <Row>
                <Col>
                    <h5 className="mt-5 mx-4 mb-5" style={{color:'#003866'}}>Tests</h5>
                    <div className="mb-3 mx-4 col-lg-4">
                        <div class="input-group ">                       
                            <select class="form-select">
                                <option selected>Select Role/ Book-Qs</option>
                                <option>France</option>
                                <option>Germany</option>
                                <option>Hungary</option>
                            </select>
                        </div>  
                    </div>
                    <div className="mb-5 mx-4 border">
                        <Tabs
                            defaultActiveKey="baseline"
                            transition={false}
                            id="noanim-tab-example"
                            className="mb-3 "
                        >
                            <Tab eventKey="baseline" title="Baseline">
                                <Baseline />
                            </Tab>
                            <Tab eventKey="skillbuildingtest" title="Skill Building">
                                <SkillBuildingtest />
                            </Tab>
                            <Tab eventKey="certification" title="Certification" >
                                <Certification />
                            </Tab>
                        </Tabs>
                    </div> 
                </Col>
            </Row>
        </Container>
    );
}



   

// const Paymentmethod =()=>{
//     return(
//         <div className="mx-4 text-center">    
//             <div className="mt-4">
//                 <h5 className="text-start">Credit Card Details</h5>
//             </div>
//             <div class="mb-4 ">                            
//                 <div className="input-group mt-3 mb-3">
//                     <input type="text" class="form-control form-control-lg" 
//                         placeholder="Name"/>
//                 </div>                   
//             </div>
//             <div class="mb-4 ">                            
//                 <div className="input-group mt-3 mb-3">
//                     <input type="text" class="form-control form-control-lg" 
//                         placeholder="Card Number"/>
//                 </div>                 
//             </div>
//             <div class="mb-4 ">                            
//                 <div className="input-group mt-3 mb-3">
//                     <input type="text" class="form-control form-control-lg" 
//                         placeholder="CVV"/>
//                 </div>                    
//             </div>
//         </div>
//     )
// }

// const OrganiasationalDetails = () =>{
//     return(
//         <div className="mx-4 mt-3 mb-3 ">    

//                 <p className="text-start  mb-3 "  >Organization Name    : Name</p>
//                 <p className="text-start  mb-3 " >Organization ID      : 56BSC2021</p>
//                 <p className="text-start  mb-3 " >Organization Role    :  Designer</p>
           
//         </div>
//     )
// }
// const Help=()=>{
//     return(
//         <div className="mt-3">
//             <Col lg={6} className="mb-3 mt-5 mx-4">
//                 <Row className="mb-3">
//                     <Col>Privacy Policy</Col>
//                     <Col>
//                         <button className="btn" style={{backgroundColor:'#298EE0',color:'white'}}>Click Here</button>
//                     </Col>
//                 </Row>
//                 <Row className="mb-3">
//                     <Col>Terms of Conditions</Col>
//                     <Col>
//                         <button className="btn" style={{backgroundColor:'#298EE0',color:'white'}}>Click Here</button>
//                     </Col>
//                 </Row>
//                 <Row className="mb-3">  
//                     <Col>Contact Us</Col>
//                     <Col>
//                         <button className="btn" style={{backgroundColor:'#298EE0',color:'white'}}>Click Here</button>
//                     </Col>
//                 </Row>
//             </Col>
//             <h4 className="text-start mb-3 mx-2" style={{color:'#003866'}}>
//                 Frequently Asked Questions
//             </h4>
//             <p className="text-start mb-3 mx-2">Q1.1  Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. 
//                 Velit officia consequat duis enim velit mollit. 
//                 Exercitation veniam consequat sunt nostrud amet.
//             </p>
//             <p className="text-start mb-3 mx-2">Ans) Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. 
//             Exercitation veniam consequat sunt nostrud amet.
//             </p>
//         </div>
//     )
// }

export default Tests