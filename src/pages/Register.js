import React from 'react'
import { Container } from 'react-bootstrap'
import RegisterComponent from '../components/auth/Register'
import FooterComponent from '../components/footer/Footer'
import NavbarComponent from '../components/navbar/Navbar'


export default function Register() {
    return (
        <Container fluid className="vh-100">
                <NavbarComponent />
                {/* <div className={classes.hcustom}> */}
                    <RegisterComponent />
                {/* </div> */}
                <FooterComponent />
        </Container>
    )
}
