import React, {useState} from 'react';

import {
    Col, 
    Row,
    Form,
    Button,
    Container
} from 'react-bootstrap'

import { Link } from 'react-router-dom';

import {
    Logo,
    EmailIcon,
   ForgetPasswordImage 
} from '../../assets/images/index'
import './style.css'

const ResetPassword = (props) => {
    const [email, setEmail] = useState('')
    const resetEmail = e => {
        if(e.target.value.match('^[a-zA-Z0-9_@./#&+-]*$')){
            setEmail(e.target.value)
        }       
    }
    const resetSubmit = () =>{
        console.log(email)
    }
    return(
        <Container fluid>            
            <Row className="mt-4">
                <Col md={6} xl={7} className="text-center m-auto">
                    <ForgetPasswordImage />
                </Col>
                <Col md={6} xl={5} className="p-5 text-center">
                    <Logo/>
                    <Form className="m-1 p-3 forget-form">
                        <h3 className="mt-2">Forgot password?</h3>
                        <p>
                            Enter the email address you used when you first signed up. 
                            We’ll send you instructions to reset your password.
                        </p>
                        <Form.Group className="mb-4 mt-4 forget-formgroup" controlId="formBasicEmail">
                            <Form.Control 
                            className="forget-formcontrol" 
                            type="email" 
                            placeholder="Enter email"
                            value={email}
                            onChange={resetEmail}
                            />
                            <EmailIcon />
                        </Form.Group>
                        <Button 
                            className="forget-btn mb-3" 
                            variant="primary" 
                            type="submit"
                            onClick={resetSubmit}
                            >
                                Send reset instructions
                        </Button>
                        <p className='mb-3'>Go back to  <Link to='/login'>Log in</Link></p>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}
export default ResetPassword