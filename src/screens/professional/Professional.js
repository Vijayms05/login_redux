import React, { useState, useEffect } from 'react'
import {
    Col,
    Row,
    Form,
    Button
} from "react-bootstrap";
import { message } from 'antd';
import { useHistory } from 'react-router-dom';
import {
    Learnprofessional,
    Logo
} from '../../assets/images/index';
import { validText } from '../../service/Constant';
import { useDispatch, useSelector } from 'react-redux';
import RegisterService from '../../service/RegisterService';
import { set_Profile, set_Token, set_User } from '../../redux/action';
import axios from 'axios';
import httpClient from '../../service/httpClient';
const Professional = (props) => {
    const dispatch = useDispatch();
    const email = useSelector(state => state.loginReducer.email);
    console.log(email);
    const [inputName, setInputname] = useState('');
    const [workRole, setWorkrole] = useState('');
    const [inputNameErr, setInputnameErr] = useState(null);
    const [workRoleErr, setWorkroleErr] = useState(null);
    const [industry, setIndustry] = useState('');
    const [industryList, setIndustryList] = useState([]);
    const [workRoleList, setWorkRoleList] = useState([]);
    const history = useHistory();
    useEffect(() => {
        RegisterService.getIndustries().then(result => {
            var response = result.data;
            console.log(response);
            if (response.status == 'success') {
                setIndustryList(response.industries);
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
    }, [])

    // const validateName = () => {
    //     if (!validText.test(inputName)) {
    //         message.error('Your Name is Invalid')
    //     } else {
    //         message.success('Your Name is Valid')
    //     }
    // }

    // const validateWork = () => {
    //     if (!validText.test(workRole)) {
    //         message.error('Your Name is Invalid')
    //     } else {
    //         message.success('Your Name is Valid')
    //     }
    // }

    const onProfessional = () => {
        var industry_name = industryList.filter(function (item) {
            return item.id == industry
        });
        var payload = {
            email: email.email,
            role: 3,
            name: inputName,
            type: email.type,
            industry: industry_name[0].name,
            work_role: workRole,
        }
        RegisterService.register(payload).then(result => {
            var response = result.data;
            console.log(response);
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
        // e.preventDefault();
        // history.push({ pathname: '/home' });
        // console.log(inputName, workRole, industry)
    }

    const changeInputName = (e) => {
        setInputname(e.target.value);
        if (e.target.value != '' && validText.test(e.target.value)) {
            setInputnameErr(false);
        } else {
            setInputnameErr(true);
        }
    }
    const changeWorkRole = (e) => {
        setWorkrole(e.target.value);
        if (e.target.value != '' && validText.test(e.target.value)) {
            setWorkroleErr(false);
        } else {
            setWorkroleErr(true);
        }
    }
    const changeIndustry = (e) => {
        setIndustry(e.target.value);
        if (e.target.value != null && e.target.value != '') {
            RegisterService.getIndustriesWorkRoles(e.target.value).then(result => {
                console.log(result);
                var response = result.data;
                if (response.status == 'success') {
                    setWorkRoleList(response.work_roles);
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
    return (
        <div className="tl-bdy sign-tl-bdy">
            <div className="bdy-in">
                <Row >
                    <Col sm={6} md={6} xl={7} className="text-center m-auto">
                        <Learnprofessional />
                    </Col>
                    <Col sm={6} md={6} xl={5} className="p-5" >
                        <Logo />
                        <Form className="professional-form p-3 m-2">
                            <h2 className="f1-19 m-0 text-center signup-header">Before you jump in</h2>
                            <p className="f3-13 dark-blue-light login-sub-header mx-0 mt-1 mb-3 text-center">We will personalise this platform accordingly</p>
                            <Form.Group className="mb-3 professional-formgroup">
                                <Form.Control
                                    placeholder="Enter your name"
                                    className="px-3 professional-formcontrol"
                                    value={inputName}
                                    onChange={changeInputName}
                                />
                                {inputNameErr ?
                                    (<p style={{ fontSize: '16px', color: 'red' }} className="mt-2">
                                        Please enter valid Name *
                                    </p>
                                    ) : ''}
                            </Form.Group>
                            <select className="form-select mb-3 textselectoption"
                                aria-label="Default select example"
                                defaultValue={industry}
                                onChange={changeIndustry}
                            >
                                <option selected value={''}>Select Industry</option>
                                {industryList.length > 0 &&
                                    industryList.map((item, index) => {
                                        return (
                                            <option key={index} value={item.id}>{item.name}</option>
                                        )
                                    })
                                }
                            </select>

                            <select className="form-select mb-3 textselectoption"
                                aria-label="Default select example"
                                defaultValue={workRole}
                                onChange={e => setWorkrole(e.target.value)}
                            >
                                <option selected value={''}>Select Work role</option>
                                {industryList.length > 0 &&
                                    industryList.map((item, index) => {
                                        return (
                                            <option key={index} value={item.name}>{item.name}</option>
                                        )
                                    })
                                }
                            </select>
                            {/* <Form.Group className="mb-3 professional-formgroup">
                                <Form.Control
                                    placeholder="Work role"
                                    className="px-3 professional-formcontrol"
                                    value={workRole}
                                    onChange={changeWorkRole}
                                />
                                {workRoleErr ?
                                    (<p style={{ fontSize: '16px', color: 'red' }} className="mt-2">
                                        Please enter valid Work role *
                                    </p>
                                    ) : ''}
                            </Form.Group> */}
                            <Button
                                disabled={inputNameErr == false && industry != '' && workRole != '' ? false : true}
                                className="mb-3 submit-btn"
                                onClick={onProfessional}
                            >
                                Continue
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </div>
        </div>
    );
}
export default Professional