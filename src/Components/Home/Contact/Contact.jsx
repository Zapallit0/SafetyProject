import React from 'react'
import './Contact.css'
import Facebook from '../../../assets/social/facebook.svg';
import Linkedin from '../../../assets/social/linkedin.svg';
import Instagram from '../../../assets/social/instagram.svg';
import ContactForm from '../../../SmallComponents/ContactForm/ContactForm';
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
            <img src={Facebook} alt="Facebook" />
            <img src={Linkedin} alt="Instagram" />
            <img src={Instagram} alt="Linkedin" />
          </div>
        </div>
        <div className='FormContacto'>
                <div className='FormFull'>
                  <h2>Contáctanos</h2>
                  <ContactForm/>
                </div>
                <div className='MapaDesktop'>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8758.218003714106!2d-77.04476658013421!3d-12.08868059939555!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c8584260ca6b%3A0x959f6c5a7bc92394!2sCondominio%20Ambassador%2C%20cuadra%2025%20del%20Jr.%20Brigadier%20Mateo%20Pumacahua%2C%20Urb.%20Risso%2C%20Per%C3%BA.%2C%20Jr.%20Brigadier%20Pumacahua%202550%2C%20Lince%2015073%2C%20Per%C3%BA!5e0!3m2!1ses-419!2smx!4v1707480443909!5m2!1ses-419!2smx"
                      width="200" 
                      height="450" allowFullscreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"
                      title='Ubicación Google Map'>
                    </iframe>
                </div> 
        </div>
      </div> 
      <div className='Mapa'>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8758.218003714106!2d-77.04476658013421!3d-12.08868059939555!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c8584260ca6b%3A0x959f6c5a7bc92394!2sCondominio%20Ambassador%2C%20cuadra%2025%20del%20Jr.%20Brigadier%20Mateo%20Pumacahua%2C%20Urb.%20Risso%2C%20Per%C3%BA.%2C%20Jr.%20Brigadier%20Pumacahua%202550%2C%20Lince%2015073%2C%20Per%C3%BA!5e0!3m2!1ses-419!2smx!4v1707480443909!5m2!1ses-419!2smx"
        width="200" 
        height="450" allowFullscreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"
        title='Ubicación Google Map'>
      </iframe>
      </div> 
    </section>
  )
}

export default Contact
