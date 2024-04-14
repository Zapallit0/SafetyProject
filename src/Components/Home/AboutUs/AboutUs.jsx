import React from 'react'
import './AboutUs.css'
import {Link} from 'react-router-dom'
import Nosotros from'../../../assets/HomePageImgs/AboutUs.jpg';
function AboutUs() {
  return (
    <div className='AboutUs' id='About_Us'>
        <img src={Nosotros} alt="Imagen Equipo" />
        <div className='textAboutUs'>
            <div className='textOurInfo'>
                <h4>Sobre</h4>
                <h2>NOSOTROS</h2>
                <p>Somos una empresa comprometida en brindar soluciones 
                y servicios de calidad dedicada a los servicios de 
                Asesoria y Consultoria, en las áreas de <span>GESTIÓN DE SEGURIDAD,
                SALUD OCUPACIONAL, HOMOLOGACIONES,  
                GESTIÓN DE TALENTO Y CAPACITACIONES</span> 
                </p>
            </div>
            <div className='textOurMission'>
                <h3>Nuestra Misión</h3>
                <p>SAFETY ADVISORS no solo protegemos, cuidamos y promovemos,
                    sino que transformamos su organización hacia un futuro más
                    seguro, saludable y sostenible.
                </p>
            </div>
            <Link className='linkAboutUs' to={'/Nosotros'}>
                <button>
                    Conoce más
                </button>
            </Link>
        </div>
    </div>
  )
}

export default AboutUs