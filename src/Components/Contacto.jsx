import React from 'react'
import Footer from '../SmallComponents/Footer/Footer.jsx'
import ContactPage from '../Components/ContactPage/ContactPage.jsx'
import transition from '../transition.jsx'
import Seo from './Helpers/Seo.jsx'
import { breadcrumbLd } from '../seo.js'
function Contacto() {
  return (
    <>
      <Seo
        title="Contacto | Safety Advisors — Consultora en Lima, Perú"
        description="Contáctanos en Lima, Perú. Cuéntanos sobre tu empresa y los riesgos que quieres prevenir y te asesoramos en seguridad y salud ocupacional."
        path="/Contacto"
        jsonLd={[breadcrumbLd([
          { name: 'Inicio', path: '/' },
          { name: 'Contacto', path: '/Contacto' },
        ])]}
      />
      <ContactPage />
      <Footer/>
    </>
  )
}

export default transition(Contacto)