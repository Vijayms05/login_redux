import React, { useEffect, useMemo, useState } from 'react';
import Button from '@restart/ui/esm/Button';
import { ToggleButtonGroup, ToggleButton, Row, Col, } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import { CircleLeft, CircleRight, PausBtn, RecordMicIcon } from '../../assets/images/index'
import { data } from '../../locale/data';
import useRecorder from "../voiceRecoder/useRecorder";
import AudioPlayer from '../Player/AudioPlayer';
import ComprehensionQuestions from './ComprehensionQuestions';

const ChooseQuestion = (props) => {
    console.log(props.data);
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
    let [audioURL, isRecording, startRecording, stopRecording,] = useRecorder();
    var questionStatus = [];
    const [questionLength, setQuestionLength] = useState(0);
    const [questionType, setQuestionType] = useState('');
    const [accent, setAccent] = useState('NEUTRAL');
    const [textValue, setTextValue] = useState('');
    useMemo(() => {
        if (props.data) {
            if (props.data?.comprehension_questions.length > 0) {
                setQuestionType('comprehension_questions');
                setQuestionLength(props.data.comprehension_questions.length);
            } else if (props.data?.spoken_questions.length > 0) {
                if (props.data?.udsc_questions) {
                    setQuestionLength(props.data?.udsc_questions + props.data?.spoken_questions.length);
                } else {
                    setQuestionLength(props.data?.spoken_questions.length);
                }
                setQuestionType('spoken_questions');
            }
            for (var i = 0; i < questionLength; i++) {
                questionStatus.push({ qno: i + 1, status: 0, answer: '' });
            }
            props.setQuestionStatus(questionStatus);
        }
    }, []);

    const handleNext = () => {
        setCurrentQuestion(currentQuestion + 1);
    }
    const handleSkip = () => {
        setCurrentQuestion(currentQuestion + 1);
    }
    const handlePrevious = () => {
        setCurrentQuestion(currentQuestion - 1);
    }
    const handleFinish = () => {
        const result = window.confirm("Do you really want to Finish Test");
        if (result) {
            window.location.href = '/';
        }
    }
    const questionOptions = (question) => {
        switch (question.option_type) {
            case 1: return (
                <div>
                    {/* <ToggleButtonGroup className="qus-tl-box" type="radio" name="options"> */}
                    {question.options.map((item, index) => {
                        // <div>1
                        questionOption(item, index)
                        // </div>
                    })
                    }
                    {/* </ToggleButtonGroup> */}
                </div>
            );
            case 2: return (
                <div>
                    <ToggleButtonGroup className="qus-tl-box" type="checkbox" name="options">
                        {question.options.map((item, index) => {
                            <div>
                                {questionOption(item, index)}
                            </div>
                        })
                        }
                    </ToggleButtonGroup>
                </div>
            );
            case 3: return (
                <div>
                    <ToggleButtonGroup className="qus-tl-box" type="radio" name="options">
                        {question.options.map((item, index) => {
                            { questionOption(item, index) }
                        })
                        }
                    </ToggleButtonGroup>
                </div>
            );
            case 4: return (
                <div>
                    {answerType(question)}
                </div>
            );
            default: return <h1>No match</h1>
        }
    }
    const questionOption = (list, index) => {
        switch (list.option_type) {
            case 1: return (<h1> 1.1 </h1>)
            // <div>1.1
            //     <ToggleButton id="tbg-radio-1" value={index}>
            //         <span className="chs-lft">{index + 1 + ". "}</span>
            //         <span className="chs-ans">{list.option_text}</span>
            //     </ToggleButton>
            // </div>

            case 2: return (
                <h1>1.2 </h1>
                // <div>1.2
                //     <ToggleButton id="tbg-radio-1" value={index}>
                //         <span className="chs-lft">{index + 1 + ". "}</span>
                //         <span className="chs-ans">{list.option_text}</span>
                //     </ToggleButton>
                // </div>
            );
            case 3: return (
                <h1>1.3 </h1>
                // <div>1.3
                //     <ToggleButton id="tbg-radio-1" value={index}>
                //         <span className="chs-lft">{index + 1 + ". "}</span>
                //         <span className="chs-ans"><AudioPlayer url={list.audio_file} /></span>
                //     </ToggleButton>
                // </div>
            );
            case 4: return (
                <h1>1.4 </h1>
                // <div>1.4
                //     <ToggleButton id="tbg-radio-1" value={index}>
                //         <span className="chs-lft">{index + 1 + ". "}</span>
                //         <span className="chs-ans"><AudioPlayer url={list.url} /></span>
                //     </ToggleButton>

                // </div>
            );
            case 5: return (
                <h1>1.5 </h1>
            );
            //     return (
            //     <div>1.5
            //         <ToggleButton id="tbg-radio-1" value={index}>
            //             <span className="chs-lft">{index + 1 + ". "}</span>
            //             <span className="chs-ans">
            //                 <iframe width="560" height="315" src={list.url}
            //                     title="YouTube video player" frameborder="0"
            //                     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            //                     allowfullscreen></iframe>
            //             </span>
            //         </ToggleButton>
            //     </div>
            // );
            default: return <h1>No </h1>
        }
    }
    const answerType = (question) => {
        switch (question.answer_type) {
            case 1: return (
                <h1>1 </h1>
            );
            case 2: return (
                <h1>2 </h1>
            );
            case 3: return (
                <h1>3 </h1>
            );
            default: return <h1>No match match</h1>
        }
    }
    return (
        <div className="tl-rt-qst d-grid m-auto">
            {props.questionStatus.length > 0 && currentQuestion < questionLength &&
                <>
                    {questionType == 'comprehension_questions' ?
                        <div className="in-rt-qst">
                            <div className="qust-tit text-center">
                                <h6>{currentQuestion + 1 + '. '}{props.data.comprehension_questions[currentQuestion].passage}
                                    {props.data.comprehension_questions[currentQuestion].question_type == 1 ? props.data.comprehension_questions[currentQuestion].passage : props.data.comprehension_questions[currentQuestion].question_type == 2 ? '2' : props.data.comprehension_questions[currentQuestion].question_type == 3 ? '3' : props.data.comprehension_questions[currentQuestion].question_type == 4 ? '4' : props.data.comprehension_questions[currentQuestion].question_type == 5 ? '5' : null}
                                </h6>
                                {/* <h6>Q1  Who is the prime minister of india ?   </h6> */}
                                <p>Description : {props.data.comprehension_questions[currentQuestion].comprehension_question.type == 1 ? props.data.comprehension_questions[currentQuestion].comprehension_question.passage : props.data.comprehension_questions[currentQuestion].comprehension_question.type == 2 ? '2' : props.data.comprehension_questions[currentQuestion].comprehension_question.type == 3 ? '3' : props.data.comprehension_questions[currentQuestion].comprehension_question.type == 4 ? '4' : props.data.comprehension_questions[currentQuestion].comprehension_question.type == 5 ? '5' : null}</p>
                            </div>
                            {/* <div> */}
                            {/* <ComprehensionQuestions data={props.data.comprehension_questions[currentQuestion]} /> */}
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
                            {currentQuestion < props.data?.spoken_questions.length ?
                                (
                                    <>
                                        <div className="qust-tit text-center">
                                            <h6>{currentQuestion + 1 + '.'}{props.data.spoken_questions[currentQuestion].passage}</h6>
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
                                            <select value={props.data.spoken_questions[currentQuestion].accent ? props.data.spoken_questions[currentQuestion].accent : accent} onChange={(e) => { setAccent(e.target.value) }} className="select-form" size="lg" >
                                                <option disabled={props.data.spoken_questions[currentQuestion].accent ? true : false} value="NEUTRAL">Neutral</option>
                                                <option disabled={props.data.spoken_questions[currentQuestion].accent ? true : false} value="US">US</option>
                                                <option disabled={props.data.spoken_questions[currentQuestion].accent ? true : false} value="UK">UK</option>
                                                <option disabled={props.data.spoken_questions[currentQuestion].accent ? true : false} value="AUS">AUS</option>
                                                <option disabled={props.data.spoken_questions[currentQuestion].accent ? true : false} value="IND">Indian</option>
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


