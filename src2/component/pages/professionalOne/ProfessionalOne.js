import React from "react";
import { Logo, ProfessionalLean } from '../../logo/index'

import '../../../style/Signup.css'

import {FaUser} from 'react-icons/fa';
import {MdWork} from 'react-icons/md';


const ProfessionalOne = () => {
    const handleClick=(e)=>{
        e.preventDefault();
    }
    return (
        <div className="container">
            <div className="row justify-content-center align-items-center mt-3">
                <div className="col-lg col-sm-6 col-md-8 m-3 p-2">
                    <div className="auto text-center"> <ProfessionalLean /></div>
                </div>
              
                <div className="col-lg col-sm-6 col-md-4 m-3 p-2">
                    <div className="m-2 text-center p-2 ms-2" ><Logo /></div>                   
                    <div className="m-1 text-center p-1"><h3>Create account as a</h3></div> 
                    <div className="m-1 text-center p-1"><p>We will personalise this platform accordingly</p></div>
                    <div className="form ">
                        <div className="form-group m-2 p-2 ms-4 w-75" style={{left:'35.75px'}}>
                            <span className="position-absolute" alt="icon" style={{left:'20px',top:'16px', color:"dodgerblue"}}><FaUser /></span>  
                            <input type="email"  className="form-control form-control-md p-2"
                                placeholder="Enter your name" />
                        </div>
                        <div className="form-group m-2 p-2 ms-4 w-75" style={{left:'35.75px'}}>
                            <select class="form-select form-select-md p-2" >
                                <option >Industry</option>
                                <option value="1">University One</option>
                                <option value="2">University Two</option>
                                <option value="3">University Three</option>
                            </select>
                        </div> 
                        <div className="form-group m-2 p-2 ms-4 w-75" style={{left:'35.75px'}}>
                            <span className="position-absolute" alt="icon" style={{left:'20px',top:'16px', color:"dodgerblue"}}><MdWork /></span>  
                            <input type="email"  className="form-control form-control-md p-2"
                                placeholder="Enter your name" />
                        </div>
                        <div className="d-grid m-2 ms-2 m-3 mx-0">
                            <button className="btn btn-primary p-2" type="button" onClick={handleClick}>Continue</button>
                        </div>              
                    
                    </div>
                </div>
            </div>
        </div>
    );
}
export default ProfessionalOne


