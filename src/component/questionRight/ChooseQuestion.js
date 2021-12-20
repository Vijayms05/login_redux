import React, { useEffect, useState } from 'react';
import Button from '@restart/ui/esm/Button';
import { ToggleButtonGroup, ToggleButton, Row, Col, } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import { CircleLeft, CircleRight } from '../../assets/images/index'
import { data } from '../../locale/data';


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
    // var questionLength = 0;
    // var questionType = '';
    var questionStatus = [];
    const [questionLength, setQuestionLength] = useState(0);
    const [questionType, setQuestionType] = useState('');
    useEffect(() => {
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
    return (
        <div className="tl-rt-qst d-grid m-auto">
            {props.questionStatus.length > 0 && currentQuestion < questionLength &&
                questionType == 'comprehension_questions' ?
                <div className="in-rt-qst">
                    <div className="qust-tit text-center">
                        <h6>Q{data[currentQuestion].id}{" "}{data[currentQuestion].question}</h6>
                        <h6>Q1  Who is the prime minister of india ?   </h6>
                        <p>Description : find out who is the prime minister of india</p>
                    </div>
                    <ToggleButtonGroup className="qus-tl-box" type="radio" name="options">
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
                    </ToggleButtonGroup>

                    <div className="pre-nxt-skp mt-3">
                        <Link to="/testintro" className="pre-btn">
                            <CircleLeft />
                            Preview
                        </Link>
                        <div className="d-flex ms-2 ms-sm-0">
                            <Link to="/videorecord" className="nxt-btn">
                                Next
                                <CircleRight />
                            </Link>
                            <Button className="skp-btn">
                                Skip
                            </Button>
                        </div>
                    </div>
                </div>
                :

                <div className="in-rt-qst">
                    {currentQuestion < props.data?.spoken_questions.length ?
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
                                <select className="select-form" size="lg" >
                                    <option>Filters</option>
                                    <option>Large select</option>
                                    <option>Large select</option>
                                </select>
                            </div>
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
                                        <Button className="nxt-btn">
                                            Finish
                                            {/* <CircleRight /> */}
                                        </Button>
                                    </div>
                                }
                            </div>
                        </>
                        :
                        // <>
                        //     <div className="qust-tit text-center">
                        //         <h6>Q{data[currentQuestion].id}{" "}{data[currentQuestion].question}</h6>
                        //         <h6>Q1  Who is the prime minister of india ?   </h6>
                        //         <p>Description : find out who is the prime minister of india</p>
                        //     </div>
                        //     <ToggleButtonGroup className="qus-tl-box" type="radio" name="options">
                        //         <ToggleButton id="tbg-radio-1" value={1}>
                        //             <span className="chs-lft">A</span>
                        //             <span className="chs-ans">Resources</span>
                        //         </ToggleButton>
                        //         <ToggleButton id="tbg-radio-2" value={2}>
                        //             <span className="chs-lft">B</span><span className="chs-ans">Demands</span>
                        //         </ToggleButton>
                        //         <ToggleButton id="tbg-radio-3" value={3}>
                        //             <span className="chs-lft">C</span><span className="chs-ans">Scarcity</span>
                        //         </ToggleButton>
                        //         <ToggleButton id="tbg-radio-4" value={4}>
                        //             <span className="chs-lft">D</span><span className="chs-ans">Wants</span>
                        //         </ToggleButton>
                        //     </ToggleButtonGroup>

                        //     <div className="pre-nxt-skp mt-3">
                        //         <Link to="/testintro" className="pre-btn">
                        //             <CircleLeft />
                        //             Preview
                        //         </Link>
                        //         <div className="d-flex ms-2 ms-sm-0">
                        //             <Link to="/videorecord" className="nxt-btn">
                        //                 Next
                        //                 <CircleRight />
                        //             </Link>
                        //             <Button className="skp-btn">
                        //                 Skip
                        //             </Button>
                        //         </div>
                        //     </div>
                        // </>
                        null
                    }
                </div>
            }
        </div>
    );
}
export default ChooseQuestion


