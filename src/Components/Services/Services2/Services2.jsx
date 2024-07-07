import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import CheckList from "../../../assets/IconsList/checklist.svg"
import './Services2.css'
import DwnldButton from "../../../assets/IconsList/DownloadArrow.svg"
import pdf from '../../../pdf/SAFETY ADVISORS BROCHURE.pdf'
function Services2() {
  const ServicesEnvironment =[{
    "ServiceName": "Programas de vigilancia médica ocupacional","title":"Vigilancia médica ocupacional","descripcion":"Programas de vigilancia médica ocupacional"
  }, {
    "ServiceName": "Monitoreos de Agentes Ocupacionales","title":"Agentes Ocupacionales","descripcion":"Monitoreos de Agentes Ocupacionales"
  },{
    "ServiceName": "Programas de Higiene Ocupacional","title":"Higiene Ocupacional","descripcion":"Programas de Higiene Ocupacional"
  }
];
  return (
    <div className='TwoServices' id='SaludOcupacional'>
      <div className='Services2'>
      <div className='Services2_Title'>
          <h3>
            Gestión de Salud Ocupacional
          </h3>
          <span>
            según Ley 29783, DS 005-2012 TR, RM 375-2088 TR
          </span>
    
      </div>
      <div className='ListServices'>
        {
          ServicesEnvironment.map((service,index)=>(
            <div className='CardService' key={index}>
              <LazyLoadImage src={CheckList} title={service.title} descripcion={service.descripcion}/>
              <h4>{service.ServiceName}</h4>
            </div>
          ))}
          <button className='downloadBtn'>
            <a>
              <LazyLoadImage src={DwnldButton} alt="DescargaBrouche" /> Descargar Brouche
            </a>
          </button>
      </div>
      </div>
      <div className='Services2_Riesgos'>
        <div className='Services2_Title'>
            <h3>
            Gestión de Prevención de Riesgos
            </h3>
            <span>
              según Ley 29783, DS 005-2012 TR, RM 375-2088 TR
            </span>
        </div>
        <div className='ListServices'>
        {
          ServicesEnvironment.map((service,index)=>(
            <div className='CardService' key={index}>
              <LazyLoadImage src={CheckList}/>
              <h4>{service.ServiceName}</h4>
            </div>
          ))}
          <button className='downloadBtn'>
          <a href={pdf} target='_blank' rel='noopener noreferrer' download>
            <LazyLoadImage src={DwnldButton} alt="DescargaBrouche" />BROUCHE COMPLETO
          </a>
          </button>
      </div>
      </div>
    </div>
  )
}

export default Services2