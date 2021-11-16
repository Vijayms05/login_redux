import React from 'react';
import Button from '@restart/ui/esm/Button';
import { ToggleButtonGroup, ToggleButton, } from 'react-bootstrap'
import {Link} from 'react-router-dom';


import {CircleLeft, CircleRight} from '../../assets/images/index'


const UnderlineQuestion =()=>{
  return(  
    <div className="tl-rt-qstt w-100 d-grid p-2"> 
        <div className="m-auto px-5">   
            <div className="qust-tit">       
                <h6>Fill In The Blanks: </h6>
            </div>  
            <div className="fill-qust">
                <input placeholder="Ans1" /> is a <input placeholder="Ans2"  /> that gives the green colour ro leaves
            </div>
            <div className="pre-nxt-skp mt-5">
                <Link to="/ques-ans-play" className="pre-btn ">
                    <CircleLeft />
                    Previous
                </Link>
                <div className="d-flex">
                    <Link to="/text-question" className="nxt-btn">
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
export default UnderlineQuestion


