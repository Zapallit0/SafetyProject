import React from 'react'
import './MainPage.css'
// Lazy Load
import { LazyLoadImage } from 'react-lazy-load-image-component';

import { Link } from 'react-router-dom';
import Facebook from '../../../assets/social/facebook-SafetyAdvisors.svg';
import Linkedin from '../../../assets/social/linkedin-SafetyAdvisors.svg';
import Instagram from '../../../assets/social/instagram-SafetyAdvisors.svg';
import LogoHP from '../../../assets/Logos/LogoHome.svg';
function MainPage() {
  return ( 
    <div className='mainPage' id='Main_Page'>
        <div className='LogoHP'>
          <img src={LogoHP} alt="" height="40px"/>
          <h2>SAFETY ADVISORS</h2>
        </div>
        <div className='wrapper'>
          <h1>Especialistas en</h1>
          <div className='words'>
            <span>Seguridad</span>
            <span>Salud Ocupacional</span>
            <span>Capacitaciones</span>
            <span>Homologaciones</span>
            <span>Seguridad</span>
          </div>
        </div>
        <p>Creando entornos de trabajo seguros para tu empresa</p>
        <div className='buttonsMainPage'>
          <Link to={"/Servicios"} className='buttonServicesMP'><button type='button'>Servicios</button></Link>
          <Link to={"/Contacto"} className='buttonCTA'> <button>Contáctanos</button></Link>
        </div>
        <div className='RedesMP'>
          <a href="https://www.facebook.com/profile.php?id=61557920314806&mibextid=ZbWKwL" target='_blank'><LazyLoadImage src={Facebook} alt="Safety Advisors Facebook" title='FacebookSA'/></a>
          <a href="https://www.linkedin.com/company/safety-advisors24/about/" target='_blank'><LazyLoadImage src={Linkedin} alt="Safety Advisors Linkedin" title='LinkedinSA'/></a>
          <a href="https://www.instagram.com/safety__advisors/?igsh=dGNvN3ZiMGtsMDlm" target='_blank'><LazyLoadImage src={Instagram}  alt="Safety Advisors Instagram" title='InstagramSA'/></a>
        </div>
    </div>
  )
}

export default MainPage