import './ContactPage.css'
import ContactForm from '../../SmallComponents/ContactForm/ContactForm.jsx'
import { motion, useReducedMotion } from 'framer-motion'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import Facebook from '../../assets/social/facebook-SafetyAdvisors.svg'
import Linkedin from '../../assets/social/linkedin-SafetyAdvisors.svg'
import Instagram from '../../assets/social/instagram-SafetyAdvisors.svg'

function ContactPage() {
  const reduce = useReducedMotion()

  const container = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.13 } },
  }
  const fadeUp = {
    hidden: { opacity: 0, y: reduce ? 0 : 28 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  }
  const viewport = { once: true, margin: '-60px' }

  return (
    <div className='ContactPage'>
      <motion.div
        className='ContactPageHeader'
        variants={container}
        initial='hidden'
        animate='visible'
      >
        <motion.span className='hv-eyebrow ContactPage_eyebrow' variants={fadeUp}>
          <span className='hv-eyebrow-index'>—</span>
          <span className='hv-eyebrow-rule' aria-hidden='true'></span>
          <span className='hv-eyebrow-text'>Contacto</span>
        </motion.span>
        <motion.h1 variants={fadeUp}>Háblanos de tu proyecto</motion.h1>
        <motion.span className='ContactPageHeader_sub' variants={fadeUp}>
          Coméntanos tu idea llenando el formulario y te contactaremos lo más pronto posible.
        </motion.span>
      </motion.div>

      <div className='ContactPageColumns'>
        <motion.div
          className='ContactHelp'
          initial={{ opacity: 0, y: reduce ? 0 : 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <div className='ContactFormHeader'>
            <h3>Envíanos un mensaje</h3>
            <p>Completa el formulario y nos pondremos en contacto contigo.</p>
          </div>
          <ContactForm />
        </motion.div>

        <motion.div
          className='ContactPageSidebar'
          variants={container}
          initial='hidden'
          whileInView='visible'
          viewport={viewport}
        >
          <motion.div className='ContactInfoCard' variants={fadeUp}>
            <h3>Información de contacto</h3>
            <ul className='ContactList'>
              <li>Para contacto directo, correo <a href='mailto:contacto@safetyadvisors.io'>contacto@safetyadvisors.io</a></li>
              <li>Para solución de problemas <a href='mailto:contacto@safetyadvisors.io'>contacto@safetyadvisors.io</a></li>
              <li>Nuestra ubicación <a href='https://www.google.com/maps/place/Condominio+Ambassador,+cuadra+25+del+Jr.+Brigadier+Mateo+Pumacahua,+Urb.+Risso,+Per%C3%BA.,+Jr.+Brigadier+Pumacahua+2550,+Lince+15073/@-12.0875571,-77.04555,17z/data=!3m1!4b1!4m6!3m5!1s0x9105c8584260ca6b:0x959f6c5a7bc92394!8m2!3d-12.0875624!4d-77.0429751!16s%2Fg%2F1hjgrdc65?entry=ttu' target='_blank' rel='noreferrer'>Jr. Brigadier Pumacahua 2550 – Lince</a></li>
              <li>Llámanos al <a href='tel:964197982'>964197982</a></li>
            </ul>
          </motion.div>

          <motion.div className='ContactSocialRow' variants={fadeUp}>
            <h3>Redes Sociales</h3>
            <div className='ContactSocialIcons'>
              <a href='https://www.facebook.com/profile.php?id=61557920314806&mibextid=ZbWKwL' target='_blank' rel='noreferrer' aria-label='Facebook'>
                <LazyLoadImage src={Facebook} alt='Facebook' />
              </a>
              <a href='https://www.linkedin.com/company/safety-advisors24/about/' target='_blank' rel='noreferrer' aria-label='LinkedIn'>
                <LazyLoadImage src={Linkedin} alt='LinkedIn' />
              </a>
              <a href='https://www.instagram.com/safety__advisors/?igsh=dGNvN3ZiMGtsMDlm' target='_blank' rel='noreferrer' aria-label='Instagram'>
                <LazyLoadImage src={Instagram} alt='Instagram' />
              </a>
            </div>
          </motion.div>

        </motion.div>
      </div>

      <motion.div
        className='ContactSupport'
        variants={container}
        initial='hidden'
        whileInView='visible'
        viewport={viewport}
      >
        <motion.h2 variants={fadeUp}>Estamos para ayudarte en todo lo que necesites</motion.h2>
        <motion.ul className='ContactSupportList' variants={container}>
          <motion.li variants={fadeUp}>Soporte sin bots</motion.li>
          <motion.li variants={fadeUp}>Respuesta rápida</motion.li>
          <motion.li variants={fadeUp}>100% confiables</motion.li>
        </motion.ul>
      </motion.div>
    </div>
  )
}

export default ContactPage
