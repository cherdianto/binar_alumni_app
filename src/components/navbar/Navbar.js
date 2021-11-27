import React from 'react'
import { Container, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'
import { useSelector } from 'react-redux'


function NavbarComponent(props) {
    const currentUser = useSelector(state => state.auth.user)

    const link = (currentUser) ? <SignedInLinks /> : <SignedOutLinks />

    return (
        <Navbar expand="lg" bg="light" sticky="top">
        <Container>
            <Navbar.Brand as={Link} to="/">
                Web<strong>Creatia</strong>
            </Navbar.Brand>
            {link}
        </Container>
        </Navbar>
    )
}

export default NavbarComponent
