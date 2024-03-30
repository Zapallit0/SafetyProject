import React from 'react'
import Navbar from './Home/Navbar/Navbar.jsx'
import MainPage from './Home/MainPage/MainPage.jsx'
import Services from './Home/Services/Services.jsx'
import MasServicios from './Home/MasServicios/MasServicios.jsx'
import AboutUs from './Home/AboutUs/AboutUs.jsx'
import Contact from './Home/Contact/Contact.jsx'
import Footer from './Home/Footer/Footer.jsx'
import Service2 from './Home/Service2/Service2.jsx'

function Home() {
  return (
    <div>
        <Navbar />
        <MainPage />
        {/* <Services />
        <MasServicios /> */}
        <Service2/>
        <AboutUs />
        <Contact />
        <Footer />
    </div>
  )
}

export default Home