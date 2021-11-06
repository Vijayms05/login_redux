import React, {useState} from 'react'
import {  Container, Col, Row, Form, Card, ProgressBar, Table, Tab, Tabs } from 'react-bootstrap'
import Button from '@restart/ui/esm/Button'
import { Link } from 'react-router-dom'

const SettingsHelp = () =>{
    return(
        <Col lxs="12" sm="8"> 
           <div className="d-flex align-center mb-3 mt-3">
               <p className="left-org-txt-hlp">Organzation Name</p>
               <Button className="clik-here">Click Here</Button>
           </div>
           <div className="d-flex align-center mb-3">
               <p className="left-org-txt-hlp">Terms and Conditions</p>
               <Button className="clik-here">Click Here</Button>
           </div>
           <div className="d-flex align-center">
               <p className="left-org-txt-hlp">Contact Us</p>
               <Button className="clik-here">Click Here</Button>
           </div>
           <p className="faq-hed pb-0">Frequently Asked Questions</p>
           <p className="faq-phara pt-0">Economics can be referred to as a type of social science that deals with the behavior of entities such as consumers and producers in a country and studies the interconnectedness of such entities.</p>
        </Col>
    )
}

export default SettingsHelp;