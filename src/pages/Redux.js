import React from 'react'
import { Container } from 'react-bootstrap'
import Footer from '../components/footer/Footer'
import NavbarComponent from '../components/navbar/Navbar'

// redux utils
import { addData, deleteData } from '../redux/actions/data.action'
import { useDispatch, useSelector } from 'react-redux'

function Redux() {
    const coba = useSelector( state => state.data.data)
    const dispatch = useDispatch();

    return (
        <Container fluid>
            <NavbarComponent />
            <Container>
                <h1 className="text-center py-5">REDUX {coba}</h1>
                <h4>test redux</h4>
                <h5>{ coba }</h5>
                <button onClick={() => dispatch(addData(10))}>Add Data</button>
                <button onClick={() => dispatch(deleteData())}>Delete Data</button>
            </Container>
            <Footer />
        </Container>
    )
}

export default Redux

