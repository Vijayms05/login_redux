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
import upload from '../../assets/images/upload.png'

import {
    AvatorProfile,
    ModalImage,
    DownArrow,
    PasswordIcon,
    EyeIconHid,
    EyeIcon
} from '../../assets/images/index';
import { MobileRegex } from '../../service/Constant';

import modalImage from '../../assets/images/modalImage.png'
import { IndeterminateCheckBoxOutlined } from '@material-ui/icons';

let fileList=[];

const ProfilePage = (props) => {
    const [uploadId, setUploadId] = useState('');
    const [uploadIdName, setUploadIdName] = useState('');
    const [show, setShow]=useState(false);
    const [isShow, setIsShow]=useState(false);
   
    const [mobileNo, setMobileNo] = useState('');
    const [dateofbirth,setDateofbirth]=useState('')
    const [state,setState]=useState([]);
    const [gender,setGender]= useState([]);
    const [marital, setMarital]= useState([])
    const [country, setCountry]= useState([])
    const [address, setAddress]= useState('')
    const [addressOne, setAddressOne]= useState('')
    const [district, setDistrict]= useState([])
    const [pincode, setPincode]= useState([])
    const [eduStream, setEduStream]= useState([])
    const [workExp, setWorkExp]= useState('')
    const [industry, setIndustry]= useState('')
    const [higherEduStream, setHigherEduStream]=useState('')
    const [role,setRole]=useState('')
    const [learn, setLearn]= useState('')
    const [institution, setInstitution]= useState('')
    const [desireProfile, setDesireProfile]= useState('')
    
    const [password, setPassword] = useState('')
    const [repassword, setRepassword]= useState('')  
   
    const [paswordShow, setPaswordShow] = useState(true)
    const [repaswordShow, setRePaswordShow] = useState(true)
 
    const clickPasswordShow = () =>{
      setPaswordShow(!paswordShow);
    }
    const clickRePasswordShow = () =>{
      setRePaswordShow(!repaswordShow);
    }    
   
    const onPassword = (e) => {
      setPassword(e.target.value);
    };
    const onRePassword = e => { 
      setRepassword(e.target.value)          
    }
  
    const now=80;

    const onMobile = (e) => {
        // console.log(MobileRegex.match(e.target.value));
        setMobileNo(e.target.value);
        // if(e.target.value.match(MobileRegex)){
        //     setMobileNo(e.target.value)
        // }        
    }
    const onDateofBirth = e => {
        setDateofbirth(e.target.value);
    }
    // const onUpload = (e) => {       
    //     let file = e.target.files[0];
    //     setUploadIdName(file.name)
    //     const reader = new FileReader();
    //     reader.onload = () => {
    //       setUploadIdName(file.name)
    //       setUploadId(reader.result);
    //     };
    //     reader.readAsDataURL(file);
    //     console.log(reader)
    //   }
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
    const onRole = e => {
        setRole(e.target.value)
    }
    const onDesireProfile = e => {
        setDesireProfile(e.target.value)
    }
    const onLearnChange = e => {
        setLearn(e.target.value)
    }       
 
    const onSave = (e) =>{
        e.preventDefault();
        onMobile('');
        onDateofBirth('');
        onGender([]);
        onMarital([]);
        onCountry([]);
        onState([]);
        onDistrict([]);
        onPincode([]);
        onEduStream([])
        onHigherEduStream([]);
        onWorkExp('');
        onIndustry('');
        onInstitution('');
        onRole('');
        onDesireProfile('');
        onLearnChange('');
    }
    //modal
    // const togglePassword =() =>{ 
    //     setPasswordShown(!passwordShown)
    // }
    // const toggleConformPassword =() =>{
    //     setConformpasswordShown(!conformpasswordShown)
    // } 
    // const clickPasswordShow = () =>{
    //     setPaswordShow(!paswordShow);
    // }
    // const clickConfromPasswordShow = () =>{
    //     setConformPassword(!conformpasswordShown);
    // }
    const handleClose = () => setIsShow(false);
    const handleShow = () => setIsShow(true);
    const handleShowPassword = () => setShow(true)   
   
    const handleClosePassword = () => setShow(false); 
  
    const onChangePassword= () =>{
        //  handlepasswordClose();
        onPassword('');
        onRePassword('');
    }

    return (                   
        <div className="py-md-4 pro-rit mt-5 mt-md-0 mb-3 ps-md-4 shadow px-3 bg-white rounded">  
            {/* {isLoading && <Loader />} */}
            
            <Col xs={12} sm={12} md={10} lg={12}>
                <h3 className="mb-2 mt-5 mt-md-0 pt-5 pt-md-0 px-2 px-md-0 skill-profile" style={{color:'#003866',fontSize:'30px'}}>Profile</h3>
                <Row className="mt-5 mt-md-2 mb-3">
                    <Col xs={12} sm={12} md={10} lg={4} className='px-2 px-md-0'>
                        <ProgressBar now={60} className="mb-3"/>                        
                    </Col>
                    <Col sm={8}>                       
                        <label>60% Complete</label>
                    </Col>
                </Row> 
                <Col xs={12} sm={12} md={12} lg={12} className="px-2 px-md-0">              
                    <Card.Body className="horizontal-card mb-4 text-center">
                        <Row>
                            <Col xs={12} sm={6} md={3}  className="mt-2 mb-2">
                                <AvatorProfile />
                            </Col>
                            <Col   xs={12} sm={6} md={3}  className="my-auto mb-2 ps-4 ps-md-4 text-center text-md-start">
                                <label className="title  " 
                                style={{color:'#192A3E',fontWeight:'bold',fontSize:'18px'}}>
                                    Hayat Tamboli
                                </label>
                                &nbsp;
                                <small style={{color:'#90A0B7'}}>hayat.tamboli@gmail.com</small>
                            </Col>
                            <Col   xs={12} sm={6} md={3}  className=" mb-2 mt-4 ">
                                <button className="profile-cardbutton btn" 
                                style={{color:'#FFFFFF',borderRadius:'10px',width:'170px !important'}} 
                                onClick={handleShow}>
                                    Edit Avatar
                                </button>
                            </Col>
                            <Col   xs={12} sm={6} md={3} className=" mb-2 mt-4 ">
                                <button className="profile-cardbutton btn"
                                    style={{color:'#FFFFFF',borderRadius:'10px',
                                    width:'170px !important',
                                    background:'#298ee0'}} onClick={handleShowPassword}>
                                    Change Password
                                </button>
                            </Col>
                        </Row>
                    </Card.Body>                
                </Col>
                <div className="px-3">
                    <h5 className="f1-16-header" >Basic Details</h5>
                    <Row>
                        <Col sm={10} xs={12} md={10} lg={8} className="p-0">
                            <Form.Group className="mb-3 inputGroup">
                                <label className="mobile-no mb-1" >Mobile Number</label>                            
                                <Form.Control 
                                    className="inputField-mobile-no" 
                                    type="text" 
                                    placeholder="98245 65862"    
                                    pattern="^\d{3}-\d{3}-\d{4}$"
                                    onChange={onMobile}
                                    value={mobileNo}  
                                    maxLength={10}                                              
                                />
                                <span style={{position:'absolute', marginTop:'-30px',marginLeft:'10px'}}>+91 <DownArrow /></span>
                            </Form.Group>
                            <Form.Group className="mb-3 profile-formgroup">
                                <label className="mobile-no mb-1" >Date of Birth</label>                                         
                                <Form.Control type="date" placeholder="00-00-0000" 
                                value={dateofbirth} onChange={onDateofBirth}/> 
                            </Form.Group>
                            <Form.Group className="mb-3 profile-formgroup">
                                <label className="mobile-no mb-1" >Gender</label>                            
                                <select className="form-select mb-3 " 
                                    aria-label="Default select example" onChange={onGender}>                            
                                    <option selected>-- Select Gender --</option>
                                    <option value="1">Male</option>
                                    <option value="2">Female</option>
                                    <option value="3">Others</option>
                                </select>                         
                                
                            </Form.Group>
                            <Form.Group className="mb-3 profile-formgroup">
                                <label className="mobile-no mb-1" >Marital Status</label>                    
                                <select className="form-select mb-3 " 
                                aria-label="Default select example" onChange={onMarital}>
                                    <option selected>-- Select Marital Status --</option>
                                    <option value="1">Married</option>
                                    <option value="2">UnMarried</option>
                                    <option value="3">Single</option>
                                </select> 
                            </Form.Group>
                            <h5 className="f1-16-header">Address</h5>
                            <Form.Group className="mb-3 profile-formgroup">
                                <label className="mobile-no mb-1" >Country</label>                    
                                <select className="form-select mb-3 " 
                                aria-label="Default select example" onChange={onCountry}>
                                    <option selected>-- Select Country --</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select> 
                            </Form.Group>
                            <Form.Group className="mb-3 profile-formgroup">
                                <label className="mobile-no mb-1" >Address</label>                    
                                <Form.Control placeholder="Address line 1" className="mb-2" value={address} onChange={onAddress}/>
                                <Form.Control placeholder="Address line 2" className="mb-2"value={addressOne} onChange={onAddressOne}/>
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <label className="mobile-no mb-1" >State</label>                    
                                <select className="form-select mb-3 " 
                                aria-label="Default select example" onChange={onState}>
                                    <option selected>-- Select State --</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select> 
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <label className="mobile-no mb-1">District</label>                    
                                <select className="form-select mb-3 " 
                                aria-label="Default select example" onChange={onDistrict}>
                                    <option selected>-- Select District -- </option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select> 
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <label className="mobile-no mb-2">Pin Code</label>                    
                                <select className="form-select mb-3 " 
                                aria-label="Default select example" onChange={onPincode}>
                                    <option selected>-- Select Pin Code -- </option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select> 
                            </Form.Group>
                            <h5 className="f1-16-header">Educational And Work Details</h5>
                            <Form.Group className="mb-3 ">
                                <label className="mobile-no mb-2" >Educational Stream</label>                    
                                <select className="form-select mb-3 " 
                                aria-label="Default select example" onChange={onEduStream}>
                                    <option selected>-- Select Educational Stream -- </option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select> 
                            </Form.Group>
                            <Form.Group className="mb-3 ">
                                <label className="mobile-no mb-2" >Highest Educational Qualification</label>                    
                                <select className="form-select mb-3  " 
                                aria-label="Default select example" onChange={onHigherEduStream}>
                                    <option selected>-- Select Educational Qualification -- </option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select> 
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <label className="mobile-no mb-2" >Work Experience</label>                    
                                <Form.Control placeholder="Placeholder" onChange={onWorkExp} value={workExp}/>                    
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <label className="mobile-no mb-2" >Industry</label>                    
                                <Form.Control placeholder="Placeholder" onChange={onIndustry} value={industry}/>                    
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <label className="mobile-no mb-2" >Organization/Institution</label>                    
                                <Form.Control placeholder="Placeholder" onChange={onInstitution} value={institution}/>                    
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <label className="mobile-no mb-2" >Current Role</label>                    
                                <Form.Control placeholder="Placeholder" onChange={onRole} value={role}/>                    
                            </Form.Group>   
                            <Form.Group className="mb-3"> 
                                <label className="mobile-no mb-2" >Resume</label>
                                <div className="profile-upload" >
                                    <div class="image-upload mt-4 text-center">
                                        <label for="file-input">
                                            <img src={upload} alt="upload" className="images" />
                                        </label>
                                        <input id="file-input" className="upload-input" type="file" />
                                        <div className="mt-1" style={{textAlign:'center'}}>
                                            Click here to add a document
                                        </div>
                                    </div>
                                    {/* <div className="mt-4 text-center">
                                        <input type="file" hidden />
                                        <UploadIcon  onClick={onUpload}/>  
                                        <span className='ms-2' >{uploadIdName ? uploadIdName : 'No file selected'} </span>                             
                                    </div> */}
                                    
                                    
                                </div>
                                {/* <Form.Control type="file" placeholder="Placeholder">
                                    </Form.Control>                     */}
                            </Form.Group>
                                
                            <Form.Group className="mb-3">
                                <label className="mobile-no mb-2" >Desired Job Profile</label>                    
                                <Form.Control placeholder="Placeholder" value={desireProfile} onChange={onDesireProfile}/>                    
                            </Form.Group>            
                            <Form.Group className="mb-4">
                                <label className="mobile-no mb-2" >Learning Changes</label>                    
                                <Form.Control placeholder="Placeholder" value={learn} onChange={onLearnChange}/>                    
                            </Form.Group>  
                            <Col className="text-center my-3">
                                <button className="profile-button btn text-center mb-3" 
                                style={{color:'white',borderRadius:'12px'}} onClick={onSave}>
                                    Save Changes
                                </button>
                            </Col>
                        </Col>  
                    </Row>
                </div>  
            </Col>
            {show === true ? 
            (                          
                <Modal 
                    aria-labelledby="contained-modal-title-vcenter" 
                    show={show} >                    
                    <Modal.Body >                       
                        <Modal.Title className="text-center mt-3 mb-3 f1-16" style={{color:'#0B171B'}}>Change Password</Modal.Title>   
                        <Form.Group className="mb-4 profile-formgroup" controlId="formBasicEmail">
                            <Form.Label>Enter Password</Form.Label>
                            <Form.Control 
                                className="profile-form-control" 
                                type={paswordShow ? 'password' : 'text'} 
                                placeholder="Password"
                                value={password}
                                onChange={e => setPassword(e.target.value)}
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
                                type={repaswordShow ? 'password' : 'text'} 
                                placeholder="Password"
                                value={repassword}
                                onChange={onRePassword}
                                />
                            <PasswordIcon />
                            <Button 
                                className="profile-pwd-btn " 
                                onClick={clickRePasswordShow}
                            >
                                { repaswordShow ? <EyeIconHid /> : <EyeIcon />}
                            </Button>
                        </Form.Group>      
                        <div className="text-center mb-2">
                            <button 
                            style={{backgroundColor:'#4DD188', color:'white', borderRadius:'13px',width:'110px'}} className="btn mt-3 mb-3"  
                            onClick={handleClosePassword}>
                                Change
                            </button>   
                        </div>
                    </Modal.Body>                
                </Modal>  
            ): null
            }   

            {isShow === true ? 
            <>               
                <Modal show={isShow}  >                    
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
                            <button style={{backgroundColor:'#4DD188', color:'white', borderRadius:'13px',width:'110px'}} 
                            className="btn mt-3 mb-3"  onClick={handleClose}>
                                Change
                            </button>   
                        </div>
                    </Modal.Body>                
                </Modal>              
            
            </> : null
            }   
        
        </div>
       
    )
}
export default ProfilePage