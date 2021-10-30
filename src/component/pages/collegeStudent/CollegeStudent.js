import React from "react";
import { Logo, ReadbookOneImage } from '../../logo/index'

import {useHistory} from 'react-router-dom'
import '../../../style/Signup.css'

import {FaUser} from 'react-icons/fa';
import {IoMdSchool} from 'react-icons/io'

const CollegeStudent = () => {  

    const history=useHistory()
    const toggleButton= e =>{
        e.preventDefault()
        history.push('/dashboard')

    }
    return (
        <div className="container-fluid">
            <div className="row justify-content-center align-items-center">
                <div className="col-lg col-sm-6 col-md-8 m-1 p-2">
                    <div className="auto text-center"> <ReadbookOneImage /></div>                   
                </div>
                <div className="col-lg col-sm-6 col-md-4 mt-5 mb-5 gx-2">
                    <div className="m-2 text-center p-2 ms-3" ><Logo /></div>    
                    <div className="m-1 text-center p-1"> <h3>Before you jump in</h3></div>                     
                    <div className="m- text-center p-1">
                        <p>We will personalise this platform accordingly</p>
                    </div>
                    <div className="form ">
                        <div className="form-group m-1 p-1 ms-4 w-75" style={{left:'55.75px'}}>
                            <span className="position-absolute" style={{left:'20px',top:'16px',color:"dodgerblue"}}><FaUser /></span>          
                            <input type="email" placeholder="Enter e-mail" 
                            className="form-control form-control-md p-2" />
                        </div>
                        <div class="m-3 " >
                            <p style={{marginLeft:'81.75px'}}>Are you school student or college student?</p>
                        </div>
                        <div class="m-3">
                            <div className="row">
                                <div className="col" style={{marginLeft:'81.75px'}}>
                                    <input class="form-check-input" type="checkbox"  /> &nbsp;                                    
                                        Student      
                                </div>
                                <div className="col">                               
                                    <input class="form-check-input" type="checkbox" /> &nbsp;                                
                                        College        
                                </div>
                            </div>
                        </div>                        
                        <div className="form-group m-2 p-2 ms-4 w-75" style={{left:'55.75px'}}>        
                            <span className="position-absolute" style={{left:'20px',top:'16px',color:"dodgerblue"}}><IoMdSchool /></span>             
                            <input type="email" className="form-control form-control-md p-2"                                 
                                placeholder="Name of the College"
                            /> 
                        </div>
                        <div className="form-group m-2 p-2 ms-4 w-75" style={{left:'55.75px'}}>
                            <select class="form-select form-select-md p-2" >
                                <option >Name of University</option>
                                <option value="1">University One</option>
                                <option value="2">University Two</option>
                                <option value="3">University Three</option>
                            </select>
                        </div>   
                        <div className="form-group m-2 p-2 ms-4 w-75" style={{left:'55.75px'}}>
                            <select class="form-select form-select-md p-2" >
                                <option >Stream</option>
                                <option value="1">University One</option>
                                <option value="2">University Two</option>
                                <option value="3">University Three</option>
                            </select>
                        </div>                      
                        <div className="form-group m-2 p-2 ms-4 w-75" style={{left:'55.75px'}}>
                            <select class="form-select form-select-md p-2" >
                                <option >Branch</option>
                                <option value="1">University One</option>
                                <option value="2">University Two</option>
                                <option value="3">University Three</option>
                            </select>
                        </div> 
                        <div className="form-group m-2 p-2 ms-4 w-75" style={{left:'55.75px'}}>
                            <select class="form-select form-select-md p-2" >
                                <option >Year</option>
                                <option value="1">University One</option>
                                <option value="2">University Two</option>
                                <option value="3">University Three</option>
                            </select>
                        </div> 
                        <div className="d-grid m-2 ms-4 m-3 mx-0">
                            <button className="btn btn-primary p-2" type="button" onClick={toggleButton}>Continue</button>
                        </div>                        
                    </div>
                </div>
            </div>
        </div>
    );
}
export default CollegeStudent;