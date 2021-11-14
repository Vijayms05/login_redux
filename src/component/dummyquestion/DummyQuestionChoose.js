import React, { useState } from 'react';
import Button from '@restart/ui/esm/Button';
import { ToggleButtonGroup, ToggleButton, } from 'react-bootstrap'
import {Link} from 'react-router-dom';


import {CircleLeft, CircleRight} from '../../assets/images/index'
import { data } from '../../locale/data';


const DummyQuestionChoose =(props)=>{
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [myAnswer, setMyAnswer] = useState("");
    const [score, setScore] = useState(0);
    const [finish, setFinish] = useState(false);
    const [show, setShow] = useState(false);
    const [clickAnswer, setClickAnswer] = useState(false);
  
    const checkAnswer = (variant) => {
      setMyAnswer(variant);
      setClickAnswer(true);
    };
  
    const checkCorrectAnswer = () => {
      if (myAnswer === data[currentQuestion].answer) {
        setScore(score + 1);
      }
    };
  
    const showAnswer = () => {
      setShow((show) => !show); //better to be toggled like this
    };
    const reset = () => {
      setShow(false);
      setClickAnswer(false);
    };
  
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
  return(  
    <div className="tl-rt-qst">
        <div className="in-rt-qst">   
            <div className="qust-tit text-center">       
                <h6>{data[currentQuestion].question}</h6>
                {/* <h6>Q1  Who is the prime minister of india ?   </h6> */}
                <p>Description : find out who is the prime minister of india</p>
            </div>              
            {/* <ToggleButtonGroup className="qus-tl-box" type="radio" name="options">
                <ToggleButton id="tbg-radio-1" value={1}>
                    <span className="chs-lft">A</span>
                    <span className="chs-ans">Resources</span>
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
            </ToggleButtonGroup> */}
            {data[currentQuestion].variants.map((variant) => (
                <ToggleButtonGroup className="qus-tl-box" type="radio" name="options">
                    <ToggleButton id="tbg-radio-1" value={1}
                    key={variant.id}
                    className={`variant ${
                        myAnswer === variant
                        ? myAnswer === data[currentQuestion].answer
                            ? "correctAnswer"
                            : "incorrectAnswer"
                        : null
                    }`}
                    onClick={() => checkAnswer(variant)}
                    >
                     <span className="chs-ans">{variant}</span>
                    </ToggleButton>
                </ToggleButtonGroup>
            ))}
            {/* <div className="fill-qust">
                <input placeholder="Ans1" /> is a <input placeholder="Ans2"  /> that gives the green colour ro leaves
            </div> */}
            <div className="pre-nxt-skp mt-3">
                <Button className="pre-btn">
                    <CircleLeft />
                    Previous
                </Button>
                <div className="d-flex">
                    {currentQuestion < data.length - 1 && (
                        <Button
                            className="nxt-btn"
                            onClick={() => {
                            setCurrentQuestion(currentQuestion + 1);
                            checkCorrectAnswer();
                            reset();
                            }}
                        >
                            Next
                            <CircleRight />
                        </Button>
                    )}
                    {/* <Link to="/audiorecord" className="nxt-btn">
                        Next
                        <CircleRight />
                    </Link> */}
                    <Button className="skp-btn"
                        onClick={() => {
                            setCurrentQuestion(currentQuestion + 1);
                            checkCorrectAnswer();
                            reset();
                            }}  
                    >
                        Skip
                    </Button>
                </div>                
            </div>
        </div>
    </div>
  );
}
export default DummyQuestionChoose


