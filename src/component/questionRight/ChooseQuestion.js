import React from 'react';
import Button from '@restart/ui/esm/Button';
import { ToggleButtonGroup, ToggleButton, } from 'react-bootstrap'
import {Link} from 'react-router-dom';


import {CircleLeft, CircleRight} from '../../assets/images/index'


const ChooseQuestion =()=>{
  return(  
    <div className="tl-rt-qst">
        <div className="in-rt-qst">   
            <div className="qust-tit text-center">       
                <h6>"Ends" in Lord Robbins definition of Economics is referred to as:</h6>
                <p>Economics can be referred to as a type of social science that deals with the behavior of entities</p>
            </div>              
            <ToggleButtonGroup className="qus-tl-box" type="radio" name="options">
                <ToggleButton id="tbg-radio-1" value={1}><span className="chs-lft">A</span><span className="chs-ans">Resources</span>
                </ToggleButton>
                <ToggleButton id="tbg-radio-2" value={2}>
                    <span className="chs-lft">B</span><span className="chs-ans">Demands</span>
                </ToggleButton>
                <ToggleButton id="tbg-radio-3" value={3}>
                <span className="chs-lft">C</span><span className="chs-ans">Scarcity</span>
                </ToggleButton>
                <ToggleButton id="tbg-radio-3" value={4}>
                <span className="chs-lft">D</span><span className="chs-ans">Wants</span>
                </ToggleButton>
            </ToggleButtonGroup>
            {/* <div className="fill-qust">
                <input placeholder="Ans1" /> is a <input placeholder="Ans2"  /> that gives the green colour ro leaves
            </div> */}
            <div className="pre-nxt-skp mt-3">
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
export default ChooseQuestion


