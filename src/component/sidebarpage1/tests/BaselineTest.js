import React from 'react'
import { Link } from 'react-router-dom'
import { Col, Row, Container, Button} from 'react-bootstrap'

const BaselineTest =()=> {
    return (
        <Container>
            <Col lg={12}>
                <div className="text-center mt-5 mb-3" style={{color:'#003866'}}><h5 >Test Instructions</h5></div>
                <Row style={{color:'#003866'}} className="mb-2">
                    <Col><p className="text-start">Test Name : Test 1</p></Col>
                    <Col ><p className="text-end">No of Questions : 20</p></Col>
                </Row>
                <Row style={{color:'#003866'}}  className="mb-2">
                <Col><p className="text-start">Test Name : Test 1</p></Col>
                    <Col ><p className="text-end">Total Score : 100 1</p></Col>
                </Row>
                <Row style={{color:'#003866'}}  className="mb-5">
                    <Col><p className="text-start">Role : UI/UX</p></Col>
                    <Col><p className="text-end">Total Time : 180 Minutes</p></Col>
                </Row>
                <div className="mb-4" style={{color:'#003866'}} >
                    <p className="text-start" >
                        Instrusctions <br/>
                        Nam purus auctor et integer sed. Amet, quis aliquam turpis velit. Amet et, nec ut morbi sit id. 
                        Nulla nibh tortor, purus massa, id adipiscing non euismod aliquam. Sit risus, vulputate non quisque 
                        vivamus auctor. Mauris sit venenatis gravida donec sed ridiculus enim velit. Iaculis condimentum in 
                        bibendum sed. Risus nec morbi dolor feugiat egestas. Tincidunt vestibulum tempus odio in ut tortor, 
                        tristique congue. Sollicitudin interdum blandit tincidunt id cras nisl, nibh. Nibh ac nibh pellentesque 
                        mauris a, nibh est nisl, et. Id sed amet, eu praesent imperdiet lobortis facilisis aliquam vitae. Libero, 
                        ac quisque interdum et eget sit. Enim dictum tellus dignissim mauris, quis lorem proin neque. In velit massa 
                        laoreet ullamcorper turpis odio cursus nunc.Mi elementum cum non vulputate. Integer elit natoque bibendum 
                        nisi, eleifend quis varius. Tincidunt auctor eget augue gravida enim est. Non porttitor cursus auctor quis. 
                        Non, tempor, sollicitudin turpis viverra ut. Volutpat, faucibus ultrices proin rhoncus     
                        
                    </p>          

                        <p>Nam purus auctor et integer sed. Amet, quis aliquam turpis velit. Amet et, nec ut morbi sit id. Nulla nibh tortor,
                        purus massa, id adipiscing non euismod aliquam    </p>
                </div>
                <Row className="mb-5">
                    <Col className="text-start"><Button variant="danger" >Exit </Button></Col>
                    <Col className="text-end"><a className="btn btn-success" href="/testQuestion">Start</a></Col>
                </Row>               
            </Col>
        </Container>
    )
}

export default BaselineTest
