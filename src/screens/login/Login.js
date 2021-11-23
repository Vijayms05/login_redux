import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
 import { useHistory } from 'react-router-dom'
import {
  SiginImage,
  Logo, 
  EmailIcon,
  PasswordIcon,
  EyeIcon, EyeIconHid
} from '../../assets/images/index';

import { Link } from 'react-router-dom';
import { Row, Col, Form, Button} from 'react-bootstrap';
import { validEmail, validPassword } from '../../constant/Constant';
import { message } from 'antd';
import { history } from '../../routes/Routes'

const Login = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false); 

  const dispatch = useDispatch();
  const history =useHistory();

  const validLogin = useSelector(state => state.loginState.login);
  const invalidLogin = useSelector(state => state.loginState.error);

  const status = validLogin && invalidLogin;

  useEffect(() => {
    if(status){
      setEmail('')
      setPassword('')
    }
    else if (validLogin) {      
      dispatch({ type: 'LOGOUT_SUCCESS' });
    } else if ( invalidLogin) {
      message.error('Please enter the valid credentials');
    }
  },[status, validLogin, invalidLogin]);

  const onEmail = (e) => {  
    const email = e.target.value
    if(!validEmail.text(email)){
      message.error('Your Login Mail Id is Invalid')      
    }else{
      if(props.email === email) {
        setEmail(e.target.value);
        message.success('Your Login Mail Id is Verified')
      }else{
        message.error('Your Login Mail Id is not same')
      }
    }        
  };
  const onPassword = (e) => {  
    const password= e.target.value
    if (!validPassword.test(password)) {      
      message.error('Your password is Invalid')
   }else{
     if(props.password === password){
      setPassword(e.target.value);
      message.success('Your Login Password is Verified')
     }else{
      message.error('Your Login Password is not same')
     }
   }         
  };
  const clickPasswordShow = () =>{
    setShowPassword(!showPassword);
  }

  const onLogin = (e) => {    
    e.preventDefault();
    if (!email || !password ) {       
      message.error('Please fill all the fields')        
    }else {    
      const loginDetails = {
        email,
        password
      };
      dispatch({ type: 'LOGIN_REQUEST', login: loginDetails });
    }
    history.push('/onboard'); 
    console.log(email,password);
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
              <h2 className="f1-19 m-0 text-center">
                Welcome Back
              </h2>
              <h3 className="f3-13 dark-blue-light mx-0 mt-1 mb-3 text-center">
                Enter your credentials to access your account
              </h3> 
              <Form.Group className="mb-4 inputGroup" controlId="formBasicEmail">
                <Form.Control 
                  className="inputField" 
                  type="email" 
                  placeholder="E-mail"
                  value={email}
                  onChange={onEmail}
                />
                <EmailIcon />
              </Form.Group>
              <Form.Group className="mb-4 inputGroup" controlId="formBasicEmail">
                  <Form.Control 
                    className="inputField"  
                    type={showPassword ? 'password' : 'text'} 
                    placeholder="Password"
                    value={password}
                    onChange={onPassword}
                    />
                  <PasswordIcon />
                  <Button 
                    className="pwd-btn" 
                    onClick={clickPasswordShow}
                  >
                    { showPassword ? <EyeIconHid /> : <EyeIcon />}
                  </Button>
                </Form.Group>
              <Form.Group className="mb-4" style={{height: '25px'}} controlId="formBasicCheckbox">
                <Form.Label className="reset-password">
                  <Link to="/resetpassword">Forget Password?</Link> 
                </Form.Label>
              </Form.Group>
                <Button  className="submit-btn" variant="primary" type="submit" 
                  onClick={onLogin}>
                    Log in
                </Button>                                
            </Form>
            <p  
              className="login-p mt-2 mb-3 mt-4 text-center" 
              style={{color:'#0B171B',fontSize:'15px'}} 
            >
              Don't have an account? 
              <Link to="/">Sign up</Link>
            </p>            
          </Col>
        </Row>
      </div>
    </div>
  );
};
export default Login;
