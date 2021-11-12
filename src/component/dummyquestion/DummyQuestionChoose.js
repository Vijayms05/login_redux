import React, { useState} from 'react';
import Button from '@restart/ui/esm/Button';
import { ToggleButtonGroup, ToggleButton, } from 'react-bootstrap'
import {Link} from 'react-router-dom';

import './dummyquestion.css'
import {CircleLeft, CircleRight} from '../../assets/images/index'

import { data } from '../../locale/data';

const DummyQuestionChoose =(props)=>{
    const []
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
  
    const finishHandler = () => {
      if (currentQuestion === data.length - 1) {
        setFinish(true);
      }
    };
  
    const startOver = () => {
      setCurrentQuestion(0);
      setFinish(false);
      setMyAnswer("");
      setScore(0);
    };
  
    if (finish) {
      return (
        <div className="container m-4 p-4 mx-auto h-min-screen grid grid-rows-1 grid-cols-1 items-center">
          <div className="wrapper">
            <h3 className="m-4 p-2 h-30 text-center text-2xl font-bold">
              {`Game Over! Your Final Score is
              ${score}/${data.length - 1}
              points.`}
            </h3>
            <button
              className="w-full h-14 mt-2 px-2 rounded-lg bg-gray-600 text-pink-400 font-bold hover:bg-gray-800 hover:text-pink-600"
              onClick={() => startOver()}
            >
              Start Over
            </button>
          </div>
        </div>
      );
    } else {
      return (
        <div className="tl-rt-qst">
            <div className="in-rt-qst">   
                <div className="qust-tit text-center">
                    <h6>{data[currentQuestion].question} </h6>
                    <p>Description : find out who is the prime minister of india</p>
                </div>           
            {/* <span className="m-2 border-2 border-black mx-auto px-2 bg-gray-600 text-pink-400 rounded-lg text-center">
              {`${currentQuestion}/${data.length - 1}`}
            </span> */}
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
  
            {/* {clickAnswer && (
              <button
                className="w-full h-14 mt-2 px-2 rounded-lg bg-gray-200 text-blue-400 font-bold hover:bg-gray-400 hover:text-blue-600"
                onClick={() => showAnswer()}
              >
                Show Answer
              </button>
            )} */}
            {show && (
              <p className="m-2 h-14 mx-auto text-center">
                Correct Answer: {data[currentQuestion].answer}
              </p>
            )}
  
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
  
            {/* {currentQuestion === data.length - 1 && (
              <button
                className="w-full h-14 mt-2 px-2 rounded-lg bg-gray-600 text-pink-400 font-bold hover:bg-gray-800 hover:text-pink-600"
                onClick={() => finishHandler()}
              >
                FINISH
              </button>
            )} */}
  
        
          </div>
        </div>
      )
    }
}
export default DummyQuestionChoose


