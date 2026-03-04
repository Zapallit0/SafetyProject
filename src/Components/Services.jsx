import Main from './Services/Main/Main.jsx'
import ServiceSection from './Services/ServiceSection/ServiceSection.jsx'
import Footer from '../SmallComponents/Footer/Footer.jsx'
import SmallContact from '../SmallComponents/SmallContact/SmallContact.jsx'
import transition from '../transition.jsx'

const Services = () => {
  return (
    <>
      <Main />
      <ServiceSection />
      <SmallContact />
      <Footer />
    </>
  )
}

export default transition(Services)
