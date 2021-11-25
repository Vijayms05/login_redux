import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
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
import { message } from 'antd'

const Onboardingstudent = (props) =>{
  const [student, setStudent]=useState('')      
  
  console.log('Student',student)
  const history = useHistory();
  
  const onBoard = (e) =>{
      e.preventDefault();  
      if(student === 'student')  {
        history.push('/student')
        message.success('Welcome to Student Page')
      }else if(student === 'professional'){ 
        history.push('/professional')
        message.success('Welcome to Professional Page')
      }  
      console.log(student)

  }
    return(
      <div className="student-prof text-center">      
        <div className="d-lg-flex m-auto">
          <Col sm={4} md={4} lg={4}  xl={4} className="p-3 text-center m-auto">
            <Professionalbook />                       
          </Col>          
          <Col sm={4} md={4} lg={4}  xl={4} className="p-3 p-lg-0 text-center m-auto">
            <Logo />
            <h3 className="onboarding-heading mt-5 forget-header">Create account as a</h3>
            <p className="onboarding-p login-sub-header">We will personalise this platform accordingly</p>                 
            <Row className="mb-3 gx-2">
              <Col>
                <Card onClick={e =>setStudent("student")} className="top-stud-proof" >
                    <Card.Body className="stud-prof">
                      <FrameLogo />
                      <Card.Title className='mt-2 ms-1 onboarding-title' style={{color:'#0b171b'}}>Student</Card.Title>
                      <Card.Text className="mt-1 ms-1 onboarding-text">
                        Use our syllabus based practice tests to get ahead of your class
                      </Card.Text>   
                      <Form>
                        <Form.Check 
                          type="radio" 
                          className="form-check-inp"
                          value="student"
                          checked={student === "student" ? true: false}  
                        />
                      </Form>                      
                  </Card.Body> 
                </Card> 
              </Col>
              <Col  >
                <Card onClick={e=>setStudent("professional")} className="top-stud-proof">
                    <Card.Body className="stud-prof">
                      <FrameOneLogo />
                      <Card.Title className='mt-2 ms-1  onboarding-title' style={{color:'#0b171b'}}>Professional</Card.Title>
                      <Card.Text className="mt-1 ms-1 onboarding-text">
                        Use our skill-certification tests to measure where you stand
                      </Card.Text>
                      <Form>
                        <Form.Check 
                          type="radio" 
                          className="form-check-inp"
                          value="professional"
                          checked={student === "professional" ? true : false }                                                     
                          />
                      </Form>                                   
                  </Card.Body>
                </Card>
              </Col>                
            </Row> 
            <Col>
              <Button   
                className="submit-btn onboard-btn mt-3 mb-2"
                onClick={onBoard}
              >        
                Continue                     
              </Button> 
            </Col>
          </Col>  
          <Col sm={4} md={4} lg={4}  xl={4} className="p-3 text-center m-auto  ">
            <Readingbook />                       
          </Col>
        </div>                   
    </div>
    )
}
export default Onboardingstudent