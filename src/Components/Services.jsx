import React from 'react'
import Navbar2 from './Services/Navbar2/Navbar2.jsx'
import Main from './Services/Main/Main.jsx'
import Services1 from './Services/Services1/Services1.jsx'
import Services2 from './Services/Services2/Services2.jsx'
import Services3 from './Services/Services3/Services3.jsx'
import Footer from '../SmallComponents/Footer/Footer.jsx'
import SmallContact from '../SmallComponents/SmallContact/SmallContact.jsx'
const Services=()=> {
  return (
    <>
      <Navbar2 />
      <Main />
      <Services1/>
      <Services2/>
      <Services3/>
      <SmallContact />
      <Footer />
    </>
  )
}

export default Services