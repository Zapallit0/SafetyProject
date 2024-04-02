import React from 'react'
import CapacitacionBackground from '../../../assets/ServicesPage/BackgroundCapacitacion.webp'
import DwnldButton from "../../../assets/ServicesPage/Global/DownloadArrow.svg"
import Services1 from "../../../assets/ServicesPage/Salud Ocupacional/Servicio1.webp"
function Services3() {
  const ServicesSalud =[{
      "ServiceName": "Evaluación de Riesgos Psicosociales",
      "Image":""
  },
  {
    "ServiceName": "Programas de Seguridad Basada en el Comportamiento (SBC)",
    "Image":""
},
{
  "ServiceName": "Programas Preventivos",
  "Image":""
},{
  "ServiceName": "Evaluación de Riesgos Psicosociales",
  "Image":""
},{
  "ServiceName": "Elaboración de Perfil de Accidentabilidad.",
  "Image":""
},{
  "ServiceName":"Gestión de Riesgos Críticos",
  "Image":""
}];
  return (
    <div className='Services1'>
      <div className='Services1_Title'>
        <img src={CapacitacionBackground} alt="Security Back" />
        <div className='Services1_Title_Content'>
          <h3>
          Gestión de Prevención de Riesgos
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
          ServicesSalud.map((service,index)=>(
            <div className='CardService'>
              <img src={Services1} alt="" />
              <h4>{service.ServiceName}</h4>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Services3