import React, { useState, useEffect } from 'react'
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'

// formik
import { useFormik } from 'formik'
import * as yup from 'yup'

// redux things
import { useDispatch, useSelector } from 'react-redux'
import { login, cleanErrorCode } from '../../redux/actions/auth.actions'
// import { getAuth, onAuthStateChanged } from '@firebase/auth'

function LoginComponent(props) {
    // const [ email, setEmail ] = useState('')
    // const [ password, setPassword ] = useState('')
    const [ showAlert, setShowAlert ] = useState(false)
    const [ showError, setShowError ] = useState('')
    let navigate = useNavigate()
    
    // redux things
    const dispatch = useDispatch();
    const currentUser = useSelector(state => state.auth.user)
    const errorCode = useSelector(state => state.auth.errorCode)
    // const errorMessage = useSelector(state => state.auth.errorMessage)
    
    // const set = (name) => (event) => {
    //     let val = event.target.value
    //     // console.log(val)
        
    //     if (name === 'email') setEmail(val)
    //     else if (name === 'password') setPassword(val)
        
    //     setShowAlert(false)
    // }
    
    // const handleSubmit = (event) => {
        
    //     event.preventDefault();
    //     dispatch(cleanErrorCode())

        
    //     //form-validity check
    //     if (!email || !password){
    //         setShowError('name/password cannot be empty')
    //         return setShowAlert(true)
    //     }

    //     // dispatch redux login
    //     dispatch(login( email, password))
    // }
    
    // if user already logged in
    useEffect(()=>{
        if (currentUser) {
            navigate('/profile')   
        }
    },[currentUser, navigate])

    useEffect(()=> {
        const err = ( errorCode ? true : false )
        setShowAlert(err)
        setShowError(errorCode)
    }, [errorCode])

    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        onSubmit: (values) => {
            dispatch(login(values.email, values.password))
        },
        validationSchema: yup.object({
            email: yup.string().trim().email('Must be a valid email').required('Email cannot be empty.'),
            password: yup.string().trim().min(6,'At least 6 characters').required('Password cannot be empty.')
        })
    })

    return (
        <div className='auth-height'>
            <Container className="h-100">
                <Row className="py-5 h-100 mx-auto justify-content-center align-items-center">
                    <Col md={8} lg={8} >
                        <Col lg={8} className="mx-auto justify-content-center">
                            <Form onSubmit={(e) => {
                                e.preventDefault()
                                dispatch(cleanErrorCode())
                                formik.handleSubmit()
                                return false
                            }}>
                                <h3 className="mb-3">Log In</h3>
                                <Form.Group>
                                    <Form.Label>Email Address</Form.Label>
                                    <Form.Control 
                                        type="email" 
                                        id="email" 
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.email}
                                    />
                                    { formik.errors.email && (
                                        <div className="text-danger">{formik.errors.email}</div>
                                    )}
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control 
                                        type="password" 
                                        id="password"
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.password}
                                    />
                                    { formik.errors.password && (
                                        <div className="text-danger">{formik.errors.password}</div>
                                    )}
                                </Form.Group>
                                <Button type="submit" value="submit" variant="primary" className="w-100 my-4">Login</Button>
                                <Alert show={showAlert} variant="warning">{ showError }</Alert>
                                <Form.Group>
                                    <p>Not a member? <Link as={Link} to="/register">Register Here</Link></p>
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
