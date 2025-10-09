import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom';
import Facebook from '../../assets/social/facebook-SafetyAdvisors.svg';
import Linkedin from '../../assets/social/linkedin-SafetyAdvisors.svg';
import Instagram from '../../assets/social/instagram-SafetyAdvisors.svg';
import logo from '../../assets/Logos/LogoTitle.svg';
import { LazyLoadImage } from 'react-lazy-load-image-component';

function Footer() {
  return (
    <footer className='Footer'>
      <div className='footerImgs'>
        <LazyLoadImage src={logo} alt="LOGO" />
        <div className='LogosFooter'>
          <a href="https://www.facebook.com/profile.php?id=61557920314806&mibextid=ZbWKwL" target='_blank'><LazyLoadImage src={Facebook} alt="facebook" /></a>
          <a href="https://www.linkedin.com/company/safety-advisors24/about/" target='_blank'><LazyLoadImage src={Linkedin} alt="linkedin" /></a>
          <a href="https://www.instagram.com/safety__advisors/?igsh=dGNvN3ZiMGtsMDlm" target='_blank'><LazyLoadImage src={Instagram}  alt="instagram" /></a>
        </div>
      </div>
        <ul className='footerIndices'>
          <Link className='footerIndice' to={'/'}><li>Home</li></Link>
          <Link className='footerIndice' to={'/Servicios'}><li>Services</li></Link>
          <Link className='footerIndice' to={'/Nosotros'}><li>Nosotros</li></Link>
          <Link className='footerIndice' to={'/Contacto'}><li>Servicios</li></Link>
        </ul>
        <ul className='footerMasInfo'>
          <li>964197982</li>
          <li>gerencia@safeadvisors.com</li>
          <li>Políticas</li>
        </ul>
      </footer>
  )
}

export default Footer