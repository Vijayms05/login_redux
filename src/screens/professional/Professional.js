import React, { useState, useEffect } from 'react'
import { 
    Col, 
    Container, 
    Row, 
    Form,
    Button 
} from "react-bootstrap";

import {
    Learnprofessional,
    Logo
} from '../../assets/images/index';
import './style.css'
const Professional = (props) => {
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
 
    return(
        <Container fluid >            
            <Row className="mt-4" >
                <Col md={6} xl={7} className="m-auto text-center">
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
                                value={input}
                                onChange={onChange}                                    
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
                                value={input}
                                onChange={onChange}                                    
                            />
                        </Form.Group>  
                        <Button className="mb-3 professional-btn" >
                            Continue
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
}
export default Professional