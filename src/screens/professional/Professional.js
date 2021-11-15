import React, { useState, useEffect } from 'react'
import { 
    Col, 
    Container, 
    Row, 
    Form,
    Button 
} from "react-bootstrap";

import { useHistory } from 'react-router-dom';
import {
    Learnprofessional,
    Logo
} from '../../assets/images/index';
const Professional = (props) => {
   const [inputName, setInputname]=useState('')
   const [workRole, setWorkrole]= useState('')
   const [industry, setIndustry]= useState('')

   const history = useHistory()
    const onName = e =>{
        setInputname(e.target.value)
    }
    const onWork = e => {
        setWorkrole(e.target.value)
    }   
    const onIndustry = e => {
        setIndustry(e.target.value)
    }
    const onProfessional = () =>{
        history.push('/home')
    }
 
    return(
        <Col className="tl-bdy sign-tl-bdy">
            <div className="bdy-in">           
                <Row >
                    <Col md={6}  xl={7} className="text-center m-auto">
                        <Learnprofessional />
                    </Col>               
                    <Col md={6} xl={5}   className="p-5" > 
                        <Logo />
                        <Form className="professional-form p-3 m-2"> 
                            <h2 className="f1-19 m-0 text-center">Before you jump in</h2>
                            <p className="f3-13 dark-blue-light mx-0 mt-1 mb-3 text-center">We will personalise this platform accordingly</p>
                            <Form.Group className="mb-3 professional-formgroup">
                                <Form.Control 
                                    placeholder="Enter your name" 
                                    className="px-3 professional-formcontrol"  
                                    value={inputName}
                                    onChange={onName}                                    
                                />
                            </Form.Group> 
                            <select className="form-select mb-3 textselectoption" 
                                aria-label="Default select example"
                                defaultValue={industry}
                                onChange={onIndustry}
                                >
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
                            <Button className="mb-3 submit-btn" onClick={onProfessional} >
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