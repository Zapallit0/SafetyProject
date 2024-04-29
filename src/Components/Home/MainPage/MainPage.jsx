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
      {/* <div className='backgroundContainer'>
        <LazyLoadImage loading="lazy" src={background} alt="Fondo" />
      </div> */}
        <h1>SAFETY <br />ADVISORS</h1>
        <div className='wrapper'>
          <p>Especialista en </p>
          <div className='words'>
            <span>Seguridad</span>
            <span>Salud Ocupacional</span>
            <span>Capacitaciones</span>
            <span>Homologaciones</span>
            <span>Seguridad</span>
          </div>

        </div>
        <Link to={"/Contacto"} className='buttonMain'><button type='button'>Contáctenos</button></Link>
      {/* <div className='redesMP'>
        <a href="https://www.facebook.com/profile.php?id=61557920314806&mibextid=ZbWKwL" target='_blank'><LazyLoadImage className='iconRed' src={Facebook} alt="Facebook" type="image/svg+xml"/></a>
        <a href="https://www.linkedin.com/company/safety-advisors24/about/" target='_blank'><LazyLoadImage className='iconRed' src={Linkedin} alt="Linkedin" type="image/svg+xml"/></a>
        <a href="https://www.instagram.com/safety__advisors/?igsh=dGNvN3ZiMGtsMDlm" target='_blank'><LazyLoadImage className='iconRed' src={Instagram} alt="Instagram" type="image/svg+xml"/></a>
      </div> */}
    </div>
  )
}

export default MainPage