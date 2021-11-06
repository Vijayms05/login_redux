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


const Studentgroup = (props) =>{
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
                            <Row>
                                <Col className="mt-0" >  
                                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                        <Form.Check type="checkbox" label="School"  checked={school} 
                                        onClick={e => setSchool(!school)} />
                                    </Form.Group>                  
                                </Col>
                                <Col className="mt-1" >
                                    <Form.Group className="mb-3" controlId="formBasicCheckbox ">
                                        <Form.Check type="checkbox" label="College/ 
                                        Intermediate  
                                        (plus one/ plus two)"  checked={college} style={{width:'200px',height:'50px'}}
                                        onClick={e => setCollege(!college)} />
                                    </Form.Group>
                                </Col>
                            </Row> 
                            <Form.Group className="mb-4 login-inputGroup" controlId="formBasicEmail">
                                <Form.Control 
                                className="student-inputField" 
                                type="email" 
                                placeholder="Name of School"
                                />
                            </Form.Group>  
                            <select className="form-select mb-3 schoolstudent-select" aria-label="Default select example">
                                <option selected>Stream</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>   
                            <select className="form-select mb-3 schoolstudent-select" aria-label="Default select example">
                                <option selected>Standard</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select> 
                            <Link to="/home" className="login-submit-btn" variant="primary" type="submit">
                                Continue
                            </Link>                                
                        </Form>         
                    </Col>
                </Row>
            </div>
        </Col>
    )
} 
export default Studentgroup