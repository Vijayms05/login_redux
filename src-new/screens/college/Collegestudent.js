import React, { useState, useEffect } from 'react'

import {
    Col,
    Row,
    Form, 
    Button,
    Container
} from 'react-bootstrap';

import {
    Readingbooks,
    Logo
} from '../../assets/images/index';

import './style.css';

const Collegestudent = (props) =>{
    const [input, setInput] = useState('')
    const [nameInput, setNameinput]= useState('')
    const [school, setSchool] = useState(false)
    const [college, setCollege] = useState(false)
    const [university, setUniversity]=useState('')
    const [stream, setStream] = useState('')
    const [branch, setBranch] = useState('')
    const [year, setYear] = useState('')

    useEffect((e) => {
        if(!school){
            setCollege(college)
        }
        else if(!college){
            setSchool(school)
        }else{
            setCollege(college)
            setSchool(school)
        }
    }, [school,college])   
   
    const onCollege=(e)=>{
        e.preventDefault();
        console.log(input, nameInput, school, college, university, stream, branch, year)
    }
    
    return(
        <Col className="tl-bdy">
            <div className="bdy-in">            
                <Row >
                    <Col md={6} xl={7} className="m-auto text-center">
                        <Readingbooks />
                    </Col>
                    <Col md={6} xl={5} className="p-5" > 
                        <Logo />
                        <Form className="collegestudent-form p-3 m-2"> 
                            <h3 className="mb-2">Before you jump in</h3>
                            <p className="mb-3">We will personalise this platform accordingly</p>
                            <Form.Group className="mb-3 collegestudent-formgroup">
                                <Form.Control 
                                    placeholder="Enter your name" 
                                    className="px-3 collegestudent-formcontrol"  
                                    value={input}
                                    onChange={e => setInput(e.target.value)}                                    
                                />
                            </Form.Group>
                            <label className="mb-3 ">Are you school student or college student?</label>
                            <Row>
                                <Col className="mt-2">  
                                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                        <Form.Check 
                                            type="checkbox" 
                                            label="School"  
                                            checked={school} 
                                            onClick={e => setSchool(!school)}
                                        />
                                    </Form.Group>                  
                                </Col>
                                <Col className="mt-2">
                                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                        <Form.Check 
                                            type="checkbox" 
                                            label="College/ 
                                                Intermediate  
                                                (plus one/ plus two)"  
                                            checked={college} 
                                            style={{width:'200px',height:'50px'}}
                                            onClick={e => setCollege(!college)} 
                                        />
                                    </Form.Group>
                                </Col>
                            </Row>  
                            <Form.Group className="mb-3 collegestudent-formgroup">
                                <Form.Control 
                                    className="px-3 schoolstudent-formcontrol"
                                    placeholder="Name of the College" 
                                    value={nameInput}
                                    onChange={e => setNameinput(e.target.value)}
                                />
                            </Form.Group>   
                            <select 
                                className="form-select mb-3 textselectoption" 
                                aria-label="Default select example"
                                onChange={e => setUniversity(e.target.value)}
                            >
                                <option selected>Name of University</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>   
                            <select 
                                className="form-select mb-3 textselectoption" 
                                aria-label="Default select example"
                                onChange={e => setStream(e.target.value)}
                            >
                                <option selected>-- Stream --</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select> 
                            <select 
                                className="form-select mb-3 textselectoption" 
                                aria-label="Default select example"
                                onChange={e =>setBranch(e.target.value)}>
                                <option selected>-- Branch --</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select> 
                            <select 
                                className="form-select mb-3 textselectoption" 
                                aria-label="Default select example"
                                onChange={e => setYear(e.target.value)}
                            >
                                <option selected>-- Year --</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select> 
                            <Button 
                                className="mb-3 collegestudent-btn" 
                                onClick={onCollege}>
                                Continue
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </div>
        </Col>
    )
} 
export default Collegestudent