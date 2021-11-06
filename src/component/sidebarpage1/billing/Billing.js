import React from 'react'
import { Container, Table, Row, Col} from 'react-bootstrap'

    
function Billing () {
    return (
       <Container fluid>
           <Row className="mt-5 mx-3">
                <Col xs={12}   >
                    <div className="mb-4  mx-3">
                        <h5 className="text-start" style={{color:'#003866'}}>Billing</h5>
                    </div>
                    <Table  className="mb-4 mt-4 mx-3 ">
                        <thead>
                            <tr className="m-3 text-center">
                                <th>Role/ Book - Q</th>
                                <th>Plan</th>
                                <th>Subscription Period</th>
                                <th>Subscription Cost</th>
                                <th>Journey Status</th>
                                <th colSpan="2">Invoice</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="m-3 text-center">
                                <td><a href="/billingprice">B Tech 3rd Year</a></td>
                                <td>Paid</td>
                                <td>90 days</td>
                                <td>Rs 400</td>
                                <td><button className="btn btn-outline" style={{color:'#156EB7'}}>Certified</button></td>
                                <td>
                                   <button className="btn btn-primary" >Download Invoice</button>                           
                                </td> 
                                <td>
                                    <div className="mx-4"
                                        style={{justifyContent:'end', width: '8px', height: '8px', 
                                            borderRadius: '50%', backgroundColor: 'black',
                                            boxShadow: '0px 12px 0px black, 0px 24px 0px black'}}
                                    ></div>                                                                         
                                </td>                               
                            </tr>
                            <tr className="m-3 text-center">
                                <td><a href="#">B Tech 3rd Year</a></td>
                                <td>Paid</td>
                                <td>90 days</td>
                                <td>Rs 400</td>
                                <td><button className="btn btn-outline" style={{color:'#156EB7'}}>Certified</button></td>
                                <td>
                                    <button className="btn btn-primary" >Download Invoice</button>
                                </td>   
                                <td>                                   
                                    <div className="mx-4"
                                        style={{justifyContent:'end', width: '8px', height: '8px', 
                                            borderRadius: '50%', backgroundColor: 'black',
                                            boxShadow: '0px 12px 0px black, 0px 24px 0px black'}}
                                    ></div>                                        
                                </td>                               
                            </tr>
                        </tbody>
                    </Table>
                </Col>
           </Row>
       </Container>
    )
}

export default Billing