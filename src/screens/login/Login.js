import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom'
import { message } from 'antd';
import {
  SiginImage,
  Logo, 
  EmailIcon,
  PasswordIcon,
  EyeIcon, EyeIconHid
} from '../../assets/images/index';

import { Link } from 'react-router-dom';
import { Row, Col, Form, Button} from 'react-bootstrap';

const Login = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false); 

  const [paswordShow, setPaswordShow] = useState(true)
  
  
  const clickPasswordShow = () =>{
    setPaswordShow(!paswordShow);
  }
  
  const dispatch = useDispatch();
  const history =useHistory();

  const validLogin = useSelector(state => state.loginState.login);
  const invalidLogin = useSelector(state => state.loginState.error);

  useEffect(() => {
    if (validLogin) {      
      dispatch({ type: 'LOGOUT_SUCCESS' });
    } else if ( invalidLogin) {
      console.log('Please enter the valid credentials');
    }
  });

  const onUserName = (e) => {
    if (e.target.value.match('^[a-zA-Z0-9_@./#&+-]*$')) {
      setEmail(e.target.value);
    }
  };

  const onPassword = (e) => {  
      setPassword(e.target.value);   
  };

  const splitPassword = () => {
    setShowPassword(!showPassword);
  };



  const onLogin = (props) => {    
    if (email === '' || password === '') {     
      console.log('Please fill all the fields');     
    }else {    
      const loginDetails = {
        // email: 'gopinath.chandar@gmail.com',
        // password: 'Football7&',
        email,
        password,
      };
      dispatch({ type: 'LOGIN_REQUEST', login: loginDetails });
    }
    history.push('/onboard')
    console.log(email,password)
  };
  return (
    <div className="tl-bdy sign-tl-bdy">
      <div className="bdy-in">
        <Row>
          <Col md={6}  xl={7} className="text-center m-auto">
            <SiginImage />
          </Col>
          <Col md={6} xl={5} xs className="p-3 mt-4 login-wrapper">
            <Logo  />
            <Form className="sign-form p-4">
              <h2 className="f1-19 m-0 text-center">Welcome Back</h2>
              <h3 className="f3-13 dark-blue-light mx-0 mt-1 mb-3 text-center">Enter your credentials to access your account</h3> 
              <Form.Group className="mb-4 inputGroup" controlId="formBasicEmail">
                <Form.Control 
                  className="inputField" 
                  type="email" 
                  placeholder="E-mail"
                  value={email}
                  onChange={onUserName}
                />
                <EmailIcon />
              </Form.Group>
              <Form.Group className="mb-4 inputGroup" controlId="formBasicEmail">
                  <Form.Control 
                    className="inputField"  
                    type={paswordShow ? 'password' : 'text'} 
                    placeholder="Password"
                    value={password}
                    onChange={onPassword}
                    />
                  <PasswordIcon />
                  <Button 
                    className="pwd-btn" 
                    onClick={clickPasswordShow}
                  >
                    { paswordShow ? <EyeIconHid /> : <EyeIcon />}
                  </Button>
                </Form.Group>
              <Form.Group className="mb-4" style={{height: '25px'}} controlId="formBasicCheckbox">
                  <Form.Label className="reset-password"><Link to="/resetpassword">Forget Password</Link> </Form.Label>
              </Form.Group>
                <Button  className="submit-btn" variant="primary" type="submit" 
                onClick={onLogin}>
                    Log in
                </Button>                                
            </Form>
            <p className="login-p mt-2 mb-3 mt-4 text-center" 
            style={{color:'#0B171B',fontSize:'15px'}}>Don't have an account? <Link to="/">Sign up</Link></p>            
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Login;
