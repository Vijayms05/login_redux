import React, {useState} from 'react'
import {  Container, Col, Row, Form, Card, ProgressBar, Table, Tab, Tabs, Accordion,Modal } from 'react-bootstrap'
import Button from '@restart/ui/esm/Button'

const Certification = () =>{
    const [show, setShow]=useState(false);
    const handleOpen=()=>setShow(true)
    const handleClose = () => setShow(false);
    return(
        <>
            <Col>
                <h6>Test Name</h6>
                <div className="in-box-tab">
                        <p>UI - UX Baseline</p>
                    <div className="in-box-tab me-2">
                        <div className="text-center">
                            <button style={{backgroundColor:'#4DD188', color:'white', borderRadius:'13px',width:'98px',height:'32px'}} 
                                className="btn mt-3 mb-3"  onClick={handleOpen}>Task Test
                            </button>                           
                        </div>
                        {/* <Button onClick={handleOpen}>Task Test</Button> */}
                        <div className="test-dot-tabl"></div>
                    </div>
                </div>
            </Col>
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
                            <button style={{backgroundColor:'#4DD188', color:'white', borderRadius:'13px',width:'210px'}} 
                                className="btn mt-3 mb-3"  onClick={handleClose}>
                                Go to Skillbuilding Test
                            </button>   
                        </div>
                        
                    </Modal.Body>                
                </Modal>  
            ): null
            }   
        </>
    )
}

export default Certification;