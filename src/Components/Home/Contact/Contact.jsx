import './Contact.css'
import { motion } from 'framer-motion'
import Facebook from '../../../assets/social/facebook-SafetyAdvisors.svg';
import Linkedin from '../../../assets/social/linkedin-SafetyAdvisors.svg';
import Instagram from '../../../assets/social/instagram-SafetyAdvisors.svg';
import ContactForm from '../../../SmallComponents/ContactForm/ContactForm';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const MAP_SRC = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3901.359159434794!2d-77.04547562490546!3d-12.087546642661458!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c9005c2c32a9%3A0x55ebe8ff26685bcd!2sSAFETY%20ADVISORS!5e0!3m2!1ses-419!2spe!4v1734312689649!5m2!1ses-419!2spe";

const reveal = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

function Contact() {
  return (
    <section className='Contacto hv-section hv-section-light' id='Contact'>
      <div className='ContactHeader'>
        <span className="hv-eyebrow">
          <span className="hv-eyebrow-index">03</span>
          <span className="hv-eyebrow-rule" aria-hidden="true"></span>
          <span className="hv-eyebrow-text">Hablemos</span>
        </span>
        <h2>Contáctanos</h2>
        <p>Cuéntanos sobre tu empresa y los riesgos que quieres prevenir. Te respondemos a la brevedad.</p>
      </div>

      <div className='DatosForm'>
        <motion.div
          className='DatosContacto'
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          <div className='DatoItem'>
            <h3>Ubicación</h3>
            <p>Jr. Brigadier Mateo <br /> Pumacahua 2550</p>
          </div>
          <div className='DatoItem'>
            <h3>Teléfono</h3>
            <p><span>+51</span> 964197982</p>
          </div>
          <div className='DatoItem'>
            <h3>Correo</h3>
            <p><span>gerencia@safeadvisors.io</span></p>
          </div>
          <div className='DatoItem'>
            <h3>Síguenos</h3>
            <div className='logosRedes'>
              <a href="https://www.facebook.com/profile.php?id=61557920314806&mibextid=ZbWKwL" target='_blank' rel="noreferrer" aria-label="Facebook"><LazyLoadImage src={Facebook} alt="Facebook" /></a>
              <a href="https://www.linkedin.com/company/safety-advisors24/about/" target='_blank' rel="noreferrer" aria-label="LinkedIn"><LazyLoadImage src={Linkedin} alt="LinkedIn" /></a>
              <a href="https://www.instagram.com/safety__advisors/?igsh=dGNvN3ZiMGtsMDlm" target='_blank' rel="noreferrer" aria-label="Instagram"><LazyLoadImage src={Instagram} alt="Instagram" /></a>
            </div>
          </div>
        </motion.div>

        <motion.div
          className='FormContacto'
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          <div className='FormFull'>
            <ContactForm/>
          </div>
        </motion.div>
      </div>

      <div className='Mapa'>
        <iframe src={MAP_SRC}
          width="200"
          height="450" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"
          title='Ubicación Google Map'>
        </iframe>
      </div>
    </section>
  )
}

export default Contact
