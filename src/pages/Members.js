import React from 'react'
import { Card, Col, Container, Form, ProgressBar, Row } from 'react-bootstrap'
import NavbarComponent from '../components/navbar/Navbar'
import { useDispatch, useSelector } from 'react-redux'
import Footer from '../components/footer/Footer'
import { Link } from 'react-router-dom'
import MemberGrid from '../components/members/MemberGrid'

function Members() {
    // const { uid, displayName, email, phoneNumber, photoUrl } = useSelector(state => state.auth.user.providerData[0])
    // const emailMember = (uid) ? uid : 'Guest.'


    return (
        <Container fluid>
            <NavbarComponent />
            <MemberGrid />
            <Footer />
        </Container>
    )
}

export default Members
