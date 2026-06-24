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
      <div className='FooterTop'>
        <div className='footerImgs'>
          <LazyLoadImage src={logo} alt="Safety Advisors" />
          <p className='footerTagline'>Seguridad y salud ocupacional para un futuro más seguro y sostenible.</p>
          <div className='LogosFooter'>
            <a href="https://www.facebook.com/profile.php?id=61557920314806&mibextid=ZbWKwL" target='_blank' rel="noreferrer" aria-label="Facebook"><LazyLoadImage src={Facebook} alt="facebook" /></a>
            <a href="https://www.linkedin.com/company/safety-advisors24/about/" target='_blank' rel="noreferrer" aria-label="LinkedIn"><LazyLoadImage src={Linkedin} alt="linkedin" /></a>
            <a href="https://www.instagram.com/safety__advisors/?igsh=dGNvN3ZiMGtsMDlm" target='_blank' rel="noreferrer" aria-label="Instagram"><LazyLoadImage src={Instagram} alt="instagram" /></a>
          </div>
        </div>

        <div className='footerCol'>
          <h4>Navegación</h4>
          <ul className='footerIndices'>
            <Link className='footerIndice' to={'/'}><li>Inicio</li></Link>
            <Link className='footerIndice' to={'/Servicios'}><li>Servicios</li></Link>
            <Link className='footerIndice' to={'/Nosotros'}><li>Nosotros</li></Link>
            <Link className='footerIndice' to={'/Contacto'}><li>Contacto</li></Link>
          </ul>
        </div>

        <div className='footerCol'>
          <h4>Contacto</h4>
          <ul className='footerMasInfo'>
            <li>964197982</li>
            <li>gerencia@safeadvisors.com</li>
            <li>Políticas</li>
          </ul>
        </div>
      </div>

      <div className='FooterBottom'>
        <span>© 2026 Safety Advisors. Todos los derechos reservados.</span>
      </div>
    </footer>
  )
}

import { memo } from 'react';
export default memo(Footer)
