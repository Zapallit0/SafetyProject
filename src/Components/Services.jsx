import React from 'react'
import Main from './Services/Main/Main.jsx'
import Services1 from './Services/Services1/Services1.jsx'
import Services2 from './Services/Services2/Services2.jsx'
import Services3 from './Services/Services3/Services3.jsx'
import Footer from '../SmallComponents/Footer/Footer.jsx'
import SmallContact from '../SmallComponents/SmallContact/SmallContact.jsx'
import transition from '../transition.jsx'
const Services=()=> {
  return (
    <>
      <Main />
      <Services1/>
      <Services2/>
      <Services3/>
      <SmallContact />
      <Footer />
    </>
  )
}

export default transition(Services)