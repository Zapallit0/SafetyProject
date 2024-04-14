import React from 'react'
import './MainPage.css'
import background from '../../../assets/HomePageImgs/HeroBackground.jpg'
import Facebook from '../../../assets/social/facebook.svg';
import Linkedin from '../../../assets/social/linkedin.svg';
import Instagram from '../../../assets/social/instagram.svg';

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
        <a href="https://www.facebook.com" target='_blank'><object className='iconRed' data={Facebook} alt="Facebook" type="image/svg+xml"/></a>
        <a href="https://www.linkedin.com/" target='_blank'><object className='iconRed' data={Linkedin} alt="Linkedin" type="image/svg+xml"/></a>
        <a href="https://www.instagram.com/" target='_blank'><object className='iconRed' data={Instagram} alt="Instagram" type="image/svg+xml"/></a>
      </div>
    </div>
  )
}

export default MainPage