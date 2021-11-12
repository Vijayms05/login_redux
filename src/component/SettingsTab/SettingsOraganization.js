import React, {useState} from 'react'
import {  Container, Col, Row, Form, Card, ProgressBar, Table, Tab, Tabs } from 'react-bootstrap'
import Button from '@restart/ui/esm/Button'
import { Link } from 'react-router-dom'

const SettingsOraganization = () =>{
    return(
        <Col lg="6" xl="5" sm="8"> 
           <div className="d-flex align-center mb-3 mt-3">
                <p className="left-org-txt">Organzation Name</p>
                <p className="rt-org-txt">: Name</p>
           </div>
           <div className="d-flex align-center mb-3">
                <p className="left-org-txt">Organzation ID</p>
                <p className="rt-org-txt">: 568977</p>
           </div>
           <div className="d-flex align-center mb-3">
                <p className="left-org-txt">Organzation Role</p>
                <p className="rt-org-txt">: Designer</p>
           </div>
        </Col>
    )
}

export default SettingsOraganization;