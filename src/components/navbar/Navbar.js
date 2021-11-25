import React from 'react'
import { Container, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'


function NavbarComponent(props) {
    return (
        <Navbar expand="lg" bg="light" sticky="top">
        <Container>
            <Navbar.Brand as={Link} to="/">
                Web<strong>Creatia</strong>
            </Navbar.Brand>
            {/* <SignedInLinks /> */}
            <SignedOutLinks />
        </Container>
        </Navbar>
    )
}

export default NavbarComponent
