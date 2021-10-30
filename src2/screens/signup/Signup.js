import React, {useState} from 'react';

//logo
import {
  SiginImage,
  Logo, 
  EmailIcon,
  PasswordIcon,
} from '../../assets/images/index';

import {Link} from 'react-router-dom';
import { Row, Col, Form, Button} from 'react-bootstrap';
import './style.css';

const Signup = () => {
  return (
    <Col className="tl-bdy">
      <Col className="m-auto">
        <Row>
          <Col sm={6} md={7} xl={8} className="text-center m-auto">
            <SiginImage />
          </Col>
          <Col md={5} xl={4} className="p-5">
            <Logo  />
            <Form className="sign-form p-3">
              <h2>Creat accout and get started</h2>
              <Form.Group className="mb-3 inputGroup" controlId="formBasicEmail">
                <Form.Control className="inputField" type="email" placeholder="Enter email"/>
                <EmailIcon />
              </Form.Group>
              <Form.Group className="mb-3 inputGroup" controlId="formBasicEmail">
                <Form.Control className="inputField" type="email" placeholder="Re-Enter email"/>
                <EmailIcon />
              </Form.Group>
              <Form.Group className="mb-3 inputGroup" controlId="formBasicEmail">
                <Form.Control className="inputField" type="password" placeholder="Password"/>
                <PasswordIcon />
              </Form.Group>
              <Form.Group className="mb-3 inputGroup" controlId="formBasicEmail">
                <Form.Control className="inputField" type="password" placeholder="Re-Enter Password"/>
                <PasswordIcon />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check className="float-start me-2" type="checkbox"/>
                <Form.Label>I agree Skilltally’s <Link>Privacy Policy</Link> & <Link>Terms of Services</Link>  </Form.Label>
              </Form.Group>
                <Button className="submit-btn" variant="primary" type="submit">
                    Creat Account
                </Button>
            </Form>
          </Col>
        </Row>
      </Col>
    </Col>
  );
};

export default Signup;
