import React from 'react'
import { Card, Col, Container, Form, ProgressBar, Row } from 'react-bootstrap'
import NavbarComponent from '../components/navbar/Navbar'
import { useDispatch, useSelector } from 'react-redux'
import Footer from '../components/footer/Footer'
import classes from './Profile.module.css'
import { Link } from 'react-router-dom'

function Profile() {
    // const { uid, displayName, email, phoneNumber, photoUrl } = useSelector(state => state.auth.user.providerData[0])
    // const emailMember = (uid) ? uid : 'Guest.'
    // dummy data 
    const email = 'email@email.com'
    const displayName = 'Candra Herdianto'

    return (
        <Container fluid>
            <NavbarComponent />
                <Container className="justify-content-between">
                <Row className={classes.gutterSmall}>
                    <Col md={4} className="text-center py-3 mb-3"> 
                        <Card>
                            <Card.Body>
                                <div className="d-flex flex-column align-items-center text-center">
                                    <img src="https://bootdey.com/img/Content/avatar/avatar6.png" alt="Admin" className="rounded-circle p-1 bg-primary" width="110" />
                                    <div className="mt-3">
                                        <h4>{ displayName ? displayName : 'Your Name' }</h4>
                                        <p className="text-secondary mb-1">Full Stack Developer</p>
                                        <p className="text-muted font-size-sm mb-1">Bay Area, San Francisco, CA</p>
                                        <p className="text-muted font-size-sm mb-3">{ email }</p>
                                        <button className="btn btn-primary mx-2">Follow</button>
                                        <button className="btn btn-outline-primary mx-2">Message</button>
                                    </div>
                                </div>
                                <hr className="my-4" />
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                                        <h6 className="mb-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-globe me-2 icon-inline"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>Website</h6>
                                        <span className="text-secondary">https://bootdey.com</span>
                                    </li>
                                    <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                                        <h6 className="mb-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-github me-2 icon-inline"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>Github</h6>
                                        <span className="text-secondary">bootdey</span>
                                    </li>
                                    <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                                        <h6 className="mb-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-twitter me-2 icon-inline text-info"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>Twitter</h6>
                                        <span className="text-secondary">@bootdey</span>
                                    </li>
                                </ul>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={8} className="py-3">
                        <Card className="mb-3">
                            <Card.Body>
                                <Row>
                                    <Col sm={3}>
                                    <h6 className="mb-0">Full Name</h6>
                                    </Col>
                                    <Col sm={9} className="text-secondary">
                                    Kenneth Valdez
                                    </Col>
                                </Row>
                                <hr />
                                <Row>
                                    <Col sm={3}>
                                    <h6 className="mb-0">Email</h6>
                                    </Col>
                                    <Col sm={9} className="text-secondary">
                                    fip@jukmuh.al
                                    </Col>
                                </Row>
                                <hr />
                                <Row>
                                    <Col sm={3}>
                                    <h6 className="mb-0">Phone</h6>
                                    </Col>
                                    <Col sm={9} className="text-secondary">
                                    (239) 816-9029
                                    </Col>
                                </Row>
                                <hr />
                                <Row>
                                    <Col sm={3}>
                                    <h6 className="mb-0">Mobile</h6>
                                    </Col>
                                    <Col sm={9} className="text-secondary">
                                    (320) 380-4539
                                    </Col>
                                </Row>
                                <hr />
                                <Row>
                                    <Col sm={3}>
                                    <h6 className="mb-0">Address</h6>
                                    </Col>
                                    <Col sm={9} className="text-secondary">
                                    Bay Area, San Francisco, CA
                                    </Col>
                                </Row>
                                <hr />
                                <Row>
                                    <div className="col-sm-12">
                                    <Link className="btn btn-primary " to="/profile-setting">Edit</Link>
                                    </div>
                                </Row>
                            </Card.Body>
                        </Card>
                        <Row className={classes.guttersSmall}>
                            <Col className="mb-3">
                                <Card className="h-100">
                                    <div class="card-body">
                                    <h6 class="d-flex align-items-center mb-3"><i class="material-icons text-info mr-2">assignment</i>Project Status</h6>
                                    <small>Web Design</small>
                                    <ProgressBar now={60} />
                
                                    <small>Website Markup</small>
                                    <ProgressBar now={60} />
                
                                    <small>One Page</small>
                                    <ProgressBar now={60} />
                
                                    <small>Mobile Template</small>
                                    <ProgressBar now={60} />
                
                                    <small>Backend API</small>
                                    <ProgressBar now={60} />
                
                                    </div>
                                </Card>
                            </Col>
                            <Col className="mb-3">
                                <Card className="h-100">
                                    <Card.Body>
                                        <h6 class="d-flex align-items-center mb-3"><i class="material-icons text-info mr-2">assignment</i>Project Status</h6>
                                        <small>Web Design</small>
                                        <ProgressBar now={60} />
                    
                                        <small>Website Markup</small>
                                        <ProgressBar now={60} />
                    
                                        <small>One Page</small>
                                        <ProgressBar now={60} />
                    
                                        <small>Mobile Template</small>
                                        <ProgressBar now={60} />
                    
                                        <small>Backend API</small>
                                        <ProgressBar now={60} />
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
            <Footer />
        </Container>
    )
}

export default Profile
