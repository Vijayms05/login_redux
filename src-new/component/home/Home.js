import React from 'react';

import './Home.css';
import {  Row, Col, Nav, Navbar, } from 'react-bootstrap'
import {Link} from 'react-router-dom';

//icons
import profile from '../../images/logo/side_bar/contact.png'
import setting from '../../images/logo/side_bar/setting.png'
import rupee from '../../images/logo/side_bar/rupees.png'
import report from '../../images/logo/side_bar/report.png'
import tests from'../../images/logo/side_bar/test.png'
import home from '../../images/logo/side_bar/home.png'

import MainContent from '../maincontent/MainContent'
import Tests from '../sidebarpage/tests/Tests'
import Report from '../sidebarpage/reports/Report'
import Billing from '../sidebarpage/billing/Billing'
import Setting from '../sidebarpage/setting/Setting'
import Profile from '../sidebarpage/profile/Profile'

import { Logo, MenuHome, TestHome,  ReportHome, BillingHome, SettingsHome, ProfileHome} from '../../assets/images/index'
import './Home.css';
import './responsive.css';
import Button from '@restart/ui/esm/Button';
import Sidebar from '../sidebar/Sidebar';
const Home = () => {
    return (
        <div>
            <Row>
                <Sidebar />
                {/* <Col sm={12} md={9} lg={10} >
                <Tab.Content>
                    <Tab.Pane eventKey="mainContent" >
                        <MainContent /> 
                    </Tab.Pane>
                    <Tab.Pane eventKey="tests">
                        <Tests />
                    </Tab.Pane>
                    <Tab.Pane eventKey="report">
                        <Report />
                    </Tab.Pane>
                    <Tab.Pane eventKey="billing">
                        <Billing />
                    </Tab.Pane>
                    <Tab.Pane eventKey="setting">
                        <Setting />
                    </Tab.Pane>
                    <Tab.Pane eventKey="profile">
                        <Profile />
                    </Tab.Pane>
                    </Tab.Content>
                </Col>                    */}
            </Row>
        </div>
    );
}
export default Home