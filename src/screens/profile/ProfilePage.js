import React, { useState, useEffect } from 'react'
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
import image_Cover from '../../assets/images/Image_Cover.png'
import newborn_baby from '../../assets/images/newborn_baby.png'
import marguerite from '../../assets/images/marguerite.png'
import nature from '../../assets/images/nature.png'
import avatarprofile from '../../assets/images/avatarprofile.png';

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
import HomeService from '../../service/HomeService';
import { useDispatch, useSelector } from 'react-redux';
import { constants } from '../../service';
import { set_Profile } from '../../redux/action';
import validator from 'validator'
import { ErrorHandler } from '../../service/ErrorHandler';

const ProfilePage = (props) => {
    const [avatarPicture, setAvatarPicture] = useState('');
    const dispatch = useDispatch();
    const profile = useSelector(state => state.ProfileReducer.profile)
    const user = useSelector(state => state.UserReducer.user);
    const [show, setShow] = useState(false);
    const [isShow, setIsShow] = useState(false);

    const [mobileNo, setMobileNo] = useState(profile?.profile?.contact_number ? profile.profile.contact_number : '');
    const [mobileNoErr, setMobileNoErr] = useState(profile?.profile?.contact_number ? false : null);
    const [dateofbirth, setDateofbirth] = useState(profile?.profile?.dob ? profile.profile.dob : '');
    const [dateofbirthErr, setDateofbirthErr] = useState(profile?.profile?.dob ? false : null);
    const [state, setState] = useState(profile?.profile?.state ? profile.profile.state : '');
    const [gender, setGender] = useState(profile?.profile?.gender ? profile.profile.gender : '');
    const [genderErr, setGenderErr] = useState(profile?.profile?.gender ? false : null);
    const [marital, setMarital] = useState(profile?.profile?.marital_status ? profile.profile.marital_status : '');
    const [country, setCountry] = useState(profile?.profile?.country ? profile.profile.country : '');
    const [address, setAddress] = useState(profile?.profile?.address ? profile.profile.address : '');
    const [addressOne, setAddressOne] = useState(profile?.profile?.address1 ? profile.profile.address1 : '');
    const [district, setDistrict] = useState(profile?.profile?.district ? profile.profile.district : '');
    const [pincode, setPincode] = useState(profile?.profile?.pincode ? profile.profile.pincode : '');
    const [eduStream, setEduStream] = useState(profile?.profile?.educational_stream ? profile.profile.educational_stream : '');
    const [eduStreamErr, setEduStreamErr] = useState(profile?.profile?.educational_stream ? false : null);
    const [workExp, setWorkExp] = useState(profile?.profile?.work_exp ? profile.profile.work_exp : '');
    const [industry, setIndustry] = useState(profile?.profile?.industry ? profile.profile.industry : '');
    const [higherEduStream, setHigherEduStream] = useState(profile?.profile?.highest_educational_stream ? profile.profile.highest_educational_stream : '');
    const [higherEduStreamErr, setHigherEduStreamErr] = useState(profile?.profile?.highest_educational_stream ? false : null);
    const [role, setRole] = useState(profile?.profile?.work_role ? profile.profile.work_role : '');
    const [learn, setLearn] = useState(profile?.profile?.learning_needs ? profile.profile.learning_needs : '');
    const [institution, setInstitution] = useState(profile?.profile?.organisation ? profile.profile.organisation : '');
    const [desireProfile, setDesireProfile] = useState(profile?.profile?.desired_jobs ? profile.profile.desired_jobs : '');

    const [password, setPassword] = useState('');
    const [repassword, setRepassword] = useState('');
    const [passwordErr, setPasswordErr] = useState(null);
    const [repasswordErr, setRePasswordErr] = useState(null);
    const [paswordShow, setPaswordShow] = useState(true);
    const [repaswordShow, setRePaswordShow] = useState(true);
    const [avatarList, setAvatarList] = useState([]);
    const [selectedFile, setSelectedFile] = useState(null);
    const [resumeDownload, setResumeDownload] = useState(profile?.profile?.resume ? profile.profile.resume : '');
    const handleFileInput = (e) => {
        if (e.target.files[0].size < 1048576) {
            setSelectedFile(e.target.files[0]);
        } else {
            alert("File size should be less than 1 MB");
        }
    }

    useEffect(() => {
        HomeService.getAvatar().then(result => {
            var response = result.data;
            if (response.status == 'success') {
                setAvatarList(response.avatar_data);
            }
        }).catch(function (error) {
            ErrorHandler(error);
        });
    }, []);

    const getProfile = () => {
        HomeService.profile().then(result => {
            var response = result.data;
            if (response.status == 'success') {
                dispatch(set_Profile(response));
            }
        }).catch(function (error) {
            ErrorHandler(error);
        });
    }
    const clickPasswordShow = () => {
        setPaswordShow(!paswordShow);
    }
    const clickRePasswordShow = () => {
        setRePaswordShow(!repaswordShow);
    }

    const onPassword = (e) => {
        setPassword(e.target.value);
        if (e.target.value != '') {
            if (validator.isStrongPassword(e.target.value, {
                minLength: 6, minLowercase: 1,
                minUppercase: 1, minNumbers: 1, minSymbols: 1
            })) {
                setPasswordErr(false);
            } else {
                setPasswordErr(true);
            }
            if (repassword != '') {
                if (e.target.value == repassword) {
                    setRePasswordErr(false);
                } else {
                    setRePasswordErr(true);
                }
            }
        } else {
            setPasswordErr(true);
        }
    };
    const onRePassword = e => {
        setRepassword(e.target.value);
        if (e.target.value != '') {
            if (password == e.target.value) {
                setRePasswordErr(false);
            } else {
                setRePasswordErr(true);
            }
        } else {
            setRePasswordErr(true);
        }
    }

    const now = 80;

    const onMobile = (e) => {
        setMobileNo(e.target.value);
        if (e.target.value != '' && constants.validMobilNo.test(e.target.value)) {
            if (e.target.value.length < 10) {
                setMobileNoErr(true);
            } else {
                setMobileNoErr(false);
            }
        } else {
            setMobileNoErr(true);
        }
    }
    const onDateofBirth = e => {
        setDateofbirth(e.target.value);
        if (e.target.value != "") {
            setDateofbirthErr(false);
        } else {
            setDateofbirthErr(true);
        }
    }
    const onState = e => {
        setState(e.target.value)
    }
    const onGender = e => {
        setGender(e.target.value);
        if (e.target.value != '') {
            setGenderErr(false);
        } else {
            setGenderErr(true);
        }
    }
    const onMarital = e => {
        setMarital(e.target.value);
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
    const onEduStream = e => {
        setEduStream(e.target.value);
        if (e.target.value != '') {
            setEduStreamErr(false);
        } else {
            setEduStreamErr(true);
        }
    }
    const onHigherEduStream = e => {
        setHigherEduStream(e.target.value);
        if (e.target.value != '') {
            setHigherEduStreamErr(false);
        } else {
            setHigherEduStreamErr(true);
        }
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

    const onSave = () => {
        if (mobileNoErr == false && dateofbirthErr == false && genderErr == false && eduStreamErr == false && higherEduStreamErr == false) {
            var form_data = new FormData();
            form_data.append('contact_number', mobileNo);
            form_data.append('dob', dateofbirth);
            form_data.append('gender', gender);
            form_data.append('marital_status', marital);
            form_data.append('country', country);
            form_data.append('address', address);
            form_data.append('address1', addressOne);
            form_data.append('state', state);
            form_data.append('district', district);
            form_data.append('pincode', pincode);
            form_data.append('educational_stream', eduStream);
            form_data.append('highest_educational_stream', higherEduStream);
            form_data.append('work_exp', workExp);
            form_data.append('industry', industry);
            form_data.append('organisation', institution);
            form_data.append('work_role', role);
            form_data.append('desired_jobs', desireProfile);
            form_data.append('learning_needs', learn);
            if (selectedFile) {
                form_data.append('resume', selectedFile);
            }
            HomeService.profileUpdate(form_data).then(result => {
                var response = result.data;
                if (response.status == 'success') {
                    alert(response.profile);
                    getProfile();
                }
            }).catch(function (error) {
                ErrorHandler(error);
            });
        } else {
            alert("Please enter all Required files");
        }
    }
    const handleClose = () => setIsShow(false);
    const handleShow = () => setIsShow(true);
    const handleShowPassword = () => setShow(true);

    const handleChange = () => {
        var payload = {
            avatar_id: avatarPicture
        };
        HomeService.avatarUpdate(payload).then(result => {
            var response = result.data;
            if (response.status == 'success') {
                alert(response.profile);
                setIsShow(false);
                getProfile();
            }
        }).catch(function (error) {
            ErrorHandler(error);
        });
    }
    const handleClosePassword = () => {
        var payload = {
            password: password,
            password_confirmation: repassword,
        }
        HomeService.changePassword(payload).then(result => {
            var response = result.data;
            if (response.status == 'success') {
                alert(response.profile);
                setShow(false);
                setPassword('');
                setRepassword('');
                setPasswordErr(null);
                setRePasswordErr(null);
            }
        }).catch(function (error) {
            ErrorHandler(error);
        });
    }
    const onChangePassword = () => {
        //  handlepasswordClose();
        onPassword('');
        onRePassword('');
    }
    return (
        <div className="py-md-4 pro-rit  mt-5 mt-md-0 mb-3 ps-md-4 shadow px-3 bg-white rounded" style={{ width: '100%' }} >
            {/* {isLoading && <Loader />} */}

            <Col xs={12} sm={12} md={11} lg={12}>
                <h3 className="mb-2 mt-5 mt-md-0 pt-5 pt-md-0 px-2 px-md-1 skill-profile" style={{ color: '#003866', fontSize: '30px' }}>Profile</h3>
                <Row className="mt-5 mt-md-2 mb-3">
                    <Col xs={12} sm={12} md={10} lg={4} className='px-2 px-md-0'>
                        <ProgressBar now={profile.profile_filled} className="mb-3" />
                    </Col>
                    <Col sm={8}>
                        <label>{profile.profile_filled} % Complete</label>
                    </Col>
                </Row>
                <Col xs={12} sm={12} md={12} lg={12} className="px-2 px-md-0">
                    <Card.Body className="horizontal-card mb-4 text-center">
                        <Row>
                            <Col xs={12} sm={6} md={6} lg={3} className="mt-2 mb-2">
                                {profile?.profile_picture ? <img
                                    src={profile.profile_picture}
                                    alt="Avatar"
                                    // className="avatar-image"
                                    style={{ width: '80px', height: '80px', borderRadius: '50%' }}
                                /> : <AvatorProfile />}
                            </Col>
                            <Col xs={12} sm={6} md={6} lg={3} className="my-auto mb-2 ps-2 ps-md-2 text-center text-md-start">
                                <label
                                    className="title "
                                    style={{
                                        color: '#192A3E',
                                        fontWeight: 'bold',
                                        fontSize: '18px'
                                    }}
                                >
                                    {user.name}
                                </label>
                                &nbsp;
                                <small style={{ color: '#90A0B7' }}>{user.email}</small>
                            </Col>
                            <Col xs={12} sm={6} md={6} lg={3} className=" mb-2 mt-4 ">
                                <button
                                    className="profile-cardbutton btn"
                                    style={{
                                        color: '#FFFFFF',
                                        borderRadius: '10px',
                                        width: '170px !important'
                                    }}
                                    onClick={handleShow}
                                >
                                    Edit Avatar
                                </button>
                            </Col>
                            <Col xs={12} sm={6} md={6} lg={3} className=" mb-2 mt-4 ">
                                <button
                                    className="profile-cardbutton btn"
                                    style={{
                                        color: '#FFFFFF',
                                        borderRadius: '10px',
                                        width: '170px !important'
                                    }}
                                    onClick={handleShowPassword}
                                >
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
                                <label className="mobile-no mb-1" >Mobile Number *</label>
                                <Form.Control
                                    className="inputField-mobile-no"
                                    type="text"
                                    placeholder="Mobile Number"
                                    pattern="^\d{3}-\d{3}-\d{4}$"
                                    onChange={onMobile}
                                    value={mobileNo}
                                    maxLength={10}
                                />
                                <span style={{ position: 'absolute', marginTop: '-30px', marginLeft: '10px' }}>+91 </span>
                                {mobileNoErr ?
                                    (<p style={{ fontSize: '16px', color: 'red' }} className="mb-2">
                                        Please enter valid Mobile Number
                                    </p>
                                    ) : ''}
                            </Form.Group>
                            <Form.Group className="mb-3 profile-formgroup">
                                <label className="mobile-no mb-1" >Date of Birth *</label>
                                <Form.Control type="date" placeholder="00-00-0000"
                                    value={dateofbirth} onChange={onDateofBirth} />
                                {dateofbirthErr ?
                                    (<p style={{ fontSize: '16px', color: 'red' }} className="mb-2">
                                        Please select Date of Birth
                                    </p>
                                    ) : ''}
                            </Form.Group>
                            <Form.Group className="mb-3 profile-formgroup">
                                <label className="mobile-no mb-1" >Gender *</label>
                                <select className="form-select mb-3 "
                                    value={gender}
                                    aria-label="Default select example" onChange={onGender}>
                                    <option selected value="">-- Select Gender --</option>
                                    <option value="1">Male</option>
                                    <option value="2">Female</option>
                                    <option value="3">Others</option>
                                </select>
                                {genderErr ?
                                    (<p style={{ fontSize: '16px', color: 'red' }} className="mb-2">
                                        Please select Gender
                                    </p>
                                    ) : ''}
                            </Form.Group>
                            <Form.Group className="mb-3 profile-formgroup">
                                <label className="mobile-no mb-1" >Marital Status</label>
                                <select className="form-select mb-3 "
                                    aria-label="Default select example"
                                    value={marital}
                                    onChange={onMarital}>
                                    <option selected value="">-- Select Marital Status --</option>
                                    <option value="1">Married</option>
                                    <option value="2">Single</option>
                                </select>
                            </Form.Group>
                            <h5 className="f1-16-header">Address</h5>
                            <Form.Group className="mb-3 profile-formgroup">
                                <label className="mobile-no mb-1" >Country</label>
                                <Form.Control placeholder="Country" onChange={onCountry} value={country} />
                            </Form.Group>
                            <Form.Group className="mb-3 profile-formgroup">
                                <label className="mobile-no mb-1" >Address</label>
                                <Form.Control placeholder="Address line 1" className="mb-2" value={address} onChange={onAddress} />
                                <Form.Control placeholder="Address line 2" className="mb-2" value={addressOne} onChange={onAddressOne} />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <label className="mobile-no mb-1" >State</label>
                                <Form.Control placeholder="State" onChange={onState} value={state} />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <label className="mobile-no mb-1">District</label>
                                <Form.Control placeholder="District" onChange={onDistrict} value={district} />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <label className="mobile-no mb-2">Pin Code</label>
                                <Form.Control placeholder="Pin Code" onChange={onPincode} value={pincode} />
                            </Form.Group>
                            <h5 className="f1-16-header">Educational And Work Details</h5>
                            <Form.Group className="mb-3 ">
                                <label className="mobile-no mb-2" >Educational Stream *</label>
                                <Form.Control placeholder="Educational Stream" onChange={onEduStream} value={eduStream} />
                                {eduStreamErr ?
                                    (<p style={{ fontSize: '16px', color: 'red' }} className="mb-2">
                                        Please enter Educational Stream
                                    </p>
                                    ) : ''}
                            </Form.Group>
                            <Form.Group className="mb-3 ">
                                <label className="mobile-no mb-2" >Highest Educational Qualification *</label>
                                <Form.Control placeholder="Highest Educational Qualification" onChange={onHigherEduStream} value={higherEduStream} />
                                {higherEduStreamErr ?
                                    (<p style={{ fontSize: '16px', color: 'red' }} className="mb-2">
                                        Please enter Highest Educational Qualification
                                    </p>
                                    ) : ''}
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <label className="mobile-no mb-2" >Work Experience</label>
                                <Form.Control placeholder="Work Experience" onChange={onWorkExp} value={workExp} />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <label className="mobile-no mb-2" >Industry</label>
                                <Form.Control placeholder="Industry" onChange={onIndustry} value={industry} />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <label className="mobile-no mb-2" >Organization/Institution</label>
                                <Form.Control placeholder="Organization/Institution" onChange={onInstitution} value={institution} />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <label className="mobile-no mb-2" >Current Role</label>
                                <Form.Control placeholder="Current Role" onChange={onRole} value={role} />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <label className="mobile-no mb-2" >Resume </label>
                                {resumeDownload && <a className="m-2" href={resumeDownload} download>Click to download</a>}
                                <div className="profile-upload" >
                                    <div class="image-upload mt-4 text-center">
                                        <label for="file-input">
                                            <img src={upload} alt="upload" className="images" />
                                        </label>
                                        <input id="file-input" className="upload-input" type="file" accept=".pdf" onChange={handleFileInput} />
                                        <div className="mt-1" style={{ textAlign: 'center' }}>
                                            {selectedFile ? selectedFile.name : 'Click here to add a document'}
                                        </div>
                                    </div>
                                </div>
                                <label className="mobile-no mb-2" style={{ color: 'red' }}>{"(Only PDF allowed, size < 1 MB)"} </label>
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <label className="mobile-no mb-2" >Desired Job Profile</label>
                                <Form.Control placeholder="Desired Job Profile" value={desireProfile} onChange={onDesireProfile} />
                            </Form.Group>
                            <Form.Group className="mb-4">
                                <label className="mobile-no mb-2" >Learning Changes</label>
                                <Form.Control placeholder="Learning Changes" value={learn} onChange={onLearnChange} />
                            </Form.Group>
                            <Col className="text-center my-3">
                                <button className="profile-button btn text-center mb-3"
                                    style={{ color: 'white', borderRadius: '12px' }} onClick={onSave}>
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
                        show={show}
                        onHide={() => setShow(false)}
                        aria-labelledby="contained-modal-title-vcenter"
                    >
                        <Modal.Header closeButton>
                            <Modal.Title className="profile-modal-header mt-1 mb-1 f1-16 " >
                                Change Password
                            </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
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
                                    {paswordShow ? <EyeIconHid /> : <EyeIcon />}
                                </Button>
                            </Form.Group>
                            {passwordErr ?
                                (<p style={{ fontSize: '16px', color: 'red' }} className="mb-3" > {password.length > 0 ? 'Password should have at least one each Aa1@ and 6 digits ' : 'Please enter your Password'} </p>) : ''}
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
                                    {repaswordShow ? <EyeIconHid /> : <EyeIcon />}
                                </Button>
                            </Form.Group>
                            {repasswordErr ?
                                (<p style={{ fontSize: '16px', color: 'red' }} className="mb-3"> {repassword ? 'Password missmatch' : 'Please enter your Conform Password'}</p>) : ''}
                            <div className="text-center mb-2">
                                <button
                                    style={{ backgroundColor: '#4DD188', color: 'white', borderRadius: '13px', width: '110px' }} className="btn mt-3 mb-3"
                                    disabled={passwordErr == false && repasswordErr == false ? false : true}

                                    onClick={handleClosePassword}>
                                    Change
                                </button>
                            </div>
                        </Modal.Body>
                    </Modal>
                ) : null
            }
            {isShow === true ?
                <>
                    <Modal
                        show={isShow}
                        onHide={() => setIsShow(false)}
                        aria-labelledby="contained-modal-title-vcenter"

                    >
                        <Modal.Header closeButton>
                            <Modal.Title className="profile-modal-header mt-1 mb-1 f1-16" >Edit Avatar</Modal.Title>
                        </Modal.Header>
                        <Modal.Body >
                            <Row >
                                {avatarList.length > 0 &&
                                    avatarList.map((item, index) => (
                                        <Col
                                            className="mb-2" xs={3}
                                            onClick={() => setAvatarPicture(item.id)}
                                        >
                                            <img
                                                src={item.image}
                                                alt={item.image}
                                                key={index}
                                                className={item.id == avatarPicture ? "avatar-image" : ""}
                                                style={{ width: '80px', height: '80px', borderRadius: '50%' }}
                                            />
                                        </Col>
                                    ))
                                }
                            </Row>
                            <div className="text-center">
                                <button style={{ backgroundColor: '#4DD188', color: 'white', borderRadius: '13px', width: '110px' }}
                                    disabled={avatarPicture ? false : true}
                                    className="btn mt-3 mb-3" onClick={handleChange}
                                >
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