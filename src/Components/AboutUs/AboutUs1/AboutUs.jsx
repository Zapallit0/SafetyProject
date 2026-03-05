import React from 'react'
import './AboutUs.css'
import Engineer from '../../../assets/AboutUsPage/Enginneer.webp'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { motion } from 'framer-motion'

function AboutUs() {
  return (
    <div className='aboutUs1'>
        <motion.div
          className='titleAboutUs1'
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
            <h2>¿Quiénes somos?</h2>
            <p>
                Somos una empresa comprometida en brindar <span>soluciones efectivas y prácticas</span>,
                brindamos asesoría con calidad en las áreas de Seguridad Industrial, Salud Ocupacional,
                Medio Ambiente y Gestión de talento. Somos <span>especialistas</span> en realizar homologaciones
                , certificaciones y capacitaciones.
            </p>
        </motion.div>
        <motion.div
          className='imgsAboutUs1'
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5, delay: 0.15, ease: 'easeOut' }}
        >
            <LazyLoadImage src={Engineer} alt="Ingeniero de seguridad" />
        </motion.div>
    </div>
  )
}

export default AboutUs
