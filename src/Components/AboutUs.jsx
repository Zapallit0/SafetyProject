import React from 'react'
import HeroSection from './AboutUs/HeroSection/HeroSection'
import AboutUsInf from './AboutUs/AboutUs1/AboutUs'
import Footer from '../SmallComponents/Footer/Footer.jsx'
import MissionView from './AboutUs/Mission&View/Mission&View'
import SmallContact from '../SmallComponents/SmallContact/SmallContact.jsx'
import transition from '../transition.jsx'
import Seo from './Helpers/Seo.jsx'
import { breadcrumbLd } from '../seo.js'
function AboutUs() {
  return (
    <>
      <Seo
        title="Sobre Nosotros | Safety Advisors — Consultora en Lima, Perú"
        description="Conoce a Safety Advisors: especialistas en seguridad y salud ocupacional comprometidos con entornos de trabajo seguros para empresas en Perú."
        path="/Nosotros"
        jsonLd={[breadcrumbLd([
          { name: 'Inicio', path: '/' },
          { name: 'Nosotros', path: '/Nosotros' },
        ])]}
      />
      <HeroSection/>
      <AboutUsInf />
      <MissionView />
      <SmallContact />
      <Footer/>
    </>
  )
}

export default transition(AboutUs)