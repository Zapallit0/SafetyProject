import React from 'react'
import './Services1.css'
import CheckList from "../../../assets/IconsList/checklist.svg"
import DwnldButton from "../../../assets/IconsList/DownloadArrow.svg"
import { LazyLoadImage } from 'react-lazy-load-image-component'

function Services1() {
  const ServicesList=[
  {"ServiceName":"Política de SST(Seguridad Salud y Trabajo)"},
  {"ServiceName":"IPERC (Identificación de Peligros y la Evaluación de Riesgos y Controles )"},
  {"ServiceName":"Reglamento Interno de Seguridad y Salud en el Trabajo"},
  {"ServiceName":"Plan / Programa Anual de Seguridad y Salud Ocupacional"},
  {"ServiceName":"Plan / Programa anual de capacitación e inspecciones."},
  {"ServiceName":"Plan de Respuesta a Emergencias, formación de Brigada de Emergencia."},
  {"ServiceName":"Investigación de Accidentes/Enfermedades"},
  {"ServiceName":"Procedimientos y estándares"},
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
            <LazyLoadImage src={CheckList}/>
            <h4>{service.ServiceName}</h4>
          </div>
        ))}
        <button className='downloadBtn'>
          <a>
            <LazyLoadImage src={DwnldButton} alt="DescargaBrouche" />BROUCHE COMPLETO
          </a>
        </button>
      </div>
    </div>
  )
}

export default Services1