import React,{useState} from "react";
import { Logo, ReadbookImage, Certificate, FrameLogo, FrameOneLogo } from '../../logo/index'

import {Link, useHistory } from 'react-router-dom'
import '../../style/Signup.css'
// import {FaUser} from 'react-icons/fa';
// import {MdWork} from 'react-icons/md';

const Professional = () => {
    // const [student, setStudent]=useState(false)
    // const [professional, setProfessional]= useState(false)

    const history =useHistory()
    const toggleClick = e =>{
        e.preventDefault();

        // if(!student){
        //     setStudent(history.push('/student'))
        // }
        // if(!professional){
        //     setProfessional(history.push('/professionalOne'))
        // }      
        // console.log(student, professional) 
    }
    return (
        <div className="container-fluid">
            <div className="row justify-content-center align-items-center">
            <div className="col-lg col-sm-4 col-md-4 m-1 p-2">
                    <div className="auto"><ReadbookImage /></div>                   
                </div>                
                <div className="col-lg col-sm-4 col-md-4 m-1 p-2">
                    <div className="m-2 text-center p-2 ms-5" ><Logo /></div>    
                    <div className="m-3">
                        <h3>Create account as a</h3>
                    </div>
                    <div className="mb-3">
                        <p>We will personalise this platform accordingly</p>
                    </div>  
                    <div className="mb-3">
                        <div className="row text-start">
                            <div className="col-4 col-sm col-md gx-1 mt-2">                           
                                <div className="card" > 
                                    <Link to="/studentGroup">   
                                        {/* <input type="checkbox" className="form-check-input" onClick={()=>setStudent(!student)} />                           */}
                                        <div className="card-img-top"><FrameLogo /></div>
                                        <div className="card-body">
                                            <h4 className="card-title">Student</h4>
                                            <p className="card-text">Use our syllabus based practice tests to get ahead of your class</p>                              
                                        </div>
                                    </Link>
                                </div>                                                   
                            </div>
                            {/* onClick={e => setProfessional(history.push('/professionalOne'))} */}
                            <div className="col-4 col-sm col-md gx-1 mt-2">
                                <div className="card " >
                                    <Link to="/professionalOne">
                                        {/* <input type="checkbox" className="form-check-input" onClick={()=>setProfessional(!professional)} />  */}
                                        <div className="card-img-top"><FrameOneLogo /></div>
                                        <div className="card-body">
                                            <h4 className="card-title">Professional</h4>
                                            <p className="card-text">Use our skill-certification tests to measure where you stand</p>                              
                                        </div>
                                    </Link>
                                </div>                               
                            </div>
                        </div>
                    </div>
                    {/* onClick={e => setStudent(e.target.value)} href=" "                   */}
                    
                    {/* <div className="mb-3">
                        <div className="d-grid">
                            <button className="btn btn-primary" type="button" onClick={toggleClick}>Continue</button>
                        </div>
                    </div> */}
                </div>
                <div className="col-12 col-sm-4 col-md-4 mt-5 mb-5 gx-2">
                   <Certificate /> 
                </div>
            </div>
        </div>
    );
}
export default Professional


