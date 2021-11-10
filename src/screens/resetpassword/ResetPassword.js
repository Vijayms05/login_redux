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

const ResetPassword = (props) => {
  const [email, setEmail]=useState('')

  const onUserName = (e) => {
    if (e.target.value.match('^[a-zA-Z0-9_@./#&+-]*$')) {
      setEmail(e.target.value);
    }
  };
 
  const onClick=()=>{
    setEmail('')
    
    console.log(email)
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
              <h2>Forget Password</h2>
              <h3>Enter the email address you used when you first signed up. We'll send you instruction to reset your password. </h3> 
              <Form.Group className="mb-4 login-inputGroup" controlId="formBasicEmail">
                <Form.Control 
                  className="login-inputField" 
                  type="email" 
                  placeholder="E-mail"
                  value={email}
                  onChange={onUserName}
                />
                <EmailIcon />
              </Form.Group>
                <Button 
                  className="login-submit-btn" 
                  variant="primary" 
                  type="submit" 
                  onClick={onClick}
                >Send reset instructions</Button>                                
            </Form>
            <p className="login-p mt-2 mb-3 mt-4 text-center">Go back to  <Link to="/">Log in</Link></p>            
          </Col>
        </Row>
      </div>
    </Col>
  );
};

export default ResetPassword;
