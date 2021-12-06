import React from 'react';
import Button from '@restart/ui/esm/Button';
import { ToggleButtonGroup, ToggleButton,Container, Col } from 'react-bootstrap'
import {Link} from 'react-router-dom';


import {CircleLeft, CircleRight} from '../../assets/images/index'


const UnderlineQuestion =()=>{
  return(  
        <Container className="mt-4 pt-3 pt-md-0 ms-3" >{/*className="textrec pt-3 d-grid"*/}                       
            <div className="test-record-ssc ms-2">
                <p>FIB</p>
            </div>
            <h3 className="heading-test mb-0 ms-3">
                Fill In The Blanks : 
            </h3>
            
            <Col className="mt-5 ms-3" sm={10} xs={12} >
                <div className="fill-qust">
                    <input placeholder="Ans1" /> is a <input placeholder="Ans2"  /> that gives the green colour ro leaves
                </div>
            </Col>
            <div className="pre-nxt-skp mt-5" >
                <Link to="/ques-ans-play" className="pre-btn ms-3">
                    <CircleLeft />
                    Previous
                </Link>
                <div className="d-flex ">
                    <Link to="/text-question" className="nxt-btn  ms-2 ms-sm-0">
                        Next
                        <CircleRight />
                    </Link>
                    <Button className="skp-btn ">
                        Skip
                    </Button>
                </div>                
            </div>                  
        </Container>
    );
}
export default UnderlineQuestion


