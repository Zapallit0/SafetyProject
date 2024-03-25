import React from 'react'
import './Mission&View.css'
import LastImg from '../../../assets/AboutUsPage/lastImg.jpg'
function MissionView() {
  return (
    <div className='Mission_View'>
        <h3>Nuestra Visión y Misión</h3>
        <div className='paragraphsMission_View'>
            <p>Para el 2026, ser reconocidos como una empresa de calidad por nuestros servicios.</p>
            <p>Brindar soluciones especializadas en asesorías, homologaciones y gestión de talento en Minería, Construcción, Logística, Servicios.</p>
        </div>
        <img src={LastImg} alt="imgMission_View" />
    </div>
  )
}

export default MissionView