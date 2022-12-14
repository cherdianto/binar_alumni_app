import React, { useState, useEffect } from 'react'
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'

// formik
import { useFormik } from 'formik';
import * as yup from 'yup';

// redux things
import { useDispatch, useSelector } from 'react-redux'
import { register, cleanErrorCode } from '../../redux/actions/auth.actions'

function RegisterComponent() {
    // const [email, setEmail] = useState('')
    // const [password, setPassword] = useState('')
    const [showAlert, setShowAlert] = useState(false)
    const [showError, setShowError] = useState('')
    let navigate = useNavigate()

    const dispatch = useDispatch();
    const currentUser = useSelector(state => state.auth.user)
    const errorCode = useSelector(state => state.auth.errorCode)
    // const errorMessage = useSelector(state => state.auth.errorMessage)

    // const set = (name) => (event) => {
    //     let val = event.target.value

    //     if(name === 'email') setEmail(val)
    //     else if (name === 'password') setPassword(val)
    //     setShowAlert(false)
    // }
    
    // const handleSubmit = (event) => {
    //     event.preventDefault();
    //     dispatch(cleanErrorCode())


    //     if (!email || !password){
    //         return setShowAlert(true)
    //     }

    //     dispatch(register(email,password))
    // }

    useEffect(()=>{
        if(currentUser){
            navigate('/profile')
        }
    }, [currentUser, navigate])

    useEffect(()=> {
        const err = ( errorCode ? true : false )
        setShowAlert(err)
        setShowError(errorCode)
    }, [errorCode])

    // const [ notification, setNotification ] = useState('');
    // const [ submitted, setSubmitted ] = useState(false);

    const formik = useFormik({
        initialValues: {
            email:'',
            password:''
        },
        onSubmit: (values) => {
            dispatch(cleanErrorCode())

            dispatch(register(values.email, values.password));
        },
        validationSchema: yup.object({
            email: yup.string().email('Must be a valid email / Email kurang tepat.').required('Email cannot be empty.'),
            password: yup.string().trim().min(6, 'At least 6 characters').required('Password cannot be empty.')
        })
    })
    return (
        // <div className="auth-height">
        //     <Container className="h-100">
        //         <Row className="py-5 h-100 mx-auto justify-content-center align-items-center">
        //             <Col md={8} lg={8}>
        //                 <Col md={8} className="mx-auto justify-content-center">
        //                     <Form onSubmit={handleSubmit}>
        //                         <h3 className="mb-3">Register</h3>
        //                         <Form.Group>
        //                             <Form.Label>Email Address</Form.Label>
        //                             <Form.Control type="email" id="email" onChange={set('email')} value={email}/>
        //                         </Form.Group>
        //                         <Form.Group>
        //                             <Form.Label>Password</Form.Label>
        //                             <Form.Control type="password" id="password" onChange={set('password')} value={password}/>
        //                         </Form.Group>
        //                         <Button type="submit" variant="primary" className="w-100 my-4">Register</Button>
        //                         <Alert show={showAlert} variant="warning">{showError}</Alert>
        //                         <Form.Group>
        //                             <p>Already a member? <Link as={Link} to="/login">Login Here</Link></p>
        //                         </Form.Group>
        //                     </Form>
        //                 </Col>
        //             </Col>
        //         </Row>
        //     </Container>
        // </div>
        <div className="auth-height">
            <Container className="h-100">
                <Row className="py-5 h-100 mx-auto justify-content-center align-items-center">
                    <Col md={8} lg={8}>
                        <Col md={8} className="mx-auto justify-content-center">
                            <Form onSubmit={(e) => {
                                e.preventDefault();
                                formik.handleSubmit();
                                return false;
                            }}>
                                <h3 className="mb-3">Register</h3>
                                <Form.Group>
                                    <Form.Label>Email Address</Form.Label>
                                    <Form.Control 
                                        type="email" 
                                        id="email" 
                                        onChange={formik.handleChange} 
                                        value={formik.values.email}
                                        onBlur={formik.handleBlur}
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
                                        value={formik.values.password}
                                        onBlur={formik.handleBlur}
                                    />
                                    { formik.errors.password && (
                                        <div className="text-danger">{formik.errors.password}</div>
                                    )}
                                </Form.Group>
                                <Button type="submit" variant="primary" className="w-100 my-4">Register</Button>
                                <Alert show={showAlert} variant="warning">{showError}</Alert>
                                <Form.Group>
                                    <p>Already a member? <Link as={Link} to="/login">Login Here</Link></p>
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
