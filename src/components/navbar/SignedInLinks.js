import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../../redux/actions/auth.actions'


import '../../services/firebase' // harus import ini di paling atas
import { getAuth, signOut } from 'firebase/auth'

export default function SignedInLinks() {
    const dispatch = useDispatch();
    
    return (
        <>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" >
            {/* if you want to place a menu group on the left */}
            {/* <Nav className="mr-auto"></Nav> */}
            <Nav className="ml-auto">
                <Nav.Link as={Link} to="/profile">Profile</Nav.Link>
                {/* <Nav.Link as={Link} to="/redux">Redux</Nav.Link> */}
                {/* <Nav.Link as={Link} to="/page1">Page 1</Nav.Link> */}
                {/* <Nav.Link as={Link} to="/page2">Page 2</Nav.Link> */}
                <Nav.Link><p onClick={() => dispatch(logout())}>Logout</p></Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </>
    )
}
