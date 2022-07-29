import React from 'react'
import { Card, Col, Container, Form, Row, Nav, Tab } from 'react-bootstrap'
import NavbarComponent from '../components/navbar/Navbar'
import AOS from "aos";
import "aos/dist/aos.css";
import { useDispatch, useSelector } from 'react-redux'
import Footer from '../components/footer/Footer'
import Button from '@restart/ui/esm/Button'
import CarrerDinamicForm from '../components/profile/carrerSetting/CarrerDinamicForm'
import EducationFormSettingComponent from '../components/profile/formalEducationSetting/EducationFormSettingComponent'
import FormalTrainingCertificationSettingComponent from '../components/profile/formalTrainingCertificationSetting/FormalTrainingCertificationSettingComponent'
import LanguageSettingComponent from '../components/profile/languageSetting/LanguageSettingComponent'
import PortfolioSettingComponent from '../components/profile/portfoliosSetting/PortfolioSettingComponent'

function ProfileSetting() {
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
            description: 'lorem ipsum generator making',
            keyAchievement: [
                { id: '1',
                detail: 'successfully deploy new product to production phase'}
            ]
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
            imgUrl : "https://bootdey.com/img/Content/avatar/avatar1.png",
            name: "Candra Herdianto",
            job: "Senior Full Stack Developer",
            date: "June 1st, 2020",
            body: "laudantium enim quasi est quidem magnam voluptate ipsam eos tempora quo necessitatibus dolor quam autem quasi reiciendis et nam sapiente accusantium"
        },
        {
            id: 2,
            imgUrl : "https://bootdey.com/img/Content/avatar/avatar1.png",
            name: "Candra Herdianto",
            job: "Senior Full Stack Developer",
            date: "June 1st, 2020",
            body: "laudantium enim quasi est quidem magnam voluptate ipsam eos tempora quo necessitatibus dolor quam autem quasi reiciendis et nam sapiente accusantium"
        },
        {
            id: 3,
            imgUrl : "https://bootdey.com/img/Content/avatar/avatar1.png",
            name: "Candra Herdianto",
            job: "Senior Full Stack Developer",
            date: "June 1st, 2020",
            body: "laudantium enim quasi est quidem magnam voluptate ipsam eos tempora quo necessitatibus dolor quam autem quasi reiciendis et nam sapiente accusantium"
        },
    ]

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

                                            <Nav.Link eventKey="curiculumVitae" className="has-icon">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-user mr-2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>Curiculum Vitae
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
                            <Card className="customTab">
                                <Card.Header className="border-bottom mb-3 d-md-none">
                                    <Nav justify variant="pills">
                                        <Nav.Item>
                                            <Nav.Link eventKey="profile" className="has-icon">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-user"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                                            </Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="curiculumVitae" className="has-icon">
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
                                <Card.Body className="py-0 px-0">
                                    <Tab.Content>
                                        <Tab.Pane eventKey="profile">
                                            <Card className="mb-3">
                                                <Card.Header>
                                                    <h4><strong>Profile Information</strong></h4>
                                                </Card.Header>
                                                <Card.Body>
                                                    <Form>
                                                        <Form.Group className="mb-3" controlId="fullName">
                                                            <Form.Label>Full Name</Form.Label>
                                                            <Form.Control type="text" aria-describedby="fullNameHelp" placeholder="Enter your fullname" value={displayName} />
                                                            <small id="fullNameHelp" class="form-text text-muted">Your name may appear around here where you are mentioned. You can change or remove it at any time.</small>
                                                        </Form.Group>
                                                        <Form.Group className="mb-3" controlId="specialization">
                                                            <Form.Label>Specialization</Form.Label>
                                                            <Form.Control type="text" aria-describedby="specializationHelp" placeholder="Write something about you" value={specialization} />
                                                            <small id="specializationHelp" class="form-text text-muted">Your main specialization/expertise such as Full Stack Developer, UI/UX, Product Manager, etc</small>
                                                        </Form.Group>
                                                        <Row>
                                                            <Form.Group className="mb-3" as={Col} md={6} controlId="currentCity">
                                                                <Form.Label>Current City</Form.Label>
                                                                <Form.Control type="text" placeholder="Enter your current city" value={currentCity} />
                                                            </Form.Group>
                                                            <Form.Group className="mb-3" as={Col} md={6} controlId="currentCountry">
                                                                <Form.Label>Current Country</Form.Label>
                                                                <Form.Control type="text" placeholder="Enter your current country" value={currentCountry} />
                                                            </Form.Group>
                                                        </Row>
                                                        <Row>
                                                            <Form.Group className="mb-3" as={Col} md={6} controlId="whatsapp">
                                                                <Form.Label>Whatsapp Number</Form.Label>
                                                                <Form.Control type="text" placeholder="Enter your whatsapp" value={whatsapp} />
                                                            </Form.Group>
                                                            <Form.Group className="mb-3" as={Col} md={6} controlId="telegram">
                                                                <Form.Label>Telegram</Form.Label>
                                                                <Form.Control type="text" placeholder="Enter your telegram number" value={telegram} />
                                                            </Form.Group>
                                                        </Row>
                                                        <Form.Group className="mb-3" controlId="website">
                                                            <Form.Label>Website</Form.Label>
                                                            <Form.Control type="text" placeholder="Enter your website address" value={website} />
                                                        </Form.Group>
                                                        <Form.Group className="mb-3" controlId="gitRepository">
                                                            <Form.Label>Git Repository</Form.Label>
                                                            <Form.Control type="text" placeholder="Enter your git repository address" value={gitRepository} />
                                                        </Form.Group>
                                                    </Form>
                                                </Card.Body>
                                            </Card>
                                            <Card className="mb-3">
                                                <Card.Header>
                                                    <h4><strong>Social Media Information</strong></h4>
                                                </Card.Header>
                                                <Card.Body>
                                                    <Form>
                                                        <Form.Group className="mb-3" controlId="facebook">
                                                            <Form.Label>Facebook</Form.Label>
                                                            <Form.Control type="text" placeholder="Enter your instagram address" value={facebook} />
                                                        </Form.Group>
                                                        <Form.Group className="mb-3" controlId="instagram">
                                                            <Form.Label>Instagram</Form.Label>
                                                            <Form.Control type="text" placeholder="Enter your instagram address" value={instagram} />
                                                        </Form.Group>
                                                    </Form>
                                                </Card.Body>
                                            </Card>
                                            <Card>
                                                <Card.Header>
                                                    <h4><strong>Availability Information</strong></h4>
                                                </Card.Header>
                                                <Card.Body>
                                                    <Form>
                                                        <Form.Group className="mb-3" controlId="occupation">
                                                            <Form.Label>Occupation</Form.Label>
                                                            <Form.Control as="select">
                                                                <option>Full Time Employee, not available</option>
                                                                <option>Full Time Employee, freelance job available</option>
                                                                <option>Part Time Employee, not available</option>
                                                                <option>Part Time Employee, freelance job available</option>
                                                                <option>Unmployeed, full time job available</option>
                                                                <option>Unmployeed, part time job available</option>
                                                                <option>Unmployeed, not available</option>
                                                            </Form.Control>
                                                        </Form.Group>
                                                        <Form.Group className="mb-3" controlId="workPreferences">
                                                            <Form.Label>Work Preferences</Form.Label>
                                                            <Form.Control as="select">
                                                                <option>Full Time, WFO</option>
                                                                <option>Full Time, WFH</option>
                                                                <option>Part Time, WFO</option>
                                                                <option>Part Time, WFH</option>
                                                            </Form.Control>
                                                        </Form.Group>
                                                        <Form.Group className="mb-3" controlId="timeAvailability">
                                                            <Form.Label>Time Availability</Form.Label>
                                                            <Form.Control type="text" placeholder="Enter your availability per week" value={timeAvailabitily} />
                                                        </Form.Group>
                                                    </Form>
                                                </Card.Body>
                                            </Card>
                                            <Form>
                                                <button type="button" className="btn btn-primary my-3 mx-3">Update Profile</button>
                                                <button type="reset" className="btn btn-light my-3 mx-3">Reset Changes</button>
                                            </Form>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="curiculumVitae">
                                            <Card className="mb-3">
                                                <Card.Header><h4><strong>Introduction</strong></h4></Card.Header>
                                                <Card.Body>
                                                    <Form>
                                                        <Form.Group className="mb-3" controlId="introduction">
                                                            <Form.Control as="textarea" rows={10} aria-describedby="introductionHelp" placeholder="Describe yourself" value={introduction} />
                                                            <small id="introductionHelp" className="form-text text-muted">Your name may appear around here where you are mentioned. You can change or remove it at any time.</small>
                                                        </Form.Group>
                                                    </Form>
                                                </Card.Body>
                                            </Card>
                                            <Card className="mb-3">
                                                <Card.Header><h4><strong>Technical Skill</strong></h4></Card.Header>
                                                <Card.Body>
                                                    <Form>
                                                        <Form.Group className="mb-3" controlId="techSkill">
                                                            <Form.Label>Main Specialization</Form.Label>
                                                            <Row>
                                                                <Col>
                                                                    <Form.Control type="text" aria-describedby="specializationHelp" placeholder="Write something about you" value={specialization} />
                                                                </Col>
                                                            </Row>
                                                            <small id="specializationHelp" class="form-text text-muted">Your main specialization/expertise such as Full Stack Developer, UI/UX, Product Manager, etc</small>
                                                        </Form.Group>
                                                        <Form.Group className="mb-3" controlId="languages">
                                                            <Form.Label>Programming Languages</Form.Label>
                                                            <Form.Control type="text" placeholder="Separate with comma, e.g : Nodejs, Javascript, C++, Phyton, etc" value={techSkill.Languages} />
                                                        </Form.Group>
                                                        <Form.Group className="mb-3" controlId="tools">
                                                            <Form.Label>Programming Tools</Form.Label>
                                                            <Form.Control type="text" placeholder="Separate with comma, e.g : Nodejs, Express, Google App Script, etc" value={techSkill.Tools} />
                                                        </Form.Group>
                                                        <Form.Group className="mb-3" controlId="environments">
                                                            <Form.Label>Programming Environments</Form.Label>
                                                            <Form.Control type="text" placeholder="Separate with comma, e.g : Linux, Windows, Apache, etc" value={techSkill.Environments} />
                                                        </Form.Group>
                                                    </Form>
                                                </Card.Body>
                                            </Card>
                                            <Card className="mb-3">
                                                <CarrerDinamicForm carrerSummary={carrerSummary}/>
                                            </Card>
                                            <Card className="mb-3">
                                                <EducationFormSettingComponent formalEducation={formalEducation} />
                                            </Card>
                                            <Card className="mb-3">
                                                <FormalTrainingCertificationSettingComponent formalTrainingCertification={formalTrainingCertification} />
                                            </Card>
                                            <Card className="mb-3">
                                                <LanguageSettingComponent languages={languages} />
                                            </Card>
                                            <Card className="mb-3">
                                                <PortfolioSettingComponent portfolios={portfolios} />
                                            </Card>
                                            <Form>
                                                <button type="button" className="btn btn-primary my-3 mx-3">Update Profile</button>
                                                <button type="reset" className="btn btn-light my-3 mx-3">Reset Changes</button>
                                            </Form>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="account">
                                            <h6>ACCOUNT SETTINGS</h6>
                                            <hr />
                                            <Form>
                                            <Form.Group>
                                                <label for="username">Username</label>
                                                <input type="text" class="form-control" id="username" aria-describedby="usernameHelp" placeholder="Enter your username" value="kennethvaldez" />
                                                <small id="usernameHelp" class="form-text text-muted">After changing your username, your old username becomes available for anyone else to claim.</small>
                                            </Form.Group>
                                            <hr />
                                            <Form.Group>
                                                <label class="d-block text-danger">Delete Account</label>
                                                <p class="text-muted font-size-sm">Once you delete your account, there is no going back. Please be certain.</p>
                                            </Form.Group>
                                            <button class="btn btn-danger" type="button">Delete Account</button>
                                            </Form>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="security">
                                            <h6>SECURITY SETTINGS</h6>
                                            <hr />
                                            <Form>
                                            <Form.Group>
                                                <label class="d-block">Change Password</label>
                                                <input type="text" class="form-control" placeholder="Enter your old password" />
                                                <input type="text" class="form-control mt-1" placeholder="New password" />
                                                <input type="text" class="form-control mt-1" placeholder="Confirm new password" />
                                            </Form.Group>
                                            </Form>
                                            <hr />
                                            <Form>
                                            <Form.Group>
                                                <label class="d-block">Two Factor Authentication</label>
                                                <button class="btn btn-info" type="button">Enable two-factor authentication</button>
                                                <p class="small text-muted mt-2">Two-factor authentication adds an additional layer of security to your account by requiring more than just a password to log in.</p>
                                            </Form.Group>
                                            </Form>
                                            <hr />
                                            <Form>
                                            <Form.Group className="mb-0">
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
                                            </Form.Group>
                                            </Form>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="notification">
                                            <h6>NOTIFICATION SETTINGS</h6>
                                            <hr />
                                            <Form>
                                            <Form.Group>
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
                                            </Form.Group>
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
                                            </Form>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="billing">
                                            <h6>BILLING SETTINGS</h6>
                                            <hr />
                                            <Form>
                                            <Form.Group>
                                                <label class="d-block mb-0">Payment Method</label>
                                                <div class="small text-muted mb-3">You have not added a payment method</div>
                                                <button class="btn btn-info" type="button">Add Payment Method</button>
                                            </Form.Group>
                                            <Form.Group className="mb-0">
                                                <label class="d-block">Payment History</label>
                                                <div class="border border-gray-500 bg-gray-200 p-3 text-center font-size-sm">You have not made any payment.</div>
                                            </Form.Group>
                                            </Form>
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
