import React from 'react'
import EnvironmentBackground from '../../../assets/ServicesPage/BackgroundSaludOcupacional.jpg'
import VigMedica from "../../../assets/ServicesPage/Gestion de Salud Ocupacional/Servicio1.webp"
import AgenOcupacional from "../../../assets/ServicesPage/Gestion de Salud Ocupacional/Servicio2.jpg"
import HigOcupacional from "../../../assets/ServicesPage/Gestion de Salud Ocupacional/Servicio3.jpg"
import DwnldButton from "../../../assets/ServicesPage/Global/DownloadArrow.svg"
function Services2() {
  const ServicesEnvironment =[{
    "ServiceName": "Programas de vigilancia médica ocupacional",
    "Image": VigMedica
  }, {
    "ServiceName": "Monitoreos de Agentes Ocupacionales",
    "Image": AgenOcupacional
  },{
    "ServiceName": "Programas de Higiene Ocupacional",
    "Image": HigOcupacional
  }
];
  return (
    <div className='Services1'>
      <div className='Services1_Title'>
        <img src={EnvironmentBackground} alt="Security Back" />
        <div className='Services1_Title_Content'>
          <h3>
            Gestión de Salud Ocupacional
          </h3>
          <span>
            según Ley 29783, DS 005-2012 TR, RM 375-2088 TR
          </span>
        </div>
    
      </div>
      <button className='downloadBtn'>
        <a>
          <img src={DwnldButton} alt="DescargaBrouche" /> Descargar Brouche
        </a>
      </button>
      <div className='SecurityServices'>
        {
          ServicesEnvironment.map((service,index)=>(
            <div className='CardService'>
              <img src={service.Image} alt="Servicio"/>
              <h4>{service.ServiceName}</h4>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Services2