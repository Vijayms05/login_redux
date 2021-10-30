import React, { useState, useEffect } from 'react'

import {
    Col,
    Row,
    Form, 
    Button,
    Container
} from 'react-bootstrap';

import {
    Readingbooks,
    Logo
} from '../../assets/images/index';

import './style.css';

const Studentgroup = (props) =>{
    const [input, setInput] = useState('')   
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
        <Container fluid>           
            <Row className="mt-4">
                <Col md={6} xl={7} className="text-center m-auto">
                    <Readingbooks />
                </Col>
                <Col md={6} xl={5} className="p-5 text-ce" > 
                    <Logo />
                    <Form className="m-2 p-3 studentgroup-form"> 
                        <h3 >Before you jump in</h3>
                        <p className="mb-3">We will personalise this platform accordingly</p>
                        <Form.Group className="mb-3 studentgroup-formgroup">
                            <Form.Control 
                                placeholder="Enter your name" 
                                className="px-3 studentgroup-formcontrol"  
                                value={input}
                                onChange={onChange}                                    
                            />
                        </Form.Group>
                        <label className="mb-3 choose">Are you school student or college student?</label>
                        <Row  >
                            <Col className="mt-4 mb-3" >  
                                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                    <Form.Check type="checkbox" label="School"  checked={school} 
                                    onClick={e => setSchool(!school)} />
                                </Form.Group>                  
                            </Col>
                            <Col className="mt-4 mb-3">
                                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                    <Form.Check type="checkbox" label="College/ 
                                    Intermediate  
                                    (plus one/ plus two)"  checked={college} style={{width:'200px',height:'50px'}}
                                    onClick={e => setCollege(!college)} />
                                </Form.Group>
                            </Col>
                        </Row>                  
                        <Button className="mb-3 studentgroup-btn" >
                            Continue
                        </Button>
                    </Form>
                </Col>
            </Row>           
        </Container>
    )
} 
export default Studentgroup