import React, { useState } from 'react'
import {useHistory} from 'react-router-dom'
import profile from '../../../assets/images/avatarprofile.png'

import './Profile.css'


import lock from '../../../assets/images/lock_icon.png'
import eyeIcon from '../../../assets/images/eye_icon.png'
import upload from '../../../assets/images/upload.png'
import arrow from '../../../assets/images/arrow.png'
import modalImage from '../../../assets/images/modalImage.png'

import { Container, ProgressBar, Col, Card, Row, Button, Form, Modal } from 'react-bootstrap'

const Profile = () => {
    const [show, setShow]=useState(false);
    const [isShow, setIsShow]=useState(false);
    const [password,setPassword] = useState('')
    const [conformPassword,setConformPassword] = useState('')
    const [passwordShown, setPasswordShown] = useState(false);
    const [conformpasswordShown, setConformpasswordShown] = useState(false);
    

    const togglePassword =() =>{ 
        setPasswordShown(!passwordShown)
    }
    const toggleConformPassword =() =>{
        setConformpasswordShown(!conformpasswordShown)
    } 
   
    const handleAvator=()=>setIsShow(true)
    const handlePassword = () => setShow(true);
    const handleavatorClose = () => setIsShow(false);
    const handlepasswordClose = () => setShow(false);

    
    return (
        <>
            <Container fluid>
                <Row>  
                    <Col className="ms-5">
                        <h5 className="mt-5 mb-3" style={{color:'#003866'}}>Profile</h5>  
                        <ProgressBar variant="primary" now={45} label="45%" className="w-50 mb-4 " />  
                        <Card className="mb-4 auto">
                            <Card.Body>
                                <Row>
                                    <Col  className="text-center mt-1">
                                        <img src={profile} className="img-fluid rounded-pill"  alt="..."/>
                                    </Col>
                                    <Col  >
                                        <Row>
                                            <Col xs={4} >
                                                <Card.Text as="h6" className="fw-bold mt-2 " style={{fontSize:"18px"}}>Hayat Tamboli</Card.Text>
                                                <Card.Text as="p" size="sm">hayat.tamboli@gmail.com</Card.Text>
                                                
                                            </Col>
                                            <Col xs={3} className="text-center mt-3" >
                                                <Button variant="primary" onClick={handleAvator}>Edit Avator</Button>
                                            </Col>
                                            <Col xs={4} className="text-center mt-3">   
                                                <Button variant="primary"  onClick={handlePassword}>Change Password</Button>                                            
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                        <div className="mb-3 mt-3">
                            <h4 className="text-start" style={{color:'#003866'}}>Basic Details</h4>
                        </div>                    
                        <Form className="mb-4 w-50">
                            <Form.Group className="mb-3">
                                <Form.Label>Mobile Number</Form.Label>
                                <Form.Control type="text" className="px-2" size="lg" style={{textIndent:'65px'}} placeholder="95635 95648"/>
                                <span className="position-absolute" style={{top:'45px', left:'20px'}}>+91</span>
                                <img src={arrow} alt="icon" className="position-absolute"  style={{top:'52px', left:'55px'}}/>
                            </Form.Group>
                            <div className="mb-3">
                                <label className="mb-2">Date of Birth</label>
                                <select class="form-select form-select-lg" aria-label="Default select example">
                                    <option selected>label</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </div>
                            <div className="mb-3">
                                <label className="mb-2">Gender</label>
                                <select class="form-select form-select-lg" aria-label="Default select example">
                                    <option selected>label</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </div>
                            <div className="mb-3">
                                <label className="mb-2">Martial Status </label>
                                <select class="form-select form-select-lg" aria-label="Default select example">
                                    <option selected>label</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </div>
                            <h4 className="text-start mb-3 mt-4" style={{color:'#003866'}}>Address</h4> 
                            <div className="mb-3">
                                <label className="mb-2">Country</label>
                                <select class="form-select form-select-lg" aria-label="Default select example">
                                    <option selected>label</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </div>
                            <Form.Group className="mb-3">
                                <Form.Label>Address</Form.Label>
                                <Form.Control type="text" className="px-2 mb-2" size="lg" placeholder="Address Line 1"/>
                                <Form.Control type="text" className="px-2" size="lg" placeholder="Address Line 2"/>
                            </Form.Group>
                            <div className="mb-3">
                                <label className="mb-2">State</label>
                                <select class="form-select form-select-lg" aria-label="Default select example">
                                    <option selected>label</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </div>
                            <div className="mb-3">
                                <label className="mb-2">District</label>
                                <select class="form-select form-select-lg" aria-label="Default select example">
                                    <option selected>label</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </div>
                            <div className="mb-3">                            
                                <label className="mb-2">Pin Code </label>
                                <select class="form-select form-select-lg" aria-label="Default select example">
                                    <option selected>label</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </div>
                            <h4 className="text-start mb-3 mt-4" style={{color:'#003866'}}>Educational And Work Details</h4>            
                            <div className="mb-3">                   
                                <label className="mb-2">Educational Status</label>
                                <select class="form-select form-select-lg" aria-label="Default select example">
                                    <option selected>label</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </div>
                            <div class="mb-3">
                                <label for="address" class="form-label">Higher Educational Qualification</label>
                                <select class="form-select form-select-lg" aria-label="Default select example">
                                    <option selected>label</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>     
                            </div>
                            <Form.Group className="mb-3">
                                <Form.Label>Work Experience</Form.Label>
                                <Form.Control type="text" className="px-2 mb-3" size="lg" placeholder="Placeholder"/>
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Industry</Form.Label>
                                <Form.Control type="text" className="px-2 mb-3" size="lg" placeholder="Placeholder"/>
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Organization/Institution</Form.Label>
                                <Form.Control type="text" className="px-2 mb-3" size="lg" placeholder="Placeholder"/>
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Current Role</Form.Label>
                                <Form.Control type="text" className="px-2 mb-3" size="lg" placeholder="Placeholder"/>
                            </Form.Group>
                            <div className="mb-3">
                                <label className="mb-2">Resume</label>
                                <div style={{border:'2px dashed lightgrey',width:'325px',borderTopRightRadius:'20px',
                                borderBottomLeftRadius:'20px' }} className='text-center mx-4'>
                                    <img src={upload} alt="icon" className="icon"  />
                                    <p  >Click here to add a document</p>                  
                                </div>
                            </div>
                            <Form.Group className="mb-3">
                                <Form.Label>Desired Job Profile</Form.Label>
                                <Form.Control type="text" className="px-2 mb-3" size="lg" placeholder="Placeholder"/>
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Learning Charges</Form.Label>
                                <Form.Control type="text" className="px-2 mb-3" size="lg" placeholder="Placeholder"/>
                            </Form.Group>
                        
                            <div className="d-flex mb-3 ">
                                <Button type="submit" size='lg' variant="primary" >Save Changes</Button>
                            </div>
                        </Form>  
                    </Col>
                </Row>
            </Container>  
            {show === true ? 
            (                          
                <Modal show={show} onHide={handlepasswordClose} >                    
                    <Modal.Body>                       
                        <Modal.Title className="text-center mt-3 mb-3">Change Password</Modal.Title>                    
                        <Form.Group className="m-2 p-2 ">
                            <Form.Label>Enter Password </Form.Label>
                            <img src={lock} className="position-absolute" alt="icon" style={{left:'20px',marginTop:'40px'}} />
                            <Form.Control type= { !passwordShown ?"password":"text"} value={password}  className="p-2 form-control form-control-md" 
                                placeholder="Password" onChange={e => setPassword(e.target.value)} />
                            <img src={eyeIcon} className="position-absolute" style={{right:'22px',marginTop:'-32px'}} alt="eyeicon" onClick={togglePassword}/>
                        </Form.Group>
                        <Form.Group className="m-2 p-2 ">
                            <Form.Label>Confirm Password </Form.Label>
                            <img src={lock} className="position-absolute" alt="icon" style={{left:'20px',marginTop:'40px'}} />
                            <Form.Control type= { !conformpasswordShown ?"password":"text"} value={password}  className="p-2 form-control form-control-md" 
                                placeholder="Password" onChange={e => setConformPassword(e.target.value)} />
                            <img src={eyeIcon} className="position-absolute" style={{right:'22px',marginTop:'-32px'}} alt="eyeicon" onClick={toggleConformPassword}/>
                        </Form.Group>
                        <div className="text-center">
                            <a style={{backgroundColor:'#4DD188', color:'white'}} className="btn mt-3 mb-3"  onClick={handlepasswordClose}>
                                Change
                            </a>   
                        </div>
                    </Modal.Body>                
                </Modal>  
            ): null
            }   

            {isShow === true ? 
            <>               
                <Modal show={isShow} onHide={handleavatorClose} >                    
                    <Modal.Body>                       
                        <Modal.Title className="text-center mt-3 mb-3">Edit Avatar</Modal.Title>                    
                        <Row >
                            <Col className="mb-2">
                                <img src={modalImage} alt="image" />
                            </Col>
                            <Col className="mb-2">
                                <img src={modalImage} alt="image" />
                            </Col>
                            <Col className="mb-2">
                                <img src={modalImage} alt="image" />
                            </Col>
                            <Col className="mb-2">
                                <img src={modalImage} alt="image" />
                            </Col>
                            <Col className="mb-2">
                                <img src={modalImage} alt="image" />
                            </Col>
                            <Col className="mb-2">
                                <img src={modalImage} alt="image" />
                            </Col>
                        </Row>
                        
                        <div className="text-center">
                            <a style={{backgroundColor:'#4DD188', color:'white'}} className="btn mt-3 mb-3"  onClick={handleavatorClose}>
                                Change
                            </a>   
                        </div>
                    </Modal.Body>                
                </Modal>              
            
            </> : null
            }              
        </>   
    )
}

export default Profile
