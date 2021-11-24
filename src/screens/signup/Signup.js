import React, {useState,useEffect} from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom'
import { message } from 'antd';
// import { toast } from 'react-toastify';
import {
  SiginImage,
  Logo, 
  EmailIcon,
  PasswordIcon,
  EyeIcon, EyeIconHid
} from '../../assets/images/index';

import {Link} from 'react-router-dom';
import { 
  Row, 
  Col, 
  Form, 
  Button,
} from 'react-bootstrap';
import './style.css';
import './responsive.css'
import { validEmail,validPassword } from '../../constant/Constant'
import { history } from '../../routes/Routes'

const Signup = (props) => {
  const [email,setEmail]= useState('')
  const [password, setPassword] = useState('')
  const [repassword, setRepassword]= useState('')  
  const [termscondition, setTermsCondition] = useState(false)
  
  const [paswordShow, setPaswordShow] = useState(true)
  const [repaswordShow, setRePaswordShow] = useState(true)
  const [emailErr, setEmailErr] = useState(false);
  const [pwdError, setPwdError] = useState(false);
  
  const history = useHistory(); 
  const dispatch = useDispatch();
 
  const validSignup = useSelector( state => state.signupState.signup)
  const invalidSignup = useSelector( state => state.signupState.error)

  const status = validSignup && validSignup.status;

  const onEmail = (e)=>{
    const email= e.target.value
    setEmail(email);
    if (!validEmail.test(email)) {      
      message.error('Your Mail is Invalid')
   }else{
    message.success('Your Mail is Valid')
   }
  }
  const onPassword = (e)=>{
    const password = e.target.value;
    setPassword(password);
    if (!validPassword.test(password)) {      
      message.error('Your password is Invalid')
   }else{
    message.success('Your password is valid')
   }
  }
  const onRePassword =(e)=> {
    setRepassword(e.target.value)
    if(password !== repassword){
      message.error('Please check the  Conform Password')
    }else{
      message.success('Your conform password is valid')
    }
  }
  const clickPasswordShow = () =>{
    setPaswordShow(!paswordShow);
  }
  const clickRePasswordShow = () =>{
    setRePaswordShow(!repaswordShow);
  }  

  useEffect(()=>{
    if (status) {
      setEmail('')
      setPassword('')
      setRepassword('')     
      setTermsCondition(false)
      console.log(status)
    }else if(validSignup){
      message.success('Thanks!, Signup form is successfully registered ');
    } else if(invalidSignup) {
      message.error(`An account with email ${email} already exists`);
    }
  },[status, invalidSignup])


  const onSubmit = (e) =>{
    e.preventDefault();  
    
    if (!email || !password || !repassword ) {       
      message.error('Please fill all the fields')        
    }   
    else if (termscondition === false) {      
      message.error('Please accept the Terms & Conditions and Privacy Policy')
    } 
    else {
      const signupDetailsuser = {
        email,        
        password,
        repassword,
        termscondition      
      };     
      dispatch({ type: 'SIGNUP_REQUEST', signup: signupDetailsuser});
    }
    console.log(email,password,repassword,termscondition)
    history.push({pathname:'/login'})
  }  

  return (
   
      <Col className="tl-bdy sign-tl-bdy">
        <div className="bdy-in">
          <Row>
            <Col md={6} xl={7} className="text-center m-auto">
              <SiginImage />
            </Col>
            <Col md={6} xl={5} className="p-3">
              <Logo  />
              <Form className="sign-form p-4">
                <h2 className="f1-19 mb-3 text-center signup-header">
                  Create account and get started
                </h2>
                <Form.Group className="mb-4 inputGroup" controlId="formBasicEmail">
                  <Form.Control 
                    className=' inputField'
                    type="email" 
                    placeholder="Enter e-mail"
                    value={email}
                    onChange={onEmail}
                    />
                  <EmailIcon />
                </Form.Group>   
                {/* {emailErr && <p style={{color:'red',fontSize:'15px',textAlign:'center'}}>Your Mail id is Invalid</p>}           */}
                <Form.Group className="mb-4 inputGroup" controlId="formBasicEmail">
                  <Form.Control 
                    className="inputField"  
                    type={paswordShow ? 'password' : 'text'} 
                    placeholder="Password"
                    value={password}
                    onChange={onPassword}
                    minLength="8"
                    />
                  <PasswordIcon />
                  <Button 
                    className="pwd-btn" 
                    onClick={clickPasswordShow}
                  >
                    { paswordShow ? <EyeIconHid /> : <EyeIcon />}
                  </Button>                  
                </Form.Group>
                
                {/* {pwdError && <p style={{color:'red',fontSize:'15px',textAlign:'center'}}>Your password is invalid</p> */}
      
                <Form.Group className="mb-4 inputGroup" controlId="formBasicEmail">
                  <Form.Control 
                    className="inputField" 
                    type={repaswordShow ? 'password' : 'text'} 
                    placeholder="Re-Enter Password"
                    value={repassword}
                    onChange={onRePassword}
                    minLength="8"
                  />
                  <PasswordIcon />
                  <Button 
                    className="pwd-btn" 
                    onClick={clickRePasswordShow}
                  >
                    { repaswordShow ? <EyeIconHid /> : <EyeIcon />}
                  </Button>
                </Form.Group>
                {/* {pwdError && <p style={{color:'red',fontSize:'15px',textAlign:'center'}}>Your password is invalid</p>} */}
                <Form.Group className="mb-4" style={{height: '25px'}} controlId="formBasicCheckbox">
                    <Form.Check 
                      className="float-start me-2" 
                      type="checkbox"
                      checked={termscondition}
                      onClick={() => {
                        setTermsCondition(!termscondition)
                        if(!termscondition){
                          message.success("verify the terms and condition")
                        }else{
                          message.error("please accept the terms and condition")
                        }
                      }}
                    />
                    <Form.Label className="terms-cond-text">
                      I agree Skilltally’s <Link>Privacy Policy</Link> 	&#38; <Link>Terms of Services</Link>  
                    </Form.Label>
                </Form.Group>
                  <Button 
                    className="submit-btn mt-3"
                    variant="primary" 
                    type="submit" 
                    onClick={onSubmit}
                  >
                      Create Account
                  </Button>
              </Form>
            </Col>
          </Row>
        </div>
      </Col>    
   
  );
};

export default Signup;
