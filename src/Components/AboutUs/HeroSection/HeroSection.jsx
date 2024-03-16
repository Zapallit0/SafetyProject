import React from 'react'
import './HeroSection.css'
function HeroSection() {
  return (
    <div>
        <div className='backgroundHeroAboutUs'>
            <img src="" alt="Background" />
        </div>
        <div>
            <h2 className='textBackgroundHeroAboutUs'>Sobre Nosotros</h2>
            <span>Comprometidos en brindar soluciones efectivas y practicas</span>
        </div>
        <div className='contactNumberHeroAboutUs'>
          <img src="" alt="IconCaller" />
          <span>Obten una consulta gratis hoy!</span>
          <h4>964197982</h4>
        </div>
    </div>
  )
}

export default HeroSection