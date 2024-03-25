import React from 'react'
import './AboutUs.css'
import Engineer from '../../../assets/AboutUsPage/Enginneer.jpg'
function AboutUs() {
  return (
    <div className='aboutUs1'>
        <div className='titleAboutUs1'>
            <h2>¿Quiénes somos?</h2>
            <p> 
                Somos una empresa comprometida en brindar <span>soluciones efectivas y prácticas</span>, 
                brindamos asesoría con calidad en las áreas de Seguridad Industrial, Salud Ocupacional,
                Medio Ambiente y Gestión de talento. Somos <span>especialistas</span> en realizar homologaciones
                , certificaciones y capacitaciones.
            </p>
        </div>
        <div className='imgsAboutUs1'>
            <img src={Engineer} alt="Img1" />
            <img src={Engineer} alt="Img2" />
            <img src={Engineer} alt="Img3" />
        </div>
    </div>
  )
}

export default AboutUs