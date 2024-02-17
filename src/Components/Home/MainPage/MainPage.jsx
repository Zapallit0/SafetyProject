import React from 'react'
import './MainPage.css'
import background from '../../../assets/background.jpg'
import Facebook from '../../../assets/social/white/facebookW.svg';
import Linkedin from '../../../assets/social/white/linkedinW.svg';
import Instagram from '../../../assets/social/white/instagramW.svg';

function MainPage() {
  return (
    <div className='mainPage' id='Main_Page'>
      <div className='backgroundContainer'>
        <img src={background} alt="Fondo" />
      </div>
      <div className='textMP'>
        <h1>SAFETY ADVISORS</h1>
        <h3>Especialista en Seguridad, <br />
        Salud Ocupacional <br />
        y Medio Ambiente</h3>
        <button type='button'>Contáctenos </button>
      </div>
      <div className='redesMP'>
        <img src={Facebook} alt="Facebook" />
        <img src={Linkedin} alt="Linkedin" />
        <img src={Instagram} alt="Instagram" />
      </div>
    </div>
  )
}

export default MainPage