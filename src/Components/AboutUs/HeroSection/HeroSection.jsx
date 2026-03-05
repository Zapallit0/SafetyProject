import React from 'react'
import './HeroSection.css'
import backgroundAboutUs from '../../../assets/AboutUsPage/Background1.webp'
import iconCall from '../../../assets/AboutUsPage/Icon.svg'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { motion } from 'framer-motion'

function HeroSection() {
  return (
    <div className='heroSectionAboutUs1'>
        <div className='backgroundHeroAboutUs'>
            <LazyLoadImage src={backgroundAboutUs} alt="Background" />
        </div>
        <motion.div
          className='contentAboutUs1'
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
            <h2 className='textBackgroundHeroAboutUs'>Sobre Nosotros</h2>
            <span>Comprometidos en brindar soluciones efectivas y practicas</span>
        </motion.div>
        <motion.div
          className='contactNumberHeroAboutUs'
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4, ease: 'easeOut' }}
        >
          <LazyLoadImage src={iconCall} alt="IconCaller" />
          <div className='infoHeroAboutUs'>
            <span>Obten una consulta gratis hoy!</span>
            <h4>964197982</h4>
          </div>
        </motion.div>
    </div>
  )
}

export default HeroSection
