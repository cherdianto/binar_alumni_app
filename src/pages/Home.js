import React, { Component, useEffect } from 'react'
import { Container } from 'react-bootstrap'
import AOS from "aos";
import "aos/dist/aos.css";

import Footer from '../components/footer/Footer'
import SectionDescription from '../components/homepage/SectionDescription'
import SectionServices from '../components/homepage/SectionServices'
import SectionTutorial from '../components/homepage/SectionTutorial'
import NavbarComponent from '../components/navbar/Navbar'

AOS.init();

function Home() {
    return (
        <Container fluid>
            <NavbarComponent />
            <Container>
                <SectionTutorial />
                <SectionDescription />
                <SectionServices />
            </Container>
            <Footer />
        </Container>
    )
}

export default Home


// import React, { Component, useEffect } from 'react'
// import { Container } from 'react-bootstrap'
// import Footer from '../components/footer/Footer'
// import NavbarComponent from '../components/navbar/Navbar'


// function Home() {

//     return (
//         <div>
//             {/* <Container fluid> */}
//                 <NavbarComponent />
//                 <Container>
//                     <h1 className="text-center py-5">HOMEPAGE</h1>
//                 </Container>
//                 <Footer />
//             {/* </Container> */}
//         </div>
//     )
// }

// export default Home

