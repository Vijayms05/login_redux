import React, { useEffect, useMemo, useState } from 'react';
import Button from '@restart/ui/esm/Button';
import { ToggleButtonGroup, ToggleButton, Row, Col, } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import { CircleLeft, CircleRight, PausBtn, RecordMicIcon } from '../../assets/images/index'
import { data } from '../../locale/data';
import useRecorder from "../voiceRecoder/useRecorder";
import AudioPlayer from '../Player/AudioPlayer';
import ComprehensionQuestions from './ComprehensionQuestions';
import TestService from '../../service/TestService';
import { ErrorHandler } from '../../service/ErrorHandler';

const ChooseQuestion = (props) => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [myAnswer, setMyAnswer] = useState("");
    const [score, setScore] = useState(0);
    const [finish, setFinish] = useState(false);
    const [show, setShow] = useState(false);
    const [clickAnswer, setClickAnswer] = useState(false);

    useEffect(() => {
        setCurrentQuestion(props.currentQuestion);
    }, [props])
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
    let [audioURL, isRecording, startRecording, stopRecording,] = useRecorder();
    var questionLength = props.questionLength;
    var questionType = props.questionType;
    const [accent, setAccent] = useState('NEUTRAL');
    const [textValue, setTextValue] = useState('');
    const [options, setOptions] = useState([]);
    const [answer, setAnswer] = useState('');
    console.log(props.data[currentQuestion]);
    const handleNext = () => {
        if (questionType == 'comprehension_questions') {
            if (props.data[currentQuestion].option_type == 4) {
                if (answer != null && answer != "") {
                    var payload = {
                        user_subscription_id: props.user_subscription_id,
                        question_bank_id: props.data[currentQuestion].comprehension_question.question_bank_id,
                        question_id: props.data[currentQuestion].id,
                        options: null,
                        acent: null,
                        question: null,
                        answer: answer,
                    }
                    TestService.baselineTestAnswer(payload).then((res) => {
                        const response = res.data;
                        if (response?.status == 'success') {
                            var temp = [...props.questionStatus];
                            temp[currentQuestion] = { qno: currentQuestion + 1, status: 1, answer: answer, user_baseline_test_question_id: response.user_baseline_test_question_id }
                            props.setQuestionStatus(temp);
                            setCurrentQuestion(currentQuestion + 1);
                            props.setCurrentQuestion(currentQuestion + 1);
                            setAnswer(null);
                        } else if (response.status == 'error') {
                            alert(response?.message);
                        }
                    }).catch(function (error) {
                        ErrorHandler(error);
                    });
                } else {
                    alert('Please answer this question')
                }
            } else {
                if (options.length > 0) {
                    var payload = {
                        user_subscription_id: props.user_subscription_id,
                        question_bank_id: props.data[currentQuestion].comprehension_question.question_bank_id,
                        question_id: props.data[currentQuestion].id,
                        options: options,
                        acent: null,
                        question: null,
                        answer: null,
                    }
                    TestService.baselineTestAnswer(payload).then((res) => {
                        const response = res.data;
                        if (response?.status == 'success') {
                            var temp = [...props.questionStatus];
                            temp[currentQuestion] = { qno: currentQuestion + 1, status: 1, answer: options, user_baseline_test_question_id: response.user_baseline_test_question_id }
                            props.setQuestionStatus(temp);
                            setCurrentQuestion(currentQuestion + 1);
                            props.setCurrentQuestion(currentQuestion + 1);
                            setOptions([]);
                        } else if (response.status == 'error') {
                            alert(response?.message);
                        }
                    }).catch(function (error) {
                        ErrorHandler(error);
                    });
                } else {
                    alert("Please select your answer");
                }
            }
        } else {

        }

    }
    const handleSkip = () => {
        var temp = [...props.questionStatus]
        temp[currentQuestion] = { qno: currentQuestion + 1, status: 2, answer: '', user_baseline_test_question_id: '' }
        props.setQuestionStatus(temp);
        setCurrentQuestion(currentQuestion + 1);
        props.setCurrentQuestion(currentQuestion + 1);
    }
    const handlePrevious = () => {
        setCurrentQuestion(currentQuestion - 1);
        props.setCurrentQuestion(currentQuestion - 1);
    }
    const handleFinish = () => {
        const result = window.confirm("Do you really want to Finish Test");
        if (result) {
            handleNext();
            window.location.href = '/';
        }
    }
    return (
        <div className="tl-rt-qst d-grid m-auto">
            {props.questionStatus.length > 0 && currentQuestion < questionLength &&
                <>
                    {questionType == 'comprehension_questions' ?
                        <div className="in-rt-qst">
                            <div className="qust-tit text-center">
                                <h6>{currentQuestion + 1 + '. '}{props.data[currentQuestion].passage}
                                    {props.data[currentQuestion].question_type == 1 ? props.data[currentQuestion].passage : props.data[currentQuestion].question_type == 2 ? '2' : props.data[currentQuestion].question_type == 3 ? '3' : props.data[currentQuestion].question_type == 4 ? '4' : props.data[currentQuestion].question_type == 5 ? '5' : null}
                                </h6>
                                {/* <h6>Q1  Who is the prime minister of india ?   </h6> */}
                                <p>Description : {props.data[currentQuestion].comprehension_question.type == 1 ? props.data[currentQuestion].comprehension_question.passage : props.data[currentQuestion].comprehension_question.type == 2 ? '2' : props.data[currentQuestion].comprehension_question.type == 3 ? '3' : props.data[currentQuestion].comprehension_question.type == 4 ? '4' : props.data[currentQuestion].comprehension_question.type == 5 ? '5' : null}</p>
                            </div>
                            {/* <div> */}
                            <ComprehensionQuestions data={props.data[currentQuestion]} currentQuestion={currentQuestion}
                                setOptions={setOptions}
                                options={options}
                                setAnswer={setAnswer}
                                answer={answer}
                            />
                            {/* {questionOptions(props.data.comprehension_questions[currentQuestion])} */}
                            {/* {props.data.comprehension_questions[currentQuestion].option_type == 1 ?
                                    <div>
                                        <ToggleButtonGroup className="qus-tl-box" type="radio" name="options">
                                            {props.data.comprehension_questions[currentQuestion].options.map((item, index) => {
                                                <>
                                                    {item.option_type == 1 ?
                                                        (
                                                            <ToggleButton id="tbg-radio-1" value={1}>
                                                                <span className="chs-lft">A</span>
                                                                <span className="chs-ans">Resources</span>
                                                            </ToggleButton>

                                                        )
                                                        :
                                                        item.option_type == 2 ? '2'
                                                            :
                                                            item.option_type == 3 ? '3'
                                                                :
                                                                item.option_type == 4 ? '4'
                                                                    :
                                                                    item.option_type == 5 ? '5'
                                                                        : null
                                                    }
                                                </>
                                            })
                                            }       </ToggleButtonGroup>
                                    </div> 
                                    :
                                    props.data.comprehension_questions[currentQuestion].option_type == 2 ?
                                        '2'
                                        :
                                        props.data.comprehension_questions[currentQuestion].option_type == 3 ? '3'
                                            :
                                            props.data.comprehension_questions[currentQuestion].option_type == 4 ? '4'
                                                : props.data.comprehension_questions[currentQuestion].props.data.comprehension_questions[currentQuestion].option_type == 5 ? '5'
                                                    : null
                                }*/}
                            {/* </div> */}
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
                                <ToggleButton id="tbg-radio-4" value={4}>
                                    <span className="chs-lft">D</span><span className="chs-ans">Wants</span>
                                </ToggleButton>
                            </ToggleButtonGroup> */}

                            <div className="pre-nxt-skp mt-3">
                                {currentQuestion > 0 &&
                                    <Button onClick={handlePrevious} className="pre-btn">
                                        <CircleLeft />
                                        Previous
                                    </Button>
                                }
                                {currentQuestion < questionLength - 1 ?
                                    <div className="d-flex ms-2 ms-sm-0">
                                        <Button onClick={handleNext} className="nxt-btn">
                                            Next
                                            <CircleRight />
                                        </Button>
                                        <Button onClick={handleSkip} className="skp-btn">
                                            Skip
                                        </Button>
                                    </div>
                                    :
                                    <div className="pre-nxt-skp mt-3">
                                        <Button onClick={handleFinish} className="nxt-btn">
                                            Finish
                                            {/* <CircleRight /> */}
                                        </Button>
                                    </div>
                                }
                            </div>
                        </div>
                        :
                        <div className="in-rt-qst">
                            {currentQuestion < props.data?.length ?
                                (
                                    <>
                                        <div className="qust-tit text-center">
                                            <h6>{currentQuestion + 1 + '.'}{props.data[currentQuestion].passage}</h6>
                                            {/* <h6>Q1  Who is the prime minister of india ?   </h6>
                                <p>Description : find out who is the prime minister of india</p> */}
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
                                <ToggleButton id="tbg-radio-4" value={4}>
                                    <span className="chs-lft">D</span><span className="chs-ans">Wants</span>
                                </ToggleButton>
                            </ToggleButtonGroup> */}
                                        <div>
                                            <select value={props.data[currentQuestion].accent ? props.data[currentQuestion].accent : accent} onChange={(e) => { setAccent(e.target.value) }} className="select-form" size="lg" >
                                                <option disabled={props.data[currentQuestion].accent ? true : false} value="NEUTRAL">Neutral</option>
                                                <option disabled={props.data[currentQuestion].accent ? true : false} value="US">US</option>
                                                <option disabled={props.data[currentQuestion].accent ? true : false} value="UK">UK</option>
                                                <option disabled={props.data[currentQuestion].accent ? true : false} value="AUS">AUS</option>
                                                <option disabled={props.data[currentQuestion].accent ? true : false} value="IND">Indian</option>
                                            </select>
                                        </div>
                                        <Col className="rec-box">
                                            <div className="rec-pas-btn-aud">
                                                {!isRecording &&
                                                    <div className="rec-ply-icon">
                                                        <Button onClick={(startRecording)} disabled={isRecording}>
                                                            <RecordMicIcon />
                                                        </Button>
                                                    </div>
                                                }
                                                {isRecording &&
                                                    <div className="rec-ply-icon">
                                                        <Button onClick={(stopRecording)} disabled={!isRecording}>
                                                            <PausBtn />
                                                        </Button>
                                                    </div>
                                                }
                                            </div>
                                            {audioURL &&
                                                <audio autoplay className="rec-aud-tag" src={audioURL} controls controlsList="nodownload noplaybackrate"></audio>
                                            }
                                        </Col>

                                        <div className="pre-nxt-skp mt-3">
                                            {currentQuestion > 0 &&
                                                <Button onClick={handlePrevious} className="pre-btn">
                                                    <CircleLeft />
                                                    Previous
                                                </Button>
                                            }
                                            {currentQuestion < questionLength - 1 ?
                                                <div className="d-flex ms-2 ms-sm-0">
                                                    <Button onClick={handleNext} className="nxt-btn">
                                                        Next
                                                        <CircleRight />
                                                    </Button>
                                                    <Button onClick={handleSkip} className="skp-btn">
                                                        Skip
                                                    </Button>
                                                </div>
                                                :
                                                <div className="pre-nxt-skp mt-3">
                                                    <Button onClick={handleFinish} className="nxt-btn">
                                                        Finish
                                                        {/* <CircleRight /> */}
                                                    </Button>
                                                </div>
                                            }
                                        </div>
                                    </>
                                )
                                :
                                currentQuestion < questionLength ?
                                    <>
                                        <div>
                                            <input type="textarea" placeholder="paste your text here" id="txt" value={textValue} onChange={(e) => setTextValue(e.target.value)} />
                                        </div>
                                        <div>
                                            <select value={accent} onChange={(e) => { setAccent(e.target.value) }} className="select-form" size="lg" >
                                                <option value="NEUTRAL">Neutral</option>
                                                <option value="US">US</option>
                                                <option value="UK">UK</option>
                                                <option value="AUS">AUS</option>
                                                <option value="IND">Indian</option>
                                            </select>
                                        </div>
                                        <Col className="rec-box">
                                            <div className="rec-pas-btn-aud">
                                                {!isRecording &&
                                                    <div className="rec-ply-icon">
                                                        <Button onClick={(startRecording)} disabled={isRecording}>
                                                            <RecordMicIcon />
                                                        </Button>
                                                    </div>
                                                }
                                                {isRecording &&
                                                    <div className="rec-ply-icon">
                                                        <Button onClick={(stopRecording)} disabled={!isRecording}>
                                                            <PausBtn />
                                                        </Button>
                                                    </div>
                                                }
                                            </div>
                                            {audioURL &&
                                                <audio autoplay className="rec-aud-tag" src={audioURL} controls controlsList="nodownload noplaybackrate"></audio>
                                            }
                                        </Col>
                                        <div className="pre-nxt-skp mt-3">
                                            {currentQuestion > 0 &&
                                                <Button onClick={handlePrevious} className="pre-btn">
                                                    <CircleLeft />
                                                    Previous
                                                </Button>
                                            }
                                            {currentQuestion < questionLength - 1 ?
                                                <div className="d-flex ms-2 ms-sm-0">
                                                    <Button onClick={handleNext} className="nxt-btn">
                                                        Next
                                                        <CircleRight />
                                                    </Button>
                                                    <Button onClick={handleSkip} className="skp-btn">
                                                        Skip
                                                    </Button>
                                                </div>
                                                :
                                                <div className="pre-nxt-skp mt-3">
                                                    <Button onClick={handleFinish} className="nxt-btn">
                                                        Finish
                                                        {/* <CircleRight /> */}
                                                    </Button>
                                                </div>
                                            }
                                        </div>
                                    </>
                                    :
                                    <div>else part</div>
                            }
                        </div>
                    }
                </>
            }
        </div>
    );
}
export default ChooseQuestion


