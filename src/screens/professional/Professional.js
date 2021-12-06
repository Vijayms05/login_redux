import React, { useState, useEffect } from 'react'
import {
    Col,
    Row,
    Form,
    Button
} from "react-bootstrap";
import { message } from 'antd';
import { useHistory } from 'react-router-dom';
<<<<<<< HEAD
=======
// import { history } from '../../routes/Routes'
>>>>>>> b71f0f5ff1578233ec78b0fd7fc78e355d1268ea
import {
    Learnprofessional,
    Logo
} from '../../assets/images/index';
import { validText } from '../../service/Constant';
import { useDispatch, useSelector } from 'react-redux';
import RegisterService from '../../service/RegisterService';
import { set_Profile } from '../../redux/action';
const Professional = (props) => {
    const dispatch = useDispatch();
    const email = useSelector(state => state.loginReducer);
    const role = useSelector(state => state.roleReducer);
    const [inputName, setInputname] = useState('');
    const [workRole, setWorkrole] = useState('');
    const [inputNameErr, setInputnameErr] = useState(null);
    const [workRoleErr, setWorkroleErr] = useState(null);
    const [industry, setIndustry] = useState('');
    const [industryList, setIndustryList] = useState([]);

<<<<<<< HEAD
    const history = useHistory();
=======
const history = useHistory();
>>>>>>> b71f0f5ff1578233ec78b0fd7fc78e355d1268ea
    useEffect(() => {
        RegisterService.getIndustries().then(result => {
            var response = result.data;
            console.log(response);
            if (response.status == 'success') {
                setIndustryList(response);
            }
        }).catch(err => {
            console.log(err);
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
        var payload = {
            email: email,
            role: role,
            name: inputName,
            type: 3,
            industry: industry,
            work_role: workRole,
        }
        RegisterService.register(payload).then(result => {
            var response = result.data;
            console.log(response);
            if (response.status == 'success') {
                dispatch(set_Profile(response));
                history.push('/home')
            }
        }).catch(err => {
            console.log(err);
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
                                onChange={e => setIndustry(e.target.value)}
                            >
                                <option selected value={''}>Select Industry</option>
                                {industryList.length > 0 &&
                                    industryList.map((item, index) => {
                                        return (
                                            <option key={index} value={item.name}>{item.name}</option>
                                        )
                                    })
                                }
                            </select>
                            <Form.Group className="mb-3 professional-formgroup">
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
                            </Form.Group>
                            <Button
                                disabled={inputNameErr == false && industry != '' && workRoleErr == false ? false : true}
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