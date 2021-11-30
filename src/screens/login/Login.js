import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  SiginImage,
  Logo, 
  EmailIcon,
  PasswordIcon,
  EyeIcon, EyeIconHid
} from '../../assets/images/index';
import { Link } from 'react-router-dom';
import { 
  Row, 
  Col, 
  Form, 
  Button
} from 'react-bootstrap';
import { validEmail, validPassword } from '../../service/Constant';
import { message } from 'antd';
import { history } from '../../routes/Routes';
import axios from 'axios';

const Login = (props) => {  
  const [user,setUser]=useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false); 
  
  const [emailErr, setEmailErr]=useState(null)
  const [passwordErr, setPasswordErr]=useState(null)
  const [userErr, setUserErr]=useState(null)

  const dispatch = useDispatch();
  // const history =useHistory();

  const validLogin = useSelector(state => state.loginState.login);
  const invalidLogin = useSelector(state => state.loginState.error);
  
  // const status = validLogin && invalidLogin;

  useEffect(() => {       
     if (validLogin) {      
      dispatch({ type: 'LOGOUT_SUCCESS' });
    } else if ( invalidLogin) {
      message.error('Please enter the valid credentials');
    }
  },[ validLogin, invalidLogin]);

  const onEmail = (e) => {  
    setEmail(e.target.value);    
    if(validEmail.test(e.target.value)){     
      setEmailErr(false);
    }else{
      setEmailErr(true);
    }
  };
  const onPassword = (e) => {  
    setPassword(e.target.value);   
    if(e.target.value!=''){
      setPasswordErr(false);
    }  else{
      setPasswordErr(true);
    }         
  };
  const onUser = e =>{
    console.log(e)
    if(e.target.checked == user){        
      setUserErr(false);
    }else{
      setUserErr(true)
    }    
  }
  const clickPasswordShow = () =>{
    setShowPassword(!showPassword);
  }
  
  const onLogin = (e) => {    
    e.preventDefault();
 
    if(user === " "){
      // ('Please select User or  Organization User')
    }
    if (!email || !password ) {          
      console.log('Please fill all the fields')
    }else {    
      const loginDetails = {
        email,
        password
      }
      dispatch({ type: 'LOGIN_REQUEST', login: loginDetails });
    }
    history.push({pathname:'/onboard'}); 
    console.log(email,password);    
  };
  return (
    <>
      <div className="tl-bdy sign-tl-bdy">
        <div className="bdy-in">
          <Row>
            <Col  sm={6} md={6}  xl={7}   className="text-center m-auto">
              <SiginImage />
            </Col>
            <Col  sm={6} md={6} xl={5} className="p-2 mt-2 login-wrapper">
              <Logo  />
              <Form className="sign-form p-4">
                <h2 className="f1-19 m-0 text-center login-header">
                  Welcome Back
                </h2>
                <h3 className="f3-13 dark-blue-light login-sub-header mx-0 mt-1 mb-3 text-center">
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
                {emailErr  ?
                (<p style={{fontSize:'16px',color:'red'}} className="mb-2"> 
                 Invalid Email
                </p>
                ):''}             
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
                {passwordErr  ?
                (<p style={{fontSize:'16px',color:'red'}} className="mb-2"> 
                  Please enter your Password
                </p>
                ):''}             
                <Row>
                  <Col > 
                    <div className="form-check">
                      <input className="form-check-input" type="radio" name="flexRadioDefault"                    
                        id="flexRadioDefault1" checked={user === "user" ? true:false} 
                        onClick={onUser}/>
                      <label className="form-check-label" for="flexRadioDefault1">
                        User
                      </label>
                    </div>   
                  </Col>
                  <Col >
                    <div className="form-check">
                      <input className="form-check-input" type="radio" 
                      name="flexRadioDefault" id="flexRadioDefault2"  
                      checked={user === "organizationuser" ? true: false} 
                      onClick={onUser}/>
                      <label className="form-check-label" for="flexRadioDefault2" style={{width:'150px'}}>
                        Organisation User
                      </label>
                    </div> 
                  </Col>
                </Row>   
                {userErr  ?
                (<p style={{fontSize:'16px',color:'red'}} className="mb-2"> 
                  Please select the User or Organizational User
                </p>
                ):''}            
                <Form.Group className="mb-4" style={{height: '25px'}} controlId="formBasicCheckbox">
                  <Form.Label className="reset-password">
                    <Link to="/resetpassword">Forget Password?</Link> 
                  </Form.Label>
                </Form.Group>
                  <Button  className="submit-btn" variant="primary" type="submit" 
                    disabled={emailErr == false && passwordErr == false && userErr == false ? false : true} onClick={onLogin}>
                      Log in
                  </Button>                                
              </Form>
              <p  
                className="login-p mt-2 mb-3 mt-4 text-center" 
                style={{color:'#0B171B',fontSize:'15px'}} 
              >
                Don't have an account? {' '}
                <Link to="/signup">Sign up</Link>
              </p>            
            </Col>
          </Row>        
        </div>
      </div>      
    </>
  );
}
export default Login;
