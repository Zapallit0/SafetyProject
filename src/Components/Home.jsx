import React from 'react'
import MainPage from './Home/MainPage/MainPage.jsx'
import AboutUs from './Home/AboutUs/AboutUs.jsx'
import Contact from './Home/Contact/Contact.jsx'
import Footer from '../SmallComponents/Footer/Footer.jsx'
import Service_HomePage from './Home/Service_HomePage/Service_HomePage.jsx'
import transition from '../transition.jsx'
function Home() {
  return (
    <>
        <MainPage />
        <Service_HomePage/>
        <AboutUs />
        <Contact />
        <Footer />
    </>
  )
}

export default transition(Home)