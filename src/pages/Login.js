import React from 'react'
import { Container } from 'react-bootstrap'
import LoginComponent from '../components/auth/Login'
import FooterComponent from '../components/footer/Footer'
import NavbarComponent from '../components/navbar/Navbar'


export default function Login() {
    return (
        <Container fluid className="vh-100">
                <NavbarComponent />
                <LoginComponent />
                <FooterComponent />
        </Container>
    )
}
