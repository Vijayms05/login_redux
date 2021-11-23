import { message } from 'antd';
import React, { useState } from 'react'

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
import { validText } from '../../constant/Constant';


const Studentgroup = (props) =>{
    const [inputName, setInputname] = useState('')   
    const [school, setSchool] = useState(false)  

    const history= useHistory();
   
    const onName = (e)=>{
        const inputName= e.target.value
        setInputname(inputName);
        if (!validText.test(inputName)) {      
          message.error('Your Name is Invalid')
       }else{
        message.success('Your Name is Valid')
       }
    }

    const toggleClick = e =>{        
        e.preventDefault();  
        
        if(school === 'school')  {
          history.push('/schoolstudent')
        }else if(school === 'college'){
          history.push('/collegstudent')
        }   
        console.log(inputName)     
        if(inputName === " " || school === false){
            message.error('Please Select the School or Professional')
        }else{
            message.success('Student is Successfully verified ')
        }
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
                            <h2 className="f1-19 m-0 text-center">
                                Before you jump in
                            </h2>
                            <h3 className="f3-13 dark-blue-light mx-0 mt-1 mb-3 text-center">
                                We will personalise this platform accordingly
                            </h3> 
                            <Form.Group className="mb-4 login-inputGroup" controlId="formBasicEmail">
                                <Form.Control 
                                    className="student-inputField" 
                                    type="text" 
                                    placeholder="Enter your Name"
                                    value={inputName}
                                    onChange={onName}
                                />
                            </Form.Group>    
                            <p style={{color:'#4C5857',fontSize:'17px'}}>
                                Are you school student or college student?
                            </p>                       
                            <Row>
                                <Col className="mt-0" >  
                                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                        <Form.Check 
                                            type="checkbox" 
                                            label="School"  
                                            value="school"
                                            checked={school === "school" ? true: false} 
                                            onClick={e =>setSchool("school")}  />
                                    </Form.Group>                  
                                </Col>
                                <Col className="mt-1" >
                                    <Form.Group className="mb-3" controlId="formBasicCheckbox ">
                                        <Form.Check 
                                            type="checkbox" 
                                            label="College/Intermediate  
                                            (plus one/ plus two)" 
                                            style={{width:'200px',height:'50px'}}
                                            value="college"
                                            checked={school === "college" ? true: false} 
                                            onClick={e =>setSchool("college")} 
                                        />
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Button 
                                className="submit-btn" 
                                variant="primary" 
                                type="submit"
                                onClick={toggleClick}
                            >
                                Continue
                            </Button>                                
                        </Form>         
                    </Col>  
                </Row>
            </div>
        </div>
    )
} 
export default Studentgroup