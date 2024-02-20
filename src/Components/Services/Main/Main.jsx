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
        <div className='Icon_Service'>
          <Link className='Link_Service'><img src={MedioAmbiente} alt="" /></Link>
          <span>Medio Ambiente</span>
        </div>
      </div>
      <div className='CallUs_Services'>
        <span>¡Llámanos!</span>
        <h3>964197982</h3>
      </div>
      {/* <div className='UpMainSticky'>
        <Link className='UpMain'>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M7.293 4.707 14.586 12l-7.293 7.293 1.414 1.414L17.414 12 8.707 3.293 7.293 4.707z"/></svg>
        </Link>
      </div> */}
    </div>
  )
}

export default Main