
import React, { useState, useEffect } from 'react';
import { Row, Col, Nav, Navbar, ProgressBar, Button } from 'react-bootstrap'
import { SkillTallyLogo, Logo, TimerIcon } from '../../assets/images/index'

import { CountdownCircleTimer } from 'react-countdown-circle-timer'
import skilltallyLogo from '../../assets/images/skilltally_logo.png'
// import ChooseQuestion from '../questionRight/ChooseQuestion';

const QuestionBar = (props) => {
    const [answered, setAnswered] = useState(0);
    const [not_answered, setNot_answered] = useState(0);
    const [not_visited, setNot_visited] = useState(0);
    const [questions, setQuestions] = useState([]);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [qusBar, setQusBar] = useState(true);
    const [percentage, setPercentage] = useState(0);
    const clickqusBar = () => {
        setQusBar(!qusBar)
    }

    useEffect(() => {
        var ans = props.questionStatus.filter(function (item) {
            return item.status == 1
        });
        var not_ans = props.questionStatus.filter(function (item) {
            return item.status == 2
        });
        var not_visit = props.questionStatus.filter(function (item) {
            return item.status == 0
        });
        setCurrentQuestion(props.currentQuestion);
        setQuestions(props.questionStatus);
        setAnswered(ans.length);
        setNot_answered(not_ans.length);
        setNot_visited(not_visit.length);
        // let percen = ans.length / props.questionStatus.length * 100;
        setPercentage(ans.length / props.questionStatus.length * 100);
    }, [props]);
    return (
        <>
            <div className="sid-menu-logo d-md-none">
                <Button onClick={clickqusBar} className="sid-menu-icon">
                    <p className="fst-line"></p>
                    <p className="sec-line"></p>
                    <p className="trd-line"></p>
                </Button>
                <Logo />
            </div>
            <div style={{ left: qusBar ? "-320px" : "0" }} className="lftqst" >
                <div className="ms-3">
                    <img src={skilltallyLogo} alt="skill tally" className="skilltally-logo mt-1" />
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
                        <h6 className="ans-txt">{answered}</h6>
                        <p>Answered</p>
                    </Col>
                    <Col className="crt-qus">
                        <h6 className="crt-txt">{currentQuestion + 1}</h6>
                        <p>Current Question</p>
                    </Col>
                </Row>
                <Row className="check_qus_left">
                    <Col className="not-ans">
                        <h6 className="not-ans-txt">{not_answered}</h6>
                        <p>Not Answerd</p>
                    </Col>
                    <Col className="not-vst">
                        <h6 className="not-vst-txt">{not_visited}</h6>
                        <p>Not Visit</p>
                    </Col>
                </Row>

                <div className="row atn-top mt-2">
                    {questions.map((item, index) => {
                        return (
                            <div onClick={() => props.setCurrentQuestion(index)} key={index} className={index == currentQuestion ? "col crt-txt" : item.status == 0 ? "col not-vst-txt" : item.status == 1 ? "col ans-txt" : item.status == 2 ? "col not-ans-txt" : ""} >
                                {item.qno}
                            </div>
                        )
                    })
                    }
                    {/* <ul className="atn-ul p-0">
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
                    </ul> */}
                </div>

                <p style={{ fontSize: '13px' }}>question</p>
                <div className="prog-bar">
                    <ProgressBar now={percentage} />
                    <p className="p-0 mb-0 ms-2">{percentage}%</p>
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
            <div className="f3-15 text-center mt-1" style={{ width: '80px' }}>Time left</div>
            <div className="value f1-15">
                <TimerIcon />
                {formatRemainingTime(remainingTime)}</div>
        </div>
    );
};
export default QuestionBar


