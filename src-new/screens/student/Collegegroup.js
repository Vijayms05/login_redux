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

    const {collegeName, noofuniversity, collegeYear, stream, branch, setStream,
        setBranch, setCollegeName, setNoofuniversity, setCollegeYear}=props;
 
    // const [branch, setBranch]= useState('')
    // const [collegeName, setCollegeName] = useState('')
    // const [ noofuniversity, setNoofuniversity]= useState('')
    // const [collegeYear, setCollegeYear]= useState(' ')
    // const [stream, setStream] = useState('')

    const history = useHistory();   
  
    // const onCollegestudent = (e) =>{
    //     e.preventDefault();
    //     history.push('/home')
    //     console.log(inputName, branch, school, collegeName, noofuniversity, collegeYear, stream)
    // }
    return(
        <div className="tl-bdy sign-tl-bdy">
            <div className="bdy-in">
                <Row>
                    {/* <Col xs={6} md={6}  xl={7} className="text-center m-auto">
                        <Readingbooks />
                    </Col> */}
                    <Col xs={6} md={6} xl={5} xs className="p-3 mt-4 login-wrapper">
                        {/* <Logo  /> */}
                        <Form className="login-form p-4">
                       
                        <Form.Group className="mb-4 login-inputGroup" controlId="formBasicEmail">
                            <Form.Control 
                            className="student-inputField" 
                            type="text" 
                            placeholder="Name of College"
                            value={collegeName}
                            onChange={e => setCollegeName(e.target.value)}
                            />
                        </Form.Group>  
                            <select className="form-select mb-3 schoolstudent-select" 
                            aria-label="Default select example"
                            defaultValue={noofuniversity}
                            onChange={e => setNoofuniversity(e.target.value)}>
                                <option selected value="1"> Select Name of University </option>
                                <option value="2">One</option>
                                <option value="3">Two</option>
                                <option value="4">Three</option>
                            </select>   
                            <select className="form-select mb-3 schoolstudent-select" 
                            aria-label="Default select example"
                            defaultValue={stream}
                            onChange={ e => setStream(e.target.value)}>
                                <option selected value="1"> Select Stream </option>
                                <option value="2">One</option>
                                <option value="3">Two</option>
                                <option value="4">Three</option>
                            </select>   
                            <select className="form-select mb-3 schoolstudent-select" 
                                aria-label="Default select example"
                                defaultValue={branch}
                                onChange={e => setBranch(e.target.value)}>
                                <option selected value="1"> Select Branch </option>
                                <option value="2">One</option>
                                <option value="3">Two</option>
                                <option value="4">Three</option>
                            </select> 
                            <select className="form-select mb-3 schoolstudent-select" 
                                aria-label="Default select example"
                                defaultValue={collegeYear}
                                onChange={e => setCollegeYear(e.target.value)}>
                                <option selected value="1"> Select Year </option>
                                <option value="2">One</option>
                                <option value="3">Two</option>
                                <option value="4">Three</option>
                            </select> 
                        </Form>         
                    </Col>
                </Row>
            </div>
        </div>
    )
} 
export default Collegegroup