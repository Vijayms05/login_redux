import React, { useState, useEffect } from 'react';
import { message } from 'antd';
import {
  SiginImage,
  Logo,
  EmailIcon,
  PasswordIcon,
  EyeIcon, EyeIconHid
} from '../../assets/images/index';
import { validEmail } from '../../service/Constant';
import { Link, useHistory } from 'react-router-dom';
import {
  Row,
  Col,
  Form,
  Button
} from 'react-bootstrap';
import ForgotPasswordService from '../../service/ForgotPasswordService';

const ResetPassword = (props) => {
  const [email, setEmail] = useState('')
  const history = useHistory();
  const [password, setPassword] = useState('')
  const [repassword, setRepassword] = useState('')
  const [termscondition, setTermsCondition] = useState(false)

  const [paswordShow, setPaswordShow] = useState(true)
  const [repaswordShow, setRePaswordShow] = useState(true)

  const [passwordErr, setPasswordErr] = useState(null);
  const [repasswordErr, setRePasswordErr] = useState(null);

  const onEmail = (e) => {
    setEmail(e.target.value);
  };

  const validateEmail = () => {
    if (!validEmail.text(email)) {
      message.error('Your Forget password Mail Id is Invalid')
    } else {
      if (props.email === email) {
        message.success('Your Forget password Mail Id is Verified')
      } else {
        message.error('Your Forget password Mail Id is not same')
      }
    }
  }

  const onForgetPassword = () => {
    var temp = window.location.pathname.split('/');
    if (temp.length > 1) {
      var slug_email = temp[temp.length - 2];
      var slug_type = temp[temp.length - 1];
      var payload = {
        email: slug_email,
        password: password,
        password_confirmation: repassword,
        type: slug_type,
      }
      ForgotPasswordService.changePassword(payload).then(result => {
        var response = result.data;
        if (response.status == 'success') {
          alert(response.message);
          history.push('/');
        }

      }).catch(function (error) {
        if (error.response) {
          // Request made and server responded
          alert(error.response.data?.message);
          console.log(error.response.data);
        } else if (error.request) {
          // The request was made but no response was received
          alert(error.request)
          console.log(error.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          alert(error.message)
          console.log(error.message);
        }

      });
    }
  }
  const onPassword = (e) => {
    setPassword(e.target.value);
    if (e.target.value != '') {
      setPasswordErr(false);
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
  const clickPasswordShow = () => {
    setPaswordShow(!paswordShow);
  }
  const clickRePasswordShow = () => {
    setRePaswordShow(!repaswordShow);
  }
  return (
    <div className="tl-bdy sign-tl-bdy">
      <div className="bdy-in">
        <Row>
          <Col sm={6} md={6} lg={6} xl={7} className="text-center m-auto">
            <SiginImage />
          </Col>
          <Col sm={6} md={6} lg={6} xl={5} className="p-3 mt-4 login-wrapper">
            <Logo />
            <Form className="sign-form p-4">
              <h2 className="f1-19 text-center forget-header">Forget Password</h2>
              {/* <h3 className="f3-13 text-center dark-blue-light mt-1 mb-3 login-sub-header">Enter the email address you used when you first signed up. We'll send you instruction to reset your password. </h3> 
               <Form.Group className="mb-4 inputGroup" controlId="formBasicEmail">
                <Form.Control
                  className="inputField"
                  type="text"
                  placeholder="Password"
                  
                />
                <PasswordIcon />
              </Form.Group><Form.Group className="mb-4 inputGroup" controlId="formBasicEmail">
                <Form.Control
                  className="inputField"
                  type="text"
                  placeholder="Confirm Password"
                />
                <PasswordIcon />
              </Form.Group> */}

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
                (<p style={{ fontSize: '16px', color: 'red' }} className="mb-3" > Please enter your Password </p>) : ''}
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
                (<p style={{ fontSize: '16px', color: 'red' }} className="mb-3">  {repassword ? 'Password missmatch' : 'Please enter your Re-Enter Password'} </p>) : ''}

              <Button
                disabled={passwordErr == false && repasswordErr == false ? false : true}
                className="submit-btn"
                variant="primary"
                // type="submit"
                onClick={onForgetPassword}
              >Change Password</Button>
            </Form>
            {/* <p className="forget-p mt-2 mb-3 mt-4 text-center"
              style={{ color: '#0B171B', fontSize: '15px' }}
            >
              Go back to {" "}
              <Link to="/login">Log in</Link>
            </p> */}
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default ResetPassword;
