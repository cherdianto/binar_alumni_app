import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function SignedInLinks() {
    return (
        <>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" justify-content-between>
            {/* if you want to place a menu group on the left */}
            {/* <Nav className="mr-auto"></Nav> */}
            <Nav className="ml-auto">
                <Nav.Link as={Link} to="/profile">Profile</Nav.Link>
                <Nav.Link as={Link} to="/redux">Redux</Nav.Link>
                <Nav.Link><a href="/" >Logout</a></Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </>
    )
}
