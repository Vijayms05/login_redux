import React from 'react';
import Button from '@restart/ui/esm/Button';
import { ToggleButtonGroup, ToggleButton, Row, } from 'react-bootstrap'
import {Link} from 'react-router-dom';


import {CircleLeft, CircleRight} from '../../assets/images/index'


const QuestionVideo =()=>{
  return(  
    <div className="tl-rt-qst d-md-grid w-100">
        <div className="in-rt-qst">   
            <div className="test-record-ssc">
                <p>VCT</p>
            </div>              
            <div className="qust-tit">       
                <h5 className="mb-2">Watch the video and answer the following</h5>
                <p className="mb-5">
                    Speak on this topic : It is recommended to use headphones while recording, and turn down the volume of the speakers on your device.
                    These steps are to be taken to minimize echo.
                </p>
            </div> 
            <Row className="my-3 vid-frame mb-5">
                {/* <iframe width="100%" height="400" src="https://www.youtube.com/embed/EKS7ZCZsboc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}
                <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/h_SSu1zu8uA" 
                title="YouTube video player" frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen></iframe>
            </Row> 
            <div className="pre-nxt-skp mt-3">               
                <Link to="/question-page" className="pre-btn">                    
                    <CircleLeft />
                    Preview
                </Link>                
                <div className="d-flex ms-2 ms-sm-0">
                    <Link to="/audiorecord" className="nxt-btn">
                        Next
                        <CircleRight />
                    </Link>
                    <Button className="skp-btn">
                        Skip
                    </Button>
                </div>            
            </div>
        </div>
    </div>
  );
}
export default QuestionVideo


