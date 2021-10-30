import React, { useState } from "react";
import { Logo, ReadbookImage, Certificate,FrameLogo, FrameOneLogo} from '../../logo/index'

import '../../../style/Signup.css'
import {  useHistory } from "react-router-dom";
// import FaUser from 'react-icons/fa/FaUser'
// import userIcon from '../../../images/user.png'

// const cardData=[
//     {
//         imgData:<FrameLogo />,   
//         titleData:'Student',
//         textData:'Use our syllabus based practice tests to get ahead of your class'
//     },
//     {
//         imgData:<FrameOneLogo />,
//         titleData:'Professional',
//         textData:'Use our skill-certification tests to measure where you stand'
//     },
// ];

const Student = () => {
    const [student, setStudent]=useState(false)    
    const [professional, setProfessional]= useState(false) 
    
    const history = useHistory();    
  
    console.log('Student',student)
    console.log('Professional',professional)
    const toggleClick = e =>{
        e.preventDefault();      
        
        if(student === true){
            history.push('/studentGroup');
        }
        else if(professional === true){
            history.push('/professionalOne')
        }else{
            setProfessional(professional)
            setStudent(student)
        }        
    }
    return (
        <div className="container">
            <div className="row justify-content-center align-items-center">
                <div className="col-lg col-sm-4 col-md-4 m-3 p-1">
                    <div className="auto text-center"> <ReadbookImage /></div>                       
                </div>
                <div className="col-12 col-sm-4 col-md-4 m-3 p-1">
                    <div className="mt-5 text-center p-2 ms-5" ><Logo /></div>
                    <div className="m-2 text-center p-2">  <h3>Create account as a</h3></div>    
                    <div className="m-2 text-center p-2">  
                        <p>We will personalise this platform accordingly</p>
                    </div>   
                    <div className="mb-3 p-1">
                        <div className="row">      
                            <div className="col col-sm col-md">
                                <div className="card text-start"  onClick={e =>setStudent(!student)}>
                                    <div className="card-img-top mt-2"  style={{marginLeft:'15px'}}><FrameLogo /></div>
                                    <div className="card-body">
                                        <h4 className="card-title">Student</h4>
                                        <p className="card-text">Use our syllabus based practice tests to get ahead of your class</p>                              
                                    </div>  
                                    <input type="checkbox" className="check position-absolute" style={{top:'15px',right:'15px'}} checked={student}/>
                                </div>                               
                            </div>
                            <div className="col col-sm col-md">
                                <div className="card text-start" onClick={e=>setProfessional(!professional)} >
                                    <div className="card-img-top mt-2" style={{marginLeft:'15px'}}><FrameOneLogo /></div>
                                    <div className="card-body">
                                        <h4 className="card-title" >Professional</h4>
                                        <p className="card-text">Use our skill-certification tests to measure where you stand</p>                              
                                    </div>  
                                    <input type="checkbox" className="position-absolute" style={{top:'15px',right:'15px'}} checked={professional} 
                                        onClick={e=>setProfessional(!professional)}                                        
                                    />
                                </div>
                                
                            </div>                                                       
                        </div>     
                    </div>                    
                    <div className="mb-3">
                        <div className="d-grid">
                            <button className="btn btn-primary p-2" onClick={toggleClick} >
                              Continue 
                            </button>                            
                        </div>
                    </div>
                </div>
                <div className="col-lg col-sm-4 col-md-4 m-3 p-1">
                    <div className="auto text-center">  <Certificate /></div>                       
                </div>              
            </div>
        </div>
    );
}
export default Student



