import React, {useState,useEffect} from 'react';
import { useDispatch,useSelector } from 'react-redux';
// import { history } from '../../routes/Routes'
import { useHistory } from 'react-router-dom'
// import { message } from 'antd';
//logo
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

const Signup = (props) => {
  const [email,setEmail]= useState('')
  const [password, setPassword] = useState('')
  const [repassword, setRepassword]= useState('')  
  const [termscondition, setTermsCondition] = useState(false)
  // const [alertMsg, setAlertMsg] = useState('');
  // const [alertError, setAlertError] = useState(false);
  const [paswordShow, setPaswordShow] = useState(true)
  const [repaswordShow, setRePaswordShow] = useState(true)
  const history = useHistory()
  const clickPasswordShow = () =>{
    setPaswordShow(!paswordShow);
  }
  const clickRePasswordShow = () =>{
    setRePaswordShow(!repaswordShow);
  }

  const dispatch = useDispatch();
 
  const validSignup = useSelector( state => state.signupState.signup)
  const invalidSignup = useSelector( state => state.signupState.error)

  const status = validSignup && validSignup.status;
  
  const onEmail = (e) => {
    if (e.target.value.match('^[a-zA-Z0-9_@./#&+-]*$')) {
      setEmail(e.target.value);
    }
  };
  const onPassword = (e) => {
    setPassword(e.target.value);
  };
  const onRePassword = e => {    
    setRepassword(e.target.value) 
  }
  const onTermsCondition = () =>{
    setTermsCondition(!termscondition)
  }
  useEffect(()=>{
    if (status) {
      setRepassword('');
      setEmail('');
      setPassword('');
      setTermsCondition(false);  
      console.log('Thanks!, Signup form is successfully registered ');   
    } else if (invalidSignup) {
      console.log(`An account with email ${email} already exists`);
    }
  },[status, invalidSignup])

  const onSubmit = e =>{
    if (email === " " || password === " " || repassword === " ") {    
      console.log('Please fill all the fields')
    }   
    else if (termscondition === false) {
      console.log('Please accept the Terms & Conditions and Privacy Policy');
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
    history.push('/login')  

    // console.log(email,password,repassword,termscondition);
  }  

  return (
    <>
      <Col className="tl-bdy sign-tl-bdy">
        <div className="bdy-in">
          <Row>
            <Col md={6} xl={7} className="text-center m-auto">
              <SiginImage />
            </Col>
            <Col md={6} xl={5} className="p-3">
              <Logo  />
              <Form className="sign-form p-4">
                <h2 className="f1-19 mb-3 text-center">Creat accout and get started</h2>
                <Form.Group className="mb-4 inputGroup" controlId="formBasicEmail">
                  <Form.Control 
                    className="inputField"  
                    type="email" 
                    placeholder="Enter email"
                    value={email}
                    onChange={onEmail}
                    />
                  <EmailIcon />
                </Form.Group>
                {/* <Form.Group className="mb-4 inputGroup" controlId="formBasicEmail">
                  <Form.Control className="inputField" type="email" placeholder="Re-Enter email"/>
                  <EmailIcon />
                </Form.Group> */}
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
                <Form.Group className="mb-4 inputGroup" controlId="formBasicEmail">
                  <Form.Control 
                    className="inputField" 
                    type={repaswordShow ? 'password' : 'text'} 
                    placeholder="Re-Enter Password"
                    value={repassword}
                    onChange={onRePassword}
                  />
                  <PasswordIcon />
                  <Button 
                    className="pwd-btn" 
                    onClick={clickRePasswordShow}
                  >
                    { repaswordShow ? <EyeIconHid /> : <EyeIcon />}
                  </Button>
                </Form.Group>
                <Form.Group className="mb-4" style={{height: '25px'}} controlId="formBasicCheckbox">
                    <Form.Check className="float-start me-2" type="checkbox"
                    checked={termscondition}
                    onClick={onTermsCondition}/>
                    <Form.Label className="terms-cond-text">I agree Skilltally’s <Link>Privacy Policy</Link> & <Link>Terms of Services</Link>  </Form.Label>
                </Form.Group>
                  <Button className="submit-btn" variant="primary" type="submit" 
                  onClick={onSubmit}>
                      Creat Account
                  </Button>
              </Form>
            </Col>
          </Row>
        </div>
      </Col>
     
       
    </>
  );
};

export default Signup;
