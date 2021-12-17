import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { history } from '../../routes/Routes'

import { message } from 'antd';
import axios from 'axios'
import {
  SiginImage,
  Logo,
  EmailIcon,
  PasswordIcon,
  EyeIcon,
  EyeIconHid
} from '../../assets/images/index';

import { Link } from 'react-router-dom';
import {
  Row,
  Col,
  Form,
  Button,
  Container
} from 'react-bootstrap';
import './style.css';
import './responsive.css'
import { constants } from '../../service';
import SignupService from '../../service/SignupService';
import validator from 'validator';
import { ErrorHandler } from '../../service/ErrorHandler';
const Signup = (props) => {
  // const [posts,setPosts]=useState([]);
  // const [post,setPost]=useState({id:'',userId:'',title:'',body:''});
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [repassword, setRepassword] = useState('')
  const [termscondition, setTermsCondition] = useState(false)

  const [paswordShow, setPaswordShow] = useState(true)
  const [repaswordShow, setRePaswordShow] = useState(true)

  const [emailErr, setEmailErr] = useState(null);
  const [passwordErr, setPasswordErr] = useState(null);
  const [repasswordErr, setRePasswordErr] = useState(null);
  const [termconditionErr, setTermconditionErr] = useState(null);
  const [isSubmit, setIsSubmit] = useState(false);

  const dispatch = useDispatch();
  // const history = useHistory();

  const validSignup = useSelector(state => state.signupState.signup)
  const invalidSignup = useSelector(state => state.signupState.error)

  // const status = validSignup && validSignup.status;

  const onEmail = (e) => {
    setEmail(e.target.value);
    if (constants.validEmail.test(e.target.value)) {
      setEmailErr(false);
    } else {
      setEmailErr(true);
    }
  }
  const onPassword = (e) => {
    setPassword(e.target.value);
    if (e.target.value != '') {
      if (validator.isStrongPassword(e.target.value, {
        minLength: 6, minLowercase: 1,
        minUppercase: 1, minNumbers: 1, minSymbols: 1
      })) {
        setPasswordErr(false);
      } else {
        setPasswordErr(true);
      }
      if (repassword != '') {
        if (e.target.value == repassword) {
          setRePasswordErr(false);
        } else {
          setRePasswordErr(true);
        }
      }
    } else {
      setPasswordErr(true);
    }
  }
  const onRePassword = (e) => {
    setRepassword(e.target.value);
    if (e.target.value != '') {
      if (password == e.target.value) {
        setRePasswordErr(false);
      } else {
        setRePasswordErr(true);
      }
    } else {
      setRePasswordErr(true);
    }
  }
  const onTermscondition = (e) => {
    setTermsCondition(!termscondition);
    if (e.target.checked == false) {
      setTermconditionErr(true);
    } else {
      setTermconditionErr(false)
    }
  }
  const clickPasswordShow = () => {
    setPaswordShow(!paswordShow);
  }
  const clickRePasswordShow = () => {
    setRePaswordShow(!repaswordShow);
  }

  // useEffect(() => {

  //   if (validSignup) {
  //     message.success('Thanks!, Signup form is successfully registered ');
  //   } else if (invalidSignup) {
  //     message.error(`An account with email ${email} already exists`, 0.5);
  //   }
  // }, [validSignup, invalidSignup])

  // const validateEmail = ()=>{
  //   if(!validEmail.test(email) || email === " "){     
  //     setEmailErr('Your Email is Invalid');
  //   }else{
  //     setEmailErr(' ');
  //   }  
  // }
  // const validatePassword = () =>{
  //   if (password === " ") {
  //     setPasswordErr('Your password is Invalid')
  //   }else{
  //     setPasswordErr(' ');
  //   } 
  // }
  // const validateRePassword = () =>{
  //   if(password !== repassword  && repassword === " "){
  //     setRePasswordErr('Your repassword is Invalid')
  //   }else{
  //     setRePasswordErr(' ');
  //   } 
  // }
  // const validateTermsCondition = () =>{
  //   if(termscondition === false){      
  //     setTermconditionErr("please accept the terms and condition")      
  //   }else{
  //     setTermconditionErr(' ');
  //   } 
  // }    

  const onSubmit = async () => {
    var payload = {
      email: email,
      password: password,
      password_confirmation: repassword,
    }
    SignupService.signUp(payload).then(result => {
      var response = result.data;
      if (response.status == 'success') {
        alert(response.message);
        setEmail('');
        setPassword('');
        setRepassword('');
      }
    }).catch(function (error) {
      ErrorHandler(error);
    });
    // let response = await api.signUp(payload);
    // console.log(response);
    // if (response?.status == 'success') {
    //   alert(response?.message);
    // }
    // e.preventDefault();

    // if(!isSubmit){
    //   validateEmail()
    //   validatePassword()
    //   validateRePassword()
    //   validateTermsCondition()

    //   if (!email || !password || !repassword ) {           
    //     // message.error('Please fill all the fields');
    //     console.log('Please fill all the fields')       
    //   }   
    //   else {
    //     const signupDetailsuser = {
    //       email,        
    //       password,
    //       repassword,
    //       termscondition      
    //     };     
    //     dispatch({ type: 'SIGNUP_REQUEST', signup: signupDetailsuser});
    //   }
    //   console.log(email,password,repassword,termscondition);
    // history.push({pathname:'/'});
    // }    
  }

  return (
    <div className="tl-bdy sign-tl-bdy">
      <div className="bdy-in">
        <Row>
          <Col sm={6} md={6} lg={6} className="text-center m-auto">
            <SiginImage />
          </Col>
          <Col sm={6} md={6} lg={6} className="p-3">
            <Logo />
            <Form className="sign-form p-4">
              <h2 className="f1-19 mb-3 text-center signup-header">
                Create account and get started
              </h2>
              <Form.Group className="mb-3 inputGroup" controlId="formBasicEmail">
                <Form.Control
                  className=' inputField'
                  type="email"
                  placeholder="Enter e-mail"
                  required
                  value={email}
                  onChange={onEmail}
                />
                <EmailIcon />
              </Form.Group>
              {emailErr ?
                (<p style={{ fontSize: '16px', color: 'red' }} className="mb-2">
                  Invalid Email
                </p>
                ) : ''}
              <Form.Group className="mb-3 inputGroup" controlId="formBasicEmail">
                <Form.Control
                  className="inputField"
                  type={paswordShow ? 'password' : 'text'}
                  placeholder="Password"
                  value={password}
                  required
                  onChange={onPassword}
                // minLength="8"
                />
                <PasswordIcon />
                <Button
                  className="pwd-btn"
                  onClick={clickPasswordShow}
                >
                  {paswordShow ? <EyeIconHid /> : <EyeIcon />}
                </Button>
              </Form.Group>
              {passwordErr ?
                (<p style={{ fontSize: '16px', color: 'red' }} className="mb-3" > {password.length > 0 ? 'Password should have at least one each Aa1@ and 6 digits ' : 'Please enter your Password'} </p>) : ''}
              <Form.Group className="mb-3 inputGroup" controlId="formBasicEmail">
                <Form.Control
                  className="inputField"
                  type={repaswordShow ? 'password' : 'text'}
                  placeholder="Re-Enter Password"
                  value={repassword}
                  required
                  onChange={onRePassword}
                // minLength="8"
                />
                <PasswordIcon />
                <Button
                  className="pwd-btn"
                  onClick={clickRePasswordShow}
                >
                  {repaswordShow ? <EyeIconHid /> : <EyeIcon />}
                </Button>
              </Form.Group>
              {repasswordErr ?
                (<p style={{ fontSize: '16px', color: 'red' }} className="mb-3"> {repassword ? 'Password missmatch' : 'Please enter your Re-Enter Password'}</p>) : ''}
              <Form.Group className="mb-3" style={{ height: '25px' }} controlId="formBasicCheckbox">
                <Form.Check
                  className="float-start me-2"
                  type="checkbox"
                  required
                  checked={termscondition}
                  onClick={onTermscondition}
                />
                <Form.Label className="terms-cond-text">
                  I agree Skilltally’s <Link>Privacy Policy</Link> 	&#38; <Link>Terms of Services</Link>
                </Form.Label>
              </Form.Group>
              {termconditionErr ?
                (<p style={{ fontSize: '16px', color: 'red' }} className="mb-2"> Accept terms 	&#38; conditions </p>) : ''}
              <Button
                className="submit-btn mt-3 mb-3"
                variant="primary"
                // type="submit"
                disabled={emailErr == false && passwordErr == false && repasswordErr == false && termconditionErr == false ? false : true}
                onClick={onSubmit}
              >
                Create Account
              </Button>
            </Form>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Signup;
