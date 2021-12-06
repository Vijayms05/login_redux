import React, { useState, useEffect } from "react";
import { Col} from "react-bootstrap";
import Button from '@restart/ui/esm/Button';
import { Link } from "react-router-dom";
import { RecordMicIcon, PlayBtn, PausBtn, CircleLeft, CircleRight } from "../../assets/images";
import useRecorder from "./useRecorder";

const VoiceRecoder = () => {
     let [audioURL, isRecording, startRecording, stopRecording,] = useRecorder();
    return (
        <div className="tl-rt-qstt d-grid w-100 p-2">             
            <div className="m-auto w-75">
                <div className="test-record-ssc">
                    <p>ESR</p>
                </div>        
                <div className="qust-tit">       
                    <h5>Q1 Talk about the prime minister of india</h5>
                    <p className="mb-5">Speak on this topic : It is recommended to use headphones while recording, and turn down the volume of the speakers on your device.
                        These steps are to be taken to minimize echo.
                    </p>
                </div> 
            
                <Col className="rec-box">
                    {/* <Col className="lft-in-rec-box">    
                        <div className="rec-mic-icon">    
                            <RecordMicIcon />
                        </div>                
                        <p className="timer-rec">0:00</p>
                        <div className="vert-line"></div>
                        <p className="rec-adio">record audio</p>
                    </Col> */}
                    <div className="rec-pas-btn-aud">
                        <div className="rec-ply-icon">
                            <Button onClick={(startRecording)}  disabled={isRecording}>                
                                <RecordMicIcon />
                            </Button>
                        </div>
                        <div className="rec-ply-icon">
                            <Button onClick={(stopRecording)}  disabled={!isRecording}>                
                                <PausBtn />
                            </Button>
                        </div>
                        
                    </div>
                    <audio autoplay className="rec-aud-tag" src={audioURL} controls controlsList="nodownload noplaybackrate"></audio>
                </Col>


                <div className="pre-nxt-skp mt-3">               
                    <Link to="/videorecord" className="pre-btn">                    
                        <CircleLeft />
                        Preview
                    </Link>                
                    <div className="d-flex">
                        <Link to="/play-question" className="nxt-btn ms-2 ms-sm-0">
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
        </div>
    );
};

export default VoiceRecoder;