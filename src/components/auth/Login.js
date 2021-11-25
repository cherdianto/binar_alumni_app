import React from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import classes from './Login.module.css'


function LoginComponent() {
    return (
        <div className={classes.hcustom}>
            <Container className="h-100">
                <Row className="py-5 h-100 mx-auto justify-content-center align-items-center">
                    <Col md={4}>
                        <Col md={12}>
                            <Form>
                                <h3 className="mb-3">Log In</h3>
                                <Form.Group>
                                    <Form.Label for="email">Email Address</Form.Label>
                                    <Form.Control type="email" id="email"/>
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label for="password">Password</Form.Label>
                                    <Form.Control type="password" id="password"/>
                                </Form.Group>
                                <Button variant="primary" className="w-100 my-4">Login</Button>
                                <Form.Group>
                                    <p>Not a member? <a href="/register">Register Here</a></p>
                                </Form.Group>
                            </Form>
                        </Col>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default LoginComponent
