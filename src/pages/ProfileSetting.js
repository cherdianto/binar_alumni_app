import React from 'react'
import { Card, Col, Container, Form, Row, Nav, Tab } from 'react-bootstrap'
import NavbarComponent from '../components/navbar/Navbar'
import { useDispatch, useSelector } from 'react-redux'
import Footer from '../components/footer/Footer'

function ProfileSetting() {
    // const { uid, displayName, email, phoneNumber, photoUrl } = useSelector(state => state.auth.user.providerData[0])
    // const emailMember = (uid) ? uid : 'Guest.'
    // dummy data 
    const email = 'email@email.com'
    const displayName = 'Candra Herdianto'

    return (
        <Container fluid>
            <NavbarComponent />
            <Container className="hcustom">
                <Tab.Container defaultActiveKey="profile">
                    <Row className="gutterSmall py-3">
                        <Col md={4} className="d-none d-md-block">
                        {/* make menu fixed position and full width */}
                            <Card> 
                                <Card.Body>
                                    <Nav className="flex-column nav-gap-y-1" variant="pills">
                                        <Nav.Item>
                                            <Nav.Link eventKey="profile" className="has-icon">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-user mr-2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>Profile Information
                                            </Nav.Link>
                                        
                                        
                                            <Nav.Link eventKey="account" className="has-icon nav-link-faded">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-settings mr-2"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>Account Settings
                                            </Nav.Link>
                                        
                                        
                                            <Nav.Link eventKey="security" className="has-icon nav-link-faded">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-shield mr-2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>Security
                                            </Nav.Link>
                                        
                                        
                                            {/* <Nav.Link eventKey="notification" className="has-icon nav-link-faded">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-bell mr-2"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg>Notification
                                            </Nav.Link>
                                        
                                        
                                            <Nav.Link eventKey="billing" className="has-icon nav-link-faded">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-credit-card mr-2"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect><line x1="1" y1="10" x2="23" y2="10"></line></svg>Billing
                                            </Nav.Link> */}
                                        </Nav.Item>
                                    </Nav>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={8}>
                            <Card>
                                <Card.Header className="border-bottom mb-3 d-md-none">
                                    <Nav justify variant="pills">
                                        <Nav.Item>
                                            <Nav.Link eventKey="profile" className="has-icon">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-user"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                                            </Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="account" className="has-icon">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-settings"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>
                                            </Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="security" className="has-icon">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-shield"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
                                            </Nav.Link>
                                        </Nav.Item>
                                        {/* <Nav.Item>
                                            <Nav.Link eventKey="notification" className="has-icon">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-bell"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg>
                                            </Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="billing" className="has-icon">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-credit-card"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect><line x1="1" y1="10" x2="23" y2="10"></line></svg>
                                            </Nav.Link>
                                        </Nav.Item> */}
                                    </Nav>
                                    {/* <ul class="nav nav-tabs card-header-tabs" role="tablist">
                                        <li class="nav-item">
                                        <a href="#profile" data-toggle="tab" class="nav-link has-icon active"></a>
                                        </li>
                                        <li class="nav-item">
                                        <a href="#account" data-toggle="tab" class="nav-link has-icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-settings"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg></a>
                                        </li>
                                        <li class="nav-item">
                                        <a href="#security" data-toggle="tab" class="nav-link has-icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-shield"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg></a>
                                        </li>
                                        <li class="nav-item">
                                        <a href="#notification" data-toggle="tab" class="nav-link has-icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-bell"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg></a>
                                        </li>
                                        <li class="nav-item">
                                        <a href="#billing" data-toggle="tab" class="nav-link has-icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-credit-card"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect><line x1="1" y1="10" x2="23" y2="10"></line></svg></a>
                                        </li>
                                    </ul> */}
                                </Card.Header>
                                <Card.Body>
                                    <Tab.Content>
                                        <Tab.Pane eventKey="profile">
                                            <h6>YOUR PROFILE INFORMATION</h6>
                                            <hr />
                                            <form>
                                            <div class="form-group">
                                                <label for="fullName">Full Name</label>
                                                <input type="text" class="form-control" id="fullName" aria-describedby="fullNameHelp" placeholder="Enter your fullname" value="Kenneth Valdez" />
                                                <small id="fullNameHelp" class="form-text text-muted">Your name may appear around here where you are mentioned. You can change or remove it at any time.</small>
                                            </div>
                                            <div class="form-group">
                                                <label for="bio">Your Bio</label>
                                                <textarea class="form-control autosize" id="bio" placeholder="Write something about you" >A front-end developer that focus more on user interface design, a web interface wizard, a connector of awesomeness.</textarea>
                                            </div>
                                            <div class="form-group">
                                                <label for="url">URL</label>
                                                <input type="text" class="form-control" id="url" placeholder="Enter your website address" value="http://benije.ke/pozzivkij" />
                                            </div>
                                            <div class="form-group">
                                                <label for="location">Location</label>
                                                <input type="text" class="form-control" id="location" placeholder="Enter your location" value="Bay Area, San Francisco, CA" />
                                            </div>
                                            <div class="form-group small text-muted">
                                                All of the fields on this page are optional and can be deleted at any time, and by filling them out, you're giving us consent to share this data wherever your user profile appears.
                                            </div>
                                            <button type="button" class="btn btn-primary">Update Profile</button>
                                            <button type="reset" class="btn btn-light">Reset Changes</button>
                                            </form>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="account">
                                            <h6>ACCOUNT SETTINGS</h6>
                                            <hr />
                                            <form>
                                            <div class="form-group">
                                                <label for="username">Username</label>
                                                <input type="text" class="form-control" id="username" aria-describedby="usernameHelp" placeholder="Enter your username" value="kennethvaldez" />
                                                <small id="usernameHelp" class="form-text text-muted">After changing your username, your old username becomes available for anyone else to claim.</small>
                                            </div>
                                            <hr />
                                            <div class="form-group">
                                                <label class="d-block text-danger">Delete Account</label>
                                                <p class="text-muted font-size-sm">Once you delete your account, there is no going back. Please be certain.</p>
                                            </div>
                                            <button class="btn btn-danger" type="button">Delete Account</button>
                                            </form>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="security">
                                            <h6>SECURITY SETTINGS</h6>
                                            <hr />
                                            <form>
                                            <div class="form-group">
                                                <label class="d-block">Change Password</label>
                                                <input type="text" class="form-control" placeholder="Enter your old password" />
                                                <input type="text" class="form-control mt-1" placeholder="New password" />
                                                <input type="text" class="form-control mt-1" placeholder="Confirm new password" />
                                            </div>
                                            </form>
                                            <hr />
                                            <form>
                                            <div class="form-group">
                                                <label class="d-block">Two Factor Authentication</label>
                                                <button class="btn btn-info" type="button">Enable two-factor authentication</button>
                                                <p class="small text-muted mt-2">Two-factor authentication adds an additional layer of security to your account by requiring more than just a password to log in.</p>
                                            </div>
                                            </form>
                                            <hr />
                                            <form>
                                            <div class="form-group mb-0">
                                                <label class="d-block">Sessions</label>
                                                <p class="font-size-sm text-secondary">This is a list of devices that have logged into your account. Revoke any sessions that you do not recognize.</p>
                                                <ul class="list-group list-group-sm">
                                                <li class="list-group-item has-icon">
                                                    <div>
                                                    <h6 class="mb-0">San Francisco City 190.24.335.55</h6>
                                                    <small class="text-muted">Your current session seen in United States</small>
                                                    </div>
                                                    <button class="btn btn-light btn-sm ml-auto" type="button">More info</button>
                                                </li>
                                                </ul>
                                            </div>
                                            </form>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="notification">
                                            <h6>NOTIFICATION SETTINGS</h6>
                                            <hr />
                                            <form>
                                            <div class="form-group">
                                                <label class="d-block mb-0">Security Alerts</label>
                                                <div class="small text-muted mb-3">Receive security alert notifications via email</div>
                                                <div class="custom-control custom-checkbox">
                                                <input type="checkbox" class="custom-control-input" id="customCheck1" checked="" />
                                                <label class="custom-control-label" for="customCheck1">Email each time a vulnerability is found</label>
                                                </div>
                                                <div class="custom-control custom-checkbox">
                                                <input type="checkbox" class="custom-control-input" id="customCheck2" checked="" />
                                                <label class="custom-control-label" for="customCheck2">Email a digest summary of vulnerability</label>
                                                </div>
                                            </div>
                                            <div class="form-group mb-0">
                                                <label class="d-block">SMS Notifications</label>
                                                <ul class="list-group list-group-sm">
                                                <li class="list-group-item has-icon">
                                                    Comments
                                                    <div class="custom-control custom-control-nolabel custom-switch ml-auto">
                                                    <input type="checkbox" class="custom-control-input" id="customSwitch1" checked="" />
                                                    <label class="custom-control-label" for="customSwitch1"></label>
                                                    </div>
                                                </li>
                                                <li class="list-group-item has-icon">
                                                    Updates From People
                                                    <div class="custom-control custom-control-nolabel custom-switch ml-auto">
                                                    <input type="checkbox" class="custom-control-input" id="customSwitch2" />
                                                    <label class="custom-control-label" for="customSwitch2"></label>
                                                    </div>
                                                </li>
                                                <li class="list-group-item has-icon">
                                                    Reminders
                                                    <div class="custom-control custom-control-nolabel custom-switch ml-auto">
                                                    <input type="checkbox" class="custom-control-input" id="customSwitch3" checked="" />
                                                    <label class="custom-control-label" for="customSwitch3"></label>
                                                    </div>
                                                </li>
                                                <li class="list-group-item has-icon">
                                                    Events
                                                    <div class="custom-control custom-control-nolabel custom-switch ml-auto">
                                                    <input type="checkbox" class="custom-control-input" id="customSwitch4" checked="" />
                                                    <label class="custom-control-label" for="customSwitch4"></label>
                                                    </div>
                                                </li>
                                                <li class="list-group-item has-icon">
                                                    Pages You Follow
                                                    <div class="custom-control custom-control-nolabel custom-switch ml-auto">
                                                    <input type="checkbox" class="custom-control-input" id="customSwitch5" />
                                                    <label class="custom-control-label" for="customSwitch5"></label>
                                                    </div>
                                                </li>
                                                </ul>
                                            </div>
                                            </form>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="billing">
                                            <h6>BILLING SETTINGS</h6>
                                            <hr />
                                            <form>
                                            <div class="form-group">
                                                <label class="d-block mb-0">Payment Method</label>
                                                <div class="small text-muted mb-3">You have not added a payment method</div>
                                                <button class="btn btn-info" type="button">Add Payment Method</button>
                                            </div>
                                            <div class="form-group mb-0">
                                                <label class="d-block">Payment History</label>
                                                <div class="border border-gray-500 bg-gray-200 p-3 text-center font-size-sm">You have not made any payment.</div>
                                            </div>
                                            </form>
                                        </Tab.Pane>
                                    </Tab.Content>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>    
                </Tab.Container>
            </Container>
            <Footer />
        </Container>
    )
}

export default ProfileSetting
