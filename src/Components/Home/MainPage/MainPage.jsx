import React from 'react'
import './MainPage.css'
import background from '../../../assets/HomePageImgs/HeroBackground.jpg'
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
        <h1>SAFETY <br />ADVISORS</h1>
        <h2>Especialista en Seguridad, <br />
        Salud Ocupacional <br />
        y Medio Ambiente</h2>
        <button type='button'>Contáctenos</button>
      </div>
      <div className='redesMP'>
        <a href="https://www.facebook.com" target='_blank'><img src={Facebook} alt="Facebook" /></a>
        <a href="https://www.linkedin.com/" target='_blank'><img src={Linkedin} alt="Linkedin" /></a>
        <a href="https://www.instagram.com/" target='_blank'><img src={Instagram} alt="Instagram" /></a>
      </div>
    </div>
  )
}

export default MainPage