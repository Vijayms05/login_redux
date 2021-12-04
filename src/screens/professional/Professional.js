import React, { useState, useEffect } from 'react'
import { 
    Col,      
    Row, 
    Form,
    Button 
} from "react-bootstrap";
import { message } from 'antd';
import { useHistory } from 'react-router-dom';
// import { history } from '../../routes/Routes'
import {
    Learnprofessional,
    Logo
} from '../../assets/images/index';
import { validText } from '../../service/Constant';
const Professional = (props) => {
   const [inputName, setInputname]=useState('')
   const [workRole, setWorkrole]= useState('')
   const [industry, setIndustry]= useState('')

const history = useHistory();   
    useEffect(() => {
        // validateName();
        // validateWork();
    }, [])
   
    // const validateName = ()=>{
    //     if(!validText.test(inputName)){
    //         message.error('Your Name is Invalid')
    //     }else{
    //      message.success('Your Name is Valid')
    //    }
    // }
    // const validateWork = ()=>{
    //     if(!validText.test(workRole)){
    //         message.error('Your Name is Invalid')
    //     }else{
    //      message.success('Your Name is Valid')
    //    }
    // }
    const onProfessional = (e) =>{
        // e.preventDefault();
        history.push('/home');
        console.log(inputName,workRole,industry)
    }
 
    return(
        <div className="tl-bdy sign-tl-bdy">
            <div className="bdy-in">         
                <Row >
                    <Col sm={6} md={6}  xl={7} className="text-center m-auto">
                        <Learnprofessional />
                    </Col>               
                    <Col sm={6} md={6}  xl={5}  className="p-5" > 
                        <Logo />
                        <Form className="professional-form p-3 m-2"> 
                            <h2 className="f1-19 m-0 text-center signup-header">Before you jump in</h2>
                            <p className="f3-13 dark-blue-light login-sub-header mx-0 mt-1 mb-3 text-center">We will personalise this platform accordingly</p>
                            <Form.Group className="mb-3 professional-formgroup">
                                <Form.Control 
                                    placeholder="Enter your name" 
                                    className="px-3 professional-formcontrol"  
                                    value={inputName}
                                    onChange={e => setInputname(e.target.value)}                                    
                                />
                            </Form.Group> 
                            <select className="form-select mb-3 textselectoption" 
                                aria-label="Default select example"
                                defaultValue={industry}
                                onChange={e => setIndustry(e.target.value)}
                            >
                                <option selected>Select Industry</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>  
                            <Form.Group className="mb-3 professional-formgroup">
                                <Form.Control 
                                    placeholder="Work role" 
                                    className="px-3 professional-formcontrol"  
                                    value={workRole}
                                    onChange={e => setWorkrole(e.target.value)}                                    
                                />
                            </Form.Group>  
                            <Button 
                                className="mb-3 submit-btn" 
                                onClick={onProfessional} 
                            >
                                Continue
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </div>
        </div>
    );
}
export default Professional