import Button from '@restart/ui/esm/Button';
import React, { useState } from 'react';
import { Row, Col, Nav, Navbar, ProgressBar } from 'react-bootstrap'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Logo, ProfileHome, SettingsHome, BillingHome, ReportHome, TestHome, MenuHome } from '../../assets/images/index'
import FileUpload from '../FileUpload/FileUpload';

const SideMenu = () => {
    const profile = useSelector(state => state.ProfileReducer.profile)
    console.log(profile);
    const user = useSelector(state => state.UserReducer.user);
    console.log(user);
    const [qusBar, setQusBar] = useState(true)

    const clickqusBar = () => {
        setQusBar(!qusBar)
    }

    const now = 85
    return (
        <>
            <div className="sid-menu-logo d-md-none text-center">
                <Button onClick={clickqusBar} className="sid-menu-icon p-2 mt-3">
                    <p className="fst-line"></p>
                    <p className="sec-line"></p>
                    <p className="trd-line"></p>
                </Button>
                <div className="p-2"><Logo /></div>
            </div>
            <div style={{ left: qusBar ? "-320px" : "0" }} className="lftsdbr mt-4" >
                <Logo />
                <h6 className="logo-tag">
                    measure to lead
                </h6>
                <Row>
                    <div className="wel-cm-bc">
                        <h4>
                            Welcome back,
                        </h4>
                        <h5>
                            {user.name}
                        </h5>
                        <p>Your plan: Free</p>
                    </div>
                    <Col className="text-end text-lg-start">
                        <h6 className="menu-tit text-start d-none d-md-block">
                            Menu
                        </h6>
                        <Navbar className="nav-bar-menu">
                            <Navbar.Toggle aria-controls="navbarScroll" />
                            <Navbar.Collapse id="navbarScroll">
                                <Nav defaultActiveKey="/home" className="me-auto my-2 my-lg-0 text-start menu-back">
                                    <Link className="linka" to="/home">
                                        <MenuHome />
                                        My Subscriptions
                                    </Link>
                                    <Link className="linka" to="/test">
                                        <TestHome />
                                        Tests
                                    </Link >
                                    <Link className="linka" to="/report">
                                        <ReportHome />
                                        Reports
                                    </Link>
                                    <Link className="linka" to="/billings">
                                        <BillingHome />
                                        Billing
                                    </Link>
                                    <Link className="linka" to="/setting">
                                        <SettingsHome />
                                        Settings
                                    </Link>
                                    <Link className="linka" to="/profile">
                                        <ProfileHome />
                                        Profile
                                    </Link>
                                    {/* <Link className="linka" to="/file-upload">
                                        File Upload
                                    </Link> */}
                                </Nav>
                            </Navbar.Collapse>
                        </Navbar>
                    </Col>
                </Row>
            </div>
        </>
    );
}
export default SideMenu;


