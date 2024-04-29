import React from 'react'
import './MainPage.css'
// Lazy Load
import { LazyLoadImage } from 'react-lazy-load-image-component';

import { Link } from 'react-router-dom';
import background from '../../../assets/HomePageImgs/HeroBackground.webp'
import Facebook from '../../../assets/social/facebook.svg';
import Linkedin from '../../../assets/social/linkedin.svg';
import Instagram from '../../../assets/social/instagram.svg';

function MainPage() {
  return (
    <div className='mainPage' id='Main_Page'>
      <div className='backgroundContainer'>
        <LazyLoadImage loading="lazy" src={background} alt="Fondo" />
      </div>
      <div className='textMP'>
        <h1>SAFETY <br />ADVISORS</h1>
        <h2>Especialista en Seguridad, <br />
        Salud Ocupacional <br />
        y Medio Ambiente</h2>
        <Link to={"/Contacto"}><button type='button'>Contáctenos</button></Link>
      </div>
      <div className='redesMP'>
        <a href="https://www.facebook.com/profile.php?id=61557920314806&mibextid=ZbWKwL" target='_blank'><LazyLoadImage className='iconRed' src={Facebook} alt="Facebook" type="image/svg+xml"/></a>
        <a href="https://www.linkedin.com/company/safety-advisors24/about/" target='_blank'><LazyLoadImage className='iconRed' src={Linkedin} alt="Linkedin" type="image/svg+xml"/></a>
        <a href="https://www.instagram.com/safety__advisors/?igsh=dGNvN3ZiMGtsMDlm" target='_blank'><LazyLoadImage className='iconRed' src={Instagram} alt="Instagram" type="image/svg+xml"/></a>
      </div>
    </div>
  )
}

export default MainPage