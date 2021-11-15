import React from 'react';
import Button from '@restart/ui/esm/Button';
import { ToggleButtonGroup, ToggleButton, } from 'react-bootstrap'
import {Link} from 'react-router-dom';


import {CircleLeft, CircleRight} from '../../assets/images/index'


const TextQuestion =()=>{
  return(  
    <div className="tl-rt-qst d-grid w-100">
        <div className="m-auto w-75 p-5">   
            <div className="qust-tit text-left">       
                <h6>Enter your pharagraph: </h6>
            </div>  
            <div className="fill-qust mt-2">
                <textarea row="3" col="5">

                </textarea>
            </div>
           
            <div className="pre-nxt-skp mt-5">
               <Link to="/fill-question" className="pre-btn">
                         <CircleLeft />
                        Preview 
                    </Link>
                <p></p>
                <div className="d-flex">
                    <Link to="/textrecord" className="nxt-btn">
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


