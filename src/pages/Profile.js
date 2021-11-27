import React from 'react'
import { Container, Form } from 'react-bootstrap'
import NavbarComponent from '../components/navbar/Navbar'
import { useDispatch, useSelector } from 'react-redux'
import Footer from '../components/footer/Footer'

function Profile() {
    const emailMember = useSelector(state => state.auth.user.email)
    return (
        <Container fluid>
            <NavbarComponent />
            <h1 className="text-center">Hi, {emailMember}</h1>
            <Footer />
        </Container>
    )
}

export default Profile
