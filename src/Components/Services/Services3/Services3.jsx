import React from 'react'
import DwnldButton from "../../../assets/IconsList/DownloadArrow.svg"
import CheckList from "../../../assets/IconsList/checklist.svg"
import { LazyLoadImage } from 'react-lazy-load-image-component';

function Services3() {
  const ServicesSalud =[
  {"ServiceName": "Mineria","title":"Mineria","descripcion":"Mineria Safety Advisors"},
  {"ServiceName": "Construcción","title":"Construcción","descripcion":"Construcción Safety Advisors"},
  {"ServiceName": "Logistica","title":"Logistica","descripcion":"Logistica Safety Advisors"}
];
  return (
    <section className='Services' id='Homologacion' >
      <div className='Services_Title'>
          <h3>
          Homologación para proveedores
          </h3> 
          <span>
          Requisitos técnicos, legales, de seguridad, éticos y financieros necesarios en los rubros:
          </span>
      </div>
      <div className='ListServices'>
          {
            ServicesSalud.map((service,index)=>(
              <div className='CardService' key={index} title={service.title} descripcion={service.descripcion}>
                <LazyLoadImage src={CheckList}/>
                <h4>{service.ServiceName}</h4>
              </div>
            ))
          } 
        <button className='downloadBtn'>
          <a>
            <LazyLoadImage src={DwnldButton} alt="DescargaBrouche" />BROUCHE COMPLETO
          </a>
        </button>
       </div> 
    </section>
  )
}

export default Services3