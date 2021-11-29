import React, { useState, useEffect} from 'react';
import { message } from 'antd';
import {
  SiginImage,
  Logo, 
  EmailIcon,
  PasswordIcon,
  EyeIcon, EyeIconHid
} from '../../assets/images/index';
import { validEmail } from '../../service/Constant';
import {Link, useHistory} from 'react-router-dom';
import { 
  Row, 
  Col, 
  Form, 
  Button
} from 'react-bootstrap';

const ResetPassword = (props) => {
  const [email, setEmail]=useState('')
  const history= useHistory();
  useEffect(() => {
    // validateEmail()
  }, [])

  const onEmail = (e) => {  
    setEmail(e.target.value);          
  };

  // const validateEmail = ()=>{
  //   if(!validEmail.text(email)){
  //     message.error('Your Forget password Mail Id is Invalid')      
  //   }else{
  //     if(props.email === email) {        
  //       message.success('Your Forget password Mail Id is Verified')
  //     }else{
  //       message.error('Your Forget password Mail Id is not same')
  //   }
  //   }   
  // }
 
  const onForgetPassword=(e)=>{
    // e.preventDefault();
    setEmail('')
    if(!email){
      // message.error("Please fill the field");
    }
    // message.success('Forget Password is Successfully verified')
    console.log(email)
    history.push('/onboard');
  }
  return (
    <div className="tl-bdy sign-tl-bdy">
      <div className="bdy-in">
        <Row>
          <Col sm={6} md={6} lg={6}  xl={7} className="text-center m-auto">
            <SiginImage />
          </Col>
          <Col  sm={6} md={6} lg={6}  xl={5} className="p-3 mt-4 login-wrapper">
            <Logo  />
            <Form className="sign-form p-4">
              <h2 className="f1-19 text-center forget-header">Forget Password</h2>
              <h3 className="f3-13 text-center dark-blue-light mt-1 mb-3 login-sub-header">Enter the email address you used when you first signed up. We'll send you instruction to reset your password. </h3> 
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
                <Button 
                  className="submit-btn" 
                  variant="primary" 
                  type="submit" 
                  onClick={onForgetPassword}
                >Send reset instructions</Button>                                
            </Form>
            <p className="forget-p mt-2 mb-3 mt-4 text-center" 
              style={{color:'#0B171B',fontSize:'15px'}}
            >
              Go back to {" "}  
              <Link to="/login">Log in</Link>
            </p>            
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default ResetPassword;
