
import React,{useState}  from 'react';
import {  Row, Col, Nav, Navbar, ProgressBar,Button } from 'react-bootstrap'
import { SkilltallyLogo, Logo } from '../../assets/images/index'
import { CountdownCircleTimer } from 'react-countdown-circle-timer'
import skilltallyLogo from '../../assets/images/skilltally_logo.png'

const DummyQuestionBar = () => {
    const [qusBar, setQusBar] = useState(true)

    const clickqusBar = () => {
        setQusBar(!qusBar)
    }
    
    const now = 85 
    
    const [show,setShow]=useState(false)
    const [time, setTime] = useState({ms:0, s:0, m:0, h:0});
    const [interv, setInterv] = useState();
    const [status, setStatus] = useState(0);
    // Not started = 0
    // started = 1
    // stopped = 2
  

    const onStart = () => {
    //   startRecording()
      run();
      setStatus(1);
      setInterv(setInterval(run, 10));
      setShow(true)
      console.log("start timing")
     
    };
  
    var updatedMs = time.ms, updatedS = time.s, updatedM = time.m, updatedH = time.h;
  
    const run = () => {
      if(updatedM === 60){
        updatedH++;
        updatedM = 0;
      }
      if(updatedS === 60){
        updatedM++;
        updatedS = 0;
      }
      if(updatedMs === 100){
        updatedS++;
        updatedMs = 0;
      }
      updatedMs++;
      return setTime({ms:updatedMs, s:updatedS, m:updatedM, h:updatedH});
    };
  


    const onStop = () => {
    //   stopRecording()
      clearInterval(interv);
      setStatus(2);
      setShow(false)
      
      console.log("stop timing")
    };
  
    const reset = () => {
      clearInterval(interv);
      setStatus(0);
      setTime({ms:0, s:0, m:0, h:0})
    };
  
    const resume = () => {
        onStart();
       
    }


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
            {/* <SkilltallyLogo /> */}
            <img src={skilltallyLogo} alt="skill tally" className="skilltally-logo mt-2"/>
            <Row >
                <Col className="mt-4">
                    <div className="qyst-pag">
                        <h5>
                            Test Name
                        </h5>
                        <h4>
                            Subject Name
                        </h4>
                    </div> 
                </Col>                    
                <Col>
                    <div >
                        <CountdownCircleTimer
                            isPlaying
                            duration={90}
                            colors={[
                                ["#004777", 0.33], 
                                ["#F7B801", 0.33], 
                                ["#A30000"]
                            ]}
                            onComplete={() => [true, 1000]}
                            size={120}
                            >
                            {renderTime}
                        </CountdownCircleTimer>
                    </div>                            
                </Col>
            </Row>    
            <Row>
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
            </Row> 
            <Row className="atn-top mt-3">
                <ul className="atn-ul p-0">
                    <li className="ans-txt" onClick={resume}>
                        1 </li>
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
            </Row> 
            <div className="prog-bar">
                <ProgressBar now={now} />
                <p className="p-0 mb-0 ms-2">{now}%</p>
            </div>  
            <Row className="prog-bar-test">
                <button className="vw-txt-inst mt-1">
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
      return <div className="timer">Too lale...</div>;
    }
  
    return (
      <div className="timer">
        <div className="text">Remaining time</div>
        <div className="value">{formatRemainingTime(remainingTime)}</div>
      </div>
    );
  };
export default DummyQuestionBar


