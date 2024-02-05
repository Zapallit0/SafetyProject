import React from 'react'
import './MainPage.css'
import background from '../../assets/background.jpg'

function MainPage() {
  return (
    <div className='mainPage'>
      <div className='backgroundContainer'>
        <img src={background} alt="Fondo" />
      </div>
      <div className='textMP'>
        <h1>SAFETY ADVISORS</h1>
        <h3>Especialista en Seguridad, <br />Salud Ocupacional y Medio Ambiente</h3>
        <button type='button'>Contáctenos </button>
      </div>
      <div className='redesMP'>
        <img src="" alt="Facebook" />
        <img src="" alt="Linkedin" />
        <img src="" alt="Whatsaap" />
      </div>
    </div>
  )
}

export default MainPage