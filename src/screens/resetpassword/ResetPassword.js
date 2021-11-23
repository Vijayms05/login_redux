import React, {useState} from 'react';
import { message } from 'antd';
import {
  SiginImage,
  Logo, 
  EmailIcon,
  PasswordIcon,
  EyeIcon, EyeIconHid
} from '../../assets/images/index';

import { validEmail } from '../../constant/Constant';
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
  const onEmail = (e) => {  
    const email = e.target.value
    if(!validEmail.text(email)){
      message.error('Your Forget password Mail Id is Invalid')      
    }else{
      if(props.email === email) {
        setEmail(e.target.value);
        message.success('Your Forget password Mail Id is Verified')
      }else{
        message.error('Your Forget password Mail Id is not same')
    }
    }        
  };
 
  const onClick=(e)=>{
    e.preventDefault();
    setEmail('')
    message.success('Forget Password is Successfully verified')
    console.log(email)
    history.push('/onboard');
  }
  return (
    <Col className="tl-bdy sign-tl-bdy">
      <div className="bdy-in">
        <Row>
          <Col md={6}  xl={7} className="text-center m-auto">
            <SiginImage />
          </Col>
          <Col md={6} xl={5} xs className="p-3 mt-4 login-wrapper">
            <Logo  />
            <Form className="sign-form p-4">
              <h2 className="f1-19 text-center">Forget Password</h2>
              <h3 className="f3-13 text-center dark-blue-light mt-1 mb-3">Enter the email address you used when you first signed up. We'll send you instruction to reset your password. </h3> 
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
                  onClick={onClick}
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
    </Col>
  );
};

export default ResetPassword;
