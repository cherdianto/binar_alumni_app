import React, { useState, useEffect } from 'react'
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap'
import classes from './Login.module.css'
import { useNavigate } from 'react-router-dom'

// redux things
import { useDispatch, useSelector } from 'react-redux'
import { register } from '../../redux/actions/auth.actions'

function RegisterComponent() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [showAlert, setShowAlert] = useState(false)
    const [showError, setShowError] = useState('')
    let navigate = useNavigate()

    const dispatch = useDispatch();
    const currentUser = useSelector(state => state.auth.user)
    const errorCode = useSelector(state => state.auth.errorCode)
    const errorMessage = useSelector(state => state.auth.errorMessage)

    const set = (name) => (event) => {
        let val = event.target.value

        if(name === 'email') setEmail(val)
        else if (name === 'password') setPassword(val)
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        if (!email || !password){
            return setShowAlert(true)
        }

        dispatch(register(email,password))
    }

    useEffect(()=>{
        if(currentUser){
            navigate('/')
        } else if(errorCode){
            // console.log(errorCode)
            setShowAlert(true)
            setShowError(errorCode)
        }
    }, [currentUser, errorCode, errorMessage, showError, navigate])

    return (
        <div className={classes.hcustom}>
            <Container className="h-100">
                <Row className="py-5 h-100 mx-auto justify-content-center align-items-center">
                    <Col md={4}>
                        <Col md={12}>
                            <Form onSubmit={handleSubmit}>
                                <h3 className="mb-3">Register</h3>
                                <Form.Group>
                                    <Form.Label>Email Address</Form.Label>
                                    <Form.Control type="email" id="email" onChange={set('email')} value={email}/>
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" id="password" onChange={set('password')} value={password}/>
                                </Form.Group>
                                <Button type="submit" variant="primary" className="w-100 my-4">Login</Button>
                                <Alert show={showAlert} variant="warning">{showError}</Alert>
                                <Form.Group>
                                    <p>Already a member? <a href="/login">Register Here</a></p>
                                </Form.Group>
                            </Form>
                        </Col>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default RegisterComponent
