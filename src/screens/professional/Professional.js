import React, { useState, useEffect } from 'react'
import { 
    Col, 
    Container, 
    Row, 
    Form,
    Button 
} from "react-bootstrap";

import { history } from '../../routes/Routes'
import {
    Learnprofessional,
    Logo
} from '../../assets/images/index';
import './style.css'
const Professional = (props) => {
   const [inputName, setInputname]=useState('')
   const [workRole, setWorkrole]= useState('')

    const onName = e =>{
        setInputname(e.target.value)
    }
    const onWork = e => {
        setWorkrole(e.target.value)
    }   
    const onProfessional = () =>{
        history.push('/home')
    }
 
    return(
        <Col className="tl-bdy">
            <div className="bdy-in">           
                <Row >
                    <Col md={6}  xl={7} className="text-center m-auto">
                        <Learnprofessional />
                    </Col>               
                    <Col md={6} xl={5}   className="p-5" > 
                        <Logo />
                        <Form className="professional-form p-3 m-2"> 
                            <h3 className="mb-2">Before you jump in</h3>
                            <p className="mb-3">We will personalise this platform accordingly</p>
                            <Form.Group className="mb-3 professional-formgroup">
                                <Form.Control 
                                    placeholder="Enter your name" 
                                    className="px-3 professional-formcontrol"  
                                    value={inputName}
                                    onChange={onName}                                    
                                />
                            </Form.Group> 
                            <select className="form-select mb-3 textselectoption" aria-label="Default select example">
                                <option selected>Industry</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>  
                            <Form.Group className="mb-3 professional-formgroup">
                                <Form.Control 
                                    placeholder="Work role" 
                                    className="px-3 professional-formcontrol"  
                                    value={workRole}
                                    onChange={onWork}                                    
                                />
                            </Form.Group>  
                            <Button className="mb-3 professional-btn" onClick={onProfessional} >
                                Continue
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </div>
        </Col>
    );
}
export default Professional