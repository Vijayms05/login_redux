
import React,{useState}  from 'react';
import {  Row, Col, Nav, Navbar, ProgressBar,Button } from 'react-bootstrap'
import { SkillTallyLogo, Logo,TimerIcon } from '../../assets/images/index'

import { CountdownCircleTimer } from 'react-countdown-circle-timer'
import skilltallyLogo from '../../assets/images/skilltally_logo.png'
// import ChooseQuestion from '../questionRight/ChooseQuestion';

const QuestionBar = (props) => {   
    const [qusBar, setQusBar] = useState(true)
    const clickqusBar = () => {
        setQusBar(!qusBar)
    }    
    const now = 85 
 
  return(  
    <>
        <div className="sid-menu-logo d-md-none">
            <Button onClick={clickqusBar} className="sid-menu-icon">
                <p className="fst-line"></p>
                <p className="sec-line"></p>
                <p className="trd-line"></p>
            </Button>
            <Logo />
        </div>
        <div style={ {left :  qusBar ? "-320px" : "0" }} className="lftqst" >
             <div className="ms-3">
                <img src={skilltallyLogo} alt="skill tally" className="skilltally-logo mt-2"/>
            </div> 
            
                {/* <img src={skilltallyLogo} alt="skill tally" className="skilltally-logo mt-2 mb-2"/> */}
            <Row>
                <Col className="mt-4">
                    <div className="qyst-pag">
                        <h5>Test Name</h5>
                        <h4>Subject Name</h4>
                    </div> 
                </Col>                    
                <Col>
                    <div >
                        <CountdownCircleTimer
                            isPlaying
                            duration={120}
                            colors={[["#298EE0"], ["#F7B801"], ["#A30000"]]}
                            onComplete={() => [true, 1000]}
                            size={99}  
                            strokeWidth={9}
                        >
                            {renderTime}
                        </CountdownCircleTimer>
                    </div>                            
                </Col>
            </Row>                
            <Row className="check_qus_left">
                <Col className="atn-ans">
                    <h6 className="ans-txt">105</h6>
                    <p>Answered</p>
                </Col>
                <Col className="crt-qus">
                    <h6 className="crt-txt">3</h6>
                    <p>Current Questions</p>
                </Col>
            </Row>
            <Row className="check_qus_left">
                <Col className="not-ans">
                    <h6 className="not-ans-txt">105</h6>
                    <p>Not Answerd</p>
                </Col>
                <Col className="not-vst">
                    <h6 className="not-vst-txt">3</h6>
                    <p>Not Visit</p>
                </Col>
            </Row>           
               
            <div className="atn-top mt-3">                
                <ul className="atn-ul p-0">
                    <li className="ans-txt">1</li>
                    <li className="ans-txt">2</li>
                    <li className="not-ans-txt">3</li>
                    <li className="crt-txt">4</li>
                    <li className="ans-txt">5</li>
                </ul>
                <ul className="atn-ul p-0">
                    <li className="crt-txt">6</li>
                    <li className="ans-txt">7</li>
                    <li className="not-vst-txt">8</li>
                    <li className="ans-txt">9</li>
                    <li className="ans-txt">10</li>
                </ul>
                <ul className="atn-ul p-0">
                    <li className="ans-txt">11</li>
                    <li className="ans-txt">12</li>
                    <li className="not-ans-txt">13</li>
                    <li className="crt-txt">14</li>
                    <li className="ans-txt">15</li>
                </ul>
                <ul className="atn-ul p-0">
                    <li className="crt-txt">16</li>
                    <li className="ans-txt">17</li>
                    <li className="not-vst-txt">18</li>
                </ul>
            </div> 
        
           
            <div className="prog-bar">   
            <p style={{fontSize:'13px'}}>question</p>           
                <ProgressBar now={now} />
                <p className="p-0 mb-0 ms-2">{now}%</p>
            </div>  
            <Row className="prog-bar-test">
                <button className="vw-txt-inst">
                    View Test Instructions
                </button>  
                <button className="fnsh-txt ">
                    Finish Test
                </button>    
            </Row>
        </div>
    </>
  );
}

const formatRemainingTime = time => {
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;
  
    return `${minutes}:${seconds}`;
  };
  
  const renderTime = ({ remainingTime }) => {
    if (remainingTime === 0) {
      return <div className="timer">Time Is Over</div>;
    }
  
    return (
      <div className="timer">
        <div className="f3-15 text-center mt-1" style={{width: '80px'}}>Time left</div>
        <div className="value f1-15">
            <TimerIcon />
            {formatRemainingTime(remainingTime)}</div>
      </div>
    );
  };
export default QuestionBar


