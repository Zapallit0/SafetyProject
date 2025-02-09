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

                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3901.359159434794!2d-77.04547562490546!3d-12.087546642661458!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c9005c2c32a9%3A0x55ebe8ff26685bcd!2sSAFETY%20ADVISORS!5e0!3m2!1ses-419!2spe!4v1734312689649!5m2!1ses-419!2spe"
                      width="200" 
                      height="450" allowFullscreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"
                      title='Ubicación Google Map'>
                    </iframe>
                </div> 
        </div>
      </div> 
      <div className='Mapa'>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3901.359159434794!2d-77.04547562490546!3d-12.087546642661458!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c9005c2c32a9%3A0x55ebe8ff26685bcd!2sSAFETY%20ADVISORS!5e0!3m2!1ses-419!2spe!4v1734312689649!5m2!1ses-419!2spe"
        width="200" 
        height="450" allowFullscreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"
        title='Ubicación Google Map'>
      </iframe>
      </div> 
    </section>
  )
}

export default Contact
