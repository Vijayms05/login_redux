import React,{ useState } from 'react'
// import { useHistory } from 'react-router';
import {
    Container,
    Col,
    Row,
    Card,
    ProgressBar,
    Button,
    Form,
    Modal
} from 'react-bootstrap';

import {
    AvatorProfile,
    UploadIcon,
    ModalImage,
    PasswordIcon,
    EyeIcon
} from '../../assets/images/index';

import './style.css'
const ProfilePage = (props) => {
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
        <Col className="py-md-4">  
                    <h3 className="mb-4">Profile</h3>
                    <Row className="mt-3 mb-3">
                        <Col sm={4} className='p-2'>
                            <ProgressBar now={60} className="mb-3"/>                        
                        </Col>
                        <Col sm={8}>                       
                            <label>60% Complete</label>
                        </Col>
                    </Row>
                    <Card className="horizontal-card mb-4">
                        <Card.Body>
                            <Row>
                                <Col sm={1} xs>
                                    <AvatorProfile />
                                </Col>
                                <Col sm={4} xs className="text-start ms-1">
                                    <label className="title ">
                                        Hayat Tamboli
                                    </label>
                                    <small>hayat.tamboli@gmail.com</small>
                                </Col>
                                <Col sm={2} xs   className="text-start mt-3">
                                    <Button className="profile-cardbutton" onClick={handleAvator}>
                                        Edit Avatar
                                    </Button>
                                </Col>
                                <Col sm={3} xs className="text-start mt-3">
                                    <Button className="profile-cardbutton" onClick={handlePassword}>
                                        Change Password
                                    </Button>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                    <h5 className="mb-3">Basic Details</h5>
                    <Col sm={6} xs className="p-2">
                        <Form.Group className="mb-3 profile-formgroup">
                            <label className="mobile-no mb-2">Mobile Number</label>
                            <Form.Control 
                                className="profile-formcontrol" 
                                type="email" 
                                placeholder="Enter email"                        
                            />
                            <span >+91 </span>
                            {/* <ArrowDownIcon className="arrow-down"/>                        */}
                        </Form.Group>
                        <Form.Group className="mb-3 profile-formgroup">
                            <label className="mobile-no mb-2" >Date of Birth</label>                    
                        <Form.Control type="date" placeholder="00-00-0000" /> 
                        </Form.Group>
                        <Form.Group className="mb-3 profile-formgroup">
                            <label className="mobile-no mb-2" >Gender</label>                    
                            <select className="form-select mb-3 " aria-label="Default select example">
                                <option selected>label</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select> 
                        </Form.Group>
                        <Form.Group className="mb-5 profile-formgroup">
                            <label className="mobile-no mb-2" >Marital Status</label>                    
                            <select className="form-select mb-3 " aria-label="Default select example">
                                <option selected>label</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select> 
                        </Form.Group>
                        <h5 className="mb-3">Address</h5>
                        <Form.Group className="mb-3 profile-formgroup">
                            <label className="mobile-no mb-2" >Country</label>                    
                            <select className="form-select mb-3 " aria-label="Default select example">
                                <option selected>label</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select> 
                        </Form.Group>
                        <Form.Group className="mb-3 profile-formgroup">
                            <label className="mobile-no mb-2" >Address</label>                    
                            <Form.Control placeholder="Address line 1" className="mb-2" />
                            <Form.Control placeholder="Address line 2" className="mb-2"/>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <label className="mobile-no mb-2" >State</label>                    
                            <select className="form-select mb-3 " aria-label="Default select example">
                                <option selected>label</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select> 
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <label className="mobile-no mb-2">District</label>                    
                            <select className="form-select mb-3 " aria-label="Default select example">
                                <option selected>label</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select> 
                        </Form.Group>
                        <Form.Group className="mb-5">
                            <label className="mobile-no mb-2">Pin Code</label>                    
                            <select className="form-select mb-3 " aria-label="Default select example">
                                <option selected>label</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select> 
                        </Form.Group>
                        <h5 className="mb-3">Educational And Work Details</h5>
                        <Form.Group className="mb-3 ">
                            <label className="mobile-no mb-2" >Educational Stream</label>                    
                            <select className="form-select mb-3 " aria-label="Default select example">
                                <option selected>label</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select> 
                        </Form.Group>
                        <Form.Group className="mb-3 ">
                            <label className="mobile-no mb-2" >Highest Educational Qualification</label>                    
                            <select className="form-select mb-3 " aria-label="Default select example">
                                <option selected>label</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select> 
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <label className="mobile-no mb-2" >Work Experience</label>                    
                            <Form.Control placeholder="Placeholder" />                    
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <label className="mobile-no mb-2" >Industry</label>                    
                            <Form.Control placeholder="Placeholder" />                    
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <label className="mobile-no mb-2" >Organization/Institution</label>                    
                            <Form.Control placeholder="Placeholder" />                    
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <label className="mobile-no mb-2" >Current Role</label>                    
                            <Form.Control placeholder="Placeholder" />                    
                        </Form.Group>   
                        <Col sm={6}>
                            <label className="mobile-no mb-2" >Resume</label>     
                            <div className="upload mb-3" > {/*style={{border: '2px dashed darkgrey',width:'320px', height:'150px', textAlign:'center'}} */}
                                <div className="icon"><UploadIcon /></div>
                                <small>Click here to add a document</small>                
                            </div> 
                        </Col>
                           
                        <Form.Group className="mb-3">
                            <label className="mobile-no mb-2" >Desired Job Profile</label>                    
                            <Form.Control placeholder="Placeholder" />                    
                        </Form.Group>            
                        <Form.Group className="mb-4">
                            <label className="mobile-no mb-2" >Learning Changes</label>                    
                            <Form.Control placeholder="Placeholder" />                    
                        </Form.Group>  
                        <Button className="profile-button ms-3 mb-3">
                            Save Changes
                        </Button>
                    </Col>  
            {show === true ? 
            (                          
                <Modal show={show} onHide={handlepasswordClose} >                    
                    <Modal.Body>                       
                        <Modal.Title className="text-center mt-3 mb-3">Change Password</Modal.Title>                    
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Change Password</Form.Label>
                            <Form.Control 
                                className="inputField" 
                                type= 'password'
                                placeholder="Password"                               
                                />
                            <PasswordIcon />
                            <EyeIcon />
                        </Form.Group>
                        <Form.Group className="m-2 p-2 ">
                            <Form.Label>Confirm Password </Form.Label>
                            
                            {/* <img src={lock} className="position-absolute" alt="icon" style={{left:'20px',marginTop:'40px'}} /> */}
                            <Form.Control type= { !conformpasswordShown ?"password":"text"} value={password}  className="p-2 form-control form-control-md" 
                                placeholder="Password" onChange={e => setConformPassword(e.target.value)} />
                            {/* <img src={eyeIcon} className="position-absolute" style={{right:'22px',marginTop:'-32px'}} alt="eyeicon" onClick={toggleConformPassword}/> */}
                            <PasswordIcon />
                            <EyeIcon />
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

            {/* {isShow === true ? 
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
            }    */}
        
        </Col>
    )
}



export default ProfilePage