import React from 'react'
import DwnldButton from "../../../assets/ServicesPage/Global/DownloadArrow.svg"
import CheckList from "../../../assets/IconsList/checklist.svg"
import { LazyLoadImage } from 'react-lazy-load-image-component';

function Services3() {
  const ServicesSalud =[{
      "ServiceName": "Evaluación de Riesgos Psicosociales",
  },
  {
    "ServiceName": "Programas de Seguridad Basada en el Comportamiento (SBC)",
},
{
  "ServiceName": "Programas Preventivos",
},{
  "ServiceName": "Evaluación de Riesgos Psicosociales",
},{
  "ServiceName": "Elaboración de Perfil de Accidentabilidad.",
},{
  "ServiceName":"Gestión de Riesgos Críticos",
}];
  return (
    <div className='Services'>
      <div className='Services_Title'>
          <h3>
          Gestión de Prevención de Riesgos
          </h3>
          <span>
            según Ley 29783, DS 005-2012 TR, RM 375-2088 TR
          </span>
      </div>
      <div className='ListServices'>
        <div className='SecurityServices'>
          {
            ServicesSalud.map((service,index)=>(
              <div className='CardService'>
                <LazyLoadImage src={CheckList}/>
                <h4>{service.ServiceName}</h4>
              </div>
            ))
          }
        </div>
        <button className='downloadBtn'>
          <a>
            <LazyLoadImage src={DwnldButton} alt="DescargaBrouche" />BROUCHE COMPLETO
          </a>
        </button>
      </div>
    </div>
  )
}

export default Services3