import React,{useState} from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from './Components/Home.jsx'
import AboutUs from './Components/AboutUs.jsx'
import Services from './Components/Services.jsx'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='' element={<Home />} />
        <Route path='/Nosotros' element={<AboutUs />} />
        <Route path='/Services' element={<Services />} />
      </Routes>
    </div>
  )
}

export default App