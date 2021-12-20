import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  SiginImage,
  Logo,
  EmailIcon,
  PasswordIcon,
  EyeIcon, EyeIconHid
} from '../../assets/images/index';
import { BrowserRouter, Link } from 'react-router-dom';
import {
  Row,
  Col,
  Form,
  Button
} from 'react-bootstrap';
import { validEmail, validPassword } from '../../service/Constant';
import { set_Email, set_Profile, set_Token, set_User } from '../../redux/action/index';
import LoginService from '../../service/LoginService'
import ForgotPasswordService from '../../service/ForgotPasswordService';
import httpClient from '../../service/httpClient';
import { ErrorHandler } from '../../service/ErrorHandler';
import PropTypes from 'prop-types';
const Login = ({ setToken, history }) => {
  const [user, setUser] = useState(0);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(true);

  const [emailErr, setEmailErr] = useState(null)
  const [passwordErr, setPasswordErr] = useState(null)
  const [userErr, setUserErr] = useState(null)
  const [verifyEmail, setVerifyEmail] = useState('');
  const [slugMail, setSlugMail] = useState('');
  const dispatch = useDispatch();


  useEffect(() => {
    var temp = window.location.pathname.split('/');
    const uriParts = temp[temp.length - 1];
    if (uriParts) {
      LoginService.verifyEmail(uriParts).then(result => {
        var response = result.data;
        if (response.status == 'success') {
          alert(response.message);
          setSlugMail(uriParts);
          setVerifyEmail(true);
        } else {
          alert(response.message);
          setSlugMail('');
          setVerifyEmail(false);
        }

      }).catch(function (error) {
        ErrorHandler(error);
      });
    }
  }, []);
  const onEmail = (e) => {
    setEmail(e.target.value);
    if (validEmail.test(e.target.value)) {
      setEmailErr(false);
    } else {
      setEmailErr(true);
    }
  };
  const onPassword = (e) => {
    setPassword(e.target.value);
    if (e.target.value != '') {
      if (e.target.value.length < 6) {
        setPasswordErr(true);

      } else {
        setPasswordErr(false);
      }
    } else {
      setPasswordErr(true);
    }
  };

  const clickPasswordShow = () => {
    setShowPassword(!showPassword);
  }

  const onLogin = () => {
    var payload = {
      email: email,
      password: password,
      type: user,
    };
    LoginService.login(payload).then(result => {
      var response = result.data;
      if (response?.status == 'success') {
        console.log(response);
        if (response?.email_verified == 1 && response?.register_status == 1) {
          dispatch(set_Email({ email: email, type: user }));
          httpClient.defaults.headers.common['Authorization'] = `Bearer ${response?.token}` || '';
          setToken(response?.token);
          dispatch(set_Token(response?.token));
          dispatch(set_User(response?.user));
          history.push('/home');
        } else if (response?.email_verified == 1 && response?.register_status == 0) {
          dispatch(set_Email({ email: email, type: user }));
          history.push('/onboard');
        } else if (response?.email_verified == 0 && response?.register_status == 0) {
          alert(response?.message);
        } else if (response?.email_verified == 0 && response?.register_status == 1) {
          alert(response?.message);
        }
      } else if (response.status == 'error') {
        alert(response?.message);
      }
    }).catch(function (error) {
      ErrorHandler(error);
    });
  };
  const forgotPasswordRequest = () => {
    if (email != '' && emailErr == false) {
      ForgotPasswordService.request(email, user).then(result => {
        var response = result.data;
        if (response?.status == 'success') {
          alert(response.message);
        }
      }).catch(function (error) {
        ErrorHandler(error);
      });
    } else {
      alert("Enter your email and type")
    }
  }
  return (
    <>
      {(verifyEmail == '' && slugMail == '') || (verifyEmail && slugMail) ?
        <div className="tl-bdy sign-tl-bdy">
          <div className="bdy-in">
            <Row>
              <Col sm={6} md={6} xl={7} className="text-center m-auto">
                <SiginImage />
              </Col>
              <Col sm={6} md={6} xl={5} className="p-2 mt-2 login-wrapper">
                <Logo />
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
                  {emailErr ?
                    (<p style={{ fontSize: '16px', color: 'red' }} className="mb-2">
                      Invalid Email
                    </p>
                    ) : ''}
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
                      {showPassword ? <EyeIconHid /> : <EyeIcon />}
                    </Button>
                  </Form.Group>
                  {passwordErr ?
                    (<p style={{ fontSize: '16px', color: 'red' }} className="mb-2">
                      {password ? 'Password should have min 6 digits' : 'Please enter your Password'}
                    </p>
                    ) : ''}
                  <Row>
                    <Col >
                      <div className="form-check">
                        <input className="form-check-input" type="radio" name="flexRadioDefault"
                          id="flexRadioDefault1" checked={user == 0 ? true : false}
                          onClick={() => setUser(0)} />
                        <label className="form-check-label" for="flexRadioDefault1">
                          User
                        </label>
                      </div>
                    </Col>
                    <Col >
                      <div className="form-check">
                        <input className="form-check-input" type="radio"
                          name="flexRadioDefault" id="flexRadioDefault2"
                          checked={user == 1 ? true : false}
                          onClick={() => setUser(1)} />
                        <label className="form-check-label" for="flexRadioDefault2" style={{ width: '150px' }}>
                          Organisation User
                        </label>
                      </div>
                    </Col>
                  </Row>
                  {userErr ?
                    (<p style={{ fontSize: '16px', color: 'red' }} className="mb-2">
                      Please select the User or Organizational User
                    </p>
                    ) : ''}
                  <Form.Group className="mb-4" style={{ height: '25px' }} controlId="formBasicCheckbox">
                    <Form.Label onClick={forgotPasswordRequest} className="reset-password">
                      {/* Forget Password? */}
                      <BrowserRouter>
                        <Link to="">Forget Password?</Link>
                      </BrowserRouter>
                    </Form.Label>
                  </Form.Group>
                  <Button className="submit-btn" variant="primary"
                    disabled={emailErr == false && passwordErr == false ? false : true} onClick={onLogin}>
                    Log in
                  </Button>
                </Form>
                <p
                  className="login-p mt-2 mb-3 mt-4 text-center"
                  style={{ color: '#0B171B', fontSize: '15px' }}
                >
                  Don't have an account? {' '}
                  <BrowserRouter>
                    <Link to="/signup">Sign up</Link>
                  </BrowserRouter>
                </p>
              </Col>
            </Row>
          </div>
        </div>
        : null}
    </>
  );
}
Login.propTypes = {
  setToken: PropTypes.func.isRequired
}
export default Login;
