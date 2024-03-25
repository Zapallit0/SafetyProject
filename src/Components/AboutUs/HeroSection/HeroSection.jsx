import React from 'react'
import './HeroSection.css'
import backgroundAboutUs from '../../../assets/AboutUsPage/Background1.webp'
import iconCall from '../../../assets/AboutUsPage/Icon.png'

function HeroSection() {
  return (
    <div className='heroSectionAboutUs1'>
        <div className='backgroundHeroAboutUs'>
            <img src={backgroundAboutUs} alt="Background" />
        </div>
        <div className='contentAboutUs1'>
            <h2 className='textBackgroundHeroAboutUs'>Sobre Nosotros</h2>
            <span>Comprometidos en brindar soluciones efectivas y practicas</span>
        </div>
        <div className='contactNumberHeroAboutUs'>
          <img src={iconCall} alt="IconCaller" />
          <div className='infoHeroAboutUs'>
            <span>Obten una consulta gratis hoy!</span>
            <h4>964197982</h4>
          </div>
        </div>
    </div>
  )
}

export default HeroSection