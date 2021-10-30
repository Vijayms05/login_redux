import React,{useState} from "react";
import { Logo, ReadbookOneImage } from '../../logo/index'

//  import '../../../style/Signup.css'
 import { useHistory } from 'react-router-dom'
import {FaUser} from 'react-icons/fa'

const StudentGroup = () => {
    const [input,setInput]=useState('')
    const [student, setStudent]=useState(false);
    const [college, setCollege]=useState(false);

    const history = useHistory();

    const toggleButton = e =>{
        e.preventDefault();
        setInput('')
        if(student === true){
            setStudent(history.push('/schoolStudent'))
            console.log(student)
        }
        else{
            setCollege(history.push('/collegeStudent'))
            console.log(college)            
        }
        console.log(input, student, college)
    }
    return (
        <div className="container">
            <div className="row  justify-content-center align-items-center mt-4">
                <div className="col-lg col-sm-6 col-md-8 mt-4 m-3 p-1 ">
                    <div className="auto text-center"> <ReadbookOneImage /></div>                       
                </div>                
                <div className="col-lg col-sm-6 col-md-4 mt-4 m-3 p-1">
                    <div className="m-2 text-center p-2 ms-3" ><Logo /></div>  
                    
                    <div className="m-1 text-center p-1"><h3>Before you jump in</h3>
                    </div>
                    <div className="m-2 text-center">
                        <p>We will personalise this platform accordingly</p>
                    </div>
                    <div className="form ">
                        <div className="form-group m-2 p-2 ms-4 w-75" style={{left:'55.75px'}}>
                        <span className="position-absolute" alt="icon" style={{left:'20px',top:'16px', color:"dodgerblue"}}><FaUser /></span>  
                            <input type="email"  className="form-control form-control-md p-2"
                                  placeholder="Enter your name" value={input} onChange={e =>setInput(e.target.value)}/>
                        </div>
                        <div className="m-3 text-start" >                        
                            <p style={{marginLeft:'74px'}}>Are you school student or college student?</p>  
                        </div>
                        <div className="m-3">
                            <div className="row text-start gx-1">
                                <div className="col" style={{marginLeft:'74px'}}>  
                                    <input className="form-check-input" type="checkbox" 
                                        checked={student} onClick={e => setStudent(e.target.checked)}  />  &nbsp;                                  
                                        School                                     
                                </div>
                                <div className="col">  
                                    <input className="form-check-input" type="checkbox" 
                                        checked={college} onClick={e => setCollege(e.target.checked)}  /> &nbsp;
                                        College   
                                </div>
                            </div>
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
export default StudentGroup