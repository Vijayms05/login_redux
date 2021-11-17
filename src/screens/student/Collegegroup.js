import React, { useState, useEffect } from 'react'

import {
    Col,
    Row,
    Form, 
    Button,
    Container
} from 'react-bootstrap';

import { useHistory } from 'react-router-dom'

import {
    Readingbooks,
    Logo
} from '../../assets/images/index';


const Collegegroup = (props) =>{
    const [inputName,setInputName] = useState('')
    const [branch, setBranch]= useState('')
    const [school, setSchool] = useState('college')
    const [collegeName, setCollegeName] = useState('')
    const [ noofuniversity, setNoofuniversity]= useState('')
    const [collegeYear, setCollegeYear]= useState(' ')
    const [stream, setStream] = useState('')

    const history = useHistory()
    const onInputName = e =>{
        setInputName(e.target.value)
    }
    const onCollegeName = e => {
        setCollegeName(e.target.value)
    }
    const onStream = e => {
        setStream(e.target.value)
    }
    const onBranch = e => {
        setBranch(e.target.value)
    }
    const onUniversity = e => {
        setNoofuniversity(e.target.value)
    }
    const onYear = e =>{
        setCollegeYear(e.target.value)
    }
     
    const onCollegestudent = () =>{
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
                        <Form.Group action="#" class="stud-form-rad">
                            <Form.Check className="ps-0" 
                            label="School"  type="radio" id="test1" name="radio-group"  value="school"
                            checked={school === "school" ? true: false} 
                            onChange={e =>setSchool("school")}/>
                            <Form.Check label="College/
                                    Intermediate  
                                    (plus one/ plus two)"  type="radio" id="test2" name="radio-group" 
                                    value="college"
                                    checked={school === "college" ? true: false} 
                                    defaultValue={school}
                                    onChange={e =>setSchool("college")}/>
                        </Form.Group>
                        <Form.Group className="mb-4 login-inputGroup" controlId="formBasicEmail">
                            <Form.Control 
                            className="student-inputField" 
                            type="text" 
                            placeholder="Name of College"
                            value={collegeName}
                            onChange={onCollegeName}
                            />
                        </Form.Group>  
                            <select className="form-select mb-3 schoolstudent-select" 
                            aria-label="Default select example"
                            defaultValue={noofuniversity}
                            onChange={onUniversity}>
                                <option selected value="1">Name of University</option>
                                <option value="2">One</option>
                                <option value="3">Two</option>
                                <option value="4">Three</option>
                            </select>   
                            <select className="form-select mb-3 schoolstudent-select" 
                            aria-label="Default select example"
                            defaultValue={stream}
                            onChange={onStream}>
                                <option selected value="1">Stream</option>
                                <option value="2">One</option>
                                <option value="3">Two</option>
                                <option value="4">Three</option>
                            </select>   
                            <select className="form-select mb-3 schoolstudent-select" 
                                aria-label="Default select example"
                                defaultValue={branch}
                                onChange={onBranch}>
                                <option selected value="1">Branch</option>
                                <option value="2">One</option>
                                <option value="3">Two</option>
                                <option value="4">Three</option>
                            </select> 
                            <select className="form-select mb-3 schoolstudent-select" 
                                aria-label="Default select example"
                                defaultValue={collegeYear}
                                onChange={onYear}>
                                <option selected value="1">Year</option>
                                <option value="2">One</option>
                                <option value="3">Two</option>
                                <option value="4">Three</option>
                            </select> 
                            <Button  className="submit-btn" variant="primary" type="submit"
                                onClick={onCollegestudent}>
                                Continue
                            </Button>                                
                        </Form>         
                    </Col>
                </Row>
            </div>
        </div>
    )
} 
export default Collegegroup