import React, {useState} from 'react'

import {  Container, Col, Row, Form, Card, ProgressBar, Table, Tab, Tabs, Accordion,Modal } from 'react-bootstrap'
import Button from '@restart/ui/esm/Button'
import { Link,useHistory } from 'react-router-dom'
// import {history} from '../../routes/Routes'

const SkillBuilding = () =>{
    const [show, setShow]=useState(false);
    const handleOpen=()=>setShow(true)
    const handleClose = () => setShow(false);
     const history = useHistory();
    const onTaskTest = () =>{
        handleOpen();
        // history.push({pathname:'/testintro'})
        history.push('/testintro');
    }
    return(
        <>
            <Col xs={12} className="auto">
                <div className="tit-cert-box border ">
                    <Table >
                        <thead>
                            <tr>
                                <th>Subject Name</th>
                                <th>Test Name</th>
                                <th>Chapter</th>
                                <th>Topic</th>
                                <th></th>
                            </tr>
                        </thead>                        
                    </Table>
                    <Accordion defaultActiveKey="0" className="txt-tbl-acrd">
                        <Accordion.Item eventKey="0" className="ac-itm">
                            <Accordion.Header className="acc-h1">View Design</Accordion.Header>
                                <Accordion.Body className="p-0">
                                <Table>                                
                                    <tbody>
                                        <tr>
                                            <td>sdfsdf</td>
                                            <td>View Design</td>
                                            <td>Proto Typing</td>
                                            <td>Smart Animate</td>
                                            <td className="in-box-table "> 
                                                {/* <Link to="/testintro" onClick={handleOpen}>Task Test</Link> */}
                                                <div className="in-box-tab me-2 ms-3">                  
                                                    <div className="text-center">
                                                        <button style={{backgroundColor:'#4DD188', color:'white', borderRadius:'13px',width:'98px',height:'32px'}} 
                                                            className="btn mt-3 mb-3"  onClick={onTaskTest}>Task Test
                                                        </button>   
                                                    </div>
                                                
                                                    <div className="test-dot-tabl"></div>
                                                    
                                                    {/* <Link to="/testintro">Task Test</Link> */}
                                                    
                                                </div>
                                            </td>     
                                        </tr>
                                        <tr>
                                            <td>dsfsd</td>
                                            <td>View Design</td>
                                            <td>Proto Typing</td>
                                            <td>Smart Animate</td>
                                            <td className="in-box-table "> 
                                                {/* <Link to="/testintro">Task Test</Link> */}
                                                <div className="text-center">
                                                    <button style={{backgroundColor:'#298EE0', color:'white', borderRadius:'13px',width:'150px'}} 
                                                        className="btn mt-3 mb-3" >
                                                        Analyze Results
                                                    </button>   
                                                </div>
                                                {/* <Col className="ms-2"> */}
                                                    <div className="test-dot-tabl"></div>
                                                {/* </Col> */}
                                            </td>     
                                        </tr>
                                        <tr>
                                            <td>dsfsd</td>
                                            <td>View Design</td>
                                            <td>Proto Typing</td>
                                            <td>Smart Animate</td>
                                            <td className="in-box-table"> 
                                                {/* <Link to="/testintro">Task Test</Link> */}
                                                <div className="text-center">
                                                    <button style={{backgroundColor:'#298EE0', color:'white', borderRadius:'13px',width:'150px'}} 
                                                        className="btn mt-3 mb-3" >
                                                        Analyze Results
                                                    </button>   
                                                </div>
                                                {/* <Col className="ms-2"> */}
                                                    <div className="test-dot-tabl"></div>
                                                {/* </Col> */}
                                            </td>     
                                        </tr>
                                    </tbody>
                                </Table>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header className="acc-h1">View Design</Accordion.Header>
                            
                            <Accordion.Body>
                            <Table>                                
                                    <tbody>
                                        <tr>
                                            <td>sdfsdf</td>
                                            <td>View Design</td>
                                            <td>Proto Typing</td>
                                            <td>Smart Animate</td>
                                            <td className="in-box-table "> 
                                                {/* <Link to="/testintro" onClick={handleOpen}>Task Test</Link> */}
                                                <div className="text-center ms-3">
                                                    <button style={{backgroundColor:'#4DD188', 
                                                    color:'white', borderRadius:'13px',width:'120px'}} 
                                                        className="btn mt-3 mb-3 "  onClick={
                                                            ()=>{
                                                                handleOpen();
                                                                // history.push({pathname:'/testintro'})
                                                                history.push('/testintro');
                                                            }
                                                        }>
                                                        Task Test
                                                    </button>   
                                                </div>
                                                {/* <Col className="ms-2"> */}
                                                    <div className="test-dot-tabl"></div>
                                                {/* </Col> */}
                                            </td>     
                                        </tr>
                                        <tr>
                                            <td>dsfsd</td>
                                            <td>View Design</td>
                                            <td>Proto Typing</td>
                                            <td>Smart Animate</td>
                                            <td className="in-box-table "> 
                                                {/* <Link to="/testintro">Task Test</Link> */}
                                                <div className="text-center">
                                                    <button style={{backgroundColor:'#298EE0', color:'white', borderRadius:'13px',width:'150px'}} 
                                                        className="btn mt-3 mb-3" >
                                                        Analyze Results
                                                    </button>   
                                                </div>
                                                {/* <Col className="ms-2"> */}
                                                    <div className="test-dot-tabl"></div>
                                                {/* </Col> */}
                                            </td>     
                                        </tr>
                                        <tr>
                                            <td>dsfsd</td>
                                            <td>View Design</td>
                                            <td>Proto Typing</td>
                                            <td>Smart Animate</td>
                                            <td className="in-box-table"> 
                                                {/* <Link to="/testintro">Task Test</Link> */}
                                                <div className="text-center">
                                                    <button style={{backgroundColor:'#298EE0', color:'white', borderRadius:'13px',width:'150px'}} 
                                                        className="btn mt-3 mb-3" >
                                                        Analyze Results
                                                    </button>   
                                                </div>
                                                {/* <Col className="ms-2"> */}
                                                    <div className="test-dot-tabl"></div>
                                                {/* </Col> */}
                                            </td>     
                                        </tr>
                                    </tbody>
                                </Table>
                            </Accordion.Body>
                        </Accordion.Item>
                        </Accordion>
                </div>
                {show === true ? 
                    (                          
                        <Modal 
                        aria-labelledby="contained-modal-title-vcenter" show={show} onHide={handleClose} >                    
                            <Modal.Body >                       
                                <Modal.Title className="text-center mt-3 mb-3 f1-16" 
                                    style={{color:'#0B171B',fontFamily: 'f1',fontStyle: 'normal',fontWeight: 'bold',fontSize: '22px'}}>
                                    Requirements Not met
                                </Modal.Title> 
                                <p style={{color:'#0B171B',fontFamily: 'f3',fontStyle: 'normal',fontSize: '16px'}}>
                                    Please complete the required number of skill building tests to 
                                    unloack certification test
                                </p>  
                                <div className="text-center">
                                    <button style={{backgroundColor:'#4DD188', color:'white', borderRadius:'13px',width:'210px'}} className="btn mt-3 mb-3"  onClick={handleClose}>
                                        Go to Skillbuilding Test
                                    </button>   
                                </div>
                            </Modal.Body>                
                        </Modal>  
                    ): null
                }   
            </Col>
            
        </>
    )
}

export default SkillBuilding;