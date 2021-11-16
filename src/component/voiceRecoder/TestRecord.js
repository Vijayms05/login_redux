import React, {useState} from 'react'
import {  Container, Col, Row, Form, Card, ProgressBar, Table, Tab, Tabs } from 'react-bootstrap'
import Button from '@restart/ui/esm/Button'
import { RecordMicIcon, PlayBtn, PausBtn, CircleLeft, CircleRight } from "../../assets/images";
import { Link } from 'react-router-dom'
import useRecorder from "./useRecorder";

const TestRecord = () =>{
    let [audioURL, isRecording, startRecording, stopRecording,] = useRecorder();
    return(
        <Col className="textrec pt-3 d-grid">
            <div className="m-auto"></div>
            <h3 className="heading-test mb-0">Read aloud the paragraph </h3>
            
            <Col className="parag-test mb-5">
                <p>lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
            </Col>
            <Col className="rec-box">
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
            <p></p>           
                {/* <Link to="/videorecord" className="pre-btn">                    
                    <CircleLeft />
                    Preview
                </Link>                 */}
                <div className="d-flex">
                    <Link to="/home" className="nxt-btn">
                        Submit
                        <CircleRight />
                    </Link>
                    {/* <Button className="skp-btn">
                        Skip
                    </Button> */}
                </div>            
            </div>
        </Col>
    )
}

export default TestRecord;