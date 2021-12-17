import React, { useState } from 'react'
import { Container, Col, Row, Form, Card, ProgressBar, Table, Tab, Tabs } from 'react-bootstrap'
import Button from '@restart/ui/esm/Button'
import { Link, useHistory } from 'react-router-dom'
// import {history} from '../../routes/Routes'

const Baseline = (props) => {
    const history = useHistory();
    const onBaseline = () => {
        // history.push({pathname:'/testintro'});
        history.push('/testintro');
    }
    return (
        <Col sm={12} md={12}>
            {props.data == null ?
                <div>
                    {/* <h6>Test Name</h6> */}
                    <div className="in-box-tab py-1">
                        <p>UI - UX Baseline</p>
                        <div className="in-box-tab me-2">
                            <div className="text-center">
                                <button style={{ backgroundColor: '#4DD188', color: 'white', borderRadius: '13px', width: '98px', height: '32px' }}
                                    className="btn mt-3 mb-3" onClick={onBaseline}>Task Test
                                </button>
                            </div>

                            <div className="test-dot-tabl"></div>

                            {/* <Link to="/testintro">Task Test</Link> */}

                        </div>
                    </div>
                </div>
                :
                <div>
                    {/* <h6>Test Name</h6> */}
                    <div className="in-box-tab py-1">
                        <p>UI - UX Baseline</p>
                        <div className="in-box-tab me-2">
                            <div className="text-center">
                                <button style={{ backgroundColor: '#4DD188', color: 'white', borderRadius: '13px', width: '98px', height: '32px' }}
                                    className="btn mt-3 mb-3" >Analyze Results
                                </button>
                            </div>

                            <div className="test-dot-tabl"></div>

                            {/* <Link to="/testintro">Task Test</Link> */}

                        </div>
                    </div>
                </div>
            }
        </Col>
    )
}

export default Baseline;