import React from 'react'
import './HeroSection.css'
import backgroundAboutUs from '../../../assets/AboutUsPage/Background1.webp'
import iconCall from '../../../assets/AboutUsPage/Icon.svg'
import { LazyLoadImage } from 'react-lazy-load-image-component'

function HeroSection() {
  return (
    <div className='heroSectionAboutUs1'>
        <div className='backgroundHeroAboutUs'>
            <LazyLoadImage src={backgroundAboutUs} alt="Background" />
        </div>
        <div className='contentAboutUs1'>
            <h2 className='textBackgroundHeroAboutUs'>Sobre Nosotros</h2>
            <span>Comprometidos en brindar soluciones efectivas y practicas</span>
        </div>
        <div className='contactNumberHeroAboutUs'>
          <LazyLoadImage src={iconCall} alt="IconCaller" />
          <div className='infoHeroAboutUs'>
            <span>Obten una consulta gratis hoy!</span>
            <h4>964197982</h4>
          </div>
        </div>
    </div>
  )
}

export default HeroSection