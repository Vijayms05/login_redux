import React from 'react';
import Button from '@restart/ui/esm/Button';
import { ToggleButtonGroup, ToggleButton, } from 'react-bootstrap'
import {Link} from 'react-router-dom';


import {CircleLeft, CircleRight} from '../../assets/images/index'


const TextQuestion =()=>{
  return(  
    <div className="tl-rt-qst">
        <div className="in-rt-qst">   
            <div className="qust-tit text-left">       
                <h6>Enter your pharagraph: </h6>
            </div>  
            <div className="fill-qust mt-2">
                <textarea row="3" col="5">

                </textarea>
            </div>
            <div className="pre-nxt-skp mt-5">
                <Button className="pre-btn">
                    <CircleLeft />
                    Previous
                </Button>
                <div className="d-flex">
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
export default TextQuestion


