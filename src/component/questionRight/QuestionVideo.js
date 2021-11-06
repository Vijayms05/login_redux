import React from 'react';
import Button from '@restart/ui/esm/Button';
import { ToggleButtonGroup, ToggleButton, Row, } from 'react-bootstrap'
import {Link} from 'react-router-dom';


import {CircleRight} from '../../assets/images/index'


const QuestionVideo =()=>{
  return(  
    <div className="tl-rt-qst">
        <div className="in-rt-qst">   
            <div className="qust-tit">       
                <h5>"Ends" in Lord Robbins definition of Economics is referred to as:</h5>
                <p>Economics can be referred to as a type of social science that deals with the behavior of entities</p>
            </div> 
            <Row className="my-3 vid-frame">
                <iframe width="100%" height="400" src="https://www.youtube.com/embed/EKS7ZCZsboc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </Row> 
            <div className="pre-nxt-skp">
                <div className="d-flex m-auto">
                    <Link to="/fill-question" className="nxt-btn">
                        Next
                        <CircleRight />
                    </Link>
                </div>                
            </div>
        </div>
    </div>
  );
}
export default QuestionVideo


