import React, { useState,useEffect } from 'react'
import { Link } from 'react-router-dom'

import {    
    PlaybtnIcon,
    PausebtnIcon,
    CircleRight,
    CircleLeft,
   
    SkipbtnIcon
} from '../../../assets/images/index'

import {
    Col,
    Row,
    Button,
    Card,
    Container

} from 'react-bootstrap'
import { BiMicrophone } from 'react-icons/bi'
import { 
    AiOutlinePlayCircle,AiOutlinePause
} from 'react-icons/ai'


import './style.css'

const Audioplayer =(props) => { 
    
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
      console.log("start recording")
     
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
      
      console.log("stop recording")
    };
  
    // const reset = () => {
    //   clearInterval(interv);
    //   setStatus(0);
    //   setTime({ms:0, s:0, m:0, h:0})
    // };
  
    // const resume = () => onStart();

    return(
        <Container fluid>
            <Col className="wrapper mt-4">
                    <h2 className="header-esr ms-5 mb-3" >ESR</h2>
                    <h3 className="mt-2 mb-1 ms-5">Q1 Talk about the prime minister of india</h3>
                    <p className="mb-5 ms-5">
                        Speak on this topic : It is recommended to use headphones while recording,
                        and turn down the volume of the speakers on your device.
                        These steps are to be taken to minimize echo.
                    </p>
                    <Card sm={12} className="audiorecord-card ms-5 mb-4 mt-5">   
                        <Row>
                            <Col sm={1}>
                                {/* <audio src={audioURL} controls /> */}
                                <div className="microphone mt-3 ms-2">
                                    <BiMicrophone  onClick={onStart} />
                                </div>                             
                            </Col>
                            <Col sm={2}>
                                <p className="microphone-time mt-3 text-start">
                                    {(time.m >= 10)? time.m : "0"+ time.m}:
                                    {(time.s >= 10)? time.s : "0"+ time.s}:
                                    {(time.ms >= 10)? time.ms : "0"+ time.ms}</p>
                            </Col>
                            <Col sm={1}><div className="vl"></div></Col>
                            <Col sm={6}>
                                <p className="microphone-text text-start">record audio</p>
                            </Col>
                            <Col sm>
                                <div className="mt-4">
                                {show ? <AiOutlinePause width="2em" height="2em" onClick={onStop}/>:
                                <AiOutlinePlayCircle width="2em" height="2em" onClick={onStart}/>
                                }
                                </div>
                            </Col>
                        </Row>
                    </Card>
                    <Row className="ms-5 mt-5 d-flex justify-content-end">
                        <Col sm={6} >
                            <Col className="text-start gx-3 " sm={4} xs>
                                <Button className="previous-button"  type="submit" >
                                <CircleLeft /> Previous
                                </Button>                            
                            </Col>
                        </Col>
                        <Col >
                            <Row>
                                <Col sm xs>
                                    <Button className="next-button"  type="submit" >
                                        Next <CircleRight />
                                    </Button>
                                </Col>
                                <Col sm xs>
                                    <Button  type="submit" variant="outline" style={{marginTop:'150px'}}>
                                       Skip {/* Skip < SkipbtnIcon/> */}
                                    </Button>
                                </Col>
                            </Row>
                        </Col>
                        
                    </Row>
                </Col>
        </Container>          
    );
}
export default Audioplayer