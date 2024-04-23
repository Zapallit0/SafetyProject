import React from 'react'
import Navbar2 from './Services/Navbar2/Navbar2'
import HeroSection from './AboutUs/HeroSection/HeroSection'
import AboutUsInf from './AboutUs/AboutUs1/AboutUs'
import Footer from '../SmallComponents/Footer/Footer.jsx'
import MissionView from './AboutUs/Mission&View/Mission&View'
import SmallContact from '../SmallComponents/SmallContact/SmallContact.jsx'
function AboutUs() {
  return (
    <div>
      <Navbar2 />
      <HeroSection/>
      <AboutUsInf />
      <MissionView />
      <SmallContact />
      <Footer/>
    </div>
  )
}

export default AboutUs