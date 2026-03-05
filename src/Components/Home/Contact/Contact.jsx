import React from 'react'
import './Contact.css'
import Facebook from '../../../assets/social/facebook-SafetyAdvisors.svg';
import Linkedin from '../../../assets/social/linkedin-SafetyAdvisors.svg';
import Instagram from '../../../assets/social/instagram-SafetyAdvisors.svg';
import ContactForm from '../../../SmallComponents/ContactForm/ContactForm';
import { LazyLoadImage } from 'react-lazy-load-image-component';
function Contact() {
  return (
    <section className='Contacto' id='Contact'>
      <div className='DatosForm'>
        <div className='DatosContacto'>
          <div>
          <h3>Ubicación</h3>
          <p>Jr. Brigadier Mateo <br /> Pumacahua 2550</p>
          </div>
          <div>
          <h3>Redes</h3>
          <p><span>+51</span> 964197982 <br />
          <span >gerencia@safeadvisors.io</span></p>
          </div>
          <div className='logosRedes'>
            <a href="https://www.facebook.com/profile.php?id=61557920314806&mibextid=ZbWKwL" target='_blank'><LazyLoadImage src={Facebook} alt="Facebook" /></a>
            <a href="https://www.linkedin.com/company/safety-advisors24/about/" target='_blank'><LazyLoadImage src={Linkedin} alt="Instagram" /></a>
            <a href="https://www.instagram.com/safety__advisors/?igsh=dGNvN3ZiMGtsMDlm" target='_blank'><LazyLoadImage src={Instagram} alt="Linkedin" /></a>
          </div>
        </div>
        <div className='FormContacto'>
                <div className='FormFull'>
                  <h2>Contáctanos</h2>
                  <ContactForm/>
                </div>
                <div className='MapaDesktop'>
                    <a href='https://www.google.com/maps/place/SAFETY+ADVISORS/@-12.0875466,-77.0454756,17z' target='_blank' rel='noreferrer' className='MapLink'>
                      Ver ubicación en Google Maps →
                    </a>
                </div>
        </div>
      </div> 
      <div className='Mapa'>
        <a href='https://www.google.com/maps/place/SAFETY+ADVISORS/@-12.0875466,-77.0454756,17z' target='_blank' rel='noreferrer' className='MapLink'>
          Ver ubicación en Google Maps →
        </a>
      </div>
    </section>
  )
}

export default Contact
