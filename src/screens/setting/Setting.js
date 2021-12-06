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
    Button,Card
} from 'react-bootstrap';
import SettingBill from '../../component/SettingsTab/SettingBill';
// import SettingsPayment from '../../component/SettingsTab/SettingsPayment';
import SettingsOraganization from '../../component/SettingsTab/SettingsOraganization';
import SettingsHelp from '../../component/SettingsTab/SettingsHelp';

const Setting = () =>{
    
    const [key, setKey] = useState('home')
    return(
        <Col className="p-2 p-md-4 mt-5 mt-sm-5 mt-md-2 ms-0 ms-sm-1 ms-md-3 ">   
            <div className="m-auto rit-tst mt-5 mt-sm-5 mt-md-3">
                <Row className="sub-search ps-0"> 
                    <h5 className="ps-0 mb-0 ">Settings</h5>  
                </Row>  
                <Col xs={12} sm={12} md={10}  className="border mt-4" >            
                    <Tabs defaultActiveKey="home" 
                        id="uncontrolled-tab-example" 
                        className="test-tab "
                    >
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
                    
                   
                    
                </Col>
           </div>
        </Col>
    );
}


export default Setting