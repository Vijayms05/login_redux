import React, {useState} from 'react'
import {  Container, Col, Row, Form, Card, ProgressBar, Table, Tab, Tabs } from 'react-bootstrap'
import Button from '@restart/ui/esm/Button'
import { Link } from 'react-router-dom'

const SettingBill = (props) =>{
    const [country,setCountry]=useState('');
    const [address,setAddress]= useState('')
    const [addressOne, setAddressOne]= useState('')
    const [state, setState]=useState('')
    const [district,setDistrict]= useState('')

    const onCountry = (e) =>{
        setCountry(e.target.value)
    }
    const onAddress = (e) => {
        setAddress(e.target.value);        
    }
    const onAddressOne = (e) => {
        setAddress(e.target.value);        
    }
    const onDistrict = (e) =>{
        setDistrict(e.target.value)
    }
    const onState = (e)=>{
        setState(e.target.value)
    }
    return(           
        <Container className=' w-80' >
            <Col className=" p-2" >  
                <Form.Select className="form-select mb-3 mt-3 schoolstudent-select" 
                aria-label="Default select example" onChange={onCountry}>
                    <option selected>-- Country --</option>
                    <option value="1">India</option>
                    <option value="2">USA</option>
                    <option value="3">UAE</option>
                </Form.Select>   
                <Form.Group className="mb-4 mt-3 login-inputGroup" controlId="formBasicEmail">
                    <Form.Control 
                    className="student-inputField" 
                    type="email" 
                    placeholder="Address Line 1"
                    value={address}
                    onChange={onAddress}
                    />
                </Form.Group>  
                <Form.Group className="mb-4 mt-3 login-inputGroup" controlId="formBasicEmail">
                    <Form.Control 
                    className="student-inputField" 
                    type="email" 
                    placeholder="Address Line 2"
                    value={addressOne}
                    onChange={onAddressOne}
                    />
                </Form.Group>  
                <Form.Select className="form-select mb-3 schoolstudent-select" 
                aria-label="Default select example"
                onChange={onState}>
                    <option selected>-- State --</option>
                    <option value="1">Tamilnadu</option>
                    <option value="2">Bangalore</option>
                    <option value="3">Assam</option>
                </Form.Select> 
                <Form.Select className="form-select mb-3 schoolstudent-select" 
                aria-label="Default select example"
                onChange={onDistrict}>
                    <option selected>-- District --</option>
                    <option value="1">Chennai</option>
                    <option value="2">Madurai</option>
                    <option value="3">Trichy</option>
                </Form.Select> 
            </Col>
        </Container>
    )
}

export default SettingBill;