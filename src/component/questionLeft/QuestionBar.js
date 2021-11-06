import Button from '@restart/ui/esm/Button';
import React,{useState}  from 'react';
import {  Row, Col, Nav, Navbar, ProgressBar, } from 'react-bootstrap'
import { Logo} from '../../assets/images/index'

const QuestionBar = () => {
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
            <Logo />
            <h6 className="logo-tag">
                measure to lead
            </h6>
            <Row>
                <div className="qyst-pag">
                    <h5>
                        Test Name
                    </h5>
                    <h4>
                        Subject Name
                    </h4>
                </div> 
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
            </Row> 
            <div className="prog-bar">
                <ProgressBar now={now} />
                <p className="p-0 mb-0 ms-2">{now}%</p>
            </div>  
            <Row className="prog-bar-test">
                <Button className="vw-txt-inst">
                    View Test Instructions
                </Button>  
                <Button className="fnsh-txt">
                    Finish Test
                </Button>    
            </Row>
        </div>
    </>
  );
}
export default QuestionBar


