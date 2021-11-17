import React, { useState, useEffect } from 'react'

import {
    Col,
    Row,
    Form, 
    Button,
    Container
} from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

import {
    Readingbooks,
    Logo
} from '../../assets/images/index';
// import { history } from '../../routes/Routes';

const Schoolstudent = (props) => {
    const [inputName, setInputName] = useState('')    
    const [school, setSchool] = useState('school')
    const [schoolName, setSchoolName] = useState('')
    const [stream, setStream]= useState('Stream')
    const [standard, setStandard]= useState('Stream')
   
    const history = useHistory()

    const onInputName = e =>{
        setInputName(e.target.value)
    }
    const onSchoolName = e => {
        setSchoolName(e.target.value)
    }
    const onStream = e => {
        setStream(e.target.value)
    }
    const onStandard = e => {
        setStandard(e.target.value)
    }
   
    const onSchoolstudent=()=>{
        history.push('/home')
    }
    
    return(
        <div className="tl-bdy sign-tl-bdy">
            <div className="bdy-in">
                <Row>
                    <Col md={6}  xl={7} className="text-center m-auto">
                        <Readingbooks />
                    </Col>
                    <Col md={6} xl={5} xs className="p-3 mt-4 login-wrapper">
                        <Logo  />
                        <Form className="login-form p-4">
                            <h2 className="f1-19 m-0 text-center">Before you jump in</h2>
                            <h3 className="f3-13 dark-blue-light mx-0 mt-1 mb-3 text-center">We will personalise this platform accordingly</h3> 
                            <Form.Group className="mb-4 login-inputGroup" controlId="formBasicEmail">
                                <Form.Control 
                                className="student-inputField" 
                                type="text" 
                                placeholder="Enter your Name"
                                value={inputName}
                                onChange={onInputName}
                                />
                            </Form.Group> 
                            <p style={{color:'#4C5857',fontSize:'17px'}}>Are you school student or college student?</p>
                            <Row>
                                <Col className="mt-1" >  
                                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                        <Form.Check type="checkbox" label="School"  value="school"
                                            checked={school === "school" ? true: false} 
                                            defaultValue={school}
                                            onClick={e =>setSchool("school")}  />
                                    </Form.Group>                  
                                </Col>
                                <Col className="mt-1" >
                                    <Form.Group className="mb-3" controlId="formBasicCheckbox ">
                                        <Form.Check type="checkbox" label="College/ 
                                            Intermediate  
                                            (plus one/ plus two)" style={{width:'200px',height:'50px'}}
                                            value="college"
                                            checked={school === "college" ? true: false} 
                                            onClick={e =>setSchool("college")} 
                                        />
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Form.Group className="mb-4 login-inputGroup" controlId="formBasicEmail">
                                <Form.Control 
                                    className="student-inputField" 
                                    type="text" 
                                    placeholder="Name of School"
                                    value={schoolName}
                                    onChange={onSchoolName}
                                />
                            </Form.Group>  
                            <select className="form-select mb-3 schoolstudent-select" 
                                defaultValue={stream}
                                onChange={onStream}
                                aria-label="Default select example">
                                <option selected value="1">Stream</option>
                                <option value="2">One</option>
                                <option value="3">Two</option>
                                <option value="4">Three</option>
                            </select>   
                            <select 
                                className="form-select mb-3 schoolstudent-select" 
                                defaultValue={standard}
                                onChange={onStandard}
                                aria-label="Default select example"
                            >
                                <option selected value="1">Standard</option>
                                <option value="2">One</option>
                                <option value="3">Two</option>
                                <option value="4">Three</option>
                            </select> 
                            <Button  
                                className="submit-btn" 
                                variant="primary" type="submit"
                                onClick={onSchoolstudent}>
                                Continue
                            </Button>                                
                        </Form>         
                    </Col>
                </Row>
            </div>
        </div>
    )
} 
export default Schoolstudent