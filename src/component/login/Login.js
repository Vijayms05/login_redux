import React, { useState } from 'react'

import { Link } from 'react-router-dom'

//icons
import emaillogo from '../../images/email_icon.png'
import lock from '../../images/lock_icon.png'
import eyeIcon from '../../images/eye_icon.png'

import { SiginImage, Logo, GoogleLogo, TwitterLogo, LinkedinLogo } from '../logo/index'

const Login = () => {
    const [email,setEmail]= useState('')
    const [password,setPassword]=useState('')
    const [passwordShown,setPasswordShown]=useState(false)
  
    const togglePassword =() =>{    
        setPasswordShown(!passwordShown)
    }
    const  OnClick = e =>{
        e.preventDefault()
        setEmail('')
        setPassword('')
    }
    return (        
        <div className="container-fluid">
            <div className="row justify-content-center align-items-center">
                <div className="col-lg col-sm-6 col-md-8 m-1 p-2">
                    <div className="auto"><SiginImage /></div>
                </div>
                <div className="col-lg col-sm-6 col-md-4 m-1 p-2">
                    <div className="m-2 text-center p-2 ms-5" ><Logo /></div>                   
                    <div className="m-3 text-center p-2"><h3>Create account and get started</h3></div> 
                    <div className="form ">
                        <div className="form-group m-2 p-2 ms-4 w-75" style={{left:'55.75px'}}>
                            <img src={emaillogo} className="position-absolute" alt="icon" style={{left:'20px',top:'16px'}} />
                            <input type="email" value={email} placeholder="Enter e-mail" className="form-control form-control-md p-2"
                                    onChange={e =>setEmail(e.currentTarget.value)} />
                        </div>
                        <div className="form-group m-2 p-2 ms-4 w-75" style={{left:'55.75px'}}>
                            <img src={lock} className="position-absolute" alt="icon" style={{left:'20px',top:'16px'}} />
                            <input type= { !passwordShown ?"password":"text"} value={password}  className="p-2 form-control form-control-md" 
                            placeholder=" Create Password" 
                                    onChange={e => setPassword(e.target.value)} />
                                    <img src={eyeIcon} className="position-absolute" style={{right:'20px',top:'14px'}} alt="eyeicon" onClick={togglePassword}/>
                        </div>
                        <div className="m-2" >                      
                            <Link style={{marginLeft:'75px'}}  to="/resetpassword" >Forgot password?</Link>                        
                        </div>
                        <div className="d-grid m-2 ms-4 m-3 mx-0">
                            <button className="btn btn-primary p-2" type="button" onClick={OnClick}>Create account</button>
                        </div>
                      
                        <div className="m-3">
                            <div  className="row ">
                                <div className="col" style={{marginLeft:'65px'}}><hr /></div>
                                or
                                <div className="col" style={{marginRight:'55px'}}><hr /></div>
                            </div>                    
                        </div>
                        <div className="mb-3 ">
                            <div className="row ">
                                <div className=" col gx-1 ">
                                    <GoogleLogo />
                                </div>
                                <div className="col gx-1 ">
                                    <LinkedinLogo />
                                </div>
                                <div className=" col gx-1">
                                    <TwitterLogo />
                                </div>
                            </div>
                        </div>
                        <div className="m-3">
                            <p className="text-center">  
                                Dont have an account? <Link to="/" >Sign up</Link>
                            </p>
                        </div>
                    </div>                    
                </div>            
            </div>
        </div>
    );
}
export default Login