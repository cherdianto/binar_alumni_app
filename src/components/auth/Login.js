import React, { useState, useEffect } from 'react'
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap'
import classes from './Login.module.css'
import { useNavigate } from 'react-router-dom'

// redux things
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../../redux/actions/auth.actions'

function LoginComponent(props) {
    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')
    const [ showAlert, setShowAlert ] = useState(false)
    const [ showError, setShowError ] = useState('')
    let navigate = useNavigate()
    
    // redux things
    const dispatch = useDispatch();
    const currentUser = useSelector(state => state.auth.user)
    const errorCode = useSelector(state => state.auth.errorCode)
    const errorMessage = useSelector(state => state.auth.errorMessage)
    
    const set = (name) => (event) => {
        let val = event.target.value
        // console.log(val)
        
        if (name === 'email') setEmail(val)
        else if (name === 'password') setPassword(val)
        
        setShowAlert(false)
    }
    
    const handleSubmit = (event) => {
        
        event.preventDefault();

        //form-validity check
        if (!email || !password){
            return setShowAlert(true)
        }

        // dispatch redux login
        dispatch(login( email, password))
    }
    
    // if user already logged in
    useEffect(()=>{
        if (currentUser) {
            navigate('/')   
        } else if (errorCode){
            setShowAlert(true)
            setShowError(errorCode)
        }
    },[currentUser, errorCode, errorMessage, showError, navigate])

    return (
        <div className={classes.hcustom}>
            <Container className="h-100">
                <Row className="py-5 h-100 mx-auto justify-content-center align-items-center">
                    <Col md={4}>
                        <Col md={12}>
                            <Form onSubmit={handleSubmit}>
                                <h3 className="mb-3">Log In</h3>
                                <Form.Group>
                                    <Form.Label>Email Address</Form.Label>
                                    <Form.Control type="email" id="email" onChange={set('email')} value={email}/>
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" id="password" onChange={set('password')} value={password}/>
                                </Form.Group>
                                <Button type="submit" value="submit" variant="primary" className="w-100 my-4">Login</Button>
                                <Alert show={showAlert} variant="warning">{ showError }</Alert>
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
