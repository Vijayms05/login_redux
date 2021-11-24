import React, {useState} from 'react'
import {  Container, Col, Row, Form, Card, ProgressBar, Table, Tab, Tabs } from 'react-bootstrap'
import Button from '@restart/ui/esm/Button'
import { Link } from 'react-router-dom'

const SettingsOraganization = (props) =>{
    return(
        <Container className=" p-2"> 
           <div className="d-flex align-center mb-1 mt-4">
                <p className="left-org-txt">Organzation Name</p>
                <p className="rt-org-txt">: Name</p>
           </div>
           <div className="d-flex align-center mb-1">
                <p className="left-org-txt">Organzation ID</p>
                <p className="rt-org-txt">: 568977</p>
           </div>
           <div className="d-flex align-center mb-1">
                <p className="left-org-txt">Organzation Role</p>
                <p className="rt-org-txt">: Designer</p>
           </div>
        </Container>
    )
}

export default SettingsOraganization;