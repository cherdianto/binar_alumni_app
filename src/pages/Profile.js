import React from 'react'
import { Card, Col, Container, Form, ProgressBar, Row } from 'react-bootstrap'
import NavbarComponent from '../components/navbar/Navbar'
import { useDispatch, useSelector } from 'react-redux'
import Footer from '../components/footer/Footer'
import classes from './Profile.module.css'
import { Link } from 'react-router-dom'
import CarrerSummariesComponent from '../components/profile/carrer/CarrerSummariesComponent'
import FormalEducationComponent from '../components/profile/formalEducation/FormalEducationComponent'
import FormalTrainingCertificationComponent from '../components/profile/formalTrainingCertification/FormalTrainingCertificationComponent'
import LanguageComponent from '../components/profile/language/LanguageComponent'

function Profile() {
    // const { uid, displayName, email, phoneNumber, photoUrl } = useSelector(state => state.auth.user.providerData[0])
    // const emailMember = (uid) ? uid : 'Guest.'
    // dummy data 
    const email = 'email@email.com'
    const displayName = 'Candra Herdianto'
    const fullName = 'Candra Herdianto'
    const currentCity = 'Enschede, Overrijsel'
    const currentCountry = 'The Netherlands'
    const website = 'webcreatia.com'
    const gitRepository = 'github.com/webcreatia'
    const facebook = 'facebook.com/candra'
    const instagram = '@candrh'
    const whatsapp = '081233212312'
    const telegram = 'telegram.com/123231'
    const specialization = 'Full Stack Developer'
    const introduction = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin elementum lacinia felis vitae volutpat. Sed ac risus massa. Vestibulum rhoncus laoreet rhoncus. Integer sed turpis ornare, varius mauris quis, egestas nisl. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Quisque massa erat, sollicitudin ac ante eu, varius ornare ligula. Donec lobortis pulvinar malesuada. Fusce ornare porta nulla id molestie. Mauris eu justo in dui dignissim tincidunt. Integer eleifend, ligula sed efficitur congue, metus ligula hendrerit mi, ut rhoncus orci nunc ac orci. Vivamus non vulputate erat. Nullam tristique arcu massa, eu viverra tortor convallis vitae. Sed id fermentum urna. Duis nunc purus, mattis a sollicitudin in, bibendum nec lacus. Vestibulum egestas facilisis faucibus. Praesent tincidunt elit vel viverra eleifend. Mauris ipsum velit, interdum vitae tempus vitae, interdum quis felis. Quisque libero augue, tincidunt in dignissim at, luctus ac elit. In quis neque scelerisque, efficitur urna eget, dapibus velit.'
    const techSkill = {
        languages: ['C', 'C++', 'Javascript', 'Google App Script'],
        tools: ['Node.js','Express', 'Google App Script', 'ReactJs'],
        environments: ['Linux','Windows','Apache']
    }
    const formalEducation = [
        {
            id: '1',
            title: 'Bachelor of Engineering',
            school: 'Telkom University',
            year: '2008 - 2012'
        },
        {
            id: '2',
            title: 'Senior High School',
            school: 'SMA 8 Yogyakarta',
            year: '2005 - 2008'
        },
        {
            id: '3',
            title: 'Junior High School',
            school: 'Telkom University',
            year: '2008 - 2012'
        },
    ]
    const formalTrainingCertification = [
        {
            id: '1',
            title: 'Javascript Mastery',
            place: 'Udemy',
            year: '2008 - 2012'
        },
        {
            id: '2',
            title: 'Full Stack Web Bootcamp',
            place: 'Binar Academy',
            year: '2005 - 2008'
        },
        {
            id: '3',
            title: 'React Fundamental',
            place: 'Codecademy',
            year: '2008 - 2012'
        },
    ]
    const languages = [
        { 
            id: '1',
            language: 'English',
            level: 'Fluent'
        },
        { 
            id: '2',
            language: 'Dutch',
            level: 'Basic'
        },
    ]
    const carrerSummary = [
        { 
            id: '1',
            position: 'software developer',
            company: 'webcreatia.com',
            periode: 'januari 2020 - januari 2021',
            description: 'lorem ipsum generator making'
        },
        { 
            id: '2',
            position: 'software developer',
            company: 'webcreatia.com',
            periode: 'januari 2020 - januari 2021',
            description: 'lorem ipsum generator making'
        },
        { 
            id: '3',
            position: 'software developer',
            company: 'webcreatia.com',
            periode: 'januari 2020 - januari 2021',
            description: 'lorem ipsum generator making',
            keyAchievement: [
                { id: '1',
                detail: 'successfully deploy new product to production phase'},
                { id: '2',
                detail: 'successfully deploy new product to production phase'},
                { id: '3',
                detail: 'successfully deploy new product to production phase'},
                { id: '4',
                detail: 'successfully deploy new product to production phase'},
            ]
        },
        { 
            id: '4',
            position: 'software developer',
            company: 'webcreatia.com',
            periode: 'januari 2020 - januari 2021',
            description: 'lorem ipsum generator making'
        }
    ]

    return (
        <Container fluid>
            <NavbarComponent />
                <Container className="justify-content-between">
                <Row className="gutterSmall">
                    <Col lg={4} className="text-center py-3 mb-3"> 
                        <Card>
                            <Card.Body>
                                <div className="d-flex flex-column align-items-center text-center">
                                    <img src="https://bootdey.com/img/Content/avatar/avatar6.png" alt="Admin" className="rounded-circle p-1 bg-primary" width="110" />
                                    <div className="mt-3">
                                        <h4>{ displayName ? displayName : 'Your Name' }</h4>
                                        <p className="text-secondary mb-1">{specialization}</p>
                                        <p className="text-muted font-size-sm mb-1">{currentCity}, {currentCountry}</p>
                                        <p className="text-muted font-size-sm mb-1">{ email }</p>
                                        <p className="text-muted font-size-sm mb-1">Whatsapp: { whatsapp }</p>
                                        <p className="text-muted font-size-sm mb-1">Telegram: { telegram }</p>
                                        <hr />
                                        <button className="btn btn-primary mx-2">Follow</button>
                                        <button className="btn btn-outline-primary mx-2">Message</button>
                                    </div>
                                </div>
                                <hr className="my-4" />
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                                        <h6 className="mb-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-globe me-1 icon-inline mr-2"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>Website</h6>
                                        <span className="text-secondary">{ website ? website : '' }</span>
                                    </li>
                                    <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                                        <h6 className="mb-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-github me-1 icon-inline mr-2"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>Github</h6>
                                        <span className="text-secondary">{ gitRepository ? gitRepository : '' }</span>
                                    </li>
                                    <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                                        <h6 className="mb-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-instagram me-1 icon-inline text-info mr-2"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>Instagram</h6>
                                        <span className="text-secondary">{ instagram ? instagram : '' }</span>
                                    </li>
                                </ul>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={8} className="py-3">
                        <Card className="mb-3">
                            <Card.Header><h4><strong>Introduction</strong></h4></Card.Header>
                            <Card.Body>
                                <Row>
                                    <Container className="text-justify">
                                        { introduction }
                                    </Container>
                                </Row>
                            </Card.Body>
                        </Card>
                        <Card className="mb-3">
                            <Card.Header><h4><strong>Technical Skill</strong></h4></Card.Header>
                            <Card.Body>
                                <Row>
                                    <Container className="text-justify">
                                        <strong>Tech Skill :</strong> { techSkill.languages.join(', ') }
                                    </Container>
                                </Row>
                                <hr />
                                <Row>
                                    <Container className="text-justify">
                                        <strong>Tools :</strong> { techSkill.tools.join(', ') }
                                    </Container>
                                </Row>
                                <hr />
                                <Row>
                                    <Container className="text-justify">
                                        <strong>Environments :</strong> { techSkill.environments.join(', ') }
                                    </Container>
                                </Row>
                                {/* <hr />
                                <Row>
                                    <div className="col-sm-12">
                                    <Link className="btn btn-primary " to="/profile-setting">Edit</Link>
                                    </div>
                                </Row> */}
                            </Card.Body>
                        </Card>
                        <CarrerSummariesComponent carrerSummary={carrerSummary}/>
                        <FormalEducationComponent formalEducation={formalEducation}/>
                        <FormalTrainingCertificationComponent formalTrainingCertification={formalTrainingCertification}/>
                        <LanguageComponent language={languages} />
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
