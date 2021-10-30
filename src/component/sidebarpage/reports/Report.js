import React from 'react'
import { Container, Table, Row, Col} from 'react-bootstrap'
import BaselineReport from './BaselineReport '
import SkillBuilding from './SkillBuilding'
import SkillBuildingReport from './SkillBuilding'

function Report () {
    
    return (
       <Container>
           <Row>
                <div className="col" >
                    <div className="mb-3 mt-4 mx-3">
                        <h5 className="text-start" style={{color:'#003866'}}>Reports</h5>
                    </div>
                    <Table  className="mb-3 mt-4 mx-3 ">
                        <thead>
                            <tr>
                                <th>My Subscriptions</th>
                                <th>Journey Status</th>
                                <th>Baseline Details</th>
                                <th>Skill Building Score</th>
                                <th>Certification Details</th>
                                <th colSpan="2">Current Rank</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>B Tech 3rd Year</td>
                                <td><a href="#" className="btn btn-outline-primary">Certified</a></td>
                                <td><a style={{backgroundColor:'#298EE0',color:'white'}} className="btn" >Detailed view</a></td>

                                <td><a style={{backgroundColor:'#298EE0',color:'white'}} className="btn" href="/skillbuilding" onClick={()=>{SkillBuilding()}}>Detailed view</a></td>
                                <td><a style={{backgroundColor:'#298EE0',color:'white'}} className="btn">Detailed view</a></td>
                                <td style={{color:'#298EE0'}} >
                                    <Row>
                                        <Col><a href="#">15/60</a></Col>
                                        <Col>
                                            <div className="mx-4"
                                            style={{justifyContent:'end', width: '10px', height: '10px', borderRadius: '50%', backgroundColor: 'black',boxShadow: '0px 15px 0px black, 0px 30px 0px black'}}
                                            ></div>
                                        </Col>
                                    </Row>
                                    
                                </td>                               
                            </tr>
                            <tr>
                                <td>B Tech 3rd Year</td>
                                <td><a href="#" className="btn btn-outline-primary">Certified</a></td>
                                <td><a style={{backgroundColor:'#298EE0',color:'white'}} className="btn">Detailed view</a></td>
                                <td><a style={{backgroundColor:'#298EE0',color:'white'}} className="btn">Detailed view</a></td>
                                <td><a style={{backgroundColor:'#298EE0',color:'white'}} className="btn">Detailed view</a></td>
                                <td style={{color:'#298EE0'}} >
                                    <Row>
                                        <Col><a href="#">15/60</a></Col>
                                        <Col>
                                            <div className="mx-4"
                                            style={{justifyContent:'end', width: '10px', height: '10px', borderRadius: '50%', backgroundColor: 'black',boxShadow: '0px 15px 0px black, 0px 30px 0px black'}}
                                            ></div>
                                        </Col>
                                    </Row>                                    
                                </td>                               
                            </tr>
                            <tr>
                                <td>B Tech 3rd Year</td>
                                <td><a href="#" className="btn btn-outline-primary">Certified</a></td>
                                <td><a style={{backgroundColor:'#298EE0',color:'white'}} className="btn" 
                                    href="/baselinereport" >Detailed view</a></td>
                                <td><a style={{backgroundColor:'#298EE0',color:'white'}} className="btn" 
                                    href="/skillbuilding">Detailed view</a></td>
                                <td><a style={{backgroundColor:'#298EE0',color:'white'}} className="btn"
                                href="/certificationreport">Detailed view</a></td>
                                <td style={{color:'#298EE0'}} >
                                    <Row>
                                        <Col><a href="#">15/60</a></Col>
                                        <Col>
                                            <div className="mx-4"
                                            style={{justifyContent:'end', width: '10px', height: '10px', borderRadius: '50%', backgroundColor: 'black',boxShadow: '0px 15px 0px black, 0px 30px 0px black'}}
                                            ></div>
                                        </Col>
                                    </Row>
                                    
                                </td>                               
                            </tr>
                            <tr>
                                <td>B Tech 3rd Year</td>
                                <td><a href="#" className="btn btn-outline-primary">Certified</a></td>
                                <td><a style={{backgroundColor:'#298EE0',color:'white'}} className="btn">Detailed view</a></td>
                                <td><a style={{backgroundColor:'#298EE0',color:'white'}} className="btn">Detailed view</a></td>
                                <td><a style={{backgroundColor:'#298EE0',color:'white'}} className="btn">Detailed view</a></td>
                                <td style={{color:'#298EE0'}} >
                                    <Row>
                                        <Col><a href="#">15/60</a></Col>
                                        <Col>
                                            <div className="mx-4"
                                            style={{justifyContent:'end', width: '10px', height: '10px', borderRadius: '50%', backgroundColor: 'black',boxShadow: '0px 15px 0px black, 0px 30px 0px black'}}
                                            ></div>
                                        </Col>
                                    </Row>
                                    
                                </td>                               
                            </tr>
                        </tbody>
                    </Table>
                </div>
           </Row>
       </Container>
    )
}

export default Report