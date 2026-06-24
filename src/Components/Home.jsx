import React from 'react'
import MainPage from './Home/MainPage/MainPage.jsx'
import AboutUs from './Home/AboutUs/AboutUs.jsx'
import Contact from './Home/Contact/Contact.jsx'
import Footer from '../SmallComponents/Footer/Footer.jsx'
import Service_HomePage from './Home/Service_HomePage/Service_HomePage.jsx'
import transition from '../transition.jsx'
import Seo from './Helpers/Seo.jsx'
import { professionalServiceLd, websiteLd } from '../seo.js'
function Home() {
  return (
    <>
        <Seo
          title="Safety Advisors | Seguridad y Salud Ocupacional en Lima, Perú"
          description="Consultora en Lima, Perú especializada en seguridad y salud ocupacional, prevención de riesgos, homologaciones y capacitaciones para tu empresa."
          path="/"
          jsonLd={[professionalServiceLd, websiteLd]}
        />
        <MainPage />
        <Service_HomePage/>
        <AboutUs />
        <Contact />
        <Footer />
    </>
  )
}

export default transition(Home)