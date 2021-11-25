import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

function SignedOutLinks(){
    return (
      <>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" justify-content-between>
          <Nav className="ml-auto">
            <Nav.Link as={Link} to='/login'>Register/Login</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </>
    )
}

export default SignedOutLinks;
