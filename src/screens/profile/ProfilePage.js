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
import { Link } from 'react-router-dom';

import {
    AvatorProfile,
    UploadIcon,
    ModalImage,
    PasswordIcon,
    EyeIcon
} from '../../assets/images/index';

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
        <Col className="py-md-4 pro-rit">  
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
                    <div className="d-flex align-items-center">
                        <Col sm={1} xs>
                            <AvatorProfile />
                        </Col>
                        <Col sm={4} xs className="my-auto">
                            <label className="title ">
                                Hayat Tamboli
                            </label>
                            <small>hayat.tamboli@gmail.com</small>
                        </Col>
                        <Col sm={2}  className="rep-btn-ln">
                            <Button className="profile-cardbutton" onClick={handleAvator}>
                                Edit Avatar
                            </Button>
                        </Col>
                        <Col sm={3} className="rep-btn-ln">
                            <Button className="profile-cardbutton" onClick={handlePassword}>
                                Change Password
                            </Button>
                        </Col>
                    </div>
                </Card.Body>
            </Card>
            <div className="px-3">
                <h5 className="f1-16">Basic Details</h5>
                <Col sm={6} xs className="p-0">
                    <Form.Group className="mb-3 profile-formgroup">
                        <label className="mobile-no mb-1">Mobile Number</label>
                        <Form.Control 
                            className="profile-formcontrol" 
                            type="email" 
                            placeholder="Enter email"                        
                        />
                    </Form.Group>
                    <Form.Group className="mb-3 profile-formgroup">
                        <label className="mobile-no mb-1" >Date of Birth</label>                    
                    <Form.Control type="date" placeholder="00-00-0000" /> 
                    </Form.Group>
                    <Form.Group className="mb-3 profile-formgroup">
                        <label className="mobile-no mb-1" >Gender</label>                    
                        <select className="form-select mb-3 " aria-label="Default select example">
                            <option selected>label</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select> 
                    </Form.Group>
                    <Form.Group className="mb-3 profile-formgroup">
                        <label className="mobile-no mb-1" >Marital Status</label>                    
                        <select className="form-select mb-3 " aria-label="Default select example">
                            <option selected>label</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select> 
                    </Form.Group>
                    <h5 className="f1-16">Address</h5>
                    <Form.Group className="mb-3 profile-formgroup">
                        <label className="mobile-no mb-1" >Country</label>                    
                        <select className="form-select mb-3 " aria-label="Default select example">
                            <option selected>label</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select> 
                    </Form.Group>
                    <Form.Group className="mb-3 profile-formgroup">
                        <label className="mobile-no mb-1" >Address</label>                    
                        <Form.Control placeholder="Address line 1" className="mb-2" />
                        <Form.Control placeholder="Address line 2" className="mb-2"/>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <label className="mobile-no mb-1" >State</label>                    
                        <select className="form-select mb-3 " aria-label="Default select example">
                            <option selected>label</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select> 
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <label className="mobile-no mb-1">District</label>                    
                        <select className="form-select mb-3 " aria-label="Default select example">
                            <option selected>label</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select> 
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <label className="mobile-no mb-2">Pin Code</label>                    
                        <select className="form-select mb-3 " aria-label="Default select example">
                            <option selected>label</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select> 
                    </Form.Group>
                    <h5 className="f1-16">Educational And Work Details</h5>
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
                        <select className="form-select mb-3  " aria-label="Default select example">
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
                    <Form.Group className="mb-3"> 
                        <Form.Control type="file" placeholder="Placeholder">
                            </Form.Control>                    
                    </Form.Group>
                        
                    <Form.Group className="mb-3">
                        <label className="mobile-no mb-2" >Desired Job Profile</label>                    
                        <Form.Control placeholder="Placeholder" />                    
                    </Form.Group>            
                    <Form.Group className="mb-4">
                        <label className="mobile-no mb-2" >Learning Changes</label>                    
                        <Form.Control placeholder="Placeholder" />                    
                    </Form.Group>  
                    <Button className="profile-button">
                        Save Changes
                    </Button>
                </Col>  
            </div>  
            {show === true ? 
            (                          
                <Modal 
                aria-labelledby="contained-modal-title-vcenter" show={show} onHide={handlepasswordClose} >                    
                    <Modal.Body >                       
                        <Modal.Title className="text-center mt-3 mb-3 f1-16">Change Password</Modal.Title>   
                        <Form.Group className="mb-4 login-inputGroup" controlId="formBasicEmail">
                            <Form.Control 
                            className="login-inputField" 
                            type="password" 
                            placeholder="Change Password"
                            />
                            <PasswordIcon />
                        </Form.Group>
                        <Form.Group className="mb-4 login-inputGroup" controlId="formBasicEmail">
                            <Form.Control 
                            className="login-inputField" 
                            type="password" 
                            placeholder="Confirm Password"
                            />
                            <PasswordIcon />
                        </Form.Group>      
                        <div className="text-center">
                            <Button style={{backgroundColor:'#4DD188', color:'white'}} className="btn mt-3 mb-3"  onClick={handlepasswordClose}>
                                Submit
                            </Button>   
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