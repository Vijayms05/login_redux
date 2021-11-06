import React, {useState} from 'react';

import {
  SiginImage,
  Logo, 
  EmailIcon,
  PasswordIcon,
  EyeIcon, EyeIconHid
} from '../../assets/images/index';

import {Link} from 'react-router-dom';
import { Row, Col, Form, Button} from 'react-bootstrap';
import './style.css';
import './responsive.css'

const Login = (props) => {
  const [email, setEmail] = useState('')
  const [password, setPassword]= useState('')
  const [paswordShow, setPaswordShow] = useState(true)
  const [repaswordShow, setRePaswordShow] = useState(true)

  const onEmail = e => {
    if (e.target.value.match('^[a-zA-Z0-9_@./#&+-]*$')) {
      setEmail(e.target.value);
    }
  } 
  const onPassword = e => {
    setPassword(e.target.value)
  }

  const clickPasswordShow = () =>{
    setPaswordShow(!paswordShow);
  }
  const clickRePasswordShow = () =>{
    setRePaswordShow(!repaswordShow);
  }
  const onClick=()=>{
    setEmail('')
    setPassword('')
    console.log(email, password)
  }
  return (
    <Col className="tl-bdy">
      <div className="bdy-in">
        <Row>
          <Col md={6}  xl={7} className="text-center m-auto">
            <SiginImage />
          </Col>
          <Col md={6} xl={5} xs className="p-3 mt-4 login-wrapper">
            <Logo  />
            <Form className="login-form p-4">
              <h2>Welcome Back</h2>
              <h3>Enter your credentials to access your account</h3> 
              <Form.Group className="mb-4 login-inputGroup" controlId="formBasicEmail">
                <Form.Control 
                  className="login-inputField" 
                  type="email" 
                  placeholder="E-mail"
                  value={email}
                  onChange={onEmail}
                />
                <EmailIcon />
              </Form.Group>
              <Form.Group className="mb-4 login-inputGroup" controlId="formBasicEmail">
                <Form.Control 
                  className="login-inputField"  
                  type={paswordShow ? 'password' : 'text'} 
                  placeholder="Password"
                  value={password}
                  onChange={onPassword}
                  />
                <PasswordIcon />
                <Button className="pwd-btn" onClick={clickPasswordShow}>
                  { paswordShow ? <EyeIconHid /> : <EyeIcon />}
                </Button>
              </Form.Group>
              <Form.Group className="mb-4" style={{height: '25px'}} controlId="formBasicCheckbox">
                  <Form.Label className="reset-password"><Link to="/resetpassword">Forget Password</Link> </Form.Label>
              </Form.Group>
                <Link to="/schoolstudent" className="login-submit-btn" variant="primary" type="submit" onClick={onClick}>
                    Log in
                </Link>                                
            </Form>
            <p className="login-p mt-2 mb-3 mt-4 text-center">Don't have an account? <Link to="/">Sign up</Link></p>            
          </Col>
        </Row>
      </div>
    </Col>
  );
};

export default Login;
