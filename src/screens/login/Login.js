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
import axios from 'axios'
// import dummyApi from '../../service/api';

// const baseURL = 'http://localhost:3000/posts/'
const Login = (props) => {
  const [user,setUser]=useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false); 

  const dispatch = useDispatch();
  // const history =useHistory();

  const validLogin = useSelector(state => state.loginState.login);
  const invalidLogin = useSelector(state => state.loginState.error);

  const [post, setPost] = useState({
    title: '',author: '',id:null
  });
   
  // const status = validLogin && invalidLogin;

  useEffect(() => {
    // axios.get('http://localhost:3000/')
    // .then(request=>{
    //   console.log(request.data)
    // })
    
  //  validateEmail();
  //   validatePassword();
     if (validLogin) {      
      dispatch({ type: 'LOGOUT_SUCCESS' });
    } else if ( invalidLogin) {
      // message.error('Please enter the valid credentials');
    }
  },[ validLogin, invalidLogin]);

  const onEmail = (e) => {  
    setEmail(e.target.value);        
  };
  const onPassword = (e) => {  
    setPassword(e.target.value);            
  };
  const clickPasswordShow = () =>{
    setShowPassword(!showPassword);
  }
  // const validateEmail= ()=>{
  //   if(!validEmail.test(email)){
  //     message.error('Your Login Mail Id is Invalid')      
  //   }else{
  //     if(props.email === email) {        
  //       message.success('Your Login Mail Id is Verified')
  //     }else{
  //       message.error('Your Login Mail Id is not same')
  //     }
  //   }   
  // }
  // const validatePassword = ()=>{    
  //   if (!validPassword.test(password)) {      
  //     message.error('Your password is Invalid')
  //  }else{
  //    if(props.password === password){     
  //     message.success('Your Login Password is Verified')
  //    }else{
  //     message.error('Your Login Password is not same')
  //    }
  //  } 
  // }
  const onLogin = (e) => {    
   
    // .catch(error =>{
    //   console.log(error)
    // })
    // e.preventDefault();
    // validateEmail();
    // validatePassword();
    if( user === "user" || user === "organizationuser"){
        // message.success(`Welcome to ${user}`)
    }else{
      // message.error('Please select User or  Organization User')
    }
    if (!email || !password ) {       
      // message.error('Please fill all the fields')        
    }else {    
      const loginDetails = {
        email,
        password
      };
      dispatch({ type: 'LOGIN_REQUEST', login: loginDetails });
    }
    history.push({pathname:'/onboard'}); 
    console.log(email,password);    
  };
  return (
    <>
      <div className="tl-bdy sign-tl-bdy">
        <div className="bdy-in">
          <Row className="justify-content-sm-center">
            <Col  sm={8} md={6}  xl={7}   className="text-center m-auto pt-sm-3">
              <SiginImage />
            </Col>
            <Col  sm={8} md={6} xl={5} className="p-2 mt-2 login-wrapper">
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
                <Row>
                  <Col > 
                  <div className="form-check">
                    <input className="form-check-input" type="radio" name="flexRadioDefault"                    
                      id="flexRadioDefault1" checked={user === "user" ? true:false} 
                      onClick={e =>setUser("user")}/>
                    <label className="form-check-label" for="flexRadioDefault1">
                      User
                    </label>
                  </div>
            
                    {/* <Form.Check                       
                      label="User"
                      value="user"
                      type="radio"
                      id="formBasicCheckbox"
                      className="loginadmin"
                      checked={user === "user" ? true:false} 
                      onClick={e =>setUser("user")}
                    />                     */}
                  </Col>
                  <Col >
                    <div className="form-check">
                      <input className="form-check-input" type="radio" 
                      name="flexRadioDefault" id="flexRadioDefault2"  checked={user === "organizationuser" ? true: false} 
                      onClick={e =>setUser("organizationuser")}/>
                      <label className="form-check-label" for="flexRadioDefault2" style={{width:'150px'}}>
                        Organisation User
                      </label>
                    </div>   
                    {/* <Form.Check 
                      value="organizationuser"
                      type="radio"
                      id="formBasicCheckbox1"
                      // className="loginadmin"
                      checked={user === "organizationuser" ? true: false} 
                      onClick={e =>setUser("organizationuser")}
                    />     
                    <Form.Label>Organizational User</Form.Label>                */}
                  </Col>
                </Row>             
                <Form.Group className="mb-4" style={{height: '25px'}} controlId="formBasicCheckbox">
                  <Form.Label className="reset-password">
                    <Link to="/resetpassword">Forget Password?</Link> 
                  </Form.Label>
                </Form.Group>
                <Col >
                  <Button  className="submit-btn" variant="primary" type="submit" 
                    onClick={onLogin}>
                      Log in
                  </Button>  
                </Col>                              
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
