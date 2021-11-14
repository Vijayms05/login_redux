import React, { useState } from 'react'

import {    
    Pausebutton,
    Rightarrowbutton
} from '../../assets/images/index'
import {
    Col,
    Row,
    Button,
    Card,
    Container,
    ProgressBar

} from 'react-bootstrap'


import './style.css'

const AudioListen =(props) => { 
    const [time, setTime] = useState({ms:0, s:0, m:0, h:0});
    const [interv, setInterv] = useState();
    const start = () => {
        run();
        setStatus(1);
        setInterv(setInterval(run, 10));
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
    
      const stop = () => {
        clearInterval(interv);
        setStatus(2);
      };
    
      const reset = () => {
        clearInterval(interv);
        setStatus(0);
        setTime({ms:0, s:0, m:0, h:0})
      };
    
      const resume = () => start();
    return(
        <Container fluid>
            <Col className="wrapper mt-4">
                <h2 className="header-esr ms-5 mb-3" >ESR</h2>
                <h3 className="mt-2 mb-1 ms-5">Listen to the Audio</h3>
                <p className="mb-5 ms-5 text-start">
                    Speak on this topic : It is recommended to use headphones while recording, 
                    and turn down the volume of <br /> the speakers on your device.
                    These steps are to be taken to minimize echo.
                </p>
                <Card sm={8} className="audiorecord-card ms-5 mb-4 mt-5">   
                    <Row>
                        <Card.Title className="title-card ms-4">Play Audio</Card.Title>
                        <Col sm={2}>
                            <div className="mt-1 ms-4 p-2">
                                <Pausebutton /> 
                            </div>                             
                        </Col>
                        <Col sm={7}>
                            <ProgressBar  className="mt-3"  now={60} visuallyHidden />
                        </Col>
                        <Col sm={3}>
                            <Card.Text className="mt-3">
                                01:20/01:42
                            </Card.Text>
                        </Col>
                        
                    </Row>
                </Card>
                <Col sm={2} className="ms-5">
                    <Button className="next-button-audiolisten"  type="submit" >
                        Next <Rightarrowbutton />
                    </Button>
                </Col>
                
            </Col>
        </Container>          
    );
}
export default AudioListen