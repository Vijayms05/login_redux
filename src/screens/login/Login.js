import React, {useState} from 'react';

//logo
import {
  SiginImage,
  Logo, 
  EmailIcon,
  PasswordIcon,
  EyeIcon,
  GoogleIcon,
  TwitterIcon,
  LinkedInIcon
} from '../../assets/images/index';

import { Link } from 'react-router-dom';
import { Row, Col, Form, Button} from 'react-bootstrap';
import './style.css';

const Login = (props) => {
  const [email, setEmail] = useState('') 
  const [password, setPassword] = useState('')  
  const [showPassword, setShowPassword] = useState(false)
  
  const onEmail = e => {
    if (e.target.value.match('^[a-zA-Z0-9_@./#&+-]*$')) {
      setEmail(e.target.value);
    }
  }
  const onPassword = e => {
    setPassword(e.target.value)
  }
  const passwordView = () => {
    setShowPassword(!showPassword)
  }
  return (
    <Col className="tl-bdy">
      <Col className="m-auto w-100">
        <Row>
          <Col sm={6} md={7} xl={8} className="text-center m-auto">
            <SiginImage />
          </Col>
          <Col md={5} xl={4} className="p-5 text-center">
            <Logo  />
            <Form className="login-form p-3">
              <h2 className="mb-3">Welcome Back</h2>
              <p className="mb-3">Enter your credentials to access your account</p>              
              <Form.Group className="mb-3 inputGroup" controlId="formBasicEmail">
                <Form.Control 
                  className="inputField" 
                  type="email" 
                  placeholder="Enter email"
                  value={email}
                  onChange={onEmail}
                  />
                <EmailIcon />
              </Form.Group>              
              <Form.Group className="mb-3 inputGroup" controlId="formBasicEmail">
                <Form.Control 
                  className="inputField" 
                  type={ showPassword ? "text" : "password" }
                  placeholder="Password"
                  value={password}
                  onChange={onPassword}
                  />
                <PasswordIcon />
                <EyeIcon onClick={passwordView}/>
              </Form.Group>
              <p className="text-start"><Link to="/resetpassword">Forgot password?</Link></p>  
              <Link to="/home" className="submit-btn" variant="primary" type="submit">
                    Creat Account
                </Link>
                <p className="mb-3 mt-3 text-center"> 
                    Dont have an account? <Link to='/'>Sign Up</Link>
                </p>                
            </Form>
          </Col>
        </Row>
      </Col>
    </Col>
  );
};

export default Login;
