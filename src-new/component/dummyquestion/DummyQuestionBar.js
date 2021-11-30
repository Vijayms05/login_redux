
import React,{useState,useRef}  from 'react';
import {  Row, Col, Nav, Navbar, ProgressBar,Button } from 'react-bootstrap'
import {  Logo,TimerIcon } from '../../assets/images/index'

import { CountdownCircleTimer } from 'react-countdown-circle-timer'
import skilltallyLogo from '../../assets/images/skilltally_logo.png'

import { data } from '../../locale/data';

// import DummyQuestionChoose from './DummyQuestionChoose';

const DummyQuestionBar = (props) => {
    const [count,setCount]= useState(0)  
    // let{remainingTime,formatRemainingTime}=renderTime();
    // let{currentQuestion,setCurrentQuestion,checkCorrectAnswer,reset}=DummyQuestionChoose()  
    const [ques, setQues]= useState(true)
    const [timer,setTimer]=useState('00:00')
    const [qusBar, setQusBar] = useState(true)
    // const [currentQuestion, setCurrentQuestion] = useState(0);
    const [myAnswer, setMyAnswer] = useState("");
    const [score, setScore] = useState(0);
    const [finish, setFinish] = useState(false);
    const [show, setShow] = useState(false);
    const [clickAnswer, setClickAnswer] = useState(false);

    const clickqusBar = () => {
        setQusBar(!qusBar)
    }
    
    const now = 85   
   
  
    // const checkAnswer = (variant) => {
    //   setMyAnswer(variant);
    //   setClickAnswer(true);
    // };

    // const checkCorrectAnswer = () => {
    //   if (myAnswer === data[currentQuestion].answer) {
    //     setScore(score + 1);
    //   }
    // };
  
    // const showAnswer = () => {
    //   setShow((show) => !show); //better to be toggled like this
    // };
    // const reset = () => {
    //   setShow(false);
    //   setClickAnswer(false);
    // };

  
    // const finishHandler = () => {
    //   if (currentQuestion === data.length - 1) {
    //     setFinish(true);
    //   }
    // };
  
    // const startOver = () => {
    //   setCurrentQuestion(0);
    //   setFinish(false);
    //   setMyAnswer("");
    //   setScore(0);
    // };

    const formatRemainingTime = time => {
  
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;   
  
    return `${minutes}:${seconds}`;
  };
    const renderTime = ({remainingTime}) => {
        if (remainingTime === 0) {  
          return <div className="timer">Time Is Over</div>;
        }else  
        return (
          <div className="timer">
            <div className="f3-15 text-center mt-1" style={{width: '80px'}}>
                Time left
            </div> 
            <div className="value f1-15">
                <TimerIcon />
                {formatRemainingTime(remainingTime)} 
            </div>
          </div>
        );
      };
    
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
            <img src={skilltallyLogo} alt="skill tally" 
            className="skilltally-logo mt-2"/>
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
                            duration={120}
                            colors={[["#298EE0", 0.33], ["#F7B801", 0.33], ["#A30000"]]}
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
                <div className="atn-ul p-0 mt-2 mb-2">
                    <Row >
                        <Col >
                            <button className="ans-txt not-vst btn" onClick={formatRemainingTime(timer)
                            }>1</button>
                        </Col>
                    </Row>
                    <ul className="atn-ul p-0">
                        <li className="ans-txt" >
                            1 
                        </li>
                        <li className="ans-txt">2</li>
                        <li className="not-ans-txt">3</li>
                        <li className="crt-txt">4</li>
                        <li className="ans-txt">5</li>
                    </ul>
                   
                </div>
                
                {/* <ul className="atn-ul p-0">
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
                </ul> */}
            </Row> 
            <div className="prog-bar">
                <ProgressBar now={count} />
                <p className="p-0 mb-0 ms-2">{count}%</p>
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

  
  
  
  
export default DummyQuestionBar


