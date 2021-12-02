import React from 'react';
import Button from '@restart/ui/esm/Button';
import { ToggleButtonGroup, ToggleButton,Container,Row, Col } from 'react-bootstrap'
import {Link} from 'react-router-dom';


import {CircleLeft, CircleRight} from '../../assets/images/index'


const TextQuestion =()=>{
  return(    
        <Container>{/*className="textrec pt-3 d-grid"*/} 
            <Row className="mt-4 ms-0 ms-md-3 ms-sm-0 ps-0 pe-0" >
                <Col lg={10} md={10} sm={12} xs={12}>
                    <div className="test-record-ssc ms-0 ms-md-2 ms-sm-0">
                        <p>UDSC</p>
                    </div>
                    <h3 className="heading-test mb-0 ms-3">
                        Enter your paragraph : 
                    </h3>
                    
                    <Col className="mt-5 ms-0 ms-md-3 ms-sm-0" md={10} sm={12} xs={12} >
                        <p style={{color:'#2B393A',fontSize:'13px',fontStyle:'normal', }}>Enter Text Here </p>
                        <div className="fill-qust mt-1">
                            <textarea row="3" col="5" placeholder="Textarea">

                            </textarea>
                        </div>
                    </Col>
                    {/* <div className="pre-nxt-skp mt-5">                                       */}
                        <div className="text-center ms-3 mt-3">
                            <Link to="/textrecord" className="nxt-btn">
                                Next
                                <CircleRight />
                            </Link>                        
                        </div>                
                    {/* </div> */}                    
                </Col>                      
            </Row>
        </Container>
  );
}
export default TextQuestion


