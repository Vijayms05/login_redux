import React, { useState} from 'react';
import {
    SiginImage,
    Logo,
    GoogleLogo,
    TwitterLogo,
    LinkedinLogo,
  } from '../../assets/images/index';
import emaillogo from '../../images/email_icon.png'
import lock from '../../images/lock_icon.png'
import eyeIcon from '../../images/eye_icon.png'

//link
import {Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';

const Signup = (props) => {
    const [email,setEmail] = useState('')
   
    const [password,setPassword] = useState('')
    const [conformPassword,setConformPassword] = useState('')
    const [isCheck, setCheck]=useState(false) 
    const [passwordShown, setPasswordShown] = useState(false);
    const [conformpasswordShown, setConformpasswordShown] = useState(false);

    const togglePassword =() =>{ 
        setPasswordShown(!passwordShown)
    }
    const toggleConformPassword =() =>{
        setConformpasswordShown(!conformpasswordShown)
    } 
   
    //Button
    const OnClick = (e) => {
        e.preventDefault();        
        setEmail('')
        setPassword('')
        setConformPassword('')
        setCheck(false) 
        console.log(email, password, conformPassword, isCheck)
    }
    return ( 
        <Container fluid>            
            <Row className=" justify-content-center align-items-center" >
                <Col xs={8} md={8} sm={7} lg>
                   <div className="auto"><SiginImage /></div>
                </Col>
                <Col  xs={4} md={4} sm={5} lg className=" m-2 p-2 text-center">
                    <div className="m-2  p-2 mt-4" ><Logo /></div>                        
                    <div className="m-2" ><h3>Create account and get started</h3></div> 
                    <div className="form ">
                        <div className="form-group m-2 p-2 " >
                            <img src={emaillogo} className="position-absolute" alt="icon" style={{left:'20px',top:'16px'}} />
                            <input type="email" value={email} placeholder="Enter e-mail" className="form-control form-control-md p-2"
                                    onChange={e =>setEmail(e.currentTarget.value)} />
                        </div>
                        <div className="form-group m-2 p-2 ">
                            <img src={emaillogo} className="position-absolute" alt="icon" style={{left:'20px',top:'16px'}} />
                            <input type="email" value={reEmail}  className="form-control form-control-md p-2" placeholder="Re-Enter e-mail" 
                                    onChange={e => setReemail(e.target.value)} />
                        </div>
                        <div className="form-group m-2 p-2 ">
                            <img src={lock} className="position-absolute" alt="icon" style={{left:'20px',top:'16px'}} />
                            <input type= { !passwordShown ?"password":"text"} value={password}  className="p-2 form-control form-control-md" 
                            placeholder=" Create Password" 
                                    onChange={e => setReemail(e.target.value)} />
                                    <img src={eyeIcon} className="position-absolute" style={{right:'20px',top:'14px'}} alt="eyeicon" onClick={togglePassword}/>
                        </div>
                        <div className="form-group m-2 p-2 ">
                            <img src={lock} className="position-absolute" alt="icon" style={{left:'20px',top:'16px'}} />
                            <input type= { !passwordShown ?"password":"text"} className="form-control form-control-md p-2" 
                                placeholder=" Conform Password" value={conformPassword} 
                                onChange={e => setPassword(e.target.value)}
                            />
                            <img src={eyeIcon} className="position-absolute" style={{right:'20px',top:'14px'}} alt="eyeicon" onClick={togglePassword}/>
                        </div>
                        <div className="form-check m-3 p-2">
                            <input type="checkbox" checked={isCheck} id="flexCheckDefault" onClick={e => setCheck(e.target.checked)} /> &nbsp;
                            <label class="form-check-label" for="flexCheckDefault">
                            I agree to Skilltally’s <a href="#"> Privacy Policy </a> &nbsp; &amp; <a href="#">Terms of Service </a>
                            </label>
                        </div>
                        <div className="d-grid m-2 mx-0">
                            <button className="btn btn-primary p-2" type="button" onClick={OnClick}>Create account</button>
                        </div>                      
                        <div className="mb-3">
                            <div  className="row ">
                                <div className="col" style={{marginLeft:'65px'}}><hr /></div>
                                or
                                <div className="col" style={{marginRight:'55px'}}><hr /></div>
                            </div>                    
                        </div>
                        <div className="mb-3 ">
                            <div className="row ">
                                <div className=" col ">
                                    <GoogleLogo />
                                </div>
                                <div className="col ">
                                    <LinkedinLogo />
                                </div>
                                <div className=" col ">
                                    <TwitterLogo />
                                </div>
                            </div>
                        </div>
                        <div className="mb-3">
                            <p> Have an account? <Link to='/login'>Log In</Link></p>  
                            {/* <Link to='/login'>Log In</Link></p> */}
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}
export default Signup