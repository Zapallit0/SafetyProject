import React from 'react'
import Navbar from './Home/Navbar/Navbar.jsx'
import MainPage from './Home/MainPage/MainPage.jsx'
import AboutUs from './Home/AboutUs/AboutUs.jsx'
import Contact from './Home/Contact/Contact.jsx'
import Footer from '../SmallComponents/Footer/Footer.jsx'
import Service2 from './Home/Service2/Service2.jsx'

function Home() {
  return (
    <>
        <Navbar />
        <MainPage />
        <Service2/>
        <AboutUs />
        <Contact />
        <Footer />
    </>
  )
}

export default Home