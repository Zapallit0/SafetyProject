import './Mission&View.css'
import LastImg from '../../../assets/AboutUsPage/lastImg.webp'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { motion, useReducedMotion } from 'framer-motion'

function MissionView() {
  const reduce = useReducedMotion()

  const container = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15 } },
  }
  const fadeUp = {
    hidden: { opacity: 0, y: reduce ? 0 : 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
  }
  const imgReveal = {
    hidden: { opacity: 0, scale: reduce ? 1 : 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.65, ease: 'easeOut' } },
  }

  return (
    <motion.section
      className='Mission_View hv-section hv-section-dark'
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
    >
        <motion.span className="hv-eyebrow" variants={fadeUp}>
            <span className="hv-eyebrow-index">02</span>
            <span className="hv-eyebrow-rule" aria-hidden="true"></span>
            <span className="hv-eyebrow-text">Propósito</span>
        </motion.span>
        <motion.h2 className='Mission_title' variants={fadeUp}>Hacia dónde vamos</motion.h2>

        <motion.div className='paragraphsMission_View' variants={container}>
            <motion.article className='missionView' variants={fadeUp}>
              <span className='missionView_num' aria-hidden="true">01</span>
              <h3>Visión</h3>
              <p>Para el 2030, ser <span>reconocidos</span> como una empresa de calidad por nuestros servicios.</p>
            </motion.article>
            <motion.article className='missionView' variants={fadeUp}>
              <span className='missionView_num' aria-hidden="true">02</span>
              <h3>Misión</h3>
              <p>Brindar <span>soluciones especializadas</span> en asesorías, homologaciones y gestión de talento en Minería, Construcción, Logística y Servicios.</p>
            </motion.article>
        </motion.div>

        <motion.div className='missionImage' variants={imgReveal}>
          <LazyLoadImage src={LastImg} alt="Equipo Safety Advisors en campo" />
        </motion.div>
    </motion.section>
  )
}

export default MissionView
