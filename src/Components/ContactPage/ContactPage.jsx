import React from 'react'
import './ContactPage.css'
import ContactForm from '../../SmallComponents/ContactForm/ContactForm.jsx'
import { motion } from 'framer-motion'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import Facebook from '../../assets/social/facebook-SafetyAdvisors.svg'
import Linkedin from '../../assets/social/linkedin-SafetyAdvisors.svg'
import Instagram from '../../assets/social/instagram-SafetyAdvisors.svg'

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15
    }
  }
}

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' }
  }
}

function ContactPage() {
  return (
    <div className='ContactPage'>
      <motion.div
        className='ContactPageHeader'
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <h4>Contáctanos</h4>
        <h2>Hablanos de tu proyecto</h2>
        <span>Comentanos tu idea llenando el siguiente formulario te contactaremos lo mas pronto posible</span>
      </motion.div>

      <div className='ContactPageColumns'>
        <motion.div
          className='ContactHelp'
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <ContactForm />
        </motion.div>

        <motion.div
          className='ContactPageSidebar'
          variants={containerVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, margin: '-50px' }}
        >
          <motion.div className='ContactInfoCard' variants={fadeUp}>
            <h3>Información de contacto</h3>
            <ul className='ContactList'>
              <li>Para contacto directo, correo <a href='mailto:contacto@safetyadvisors.io'>contacto@safetyadvisors.io</a></li>
              <li>Para solución de problemas <a href='mailto:contacto@safetyadvisors.io'>contacto@safetyadvisors.io</a></li>
              <li>Nuestra ubicación <a href='https://www.google.com/maps/place/Condominio+Ambassador,+cuadra+25+del+Jr.+Brigadier+Mateo+Pumacahua,+Urb.+Risso,+Per%C3%BA.,+Jr.+Brigadier+Pumacahua+2550,+Lince+15073/@-12.0875571,-77.04555,17z/data=!3m1!4b1!4m6!3m5!1s0x9105c8584260ca6b:0x959f6c5a7bc92394!8m2!3d-12.0875624!4d-77.0429751!16s%2Fg%2F1hjgrdc65?entry=ttu'>Jr. Brigadier Pumacahua 2550 – Lince</a></li>
              <li>Llámanos al <a href='tel:964197982'>964197982</a></li>
            </ul>
          </motion.div>

          <motion.div className='ContactSocialRow' variants={fadeUp}>
            <h3>Redes Sociales</h3>
            <div className='ContactSocialIcons'>
              <a href='https://www.facebook.com/profile.php?id=61557920314806&mibextid=ZbWKwL' target='_blank' rel='noreferrer'>
                <LazyLoadImage src={Facebook} alt='Facebook' />
              </a>
              <a href='https://www.linkedin.com/company/safety-advisors24/about/' target='_blank' rel='noreferrer'>
                <LazyLoadImage src={Linkedin} alt='LinkedIn' />
              </a>
              <a href='https://www.instagram.com/safety__advisors/?igsh=dGNvN3ZiMGtsMDlm' target='_blank' rel='noreferrer'>
                <LazyLoadImage src={Instagram} alt='Instagram' />
              </a>
            </div>
          </motion.div>

          <motion.div className='ContactMapContainer' variants={fadeUp}>
            <iframe
              src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3901.359159434794!2d-77.04547562490546!3d-12.087546642661458!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c9005c2c32a9%3A0x55ebe8ff26685bcd!2sSAFETY%20ADVISORS!5e0!3m2!1ses-419!2spe!4v1734312689649!5m2!1ses-419!2spe'
              width='100%'
              height='250'
              allowFullScreen=''
              loading='lazy'
              referrerPolicy='no-referrer-when-downgrade'
              title='Ubicación Google Map'
            ></iframe>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className='ContactSupport'
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <h2>Estamos para ayudarte en todo lo que necesites</h2>
        <ul className='ContactSupportList'>
          <li>Soporte sin bots</li>
          <li>Respuesta Rápida</li>
          <li>100% Confiables</li>
        </ul>
      </motion.div>
    </div>
  )
}

export default ContactPage
