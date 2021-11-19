import React, {useState} from 'react'
import {  Container, Col, Row, Form, Card, ProgressBar, Table, Tab, Tabs } from 'react-bootstrap'
import Button from '@restart/ui/esm/Button'
import { RecordMicIcon, PlayBtn, PausBtn, CircleLeft, CircleRight } from "../../assets/images";
import { Link } from 'react-router-dom' 
import playurl from '../../assets/audio/mp3.mp3'

const PlayQuestion = () =>{
    return(
        <Col className="textrec pt-3 d-grid">
            <div className="m-auto w-75">
                <div className="test-record-ssc">
                    <p>ESR</p>
                </div> 
                <h3 className="heading-test mb-3 ">
                    Listen to the Audio 
                </h3>
                <p className="f3-14 text-green-light">
                    Speak on this topic : It is recommended to use headphones while recording, and turn down the volume of the speakers on your device.
                    These steps are to be taken to minimize echo.    
                </p>
                <Col className="rec-box">
                    <audio className="w-100"  controls controlsList="nodownload noplaybackrate" controls src={playurl} />
                </Col>
                <div className="pre-nxt-skp mt-5">               
                    <Link to="/audiorecord" className="pre-btn">                    
                        <CircleLeft />
                        Preview
                    </Link>                
                    <div className="d-flex">
                        <Link to="/ques-ans-play" className="nxt-btn">
                            Next
                            <CircleRight />
                        </Link>
                        <Button className="skp-btn">
                            Skip
                        </Button>
                    </div>            
                </div>
            </div>
            
        </Col>
    )
}

export default PlayQuestion;