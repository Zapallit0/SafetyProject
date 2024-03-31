import React from 'react'
import './Footer.css'
import Facebook from '../../../assets/social/white/facebookW.svg';
import Linkedin from '../../../assets/social/white/linkedinW.svg';
import Instagram from '../../../assets/social/white/instagramW.svg';
import logo from '../../../assets/Logos/LogoTitle.svg';

function Footer() {
  return (
    <div className='Footer'>
      <div className='footerImgs'>
        <img src={logo} alt="LOGO" />
        <div className='LogosFooter'>
          <img src={Facebook} alt="facebook" />
          <img src={Linkedin} alt="linkedin" />
          <img src={Instagram}  alt="instagram" />
        </div>
      </div>
        <ul className='footerIndices'>
          <li>Home</li>
          <li>Services</li>
          <li>Nosotros</li>
          <li>Servicios</li>
        </ul>
    
        <ul className='footerMasInfo'>
          <li>964197982</li>
          <li>gerencia@safeadvisors.com</li>
          <li>Políticas</li>
        </ul>
      </div>
  )
}

export default Footer