import React,{useState} from 'react'

import '../../style/Signup.css'
import { Link } from 'react-router-dom'
import { ResetpasswordImage, Logo } from '../logo/index'

import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import emaillogo from '../../images/email_icon.png'

const Resetpassword = () => {
    const [email, setEmail]=useState('')   

    const OnClick = e =>{
        e.preventDefault()

        setEmail('')      
        console.log(email)  
    }
    return (
        <Container>
            <Row className="row justify-content-center align-items-center">
                <Col lg md={8} sm={6} className="mt-5 mb-5 gx-2">
                    <div className="auto"><ResetpasswordImage /></div>
                </Col>
                <Col lg md={4} sm={6} className="mt-5 mb-5 gx-2 text-center">
                    <div className="md-3 mt-3"><Logo /></div>
                    <div className="mb-3"><h3>Forgot Password?</h3></div>
                    <Form className="w-75" style={{marginLeft:'75px'}}>
                        <div className="mb-3">
                            <p >
                                Enter the email address you used when you first signed up.
                                We’ll send you instructions to reset your password.
                            </p>
                        </div>
                        <Form.Group className="mb-3">
                            <img src={emaillogo} className="position-absolute" alt="icon" style={{left:'10px',top:'10px'}} />  
                            <Form.Control type="email" value={email} size="lg" placeholder="Enter e-mail" 
                                    onChange={e =>setEmail(e.currentTarget.value)}
                            />
                        </Form.Group>                        
                        
                        <div className="d-grid mb-3">
                            <Button variant="primary" type="button" onClick={OnClick}>Log In</Button>
                        </div>
                        {/* <div className="mb-3">
                            <Row className="justify-content-center gx-2">
                                <Col><hr /></Col>
                                or
                                <Col><hr /></Col>
                            </Row>                    
                        </div>
                        <div className="mb-3 ">
                            <Row className="row ">
                                <Col className="gx-1 ">
                                    <GoogleLogo />
                                </Col>
                                <Col className="gx-1 ">
                                    <LinkedinLogo />
                                </Col>
                                <Col className="gx-1">
                                    <TwitterLogo />
                                </Col>
                            </Row>
                        </div> */}
                       <div className="mb-3">
                            <p>
                                Go back to  <Link to="/login">Log in</Link>
                            </p>
                        </div>
                        
                    </Form>
                    {/* <div className="mb-3">
                        <p className="text-center">
                            Enter the email address you used when you first signed up.
                            We’ll send you instructions to reset your password.
                        </p>
                    </div>
                    <div className="mb-3">
                        <div className="form-group">        
                            <img src={emaillogo} className="icon" alt="icon" />               
                            <input type="email" className="form-control form-control-lg" value={email}                                
                                placeholder="Enter e-mail" onChange={e => setEmail(e.target.value)}
                            /> 
                        </div>
                    </div>
                    <div className="mb-3">
                        <div className="d-grid">
                            <button className="btn btn-primary"
                                type="button" onClick={OnClick}>Send reset instructions</button>
                        </div>
                    </div>
                    <div className="mb-3">
                        <p>
                            Go back to  <Link to="/login">Log in</Link>
                        </p>
                    </div> */}
                </Col>
            </Row>
        </Container>
    );
}
export default Resetpassword