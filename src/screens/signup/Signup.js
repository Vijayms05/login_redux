import React, {useState} from 'react';

//logo
import {
  SiginImage,
  Logo, 
  EmailIcon,
  PasswordIcon,
  EyeIcon, EyeIconHid
} from '../../assets/images/index';

import {Link} from 'react-router-dom';
import { Row, Col, Form, Button} from 'react-bootstrap';
import './style.css';
import './responsive.css'

const Signup = () => {
  const [paswordShow, setPaswordShow] = useState(true)
  const [repaswordShow, setRePaswordShow] = useState(true)

  const clickPasswordShow = () =>{
    setPaswordShow(!paswordShow);
  }
  const clickRePasswordShow = () =>{
    setRePaswordShow(!repaswordShow);
  }

  return (
    <Col className="tl-bdy">
      <div className="bdy-in">
        <Row>
          <Col md={6} xl={7} className="text-center m-auto">
            <SiginImage />
          </Col>
          <Col md={6} xl={5} className="p-3">
            <Logo  />
            <Form className="sign-form p-4">
              <h2>Creat accout and get started</h2>
              <Form.Group className="mb-4 inputGroup" controlId="formBasicEmail">
                <Form.Control className="inputField" type="email" placeholder="Enter email"/>
                <EmailIcon />
              </Form.Group>
              <Form.Group className="mb-4 inputGroup" controlId="formBasicEmail">
                <Form.Control className="inputField" type="email" placeholder="Re-Enter email"/>
                <EmailIcon />
              </Form.Group>
              <Form.Group className="mb-4 inputGroup" controlId="formBasicEmail">
                <Form.Control className="inputField"  type={paswordShow ? 'password' : 'text'} placeholder="Password"/>
                <PasswordIcon />
                <Button className="pwd-btn" onClick={clickPasswordShow}>
                  { paswordShow ? <EyeIconHid /> : <EyeIcon />}
                </Button>
              </Form.Group>
              <Form.Group className="mb-4 inputGroup" controlId="formBasicEmail">
                <Form.Control className="inputField" type={repaswordShow ? 'password' : 'text'} placeholder="Re-Enter Password"/>
                <PasswordIcon />
                <Button className="pwd-btn" onClick={clickRePasswordShow}>
                  { repaswordShow ? <EyeIconHid /> : <EyeIcon />}
                </Button>
              </Form.Group>
              <Form.Group className="mb-4" style={{height: '25px'}} controlId="formBasicCheckbox">
                  <Form.Check className="float-start me-2" type="checkbox"/>
                  <Form.Label className="terms-cond-text">I agree Skilltally’s <Link>Privacy Policy</Link> & <Link>Terms of Services</Link>  </Form.Label>
              </Form.Group>
                <Link to="/login" className="submit-btn" variant="primary" type="submit">
                    Creat Account
                </Link>
            </Form>
          </Col>
        </Row>
      </div>
    </Col>
  );
};

export default Signup;
