import React, { useEffect, useMemo, useState } from 'react';
import Button from '@restart/ui/esm/Button';
import { ToggleButtonGroup, ToggleButton, Row, Col, } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import { CircleLeft, CircleRight, PausBtn, RecordMicIcon } from '../../assets/images/index'
import { data } from '../../locale/data';
import useRecorder from "../voiceRecoder/useRecorder";
import AudioPlayer from '../Player/AudioPlayer';
import AudioRecorder from './AudioRecorder';

const ComprehensionQuestions = (props) => {
    var data = props.data;
    const [radioValue, setRadioValue] = useState(null);
    const [textValue, setTextValue] = useState('');
    const [answer, setAnswer] = useState(null);
    const [options, setOptions] = useState([]);
    const [value, setValue] = useState([]);

    const handleChange1 = val => {
        var arr = [...value];
        var id = arr.filter(function (item) {
            return item == val
        });
        if (id.length > 0) {
            arr.pop(val);
        } else {
            arr.push(val);
        }
        setValue(arr);
        props.setOptions(arr);
    };
    const handleChange = (value) => {
        var arr = [];
        arr[0] = value;
        setRadioValue(value);
        props.setOptions(arr);
    }
    const handleAnswer = (e) => {
        setAnswer(e.target.value);
        props.setAnswer(e.target.value);
    }
    useEffect(() => {
        setAnswer(null);
        setValue([]);
        setRadioValue(null);
    }, [props])
    const AnswerType = (question) => {
        switch (question.answer_type) {
            case 1: return (
                <div>
                    {/* <input type="text" value={answer} onChange={handleAnswer} placeholder="paste your answer here" /> */}
                    <textarea value={answer} onChange={handleAnswer} />
                </div>
            );
            case 2: return (
                <div>
                    <textarea value={answer} onChange={handleAnswer} />
                    {/* <input type="text" value={answer} onChange={handleAnswer} placeholder="paste your answer here" /> */}
                </div>
            );
            case 3: return (
                <div>
                    <AudioRecorder />
                </div>
            );
            default: return <h1>No match match</h1>
        }
    }
    const QuestionOption = (question, index) => {
        switch (question.option_type) {
            case 1: return (
                <div>
                    <ToggleButton key={index} onClick={() => handleChange(question.id)} id={`tbg-radio-${index}`} aria-label={index}>
                        <span className="chs-lft">{index + 1}</span>
                        <span className="chs-ans">{question.option_text}</span>
                    </ToggleButton>
                </div>
            );
            case 2: return (2);
            case 3: return (
                <div>
                    <ToggleButton key={index} id={`tbg-radio-${index}`} onClick={() => handleChange(question.id)}>
                        <span className="chs-lft">{index + 1}</span>
                        <span className="chs-ans"><AudioPlayer url={question.audio_file} /></span>
                    </ToggleButton>
                </div>
            );
            case 4: return (
                <div>
                    <ToggleButton key={index} id={`tbg-radio-${index}`} onClick={() => handleChange(question.id)}>
                        <span className="chs-lft">{index + 1}</span>
                        <span className="chs-ans"><AudioPlayer url={question.url} /></span>
                    </ToggleButton>

                </div>
            );
            case 5: return (
                <div>
                    <ToggleButton key={index} id={`tbg-radio-${index}`} onClick={() => handleChange(question.id)}>
                        <span className="chs-lft">{index + 1}</span>
                        <span className="chs-ans">
                            <iframe width="560" height="315" src={question.url}
                                title="YouTube video player" frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowfullscreen></iframe>
                        </span>
                    </ToggleButton>
                </div>
            );
            default: return <h1>No Data</h1>

        }
    }

    const QuestionOptions = (question, index) => {
        switch (question.option_type) {
            case 1: return (
                <div>
                    <ToggleButton key={index} id={`tbg-radio-${index}`} aria-label={index}>
                        <input class="form-check-input" type="checkbox" name="hobbies" id="inlineCheckboxh1" value={question.id} onChange={handleChange1} />
                        <span className="chs-lft m-2 mt-0">{index + 1}</span>
                        <span className="chs-ans">{question.option_text}</span>
                    </ToggleButton>
                </div>
            );
            case 2: return (2);
            case 3: return (
                <div>
                    <ToggleButton key={index} id={`tbg-radio-${index}`} >
                        <input class="form-check-input" type="checkbox" name="hobbies" id="inlineCheckboxh1" value={question.id} onChange={handleChange1} />
                        <span className="chs-lft">{index + 1}</span>
                        <span className="chs-ans"><AudioPlayer url={question.audio_file} /></span>
                    </ToggleButton>
                </div>
            );
            case 4: return (
                <div>
                    <ToggleButton key={index} id={`tbg-radio-${index}`}  >
                        <input class="form-check-input" type="checkbox" name="hobbies" id="inlineCheckboxh1" value={question.id} onChange={handleChange1} />
                        <span className="chs-lft">{index + 1}</span>
                        <span className="chs-ans"><AudioPlayer url={question.url} /></span>
                    </ToggleButton>

                </div>
            );
            case 5: return (
                <div>
                    <ToggleButton key={index} id={`tbg-radio-${index}`} >
                        <input class="form-check-input" type="checkbox" name="hobbies" id="inlineCheckboxh1" value={question.id} onChange={handleChange1} />
                        <span className="chs-lft">{index + 1}</span>
                        <span className="chs-ans">
                            <iframe width="560" height="315" src={question.url}
                                title="YouTube video player" frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowfullscreen></iframe>
                        </span>
                    </ToggleButton>
                </div>
            );
            default: return <h1>No Data</h1>

        }
    }


    return (
        <div>
            {data.option_type == 1 ?
                <div>
                    <ToggleButtonGroup name={"option"} className="qus-tl-box" type="checkbox" value={radioValue} >
                        {data.options.map((item, index) => {
                            return (
                                <div>
                                    {QuestionOption(item, index)}
                                </div>
                            )
                        })
                        }
                    </ToggleButtonGroup>
                </div>
                :
                data.option_type == 2 ?
                    <div>
                        <ToggleButtonGroup className="qus-tl-box" type="checkbox" name="option">
                            {data.options.map((item, index) => {
                                return (
                                    <div>
                                        {QuestionOptions(item, index)}
                                    </div>
                                )
                            })
                            }
                        </ToggleButtonGroup>
                    </div>
                    :
                    data.option_type == 3 ?
                        <div>
                            <ToggleButtonGroup className="qus-tl-box" type="radio" name="options">
                                {data.options.map((item, index) => {
                                    return (
                                        <div>
                                            {QuestionOption(item, index)}
                                        </div>
                                    )
                                })
                                }
                            </ToggleButtonGroup>
                        </div>
                        :
                        data.option_type == 4 ?
                            <div>
                                <ToggleButtonGroup className="qus-tl-box" type="radio" name="options">
                                    <div>
                                        {AnswerType(data)}
                                    </div>
                                </ToggleButtonGroup>
                            </div>

                            : null
            }

        </div>
    )

}
export default ComprehensionQuestions

