import React from 'react'
import './Services1.css'
import CheckList from "../../../assets/IconsList/checklist.svg"
import DwnldButton from "../../../assets/IconsList/DownloadArrow.svg"
import { LazyLoadImage } from 'react-lazy-load-image-component'
import pdf from '../../../pdf/SAFETY ADVISORS BROCHURE.pdf'
function Services1() {
  const ServicesList=[
  {"ServiceName":"Política de SST(Seguridad Salud y Trabajo)","title":"Seguridad Salud y Trabajo","descripcion":"Política de SST"},
  {"ServiceName":"IPERC (Identificación de Peligros y la Evaluación de Riesgos y Controles )","title":"Peligros y la Evaluación de Riesgos","descripcion":"Identificación de Peligros y la Evaluación de Riesgos y Controles"},
  {"ServiceName":"Reglamento Interno de Seguridad y Salud en el Trabajo","title":"Seguridad y Salud","descripcion":"Reglamento Interno de Seguridad y Salud en el Trabajo"},
  {"ServiceName":"Plan / Programa Anual de Seguridad y Salud Ocupacional","title":"Seguridad y Salud Ocupacional","descripcion":"Plan / Programa Anual de Seguridad y Salud Ocupacional"},
  {"ServiceName":"Plan / Programa anual de capacitación e inspecciones.","title":"Capacitación e Inspecciones","descripcion":"Plan / Programa anual de capacitación e inspecciones"},
  {"ServiceName":"Plan de Respuesta a Emergencias, formación de Brigada de Emergencia.","title":"Respuesta a Emergencias","descripcion":"Plan de Respuesta a Emergencias, formación de Brigada de Emergencia"},
  {"ServiceName":"Investigación de Accidentes/Enfermedades","title":"Accidentes/Enfermedades","descripcion":"Investigación de Accidentes/Enfermedades"},
  {"ServiceName":"Procedimientos y estándares","title":"Procedimientos y estándares","descripcion":"Procedimientos y estándares"},
  ]
  return (
    <div className='Services' id='Seguridad'>
        <div className='Services_Title' >
          <h3>
            Sistema de Gestión Seguridad y Salud en el Trabajo
          </h3>
          <span>según Ley 29783 y reglamiento sectorial</span>
        </div>
      <div className='ListServices'>
      {
            ServicesList.map((service,index)=>(
           <div className='CardService' key={index}>
            <LazyLoadImage src={CheckList} title={service.title} descripcion={service.descripcion}/>
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
  )
}

export default Services1