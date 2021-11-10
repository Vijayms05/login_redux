import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import {
  Logo,
  Readingbook,
  Professionalbook,
  FrameLogo,
  FrameOneLogo,
} from '../../assets/images/index'

import './style.css'
import {
  Col,
  Row,
  Card,
  Form,
  Container,
  Button
} from 'react-bootstrap'

const Onboardingstudent = (props) =>{
  const [student, setStudent]=useState('')      
  
  console.log('Student',student)
  const history = useHistory();

  const toggleClick = e =>{
      e.preventDefault();  
      if(student === 'student')  {
        history.push("/student")
        // console.log(student)
      }else if(student === 'professional'){
        history.push("/professional")
      }         
  }
    return(
      <div className="student-prof">      
        <div className="d-lg-flex m-auto">
          <Col xs={12} lg={4} className="p-3 text-center m-auto">
            <Professionalbook />                       
          </Col>          
          <Col xs={12} lg={4} className="p-3 p-lg-0 text-center m-auto">
            <Logo />
            <h3 className="onboarding-heading mt-5">Create account as a</h3>
            <p className="onboarding-p">We will personalise this platform accordingly</p>                 
            <Row className="mb-3 gx-2">
              <Col xs={12} md={6}>
                <Card onClick={e =>setStudent("student")} className="w-100" >
                    <Card.Body className="stud-prof">
                      <FrameLogo />
                      <Card.Title className='mt-3 ms-2 onboarding-title'>Student</Card.Title>
                      <Card.Text className="mt-2 ms-2 onboarding-text">
                        Use our syllabus based practice tests to get ahead of your class
                      </Card.Text>   
                      <Form>
                        <Form.Check 
                          type="radio" 
                          className="position-absolute" style={{top:'25px',right:'25px'}}
                          value="student"
                          checked={student === "student" ? true: false}  
                        />
                      </Form>                      
                  </Card.Body> 
                </Card> 
              </Col>
              <Col xs={12} md={6}>
                <Card onClick={e=>setStudent("professional")}>
                    <Card.Body className="stud-prof">
                      <FrameOneLogo />
                      <Card.Title className='mt-3 ms-2 onboarding-title'>Professional</Card.Title>
                      <Card.Text className="mt-2 ms-2 onboarding-text">
                      Use our skill-certification tests to measure where you stand
                      </Card.Text>
                      <Form>
                        <Form.Check 
                          type="radio" 
                          className="position-absolute" style={{top:'25px',right:'25px'}}
                          value="professional"
                          checked={student === "professional" ? true : false }                                                     
                          />
                      </Form>                                   
                  </Card.Body>
                </Card>
              </Col>                
            </Row> 
            <Col>
              <Button  className="onboarding-button mt-3 mb-2" onClick={toggleClick}>       {/* to="/student" */}        
                Continue                     
              </Button> 
            </Col>
          </Col>
          <Col xs={12} lg={4} className="p-3 text-center m-auto">
            <Readingbook />                       
          </Col>
        </div>                   
    </div>
    )
}
export default Onboardingstudent