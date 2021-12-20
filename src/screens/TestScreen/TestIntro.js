import React, { useState } from 'react'
import { Container, Col, Row, Form, Card, ProgressBar, Table, Tab, Tabs } from 'react-bootstrap'
import Button from '@restart/ui/esm/Button'
import { Link, useLocation, useHistory } from 'react-router-dom';

const TestIntro = () => {
    const location = useLocation();
    const history = useHistory();
    const takeTest = () => {
        history.push({ pathname: '/question-page', state: location.state });
    }
    return (
        <Container className="testIntro pt-3 ">{/*testIntro */}
            <div className="m-auto mt-2 mt-lg-4">
                <h3 className="heading-test text-center mb-2 mb-md-3">Test Instructions</h3>
                <Row className=" mt-5 mt-lg-0">
                    <Col lg={6} md={6} sm={6} xs={6} className="text-sm-start">
                        <h5 className="head-tit">Test Name: Test1</h5>
                        <h5 className="head-tit">Subject: Subject1</h5>
                        <h5 className="head-tit">Role: UI/UX</h5>
                    </Col>
                    <Col lg={6} md={6} sm={6} xs={6} className="text-sm-end">
                        <h5 className="head-tit">No of Questions: 20</h5>
                        <h5 className="head-tit">Total Score: 100</h5>
                        <h5 className="head-tit">Total Time: 180 Minutes</h5>
                    </Col>
                </Row>

                <Row className="justify-content-center">
                    <Col lg={11} md={10} sm={12} xs={12} className="parag-test my-2 my-sm-4 ">
                        <p>Instrusctions <br /><br />
                            Nam purus auctor et integer sed. Amet, quis aliquam turpis velit. Amet et,
                            nec ut morbi sit id. Nulla nibh tortor, purus massa, id adipiscing non euismod
                            aliquam. Sit risus, vulputate non quisque vivamus auctor. Mauris sit venenatis
                            gravida donec sed ridiculus enim velit. Iaculis condimentum in bibendum sed.
                            Risus nec morbi dolor feugiat egestas. Tincidunt vestibulum tempus odio in ut
                            tortor, tristique congue. Sollicitudin interdum blandit tincidunt id cras nisl,
                            nibh. Nibh ac nibh pellentesque mauris a, nibh est nisl, et. Id sed amet,
                            eu praesent imperdiet lobortis facilisis aliquam vitae. Libero, ac quisque
                            interdum et eget sit. Enim dictum tellus dignissim mauris, quis lorem proin neque.
                            In velit massa laoreet ullamcorper turpis odio cursus nunc. Mi elementum cum non vulputate.
                            Integer elit natoque bibendum nisi, eleifend quis varius. <br />

                            Tincidunt auctor eget augue gravida enim est. Non porttitor cursus auctor quis.
                            Non, tempor, sollicitudin turpis viverra ut. Volutpat, faucibus ultrices proin rhoncus <br />

                            Nam purus auctor et integer sed. Amet, quis aliquam turpis velit. Amet et, nec ut morbi sit id.
                            Nulla nibh tortor, purus massa, id adipiscing non euismod aliquam<br />
                        </p>
                    </Col>
                </Row>

                <Row className="pb-4 pb-sm-0">
                    <Col className="text-sm-start">
                        <Button className="btn-ext">
                            Exit
                        </Button>
                    </Col>
                    <Button onClick={takeTest} className="btn-start">
                        Start Test
                    </Button>
                </Row>
            </div>

        </Container>
    )
}

export default TestIntro;