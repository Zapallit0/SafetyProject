import './HeroSection.css'
import backgroundAboutUs from '../../../assets/AboutUsPage/Background1.webp'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { motion, useReducedMotion } from 'framer-motion'

function HeroSection() {
  const reduce = useReducedMotion()

  const container = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15, delayChildren: 0.15 } },
  }
  const fadeUp = {
    hidden: { opacity: 0, y: reduce ? 0 : 26 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  }

  return (
    <section className='heroSectionAboutUs1'>
        <div className='backgroundHeroAboutUs'>
            <motion.div
              className='heroBgZoom'
              initial={{ scale: reduce ? 1 : 1.18 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1.8, ease: 'easeOut' }}
            >
              <LazyLoadImage src={backgroundAboutUs} alt="" />
            </motion.div>
        </div>
        <motion.div
          className='contentAboutUs1'
          variants={container}
          initial="hidden"
          animate="visible"
        >
            <motion.span className="hv-eyebrow heroAboutUs_eyebrow" variants={fadeUp}>
              <span className="hv-eyebrow-rule" aria-hidden="true"></span>
              <span className="hv-eyebrow-text">Safety Advisors</span>
              <span className="hv-eyebrow-rule hv-eyebrow-rule--rev" aria-hidden="true"></span>
            </motion.span>
            <motion.h1 className='textBackgroundHeroAboutUs' variants={fadeUp}>Sobre Nosotros</motion.h1>
            <motion.span className="heroAboutUs_tagline" variants={fadeUp}>
              Comprometidos en brindar soluciones efectivas y prácticas
            </motion.span>
        </motion.div>
    </section>
  )
}

export default HeroSection
