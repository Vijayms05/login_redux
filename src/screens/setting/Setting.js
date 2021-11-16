import React, { useState } from 'react';

import { 
    Container,
    Col,
    Tab,
    Row,
    Tabs,
    Form,
    ListGroup,
    Badge, 
    Button
} from 'react-bootstrap';
import SettingBill from '../../component/SettingsTab/SettingBill';
// import SettingsPayment from '../../component/SettingsTab/SettingsPayment';
import SettingsOraganization from '../../component/SettingsTab/SettingsOraganization';
import SettingsHelp from '../../component/SettingsTab/SettingsHelp';

const Setting = () =>{
    const [state, setstate] = useState('')
    return(
        <Col className="p-4 mt-5 ms-3">   
            <div className="m-auto rit-tst">
                <Row className="sub-search ps-0"> 
                    <h5 className="ps-0 mb-0">Settings</h5>  
                </Row> 
                <Tabs defaultActiveKey="home" id="uncontrolled-tab-example" className="mt-4 test-tab">
                    <Tab eventKey="home" title="Billing Details" className="test-name">
                        <SettingBill />
                    </Tab>
                    {/* <Tab eventKey="profile" title="Payement Method"  className="test-name">
                        <SettingsPayment />
                    </Tab> */}
                    <Tab eventKey="contact" title="Organization Details"  className="test-name">
                        <SettingsOraganization />                        
                    </Tab>
                    <Tab eventKey="help" title="Help"  className="test-name">
                        <SettingsHelp />                        
                    </Tab>
                </Tabs>
           </div>
        </Col>
    );
}


export default Setting