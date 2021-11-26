import { message } from 'antd';
import React, { useState } from 'react'
import { history } from '../../routes/Routes';
import {
    Col,
    Row,
    Form, 
    Button,
    Container
} from 'react-bootstrap';
// import { useHistory } from 'react-router-dom'

import {
    Readingbooks,
    Logo
} from '../../assets/images/index';
import { validText } from '../../constant/Constant';
// import Schoolstudent from './Schoolstudent';
// import Collegegroup from './Collegegroup';


const Studentgroup = (props) =>{
    const { validateName } = props;
    
    const [inputName, setInputname] = useState('')   
    const [student, setStudent] = useState(false)  

    const [branch, setBranch]= useState('')
    const [collegeName, setCollegeName] = useState('')
    const [noofuniversity, setNoofuniversity]= useState('')
    const [collegeYear, setCollegeYear]= useState(' ')
    const [stream, setStream] = useState('')
    
    const [schoolName, setSchoolName] = useState('')
    const [streamSchool, setStreamSchool]= useState('')
    const [standard, setStandard]= useState('')

    // const history= useHistory();
//    const validateName = () =>{
//     if (!validText.test(inputName)) {      
//         message.error('Your Name is Invalid')
//      }else{
//       message.success('Your Name is Valid')
//     }
//    }
   const validateCollege = () =>{
    if (!validText.test(collegeName)) {      
        message.error('Your Name is Invalid')
     }else{
      message.success('Your Name is Valid')
    }
   }
    const onName = (e)=>{       
        setInputname(e.target.value);       
    }    

    const toggleClick = e =>{        
        // e.preventDefault();

        console.log(inputName)     
        // if(inputName === " " ){
        //     message.error('Please Select the School or Professional')
        // }else{
        //     message.success('Student is Successfully verified ')
        // }
        history.push({pathname:'/home'})
    }
    return(
        <div className="tl-bdy sign-tl-bdy">
            <div className="bdy-in">
                <Row>
                    <Col sm={6} md={6}  xl={7} className="text-center m-auto">
                        <Readingbooks />
                    </Col>
                    <Col sm={6} md={6} xl={5}  className="p-3 mt-4 login-wrapper">
                        <Logo  />
                        <Form className="login-form p-4">

                            <h2 className="f1-19 m-0 text-center signup-header">
                                Before you jump in
                            </h2>
                            <h3 className="f3-13 dark-blue-light mx-0 mt-1 mb-3 text-center login-sub-header">
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
                            <Row className="d-sm-flex  flex-wrap-inherit">
                                <Col className="mt-3" >  
                                    <Form.Group className="mb-2" controlId="formBasicCheckbox">
                                        <Form.Check                                        
                                            type="checkbox" 
                                            label="School"  
                                            value="school"
                                            checked={student === "school" ? true: false} 
                                            onClick={e =>setStudent("school")}  />
                                    </Form.Group>                  
                                </Col>
                                <Col className="mt-3" >
                                    <Form.Group className="mb-2" controlId="formBasicCheckbox ">
                                        <Form.Check 
                                            type="checkbox" 
                                            label="College/Intermediate  
                                            (plus one/ plus two)" 
                                            style={{width:'160px',height:'60px'}}
                                            value="college"
                                            checked={student === "college" ? true: false} 
                                            onClick={e =>setStudent("college")} 
                                        />
                                    </Form.Group>
                                </Col>                                
                            </Row>
                            <Col className="mt-1">
                                {student === 'school' ? 
                                    (
                                        <Form >                            
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
                                        </Form>
                                    ): 
                                        student === 'college'?
                                        (
                                        <Form>
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


                                    )
                                        :null
                                }
                                

                            </Col>
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