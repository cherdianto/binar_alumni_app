import React from 'react'
import { Card, Col, Container, Form, ProgressBar, Row } from 'react-bootstrap'
import NavbarComponent from '../components/navbar/Navbar'
import { useDispatch, useSelector } from 'react-redux'
import Footer from '../components/footer/Footer'
import { Link } from 'react-router-dom'
import CarrerSummariesComponent from '../components/profile/carrer/CarrerSummariesComponent'
import FormalEducationComponent from '../components/profile/formalEducation/FormalEducationComponent'
import FormalTrainingCertificationComponent from '../components/profile/formalTrainingCertification/FormalTrainingCertificationComponent'
import LanguageComponent from '../components/profile/language/LanguageComponent'
import PortfoliosComponent from '../components/profile/portfolios/PortfoliosComponent'
import CommentsComponent from '../components/profile/comments/CommentsComponent'
import TechnicalSkillComponent from '../components/profile/technicalSkill/TechnicalSkillComponent'
import IntroductionComponent from '../components/profile/introduction/IntroductionComponent'
import RatingComponent from '../components/profile/rating/RatingComponent'

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
    const occupation = 'Not Occupied'
    const timeAvailabitily = '-5 till +5 CET'
    const workPreferences = 'Parttime WFH'
    const introduction = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin elementum lacinia felis vitae volutpat. Sed ac risus massa. Vestibulum rhoncus laoreet rhoncus. Integer sed turpis ornare, varius mauris quis, egestas nisl. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Quisque massa erat, sollicitudin ac ante eu, varius ornare ligula. Donec lobortis pulvinar malesuada. Fusce ornare porta nulla id molestie. Mauris eu justo in dui dignissim tincidunt. Integer eleifend, ligula sed efficitur congue, metus ligula hendrerit mi, ut rhoncus orci nunc ac orci. Vivamus non vulputate erat. Nullam tristique arcu massa, eu viverra tortor convallis vitae. Sed id fermentum urna. Duis nunc purus, mattis a sollicitudin in, bibendum nec lacus. Vestibulum egestas facilisis faucibus. Praesent tincidunt elit vel viverra eleifend. Mauris ipsum velit, interdum vitae tempus vitae, interdum quis felis. Quisque libero augue, tincidunt in dignissim at, luctus ac elit. In quis neque scelerisque, efficitur urna eget, dapibus velit.'
    const techSkill = {
        Languages: ['C', 'C++', 'Javascript', 'Google App Script'],
        Tools: ['Node.js','Express', 'Google App Script', 'ReactJs'],
        Environments: ['Linux','Windows','Apache']
    }
    const formalEducation = [
        {
            id: '1',
            title: 'Bachelor of Engineering',
            school: 'Telkom University',
            grade: '3.3',
            year: '2008 - 2012'
        },
        {
            id: '2',
            title: 'Senior High School',
            school: 'SMA 8 Yogyakarta',
            grade: '90',
            year: '2005 - 2008'
        },
        {
            id: '3',
            title: 'Junior High School',
            school: 'Telkom University',
            grade: '98',
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
        { 
            id: '3',
            language: 'Bahasa Indonesia',
            level: 'Fluent/Mother Tongue'
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
    const portfolios = [
        { 
            id: '1',
            title: 'Portfolio Website',
            description: 'lorem ipsum generator making',
            techStack: 'ReactJS, Redux, Express, MongoDb',
            url: 'lorem ipsum generator making'
        },
        { 
            id: '2',
            title: 'Thuisbezorgd.nl',
            description: 'lorem ipsum generator making',
            techStack: 'Redux, Go-lang, phyton, javascript, css, HTML',
            url: 'lorem ipsum generator making'
        },
        { 
            id: '3',
            title: 'Javascript Games',
            description: 'webcreatia.com',
            techStack: 'januari 2020 - januari 2021',
            url: 'lorem ipsum generator making'
        },
        { 
            id: '4',
            title: 'Pulangkampung.eu',
            description: 'webcreatia.com',
            techStack: 'januari 2020 - januari 2021',
            url: 'lorem ipsum generator making'
        }
    ]
    const comments = [
        {
            id: 1,
            imgUrl : "http://bootdey.com/img/Content/avatar/avatar1.png",
            name: "Candra Herdianto",
            job: "Senior Full Stack Developer",
            date: "June 1st, 2020",
            body: "laudantium enim quasi est quidem magnam voluptate ipsam eos tempora quo necessitatibus dolor quam autem quasi reiciendis et nam sapiente accusantium"
        },
        {
            id: 2,
            imgUrl : "http://bootdey.com/img/Content/avatar/avatar1.png",
            name: "Candra Herdianto",
            job: "Senior Full Stack Developer",
            date: "June 1st, 2020",
            body: "laudantium enim quasi est quidem magnam voluptate ipsam eos tempora quo necessitatibus dolor quam autem quasi reiciendis et nam sapiente accusantium"
        },
        {
            id: 3,
            imgUrl : "http://bootdey.com/img/Content/avatar/avatar1.png",
            name: "Candra Herdianto",
            job: "Senior Full Stack Developer",
            date: "June 1st, 2020",
            body: "laudantium enim quasi est quidem magnam voluptate ipsam eos tempora quo necessitatibus dolor quam autem quasi reiciendis et nam sapiente accusantium"
        },
    ]

    return (
        <Container fluid>
            <NavbarComponent />
                <Container className="justify-content-between">
                <Row className="gutterSmall">
                    <Col lg={4} className="text-center py-3 mb-3"> 
                        <Card className="mb-3">
                            <Card.Body md={12}>
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
                                        <h5>Current Status</h5>
                                        <p className="text-muted font-size-sm mb-1">{occupation}</p>
                                        <hr />
                                        <h5>Availability</h5>
                                        <p className="text-muted font-size-sm mb-1">Job Preferences: {workPreferences}</p>
                                        <p className="text-muted font-size-sm mb-1">Time Availability: {timeAvailabitily}</p>
                                        <hr />
                                        <Row>
                                            <button className="btn btn-primary mx-2">Follow</button>
                                            <button className="btn btn-outline-primary mx-2">Message</button>
                                            <button className="btn btn-outline-primary mx-2"><Link to="/profile-setting">Edit</Link></button>
                                        </Row>
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
                        <RatingComponent />
                        
                    </Col>
                    <Col lg={8} className="py-3">
                        <IntroductionComponent introduction={introduction} />
                        <TechnicalSkillComponent techSkill={techSkill} />
                        <CarrerSummariesComponent carrerSummary={carrerSummary}/>
                        <FormalEducationComponent formalEducation={formalEducation}/>
                        <FormalTrainingCertificationComponent formalTrainingCertification={formalTrainingCertification}/>
                        <LanguageComponent language={languages} />
                        <PortfoliosComponent portfolios={portfolios} />
                        <CommentsComponent comments={comments} />
                    </Col>
                </Row>
            </Container>
            <Footer />
        </Container>
    )
}

export default Profile
