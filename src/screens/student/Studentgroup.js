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


const Studentgroup = (props) =>{
    const [inputName, setInputname] = useState('')   
    const [school, setSchool] = useState(false)  

    const history= useHistory()
    const onInputname = e =>{
        setInputname(e.target.value)
    }
    
  

    const toggleClick = e =>{
        
        e.preventDefault();  
        if(school === 'school')  {
          history.push('/schoolstudent')
          // console.log(student)
        }else if(school === 'college'){
          history.push('/collegstudent')
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
                            <h2 className="f1-19 m-0 text-center">Before you jump in</h2>
                            <h3 className="f3-13 dark-blue-light mx-0 mt-1 mb-3 text-center">We will personalise this platform accordingly</h3> 
                            <Form.Group className="mb-4 login-inputGroup" controlId="formBasicEmail">
                                <Form.Control 
                                className="student-inputField" 
                                type="email" 
                                placeholder="Enter your Name"
                                value={inputName}
                                onChange={onInputname}
                                />
                            </Form.Group>                           
                            <Row>
                                <Col className="mt-0" >  
                                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                        <Form.Check type="checkbox" label="School"  value="school"
                                            checked={school === "school" ? true: false} 
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
                                        onClick={e =>setSchool("college")} />
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