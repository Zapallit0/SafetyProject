import Main from './Services/Main/Main.jsx'
import ServiceSection from './Services/ServiceSection/ServiceSection.jsx'
import Footer from '../SmallComponents/Footer/Footer.jsx'
import SmallContact from '../SmallComponents/SmallContact/SmallContact.jsx'
import transition from '../transition.jsx'
import Seo from './Helpers/Seo.jsx'
import { breadcrumbLd } from '../seo.js'

const Services = () => {
  return (
    <>
      <Seo
        title="Servicios de Seguridad y Salud Ocupacional | Safety Advisors"
        description="Sistema de gestión de seguridad, salud ocupacional, prevención de riesgos, homologaciones y capacitaciones para empresas en Lima, Perú."
        path="/Servicios"
        jsonLd={[breadcrumbLd([
          { name: 'Inicio', path: '/' },
          { name: 'Servicios', path: '/Servicios' },
        ])]}
      />
      <Main />
      <ServiceSection />
      <SmallContact />
      <Footer />
    </>
  )
}

export default transition(Services)
