import React from 'react'
import './Services.css'
import SegLaboral from '../../../assets/services/SeguridadLaboral.png'
import SalOcupacional from '../../../assets/services/SaludOcupacional.png'
import Certificacion from '../../../assets/services/CertificacionLaboral.png'
import Capacitaciones from '../../../assets/services/Capacitaciones.png'
import MedioAmbiente from '../../../assets/services/MedioAmbiente.png'

function Services(){
  return (
    <div className='Services' id='Services'>
      <div className='textServices'>
        <h4>Nuestros</h4>
        <h2>Servicios</h2>
        <p>
          En <span>SAFETY ADVISORS</span> ofrecemos 13 soluciones especializadas <br />
          Descubre la versatilidad de nuestro servicios en diferentes áreas
        </p>
      </div>
      <div className='imgServices'>
        <div className="areaServices">
          <div className='iconsServices'>
          <img src={SegLaboral} alt="Seguridad" />
          </div>
          <span>Seguridad Laboral</span>
        </div>
        <div className="areaServices">
          <div className='iconsServices'>
          <img src={SalOcupacional} alt="Salud" />
          </div>
          <span>Salud Ocupacional</span>
        </div>
        <div className="areaServices">
          <div className='iconsServices'>
          <img src={Certificacion} alt="Certificación" />
          </div>
          <span>Certificación Laboral</span>
        </div>
        <div className="areaServices">
          <div className='iconsServices'>
          <img src={Capacitaciones} alt="Capacitaciones" />
          </div>
          <span>Capacitaciones</span>
        </div>
      </div>
      <div className='arrow' onClick={()=>{document.getElementById('Mas_Servicios').scrollIntoView({behavior:'smooth'})}}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  )
}

/* IPhone SE 375 667 SCREEN SIZE DONE */
export default Services