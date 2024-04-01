import React from 'react'
import './Mission&View.css'
import LastImg from '../../../assets/AboutUsPage/lastImg.jpg'
function MissionView() {
  return (
    <div className='Mission_View'>
        <div className='paragraphsMission_View'>
            <div className='missionView'>
            <h3>Visión</h3>
            <p>Para el 2026, ser <span>reconocidos</span> como una empresa de calidad por nuestros servicios.</p>
            </div>
            <div className='missionView'>
            <h3>Misión</h3>
            <p>Brindar <span>soluciones especializadas</span> en asesorías, homologaciones y gestión de talento en Minería, Construcción, Logística, Servicios.</p>
            </div>
        </div>
        <img src={LastImg} alt="imgMission_View" />
    </div>
  )
}

export default MissionView