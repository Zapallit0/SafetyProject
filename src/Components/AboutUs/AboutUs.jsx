import React from 'react'
import './AboutUs.css'
import Nosotros from'../../assets/nosotros.jpg';
function AboutUs() {
  return (
    <div className='AboutUs'>
        <img src={Nosotros} alt="Imagen Equipo" />
        <div className='textAboutUs'>
            <div className='textOurInfo'>
                <h4>Sobre</h4>
                <h2>NOSOTROS</h2>
                <p>Somos una empresa comprometida en brindar soluciones 
                y servicios de calidad dedicada a los servicios de 
                Asesoria y Consultoria, en las áreas de <span>GESTIÓN DE SEGURIDAD,
                SALUD OCUPACIONAL, MEDIO AMBIENTE, HOMOLOGACIONES,  
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
            <button>
                Nuestro Equipo
            </button>
        </div>
    </div>
  )
}

/* IPhone SE 375 667 SCREEN SIZE DONE */
export default AboutUs