import React from 'react'
import HeroSection from './AboutUs/HeroSection/HeroSection'
import AboutUsInf from './AboutUs/AboutUs1/AboutUs'
import Footer from '../SmallComponents/Footer/Footer.jsx'
import MissionView from './AboutUs/Mission&View/Mission&View'
import SmallContact from '../SmallComponents/SmallContact/SmallContact.jsx'
import transition from '../transition.jsx'
function AboutUs() {
  return (
    <>
      <HeroSection/>
      <AboutUsInf />
      <MissionView />
      <SmallContact />
      <Footer/>
    </>
  )
}

export default transition(AboutUs)