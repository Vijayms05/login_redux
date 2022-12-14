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
import { useDispatch, useSelector } from 'react-redux'
import { set_Role } from '../../redux/action'

const Onboardingstudent = (props) => {
  const email = useSelector(state => state.loginReducer);
  const dispatch = useDispatch();

  const [student, setStudent] = useState('');
  const [role, setRole] = useState('student');
  const history = useHistory();

  const onBoard = (e) => {
    // e.preventDefault();  
    if (role == 'student') {
      // dispatch(set_Role(role));
      history.push('/student');
      // message.success('Welcome to Student Page', 5)
    } else if (role == 'professional') {
      // dispatch(set_Role(role));
      history.push('/professional');
      // message.success('Welcome to Professional Page', 5)
    }
  }
  return (
    <div className="student-prof text-center">
      <div className="d-lg-flex m-auto" >{/**/}
        <Col className="p-3 text-center m-auto">
          <Professionalbook />
        </Col>
        <Col className="p-3 p-lg-0 text-center m-auto">
          <Logo />
          <h3 className="onboarding-heading mt-5">Create account as a</h3>
          <p className="onboarding-p mt-1">We will personalise this platform accordingly</p>
          <Row className="d-sm-flex flex-wrap-inherit ">
            <Col>
              <Card onClick={e => setRole("student")} className="top-stud-proof mb-2">{/*className="top-stud-proof"*/}
                <Card.Body className="stud-prof auto">{/*className="stud-prof" */}
                  <FrameLogo />
                  <Card.Title className='mt-2 ps-1 onboarding-title text-start' style={{ color: '#0b171b' }}>Student</Card.Title>
                  <Card.Text className="mt-1 ps-1 onboarding-text text-start">
                    Use our syllabus based practice tests to get ahead of your class
                  </Card.Text>
                  <Form>
                    <Form.Check
                      type="radio"
                      className="form-check-inp"
                      value="student"
                      checked={role === "student" ? true : false}
                    />
                  </Form>
                </Card.Body>
              </Card>
            </Col>
            <Col >
              <Card onClick={e => setRole("professional")} className="top-stud-proof mb-2" >
                <Card.Body className="stud-prof">
                  <FrameOneLogo />
                  <Card.Title className='mt-2 ps-1 onboarding-title text-start' style={{ color: '#0b171b' }}>
                    Professional
                  </Card.Title>
                  <Card.Text className="mt-1 ps-1 onboarding-text text-start">
                    Use our skill-certification tests to measure where you stand
                  </Card.Text>
                  <Form>
                    <Form.Check
                      type="radio"
                      className="form-check-inp"
                      value="professional"
                      checked={role === "professional" ? true : false}
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
        <Col className="p-3 text-center m-auto ">
          <Readingbook />
        </Col>
      </div>
    </div>
  )
}
export default Onboardingstudent