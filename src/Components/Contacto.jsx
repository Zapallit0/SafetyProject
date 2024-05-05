import React from 'react'
import Footer from '../SmallComponents/Footer/Footer.jsx'
import ContactPage from '../Components/ContactPage/ContactPage.jsx'
import transition from '../transition.jsx'
function Contacto() {
  return (
    <>
      <ContactPage />
      <Footer/>
    </>
  )
}

export default transition(Contacto)