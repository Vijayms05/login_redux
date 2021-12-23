import React, { useEffect, useMemo, useState } from 'react';
import Button from '@restart/ui/esm/Button';
import { ToggleButtonGroup, ToggleButton, Row, Col, } from 'react-bootstrap'
import { CircleLeft, CircleRight, PausBtn, RecordMicIcon } from '../../assets/images/index'
import useRecorder from "../voiceRecoder/useRecorder";
const AudioRecorder = () => {
    let [audioURL, isRecording, startRecording, stopRecording,] = useRecorder();
    return (
        <Col className="rec-box">
            <div className="rec-pas-btn-aud">
                {!isRecording &&
                    <div className="rec-ply-icon">
                        <Button onClick={(startRecording)} disabled={isRecording}>
                            <RecordMicIcon />
                        </Button>
                    </div>
                }
                {isRecording &&
                    <div className="rec-ply-icon">
                        <Button onClick={(stopRecording)} disabled={!isRecording}>
                            <PausBtn />
                        </Button>
                    </div>
                }
            </div>
            {audioURL &&
                <audio autoplay className="rec-aud-tag" src={audioURL} controls controlsList="nodownload noplaybackrate"></audio>
            }
        </Col>
    )
}
export default AudioRecorder