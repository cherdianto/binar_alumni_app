import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getData } from '../redux/actions/data.action'
import NavbarComponent from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';

export default function Page1() {
    const dispatch = useDispatch();
    const coba = useSelector(state => state.data.data);

    // useEffect(() => {
    //     dispatch(getData())
    // }, [dispatch])
    // const dataCollection = useSelector((state) => state.data);

    return (
        <div>
            <NavbarComponent />
            <h1>PAGE 1</h1>
            { coba }
            <Footer />
        </div>
    )
}
