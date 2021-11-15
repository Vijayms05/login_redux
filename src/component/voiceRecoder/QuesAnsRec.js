import React, { useState } from 'react';
import Button from '@restart/ui/esm/Button';
import { ToggleButtonGroup, ToggleButton, Col, } from 'react-bootstrap'
import {Link} from 'react-router-dom';
import playurl from '../../assets/audio/mp3.mp3'


import {CircleLeft, CircleRight} from '../../assets/images/index'
import { data } from '../../locale/data';


const QuesAnsRec =(props)=>{
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
  
  
    const reset = () => {
      setShow(false);
      setClickAnswer(false);
    };
  return(  
    <div className="tl-rt-qst d-grid m-auto">
        <div className="in-rt-qst">   
            <div className="qust-tit">       
                <h6>{data[currentQuestion].question}</h6>                 
                <Col className="rec-box">
                    <audio className="w-100"  controls controlsList="nodownload noplaybackrate" controls src={playurl} />
                </Col>
            </div>                          
                <p className="f3-15 text-green-light mt-3 mb-0">Description : find out who is the prime minister of india</p>
            <ToggleButtonGroup className="qus-tl-box" type="radio" name="options">
                <ToggleButton id="tbg-radio-1" value={1}>
                <Col className="ply-box">
                    <audio className="w-100"  controls controlsList="nodownload noplaybackrate" controls src={playurl} />
                </Col>
                </ToggleButton>
                <ToggleButton id="tbg-radio-2" value={2}>                    
                <Col className="ply-box">
                    <audio className="w-100"  controls controlsList="nodownload noplaybackrate" controls src={playurl} />
                </Col>
                </ToggleButton>
                <ToggleButton id="tbg-radio-3" value={3}>                 
                <Col className="ply-box">
                    <audio className="w-100"  controls controlsList="nodownload noplaybackrate" controls src={playurl} />
                </Col>
                </ToggleButton>
                <ToggleButton id="tbg-radio-4" value={4}>                 
                <Col className="ply-box">
                    <audio className="w-100"  controls controlsList="nodownload noplaybackrate" controls src={playurl} />
                </Col>
                </ToggleButton>
            </ToggleButtonGroup>
           
          <div className="pre-nxt-skp mt-5">
               <Link to="/play-question" className="pre-btn">
                         <CircleLeft />
                        Preview 
                    </Link>
                <p></p>
                <div className="d-flex">
                    <Link to="/fill-question" className="nxt-btn">
                        Next
                        <CircleRight />
                    </Link>
                    <Button className="skp-btn">
                        Skip
                    </Button>
                </div>                
            </div>
            {/* <div className="pre-nxt-skp mt-3">
                    {currentQuestion === 0 ?
                      <p></p>
                        :     (<Button className="pre-btn"  onClick={() => {
                        setCurrentQuestion(currentQuestion - 1);
                        checkCorrectAnswer();
                        reset();
                        }}>
                            <CircleLeft />
                            Previous
                        </Button>) 
                    }
                
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
            </div> */}
        </div>
    </div>
  );
}
export default QuesAnsRec


