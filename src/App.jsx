import React,{useState} from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from './Components/Home.jsx'
import AboutUs from './Components/AboutUs.jsx'
import Services from './Components/Services.jsx'
import Contacto from './Components/Contacto.jsx'
const App = () => {
  return (
    <div>
      <Routes>

        <Route path='' element={<Home />} />
        <Route path='/Nosotros' element={<AboutUs />} />
        <Route path='/Servicios' element={<Services />} />
        <Route path='/Contacto' element={<Contacto />}></Route>
      </Routes>
    </div>
  )
}

export default App