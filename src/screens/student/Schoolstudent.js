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
import { message } from 'antd'
import { validText } from '../../constant/Constant';

const Schoolstudent = (props) => {
    const {schoolName, stream, standard,setSchoolName,
        setStream,
        setStandard}=props;  
   
    const history = useHistory();
   
    // const onSchoolstudent=(e)=>{
    //     e.preventDefault();
      
    //     // if (!validText.test(inputName)) {      
    //     //     message.error('Your Name is Invalid')
    //     // }else{
    //     // message.success('Your Name is Valid')
    //     // }

       
        
    //     // history.push('/home')
    //     console.log(inputName, school, schoolName, stream, standard)
    // }
    
    return(
       
                    <Col>
                        {/* <Logo  /> */}
                        <Form className="login-form p-4">                            
                            <Form.Group className="mb-4 login-inputGroup" controlId="formBasicEmail">
                                <Form.Control 
                                    className="student-inputField" 
                                    type="text" 
                                    placeholder="Name of School"
                                    value={schoolName}
                                    onChange={e => setSchoolName(e.target.value)}
                                />
                            </Form.Group>  
                            <select className="form-select mb-3 schoolstudent-select" 
                                defaultValue={stream}
                                onChange={e => setStream(e.target.value)}
                                aria-label="Default select example">
                                <option selected value="1">-- Select Stream --</option>
                                <option value="2">One</option>
                                <option value="3">Two</option>
                                <option value="4">Three</option>
                            </select>   
                            <select 
                                className="form-select mb-3 schoolstudent-select" 
                                defaultValue={standard}
                                onChange={e => setStandard(e.target.value)}
                                aria-label="Default select example"
                            >
                                <option selected value="1"> -- Select Standard --</option>
                                <option value="2">One</option>
                                <option value="3">Two</option>
                                <option value="4">Three</option>
                            </select> 
                            {/* <Button  
                                className="submit-btn" 
                                variant="primary" type="submit"
                                onClick={onSchoolstudent}>
                                Continue
                            </Button>                                 */}
                        </Form>         
                    </Col>              
    )
} 
export default Schoolstudent