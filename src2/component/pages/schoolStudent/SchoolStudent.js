import React, {useState} from "react";
import { Logo, ReadbookOneImage } from '../../logo/index'

import { useHistory } from 'react-router-dom'
// import './index.css'
import {FaUser,FaSchool} from 'react-icons/fa'

const SchoolStudent = () => {  
    const [inputName,setInputName]=useState('')
    const [institute, setInstitute]=useState('')
    // const [stream, setStream]=useState('')
    // const [Standard, setStandard]=useState('')

    const [school, setSchool]=useState(false);
    const [college, setCollege]=useState(false);


    let history =useHistory();
    
    const toggleButton = e =>{
        e.preventDefault();
        
        setInstitute('')
        setInputName('')

        setSchool(history.push('/schoolStudent'))
        setCollege(history.push('/collegeStudent'))
        history.push('/dashboard')
    } 
    return (
        <div className="container">
            <div className="row  justify-content-center align-items-center">
                <div className="col-lg col-sm-6 col-md-8 mt-4 m-3 p-1 ">
                    <div className="auto text-center">  <ReadbookOneImage /></div>                       
                </div>   
                
                <div className="col-lg col-sm-6 col-md-4 mt-4 m-3 p-1">
                    <div className="m-2 text-center p-2 ms-3" ><Logo /></div>  
                    <div className="m-1 text-center p-1"><h3>Before you jump in</h3></div>
                    <div className="m-1 text-center p-1"><p>We will personalise this platform accordingly</p></div>
                    
                    <div className="form ">
                        <div className="form-group m-2 p-2 ms-4 w-75" style={{left:'55.75px'}}>
                            <span className="position-absolute" alt="icon" style={{left:'20px',top:'16px', color:"dodgerblue"}}><FaUser /></span>  
                            <input type="email"  className="form-control form-control-md p-2"
                                    placeholder="Enter your name" />
                        </div>
                        <div className="m-3 text-start" >                        
                            <p style={{marginLeft:'74px'}}>Are you school student or college student?</p>  
                        </div>
                        <div className="m-3">
                            <div className="row text-start gx-1">
                                <div className="col" style={{marginLeft:'74px'}}>  
                                    <input className="form-check-input" type="checkbox" 
                                        />  &nbsp;                                  
                                        School                                     
                                </div>
                                <div className="col">  
                                    <input className="form-check-input" type="checkbox" 
                                       /> &nbsp;
                                        College   
                                </div>
                            </div>
                        </div>  
                        <div className="form-group m-2 p-2 ms-4 w-75" style={{left:'55.75px'}}>
                            <span className="position-absolute" alt="icon" style={{left:'20px',top:'16px', color:"dodgerblue"}}><FaSchool /></span>       
                            <input type="email" className="form-control form-control-lg"                                 
                               placeholder="Name of the School" value={institute} onChange={e => setInstitute(e.target.value)}
                            /> 
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
                                <option >Standard</option>  
                                <option value="1">University One</option>
                                <option value="2">University Two</option>
                                <option value="3">University Three</option>
                            </select>
                        </div>  
                        <div className="mb-3">
                            <div className="d-grid m-2 ms-4 m-3 mx-0">
                                <button className="btn btn-primary p-2" type="button" onClick={toggleButton}>Continue</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default SchoolStudent;