import React from 'react';
import Button from '@restart/ui/esm/Button';
import { ToggleButtonGroup, ToggleButton, } from 'react-bootstrap'
import {Link} from 'react-router-dom';


import {CircleLeft, CircleRight} from '../../assets/images/index'


const UnderlineQuestion =()=>{
  return(  
    <div className="tl-rt-qst">
        <div className="in-rt-qst">   
            <div className="qust-tit text-center">       
                <h6>Fill In The Blanks: </h6>
            </div>  
            <div className="fill-qust">
                <input placeholder="Ans1" /> is a <input placeholder="Ans2"  /> that gives the green colour ro leaves
            </div>
            <div className="pre-nxt-skp mt-5">
                <Button className="pre-btn">
                    <CircleLeft />
                    Previous
                </Button>
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


