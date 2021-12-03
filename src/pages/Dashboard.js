import React, { Fragment } from 'react'
import DashboardComponent from '../components/dashboard/DashboardComponent'
import Footer from '../components/footer/Footer'
import NavbarComponent from '../components/navbar/Navbar'

function Dashboard() {
    return (
        <Fragment>
        <NavbarComponent/>
        <DashboardComponent />
        <Footer/>
        </Fragment>
    )
}

export default Dashboard
