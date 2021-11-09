import React, { useState, useEffect } from 'react'

import {
    Col,
    Row,
    Form, 
    Button,
    Container
} from 'react-bootstrap';
import {Link} from 'react-router-dom';

import {
    Readingbooks,
    Logo
} from '../../assets/images/index';


const Schoolstudent = (props) =>{
    const [input, setInput] = useState('')
    const [nameInput, setNameinput]= useState('')
    const [school, setSchool] = useState(false)
    const [college, setCollege] = useState(false)

    const onChange = e =>{
        setInput(e.target.value)
    }
    useEffect((e) => {
        if(!school){
            setCollege(college)

        }
        else if(!college){
            setSchool(school)
        }else{
            setCollege(college)
            setSchool(school)
        }
    }, [school,college])   
    const onName = e => {
        setNameinput(e.target.value)
    }    
    return(
        <Col className="tl-bdy">
            <div className="bdy-in">
                <Row>
                    <Col md={6}  xl={7} className="text-center m-auto">
                        <Readingbooks />
                    </Col>
                    <Col md={6} xl={5} xs className="p-3 mt-4 login-wrapper">
                        <Logo  />
                            <Form className="login-form p-4">
                            <h2>Before you jump in</h2>
                            <h3>We will personalise this platform accordingly</h3> 
                            <Form.Group className="mb-4 login-inputGroup" controlId="formBasicEmail">
                                <Form.Control 
                                className="student-inputField" 
                                type="email" 
                                placeholder="Enter your Name"
                                />
                            </Form.Group>                           
                            <Form.Group action="#" class="stud-form-rad">
                                <Form.Check className="ps-0" label="School"  type="radio" id="test1" name="radio-group" />
                                <Form.Check label="College/ 
                                        Intermediate  
                                        (plus one/ plus two)"  type="radio" id="test2" name="radio-group" />
                            </Form.Group>
                            <Link to="/schoolstudent" className="login-submit-btn" variant="primary" type="submit">
                                student Continue
                            </Link>   
                            <Link to="/collegstudent" className="login-submit-btn" variant="primary" type="submit">
                                Continue
                            </Link>                                
                        </Form>         
                    </Col>
                </Row>
            </div>
        </Col>
    )
} 
export default Schoolstudent