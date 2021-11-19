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
    DownArrow,
    PasswordIcon,
    EyeIconHid,
    EyeIcon
} from '../../assets/images/index';

import modalImage from '../../assets/images/modalImage.png'

const ProfilePage = (props) => {

    const [show, setShow]=useState(false);
    const [isShow, setIsShow]=useState(false);
    const [password,setPassword] = useState('')
    const [conformPassword,setConformPassword] = useState('')

    const [passwordShown, setPasswordShown] = useState(false);
    const [conformpasswordShown, setConformpasswordShown] = useState(false);
    

    const [mobileNo, setMobileNo] = useState('');
    const [state,setState]=useState('label');
    const [gender,setGender]= useState('')
    const [marital, setMarital]= useState('')
    const [country, setCountry]= useState('')
    const [address, setAddress]= useState('')
    const [ addressOne, setAddressOne]= useState('')
    const [district, setDistrict]= useState('')
    const [pincode, setPincode]= useState('')
    const [eduStream, setEduStream]= useState('')
    const [workExp, setWorkExp]= useState('')
    const [industry, setIndustry]= useState('')
    const [higherEduStream, setHigherEduStream]=useState('')
    const [currentRole,setCurrectRole]=useState('')
    const [learnChange, setLearnChange]= useState('')
    const [institution, setInstitution]= useState('')
    const [jobProfile, setJobProfile]= useState('')
    
    const [showPassword, setShowPassword] = useState(false); 

    const [paswordShow, setPaswordShow] = useState(true)
    
    
    const clickPasswordShow = () =>{
        setPaswordShow(!paswordShow);
    }
    const clickConfromPasswordShow = () =>{
        setConformPassword(!conformpasswordShown);
    }
    const now=80;

    const onMobile = e => {
        if(e.target.value.match('^[0-9\b]+$')){
            setMobileNo(e.target.value)
        }        
    }
    const onState = e => {
        setState(e.target.value)
    }
    const onGender = e => {
        setGender(e.target.value)
    }
    const onMarital = e => {
        setMarital(e.target.value)
    }
    const onCountry = e => {
        setCountry(e.target.value)
    }
    const onAddress = e => {
        setAddress(e.target.value)
    }
    const onAddressOne = e => {
        setAddressOne(e.target.value)
    }
    const onDistrict = e => {
        setDistrict(e.target.value)
    }
    const onPincode = e => {
        setPincode(e.target.value)
    }
    const onEduStream= e => {
        setEduStream(e.target.value)
    }
    const onHigherEduStream = e => {
        setHigherEduStream(e.target.value)
    }
    const onWorkExp = e => {
        setWorkExp(e.target.value)
    }
    const onIndustry = e => {
        setIndustry(e.target.value)
    }
    const onInstitution = e => {
        setInstitution(e.target.value)
    }
    const onCurrentRole = e => {
        setCurrectRole(e.target.value)
    }
    const onJobProfile = e => {
        setJobProfile(e.target.value)
    }
    const onLearnChange = e => {
        setLearnChange(e.target.value)
    }   
    

  

    const onSave = () =>{

    }
    //modal
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

    const onPassword = (e) => {  
        setPassword(e.target.value);   
    };
    const onConformPassword = (e) => {  
        setConformPassword(e.target.value);   
    };
  
    // const splitPassword = () => {
    //   setShowPassword(!showPassword);
    // };

    return (
        <Col className="py-md-4 pro-rit ms-5 mt-4   ">  
            <h3 className="mb-4" style={{color:'#003866',fontSize:'30px'}}>Profile</h3>
            <Row className="mt-3 mb-3">
                <Col sm={4} className='p-0'>
                    <ProgressBar now={60} className="mb-3"/>                        
                </Col>
                <Col sm={8}>                       
                    <label>60% Complete</label>
                </Col>
            </Row> 
            <Col sm={11} >              
                <Card.Body className="horizontal-card mb-4">
                    <Row>
                        <Col sm={1}  className="mt-2">
                            <AvatorProfile />
                        </Col>
                        <Col sm={3} xs className="my-auto ms-2 mb-2">
                            <label className="title " style={{color:'#192A3E',fontWeight:'bold',fontSize:'18px'}}>
                                Hayat Tamboli
                            </label>
                            <small style={{color:'#90A0B7'}}>hayat.tamboli@gmail.com</small>
                        </Col>
                        <Col sm={3}  xs className="rep-btn-ln mb-2 mt-4 text-center">
                            <button className="profile-cardbutton btn" style={{color:'#FFFFFF',borderRadius:'10px'}} onClick={handleAvator}>
                                Edit Avatar
                            </button>
                        </Col>
                        <Col sm={4} xs className="rep-btn-ln mb-2 mt-4 ">
                            <button className="profile-cardbutton btn" style={{color:'#FFFFFF',borderRadius:'10px'}} onClick={handlePassword}>
                                Change Password
                            </button>
                        </Col>
                    </Row>
                </Card.Body>
                
            </Col>
            
            
            
            <div className="px-3">
                <h5 className="f1-16-header" >Basic Details</h5>
                <Col sm={6} xs className="p-0">
                    <Form.Group className="mb-3 inputGroup">
                        <label className="mobile-no mb-1" >Mobile Number</label>
                        <Form.Control 
                            className="inputField-mobile-no" 
                            type="text" 
                            placeholder="98245 65862"                        
                        />
                        <span>+91 <DownArrow /></span>
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
                    <h5 className="f1-16-header">Address</h5>
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
                    <h5 className="f1-16-header">Educational And Work Details</h5>
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
                        <label className="mobile-no mb-2" >Resume</label>
                        <div className="profile-upload">
                            <div className="mt-4 text-center">
                                <UploadIcon />                                
                            </div>
                            <div className="mt-1" style={{textAlign:'center'}}>
                                Click here to add a document</div>
                            
                        </div>
                        {/* <Form.Control type="file" placeholder="Placeholder">
                            </Form.Control>                     */}
                    </Form.Group>
                        
                    <Form.Group className="mb-3">
                        <label className="mobile-no mb-2" >Desired Job Profile</label>                    
                        <Form.Control placeholder="Placeholder" />                    
                    </Form.Group>            
                    <Form.Group className="mb-4">
                        <label className="mobile-no mb-2" >Learning Changes</label>                    
                        <Form.Control placeholder="Placeholder" />                    
                    </Form.Group>  
                    <button className="profile-button btn " style={{color:'white',borderRadius:'12px'}}>
                        Save Changes
                    </button>
                </Col>  
            </div>  
            {show === true ? 
            (                          
                <Modal 
                aria-labelledby="contained-modal-title-vcenter" show={show} onHide={handlepasswordClose} >                    
                    <Modal.Body >                       
                        <Modal.Title className="text-center mt-3 mb-3 f1-16" style={{color:'#0B171B'}}>Change Password</Modal.Title>   
                        <Form.Group className="mb-4 profile-formgroup" controlId="formBasicEmail">
                            <Form.Label>Enter Password</Form.Label>
                            <Form.Control 
                                className="profile-form-control" 
                                type={paswordShow ? 'password' : 'text'} 
                                placeholder="Password"
                                value={password}
                                onChange={onPassword}
                                />
                            <PasswordIcon />
                            <Button 
                                className="profile-pwd-btn " 
                                onClick={clickPasswordShow}
                            >
                                { paswordShow ? <EyeIconHid /> : <EyeIcon />}
                            </Button>
                        </Form.Group>
                        <Form.Group className="mb-2 profile-formgroup" controlId="formBasicEmail">
                            <Form.Label>Conform Password</Form.Label>
                            <Form.Control 
                                className="profile-form-control"  
                                type={paswordShow ? 'password' : 'text'} 
                                placeholder="Password"
                                value={password}
                                onChange={onPassword}
                                />
                            <PasswordIcon />
                            <Button 
                                className="profile-pwd-btn " 
                                onClick={clickPasswordShow}
                            >
                                { paswordShow ? <EyeIconHid /> : <EyeIcon />}
                            </Button>
                        </Form.Group>      
                        <div className="text-center">
                            <button style={{backgroundColor:'#4DD188', color:'white', borderRadius:'13px',width:'110px'}} className="btn mt-3 mb-3"  onClick={handlepasswordClose}>
                                Change
                            </button>   
                        </div>
                    </Modal.Body>                
                </Modal>  
            ): null
            }   

            {isShow === true ? 
            <>               
                <Modal show={isShow} onHide={handleavatorClose} >                    
                    <Modal.Body>                       
                        <Modal.Title className="text-center mt-3 mb-3"style={{color:'#0B171B'}}>Edit Avatar</Modal.Title>                    
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
                            <button style={{backgroundColor:'#4DD188', color:'white', borderRadius:'13px',width:'110px'}} className="btn mt-3 mb-3"  onClick={handleavatorClose}>
                                Change
                            </button>   
                        </div>
                    </Modal.Body>                
                </Modal>              
            
            </> : null
            }   
        
        </Col>
    )
}



export default ProfilePage