import React,{lazy} from 'react'
import {Routes, Route, useLocation} from 'react-router-dom'
import Navbar from './Components/Home/Navbar/Navbar.jsx'
import { AnimatePresence } from 'framer-motion'
const Home=lazy(()=>(import('./Components/Home.jsx')))
const AboutUs=lazy(()=>import('./Components/AboutUs.jsx'))
const Services=lazy(()=>import('./Components/Services.jsx'))
const Contacto=lazy(()=>import('./Components/Contacto.jsx'))

const App = () => {
  const location=useLocation(true);
  return (
    <>
      <Navbar />
      <AnimatePresence mode='wait'>
        <Routes location={location} key={location.pathname}>
          <Route index element={<Home />}/>
          <Route exact path="/Nosotros" element={<AboutUs />}/>
          <Route exact path="/Servicios" element={<Services />}/>
          <Route exact path="/Contacto" element={<Contacto />}/>
        </Routes>
      </AnimatePresence>
    </>
  )
}

export default App