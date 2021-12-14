import { message } from 'antd';
import React, { useState, useEffect } from 'react'
import { history } from '../../routes/Routes';
import {
    Col,
    Row,
    Form,
    Button,
    Container
} from 'react-bootstrap';
// import { useHistory } from 'react-router-dom'

import {
    Readingbooks,
    Logo
} from '../../assets/images/index';
import { validText } from '../../service/Constant';
import { useDispatch, useSelector } from 'react-redux';
// import Schoolstudent from './Schoolstudent';
// import Collegegroup from './Collegegroup';
import RegisterService from '../../service/RegisterService';
import { useHistory } from 'react-router-dom';
import { set_Profile, set_Token, set_User } from '../../redux/action';
import httpClient from '../../service/httpClient';
const Studentgroup = (props) => {
    // const { validateName } = props;
    const dispatch = useDispatch();
    const email = useSelector(state => state.loginReducer.email);
    const [student, setStudent] = useState(false)

    const history = useHistory();

    const [streamSchool, setStreamSchool] = useState('')

    const [inputName, setInputname] = useState('');
    const [inputNameErr, setInputnameErr] = useState(null);
    const [type, setType] = useState('');
    const [stream, setStream] = useState('');
    const [streamList, setStreamList] = useState([]);
    const [standard, setStandard] = useState('');
    const [standardList, setStandardList] = useState([]);
    const [branch, setBranch] = useState('');
    const [branchList, setBranchList] = useState([]);
    const [schoolName, setSchoolName] = useState('')
    const [schoolNameErr, setSchoolNameErr] = useState(null);
    const [collegeName, setCollegeName] = useState('');
    const [universityName, setUniversityName] = useState('');
    const [collegeYear, setCollegeYear] = useState('');
    const [collegeNameErr, setCollegeNameErr] = useState(null);
    const [universityNameErr, setUniversityNameErr] = useState(null);
    const [collegeYearErr, setCollegeYearErr] = useState(null);

    const changeType = (type) => {
        setType(type);
        if (type == 1) {
            RegisterService.getStandards().then(result => {
                var response = result.data;
                console.log(response);
                if (response.status == 'success') {
                    setStandardList(response.standards);
                    setStreamList([]);
                    setStream('');
                }
            }).catch(function (error) {
                if (error.response) {
                    // Request made and server responded
                    alert(error.response.data?.message);
                    console.log(error.response.data);
                } else if (error.request) {
                    // The request was made but no response was received
                    alert(error.request)
                    console.log(error.request);
                } else {
                    // Something happened in setting up the request that triggered an Error
                    alert(error.message)
                    console.log(error.message);
                }

            });
        } else if (type == 2) {
            RegisterService.getStreams().then(result => {
                var response = result.data;
                console.log(response);
                if (response.status == 'success') {
                    setStreamList(response.streams);
                    setStandardList([]);
                    setStandard('');
                }
            }).catch(function (error) {
                if (error.response) {
                    // Request made and server responded
                    alert(error.response.data?.message);
                    console.log(error.response.data);
                } else if (error.request) {
                    // The request was made but no response was received
                    alert(error.request)
                    console.log(error.request);
                } else {
                    // Something happened in setting up the request that triggered an Error
                    alert(error.message)
                    console.log(error.message);
                }

            });
        }
    }
    const changeStandard = (e) => {
        setStandard(e.target.value);
        if (e.target.value != null && e.target.value != '') {
            RegisterService.getStandardsStreams(e.target.value).then(result => {
                console.log(result);
                var response = result.data;
                if (response.status == 'success') {
                    setStreamList(response.streams);
                }
            }).catch(function (error) {
                if (error.response) {
                    // Request made and server responded
                    alert(error.response.data?.message);
                    console.log(error.response.data);
                } else if (error.request) {
                    // The request was made but no response was received
                    alert(error.request)
                    console.log(error.request);
                } else {
                    // Something happened in setting up the request that triggered an Error
                    alert(error.message)
                    console.log(error.message);
                }

            });
        }
    }
    const changeStream = (e) => {
        setStream(e.target.value);
        if (e.target.value != null && e.target.value != '') {
            RegisterService.getStreamsBranches(e.target.value).then(result => {
                console.log(result);
                var response = result.data;
                if (response.status == 'success') {
                    setBranchList(response.branches);
                }
            }).catch(function (error) {
                if (error.response) {
                    // Request made and server responded
                    alert(error.response.data?.message);
                    console.log(error.response.data);
                } else if (error.request) {
                    // The request was made but no response was received
                    alert(error.request)
                    console.log(error.request);
                } else {
                    // Something happened in setting up the request that triggered an Error
                    alert(error.message)
                    console.log(error.message);
                }

            });
        }
    }
    // const history= useHistory();
    // useEffect(() => {
    //     validateName();
    //     validateCollege();
    // }, [])
    // const validateName = () => {
    //     if (!validText.test(inputName)) {
    //         message.error('Your Name is Invalid')
    //     } else {
    //         message.success('Your Name is Valid')
    //     }
    // }
    // const validateCollege = () => {
    //     if (!validText.test(collegeName)) {
    //         message.error('Your Name is Invalid')
    //     } else {
    //         message.success('Your Name is Valid')
    //     }
    // }
    const onName = (e) => {
        setInputname(e.target.value);
        if (e.target.value != '' && validText.test(e.target.value)) {
            setInputnameErr(false);
        } else {
            setInputnameErr(true);
        }
    }
    const changeSchoolName = (e) => {
        if (type == 1) {
            setSchoolName(e.target.value);
            if (e.target.value != '') {
                setSchoolNameErr(false);
            } else {
                setSchoolNameErr(true);
            }
        } else if (type == 2) {
            setCollegeName(e.target.value);
            if (e.target.value != '') {
                setCollegeNameErr(false);
            } else {
                setCollegeNameErr(true);
            }
        }
    }
    const changeUniversityName = (e) => {
        setUniversityName(e.target.value);
        if (e.target.value != '') {
            setUniversityNameErr(false);
        } else {
            setUniversityNameErr(true);
        }
    }

    const changeCollegeYear = (e) => {
        setCollegeYear(e.target.value);
        if (e.target.value != '' && e.target.value < 5) {
            setCollegeYearErr(false);
        } else {
            setCollegeYearErr(true);
        }
    }
    const toggleClick = () => {
        var payload = {};
        if (type == 1) {
            if (schoolNameErr == false && standard != '' && stream != '') {
                var standard_name = standardList.filter(function (item) {
                    return item.id == standard
                });
                payload = {
                    email: email.email,
                    role: type,
                    type: email.type,
                    name: inputName,
                    school_name: schoolName,
                    stream: stream,
                    standard: standard_name[0].name,
                };
                RegisterService.register(payload).then(result => {
                    console.log(result);
                    var response = result.data;
                    if (response.status == 'success') {
                        alert(response.message);
                        httpClient.defaults.headers.common['Authorization'] = `Bearer ${response?.token}` || '';
                        dispatch(set_Token(response?.token));
                        dispatch(set_User(response?.user));
                        history.push('/home')
                    }
                }).catch(function (error) {
                    if (error.response) {
                        // Request made and server responded
                        alert(error.response.data?.message);
                        console.log(error.response.data);
                    } else if (error.request) {
                        // The request was made but no response was received
                        alert(error.request)
                        console.log(error.request);
                    } else {
                        // Something happened in setting up the request that triggered an Error
                        alert(error.message)
                        console.log(error.message);
                    }

                });
            } else {
                alert("Please fill all the fileds");
            }
        } else if (type == 2) {
            if (collegeNameErr == false && universityNameErr == false && stream != '' && branch != '' && collegeYearErr == false) {
                var stream_name = streamList.filter(function (item) {
                    return item.id == stream
                });
                payload = {
                    email: email.email,
                    role: type,
                    type: email.type,
                    name: inputName,
                    college_name: collegeName,
                    university_name: universityName,
                    stream: stream_name[0].name,
                    branch: branch,
                    year: collegeYear,
                };
                RegisterService.register(payload).then(result => {
                    console.log(result);
                    var response = result.data;
                    if (response.status == 'success') {
                        alert(response.message);
                        httpClient.defaults.headers.common['Authorization'] = `Bearer ${response?.token}` || '';
                        dispatch(set_User(response?.user));
                        history.push('/home')
                    }
                }).catch(function (error) {
                    if (error.response) {
                        // Request made and server responded
                        alert(error.response.data?.message);
                        console.log(error.response.data);
                    } else if (error.request) {
                        // The request was made but no response was received
                        alert(error.request)
                        console.log(error.request);
                    } else {
                        // Something happened in setting up the request that triggered an Error
                        alert(error.message)
                        console.log(error.message);
                    }

                });
            } else {
                alert("Please fill all the fileds");
            }
        }

        // e.preventDefault();
        // console.log(inputName)
        // if (inputName === " ") {
        //     // message.error('Please Select the School or Professional')
        // } else {
        //     // message.success('Student is Successfully verified ')
        // }
        // history.push({ pathname: '/home' })
    }
    return (
        <div className="tl-bdy sign-tl-bdy">
            <div className="bdy-in">
                <Row>
                    <Col sm={6} md={6} xl={7} className="text-center m-auto">
                        <Readingbooks />
                    </Col>
                    <Col sm={6} md={6} xl={5} className="p-3 mt-4 login-wrapper">
                        <Logo />
                        <Form className="login-form p-4">

                            <h2 className="f1-19 m-0 text-center signup-header">
                                Before you jump in
                            </h2>
                            <h3 className="f3-13 dark-blue-light mx-0 mt-1 mb-3 text-center login-sub-header">
                                We will personalise this platform accordingly
                            </h3>
                            <Form.Group className="mb-4 login-inputGroup" controlId="formBasicEmail">
                                <Form.Control
                                    className="student-inputField"
                                    type="text"
                                    placeholder="Enter your Name *"
                                    value={inputName}
                                    onChange={onName}
                                />
                                {inputNameErr ?
                                    (<p style={{ fontSize: '16px', color: 'red' }} className="mt-2">
                                        Please enter valid Name *
                                    </p>
                                    ) : ''}
                            </Form.Group>

                            <p style={{ color: '#4C5857', fontSize: '17px' }}>
                                Are you school student or college student?
                            </p>
                            <Row className="d-sm-flex  flex-wrap-inherit">
                                <Col className="mt-3" >
                                    <Form.Group className="mb-2" controlId="formBasicCheckbox">
                                        <Form.Check
                                            type="checkbox"
                                            label="School"
                                            value={1}
                                            checked={type == 1 ? true : false}
                                            onClick={e => changeType(1)} />
                                    </Form.Group>
                                </Col>
                                <Col className="mt-3" >
                                    <Form.Group className="mb-2" controlId="formBasicCheckbox ">
                                        <Form.Check
                                            type="checkbox"
                                            label="College/Intermediate  
                                            (plus one/ plus two)"
                                            style={{ width: '160px', height: '60px' }}
                                            value={2}
                                            checked={type == 2 ? true : false}
                                            onClick={e => changeType(2)}
                                        />
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Col className="mt-1">
                                {type == 1 ?
                                    (
                                        <Form >
                                            <Form.Group className="mb-4 login-inputGroup" controlId="formBasicEmail">
                                                <Form.Control
                                                    className="student-inputField"
                                                    type="text"
                                                    placeholder="Name of School"
                                                    value={schoolName}
                                                    onChange={changeSchoolName}
                                                />
                                                {schoolNameErr ?
                                                    (<p style={{ fontSize: '16px', color: 'red' }} className="mt-2">
                                                        Please enter School Name *
                                                    </p>
                                                    ) : ''}
                                            </Form.Group>

                                            <select
                                                className="form-select mb-3 schoolstudent-select"
                                                defaultValue={standard}
                                                onChange={changeStandard}
                                                aria-label="Default select example"
                                            >
                                                <option value={''}> -- Select Standard --</option>
                                                {standardList.length > 0 &&
                                                    standardList.map((item, index) => {
                                                        return (
                                                            <option key={index}
                                                                value={item.id}>{item.name}</option>
                                                        )
                                                    })
                                                }
                                            </select>
                                            <select className="form-select mb-3 schoolstudent-select"
                                                defaultValue={stream}
                                                onChange={e => setStream(e.target.value)}
                                                aria-label="Default select example">
                                                <option value={''}>-- Select Stream --</option>
                                                {streamList.length > 0 &&
                                                    streamList.map((item, index) => {
                                                        return (
                                                            <option key={index} value={item.name}>{item.name}</option>
                                                        )
                                                    })
                                                }
                                            </select>
                                        </Form>
                                    ) :
                                    type == 2 ?
                                        (
                                            <Form>
                                                <Form.Group className="mb-4 login-inputGroup" controlId="formBasicEmail">
                                                    <Form.Control
                                                        className="student-inputField"
                                                        type="text"
                                                        placeholder="Name of College *"
                                                        value={collegeName}
                                                        onChange={changeSchoolName}
                                                    />
                                                    {collegeNameErr ?
                                                        (<p style={{ fontSize: '16px', color: 'red' }} className="mt-2">
                                                            Please enter College Name *
                                                        </p>
                                                        ) : ''}
                                                </Form.Group>
                                                <Form.Group className="mb-4 login-inputGroup" controlId="formBasicEmail">
                                                    <Form.Control
                                                        className="student-inputField"
                                                        type="text"
                                                        placeholder="Name of University *"
                                                        value={universityName}
                                                        onChange={changeUniversityName}
                                                    />
                                                    {universityNameErr ?
                                                        (<p style={{ fontSize: '16px', color: 'red' }} className="mt-2">
                                                            Please enter University Name *
                                                        </p>
                                                        ) : ''}
                                                </Form.Group>
                                                {/* <select className="form-select mb-3 schoolstudent-select"
                                                    aria-label="Default select example"
                                                    defaultValue={noofuniversity}
                                                    onChange={e => setNoofuniversity(e.target.value)}>
                                                    <option selected value="1"> Select Name of University </option>
                                                    <option value="2">One</option>
                                                    <option value="3">Two</option>
                                                    <option value="4">Three</option>
                                                </select> */}
                                                <select className="form-select mb-3 schoolstudent-select"
                                                    aria-label="Default select example"
                                                    defaultValue={stream}
                                                    onChange={changeStream}>
                                                    <option value={''}> Select Stream </option>
                                                    {streamList.length > 0 &&
                                                        streamList.map((item, index) => {
                                                            return (
                                                                <option key={index} value={item.id}>{item.name}</option>
                                                            )
                                                        })
                                                    }
                                                </select>
                                                <select className="form-select mb-3 schoolstudent-select"
                                                    aria-label="Default select example"
                                                    defaultValue={branch}
                                                    onChange={e => setBranch(e.target.value)}>
                                                    <option value={''}> Select Branch </option>
                                                    {branchList.length > 0 &&
                                                        branchList.map((item, index) => {
                                                            return (
                                                                <option key={index} value={item.name}>{item.name}</option>
                                                            )
                                                        })
                                                    }
                                                </select>
                                                {/* <select className="form-select mb-3 schoolstudent-select"
                                                    aria-label="Default select example"
                                                    defaultValue={collegeYear}
                                                    onChange={e => setCollegeYear(e.target.value)}>
                                                    <option selected value="1"> Select Year </option>
                                                    <option value="2">One</option>
                                                    <option value="3">Two</option>
                                                    <option value="4">Three</option>
                                                </select> */}
                                                <Form.Group className="mb-4 login-inputGroup" controlId="formBasicEmail">
                                                    <Form.Control
                                                        className="student-inputField"
                                                        type="text"
                                                        placeholder="Year of College"
                                                        value={collegeYear}
                                                        onChange={changeCollegeYear}
                                                    />
                                                    {collegeYearErr ?
                                                        (<p style={{ fontSize: '16px', color: 'red' }} className="mt-2">
                                                            {collegeYear ? 'Year should be less than 5' : 'Please enter University Name *'
                                                            }
                                                        </p>
                                                        ) : ''}
                                                </Form.Group>
                                            </Form>
                                        )
                                        : null
                                }


                            </Col>
                            <Button
                                disabled={inputNameErr == false && type != '' ? false : true}
                                className="submit-btn"
                                variant="primary"
                                // type="submit"
                                onClick={toggleClick}
                            >
                                Continue
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </div>
        </div>
    )
}
export default Studentgroup