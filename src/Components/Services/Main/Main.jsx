import React from 'react'
import './Main.css'
import GestionIcon from '../../../assets/Icons/Sistema-de-Gestión-Seguridad.svg'
import SaludIcon from '../../../assets/Icons/Salud Ocupacional2.svg'
import RiesgosIcon from '../../../assets/Icons/Prevencion de Riesgo.svg'
import ProveedorIcon from '../../../assets/Icons/Homologacion.svg'
import { Link } from 'react-scroll'
import { LazyLoadImage } from 'react-lazy-load-image-component'

function Main() {
  return (
    <div className='Main_Services'>
      <div className='Title_Services'>
        <h2>Nuestros Servicios</h2>
      </div>
      <div className='Icons_Services'>
        <div className='Icon_Service'>
          <Link className='Link_Service'><LazyLoadImage src={GestionIcon} alt="Seguridad Laboral" /></Link>
          <span>Seguridad Laboral</span>
        </div>
        <div className='Icon_Service'>
          <Link className='Link_Service'><LazyLoadImage src={SaludIcon} alt="Salud Ocupacional" /></Link>
          <span>Salud Ocupacional</span>
        </div>
        <div className='Icon_Service'>
          <Link className='Link_Service'><LazyLoadImage src={RiesgosIcon} alt="Certificacion" /></Link>
          <span>Prevencion de Riesgos</span>
        </div>
        <div className='Icon_Service'>
          <Link className='Link_Service'><LazyLoadImage src={ProveedorIcon} alt="" /></Link>
          <span>Capacitaciones</span>
        </div>
      </div>
      <div className='CallUs_Services'>
        <span>¡Llámanos!</span>
        <h3>964197982</h3>
      </div>
    </div>
  )
}

export default Main