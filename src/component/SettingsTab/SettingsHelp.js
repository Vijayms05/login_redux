import React, {useState} from 'react'
import {  Container, Col, Row, Form, Card, ProgressBar, Table, Tab, Tabs } from 'react-bootstrap'
import Button from '@restart/ui/esm/Button'
import { Link } from 'react-router-dom'

const SettingsHelp = () =>{
    return(
        <Container sm={8} className="border p-2"> 
           <div className="d-flex align-center mb-3 mt-3">
               <p className="left-org-txt-hlp">Privacy Policy</p>
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
           <p className="faq-hed pb-0 mt-3">Frequently Asked Questions</p>
           <p className="faq-phara pt-0 mt-3">
                Q1.1  Amet minim mollit non deserunt ullamco est sit aliqua 
                dolor do amet sint. Velit officia consequat duis enim velit mollit. 
                Exercitation veniam consequat sunt nostrud amet.
            </p>
            <p className="faq-phara pt-0 mt-3 mb-3">
                Ans) Amet minim mollit non deserunt ullamco est sit aliqua dolor 
                do amet sint. Velit officia consequat duis enim velit mollit. 
                Exercitation veniam consequat sunt nostrud amet.
            </p>
        </Container>
    )
}

export default SettingsHelp;