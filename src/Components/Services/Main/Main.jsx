import React from 'react'
import './Main.css'
import SegLaboral from '../../../assets/services/SeguridadLaboral.png'
import SalOcupacional from '../../../assets/services/SaludOcupacional.png'
import Certificacion from '../../../assets/services/CertificacionLaboral.png'
import Capacitaciones from '../../../assets/services/Capacitaciones.png'
import MedioAmbiente from '../../../assets/services/MedioAmbiente.png'
import { Link } from 'react-scroll'

function Main() {
  return (
    <div className='Main_Services'>
      <div className='Title_Services'>
        <h2>Nuestros Servicios</h2>
      </div>
      <div className='Icons_Services'>
        <div className='Icon_Service'>
          <Link className='Link_Service'><img src={SegLaboral} alt="Seguridad Laboral" /></Link>
          <span>Seguridad Laboral</span>
        </div>
        <div className='Icon_Service'>
          <Link className='Link_Service'><img src={SalOcupacional} alt="Salud Ocupaciona" /></Link>
          <span>Salud Ocupacional</span>
        </div>
        <div className='Icon_Service'>
          <Link className='Link_Service'><img src={Certificacion} alt="" /></Link>
          <span>Certificación</span>
        </div>
        <div className='Icon_Service'>
          <Link className='Link_Service'><img src={Capacitaciones} alt="" /></Link>
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