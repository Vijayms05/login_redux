import React, { useState, useEffect } from "react";
import { Col} from "react-bootstrap";
import Button from '@restart/ui/esm/Button';
import { Link } from "react-router-dom";
import { RecordMicIcon, PlayBtn, PausBtn, CircleLeft, CircleRight } from "../../assets/images";
import useRecorder from "./useRecorder";

const VoiceRecoder = () => {
     let [audioURL, isRecording, startRecording, stopRecording] = useRecorder();
    return (
        <div className="tl-rt-qst"> 
            <div className="qust-tit">       
                <h5>"Ends" in Lord Robbins definition of Economics is referred to as:</h5>
                <p className="mb-5">Economics can be referred to as a type of social science that deals with the behavior of entities</p>
            </div> 

            <Col className="rec-box">
                <Col className="lft-in-rec-box">    
                    <div className="rec-mic-icon">    
                        <RecordMicIcon />
                    </div>                
                    <p className="timer-rec">0:00</p>
                    <div className="vert-line"></div>
                    <p className="rec-adio">record audio</p>
                </Col>
                <div className="rec-ply-icon">
                    <Button onClick={startRecording}  disabled={isRecording}>                
                        <PlayBtn />
                    </Button> 
                </div>
                <div className="rec-ply-icon">
                    <Button onClick={stopRecording}  disabled={!isRecording}>                
                        <PausBtn />
                    </Button>
                    
                </div>
            </Col>

            <audio src={audioURL} controls />

            <div className="pre-nxt-skp mt-3">
                <Button className="pre-btn">
                    <CircleLeft />
                    Previous
                </Button>
                <div className="d-flex">
                    <Link to="/videorecord" className="nxt-btn">
                        Next
                        <CircleRight />
                    </Link>
                    <Button className="skp-btn">
                        Skip
                    </Button>
                </div>                
            </div>
            {/* <Video /> */}
        </div>
    );
};

export default VoiceRecoder;