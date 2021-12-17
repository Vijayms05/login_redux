import React, { useState, useEffect } from 'react'
import {
    Container,
    Col,
    Row,
    Form,
    Card,
    ProgressBar
} from 'react-bootstrap'
import {
    SearchIcon,
    PlaybtnIcon,
    BookBackImg,
    SearchIconRight,
    EyeIcon
} from '../../assets/images/index'
import '../../screens/home/Home.css'
import '../../screens/home/responsive.css'
import Button from '@restart/ui/esm/Button'
import { Link, useHistory } from 'react-router-dom'
import HomeService from '../../service/HomeService'
import { ErrorHandler } from '../../service/ErrorHandler'

const classes = [
    "Class 12",
    "Class 11",
    "Class 10"
];

const Subscription = (props) => {
    const [searchTerm, setSearchTerm] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    const [courselist, setCourseList] = useState([]);
    const [subscriptionList, setSubscriptionList] = useState([]);
    const [subscription, setSubscription] = useState('')


    const history = useHistory();
    const handleChange = event => {
        setSearchTerm(event.target.value);
    };
    // useEffect(() => {


    //     const results = classes.filter(classe =>
    //         classe.toLowerCase().includes(searchTerm)
    //     );
    //     setSearchResults(results);
    // }, [searchTerm]);
    useEffect(() => {
        HomeService.courseList().then((res) => {
            const response = res.data;
            if (response?.status == 'success') {
                setCourseList(response.course_list);
                setSubscriptionList(response.my_courses)
            } else if (response.status == 'error') {
                alert(response?.message);
            }
            // console.log(subscriptionList);
            // console.log(courselist)
        }).catch(function (error) {
            ErrorHandler(error);
        });
    }, [])

    const now = 30

    return (
        <Container fluid className="py-md-0 pt-sm-2 pt-2 pt-md-0 mt-5 mt-md-0">
            <Row className="mt-2">
                <Col xs={12} sm={12} md={6} lg={8} className="mb-2 mt-2 text-center">
                    <Form.Group className="search-box text-center">
                        <Button className="searchrole">
                            <SearchIcon />
                        </Button>
                        <Form.Control
                            type="text"
                            placeholder="Search Role catalogue"
                            size="md" className="search-input"
                            value={searchTerm}
                            onChange={handleChange}
                        />
                    </Form.Group>
                </Col>
                <Col sm={6} md={6} lg={3} className="mb-2 mt-2 sub-filter" >
                    <Form.Select className="select-form" size="lg" >
                        <option>Filters</option>
                        <option>Large select</option>
                        <option>Large select</option>
                    </Form.Select>
                </Col>
            </Row>
            <Row className="sub-search mt-4">
                <Col xs={12} md={6} lg={8} >
                    <h5 className="mb-2 mb-md-0 sub-header" style={{ color: '#003866', paddingLeft: '15px !important' }}>My Subscriptions</h5>
                </Col>
                <Col xs={12} md={6} lg={4}>
                    <Form.Group className="w-90 search-box search-box-right">
                        <Button className="pwd-btn mt-1">
                            <SearchIconRight />
                        </Button>
                        <Form.Control
                            type="text"
                            placeholder="Search My subscriptions"
                            size="md"
                            className="search-input-right"
                        />
                    </Form.Group>
                </Col>
            </Row>
            <Row>
                {subscriptionList.length > 0 &&
                    subscriptionList.map((item, index) => {
                        return (
                            <Col xl={3} lg={4} md={6} sm={6} className="mb-3 sub-lst">
                                <Card onClick={() => history.push({ pathname: '/subscription-list', state: item.user_subscription_id })}>
                                    <Card.Body className="class-card">
                                        <Card.Title className="mb-3">
                                            {item.name}
                                        </Card.Title>
                                        <Card.Text className={item.status == 1 ? "sub-active mb-1 mt-2" : "sub-inactive mb-1 mt-2"}>
                                            Subscription : {item.status == 1 ? 'Active' : 'Inactive'}
                                        </Card.Text>
                                        <Card.Text className="mb-2 mt-3" style={{ fontSize: '13.5px', fontFamily: 'f3', color: '#0B171B' }}>
                                            {item.description}
                                        </Card.Text>
                                        <Card.Text className="text-start mb-0" style={{ fontSize: '13.5px', fontFamily: 'f3', color: '#0B171B' }}>In Progress</Card.Text><div>
                                            <div className="prog-bar-subscrip d-inline-flex align-items-center justify-content-center">
                                                <ProgressBar now={now} />
                                                <p className="p-0 mb-0 ms-2 f3-13 text-black">{now}%</p>
                                            </div>
                                        </div>
                                        <div className="play-vid">
                                            <PlaybtnIcon />
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                        )
                    })

                }
            </Row>
            <Row>
                <Col className="role-tit">
                    <h5>Role based tests</h5>
                </Col>
            </Row>
            <Row>
                {
                    courselist.map((test, index) => {
                        return (
                            <Col xl={3} lg={4} md={6} sm={6} className="mb-3 sub-lst">
                                {/* <Link to="/role-based-test"> */}
                                <Card>
                                    <Card.Body>
                                        <Card.Title className="mb-3" key={index.name}>
                                            {test.name}
                                        </Card.Title>
                                        {/* <Card.Text className="sub-active mb-1 mt-2"> 
                                                Subscription : Active
                                            </Card.Text> */}
                                        <Card.Text className="mb-2 mt-3" style={{ fontSize: '13.5px', fontFamily: 'f3' }} >
                                            {test.description}
                                            {/* Donec sed erat ut magna suscipit mattis. Aliquam erat volutpat.
                                                Morbi in orci risus. Donec pretium */}
                                        </Card.Text>
                                        <div>
                                            {/* <Card.Text className="text-start mb-0">In Progress</Card.Text>
                                                <div className="prog-bar-subscrip d-inline-flex align-items-center justify-content-center">
                                                    <ProgressBar now={now} />
                                                    <p className="p-0 mb-0 ms-2 f3-13 text-black">{now}%</p>
                                                </div> */}
                                        </div>
                                        {/* <div className="play-vid">
                                                <PlaybtnIcon />
                                            </div> */}
                                        <Row>
                                            {test.base_line_test !== 0 ?
                                                (
                                                    <Col>
                                                        <Button
                                                            className="anal-btn "
                                                            style={{ border: '1px solid #45acff' }}
                                                            onClick={() => {
                                                                alert('Base Line Test')
                                                            }}
                                                        >
                                                            Base Line Test
                                                        </Button>
                                                    </Col>
                                                ) : ''}
                                            <Col>
                                                <Button
                                                    className="anal-btn"
                                                    style={{ border: '1px solid #45acff' }}
                                                    onClick={() => {
                                                        history.push({ pathname: '/role-based-test', state: test.subscription_id })

                                                    }
                                                    }
                                                >
                                                    Buy
                                                </Button>
                                            </Col>
                                        </Row>
                                    </Card.Body>
                                </Card>
                                {/* </Link> */}
                            </Col>
                        )
                    })
                }
            </Row >
            <Row>
                <Col className="role-tit">
                    <h5>Book-Qs</h5>
                </Col>
            </Row>
            <Row>
                <Col xl={3} lg={4} md={6} sm={6} className="mb-3 w1400-20">
                    <Link className="book-box w-100">
                        <BookBackImg />
                        <div className="play-vid-box">
                            <div className="play-vid-in">
                                <PlaybtnIcon />
                            </div>
                        </div>
                    </Link>
                </Col>
            </Row>
        </Container >
    );
}

export default Subscription