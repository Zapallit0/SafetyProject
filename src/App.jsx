import React,{useState} from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from './Components/Home.jsx'
import AboutUs from './Components/AboutUs.jsx'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='' element={<Home />} />
        <Route path='/Nosotros' element={<AboutUs />} /> 
      </Routes>
    </div>
  )
}

export default App