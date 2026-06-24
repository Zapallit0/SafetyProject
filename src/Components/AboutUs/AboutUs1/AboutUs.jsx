import './AboutUs.css'
import Engineer from '../../../assets/AboutUsPage/Enginneer.webp'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { motion, useReducedMotion } from 'framer-motion'

function AboutUs() {
  const reduce = useReducedMotion()

  const group = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.13 } },
  }
  const fadeUp = {
    hidden: { opacity: 0, y: reduce ? 0 : 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  }

  return (
    <section className='aboutUs1 hv-section hv-section-light'>
        <motion.div
          className='titleAboutUs1'
          variants={group}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
            <motion.span className="hv-eyebrow" variants={fadeUp}>
                <span className="hv-eyebrow-index">01</span>
                <span className="hv-eyebrow-rule" aria-hidden="true"></span>
                <span className="hv-eyebrow-text">Nosotros</span>
            </motion.span>
            <motion.h2 variants={fadeUp}>¿Quiénes somos?</motion.h2>
            <motion.p variants={fadeUp}>
                Somos una empresa comprometida en brindar <span>soluciones efectivas y prácticas</span>,
                brindamos asesoría con calidad en las áreas de Seguridad Industrial, Salud Ocupacional,
                Medio Ambiente y Gestión de talento. Somos <span>especialistas</span> en realizar homologaciones,
                certificaciones y capacitaciones.
            </motion.p>
        </motion.div>
        <motion.div
          className='imgsAboutUs1'
          initial={{ opacity: 0, x: reduce ? 0 : 45, scale: reduce ? 1 : 0.96 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, delay: 0.15, ease: 'easeOut' }}
        >
            <LazyLoadImage src={Engineer} alt="Ingeniero de seguridad" />
        </motion.div>
    </section>
  )
}

export default AboutUs
