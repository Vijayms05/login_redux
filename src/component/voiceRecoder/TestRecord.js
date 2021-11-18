import React, {useState} from 'react'
import {  Container, Col, Row, Form, Card, ProgressBar, Table, Tab, Tabs } from 'react-bootstrap'
import Button from '@restart/ui/esm/Button'
import { RecordMicIcon, PlayBtn, PausBtn, CircleLeft, CircleRight } from "../../assets/images";
import { Link } from 'react-router-dom'
import useRecorder from "./useRecorder";

const TestRecord = () =>{
    let [audioURL, isRecording, startRecording, stopRecording,] = useRecorder();
    return(
        <Container className="mt-4 ms-3" >{/*className="textrec pt-3 d-grid"*/}
            <div className="m-auto">            
                <div className="test-record-ssc ms-2">
                    <p>SSC</p>
                </div>
                <h3 className="heading-test mb-0 ms-3">
                    Read aloud the paragraph 
                </h3>
                
                <Col className="parag-test mb-5">
                    <p style={{color:'#3F616D', fontSize:'18px'}}> 
                        Nam purus auctor et integer sed. Amet, quis aliquam turpis velit. 
                        Amet et, nec ut morbi sit id. Nulla nibh tortor, purus massa, id 
                        adipiscing non euismod aliquam. Sit risus, vulputate non quisque 
                        vivamus auctor. Mauris sit venenatis gravida donec sed ridiculus 
                        enim velit. Iaculis condimentum in bibendum sed. Risus nec morbi 
                        dolor feugiat egestas. Tincidunt vestibulum tempus odio in ut tortor,
                        tristique congue. Sollicitudin interdum blandit tincidunt id cras nisl, 
                        nibh. Nibh ac nibh pellentesque mauris a, nibh est nisl, et. Id sed amet, 
                        eu praesent imperdiet lobortis facilisis aliquam vitae. Libero, ac quisque 
                        interdum et eget sit. Enim dictum tellus dignissim mauris, quis lorem proin neque. 
                        
                        In velit massa laoreet ullamcorper turpis odio cursus nunc. Mi elementum cum non vulputate. 
                        Integer elit natoque bibendum nisi, eleifend quis varius. Tincidunt auctor eget augue gravida enim est. 
                        Non porttitor cursus auctor quis. Non, tempor, sollicitudin turpis viverra ut. Volutpat, 
                        faucibus ultrices proin rhoncus mauris tincidunt vehicula euismod. Orci nulla diam orci hendrerit quam 
                        et id nullam. Nisl odio lectus molestie tellus.
                    </p>
                </Col>
                <Col className="rec-box" sm={10}>
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
                         
                    {/* <Link to="/videorecord" className="pre-btn">                    
                        <CircleLeft />
                        Preview
                    </Link>                 */}
                    <div className="d-flex ">
                        <Link to="/home" className="nxt-btn">
                            Submit
                            <CircleRight />
                        </Link>
                        {/* <Button className="skp-btn">
                            Skip
                        </Button> */}
                    </div>            
                </div>
            </div>
            
        </Container>
    )
}

export default TestRecord;