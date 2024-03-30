import React from 'react'
import './Services1.css'
import SecurityBackground from '../../../assets/ServicesPage/BackgroundGestionSeg.jpg'
import SSTimg from "../../../assets/ServicesPage/Sistema de Gestión Seguridad y Salud en el Trabajo/Service1.png"
import IPERCimg from "../../../assets/ServicesPage/Sistema de Gestión Seguridad y Salud en el Trabajo/Service2.jpg"
import ReglaIntern from "../../../assets/ServicesPage/Sistema de Gestión Seguridad y Salud en el Trabajo/Service3.png"
import PlanSeg from "../../../assets/ServicesPage/Sistema de Gestión Seguridad y Salud en el Trabajo/Service4.jpg"
import PlanCap from "../../../assets/ServicesPage/Sistema de Gestión Seguridad y Salud en el Trabajo/Service5.webp"
import PlanEmer from "../../../assets/ServicesPage/Sistema de Gestión Seguridad y Salud en el Trabajo/Service6.jpg"
import InvesAccidentes  from "../../../assets/ServicesPage/Sistema de Gestión Seguridad y Salud en el Trabajo/Service7.png"
import ProcedEstan from "../../../assets/ServicesPage/Sistema de Gestión Seguridad y Salud en el Trabajo/Service8.jpg"
import EstadisticaSeg from "../../../assets/ServicesPage/Sistema de Gestión Seguridad y Salud en el Trabajo/Service9.jpg"
import PlanAudit from "../../../assets/ServicesPage/Sistema de Gestión Seguridad y Salud en el Trabajo/Service10.jpg"
import MatrizLegal from "../../../assets/ServicesPage/Sistema de Gestión Seguridad y Salud en el Trabajo/Service11.jpg"
import ComitePar from  "../../../assets/ServicesPage/Sistema de Gestión Seguridad y Salud en el Trabajo/Service12.jpg"
import DwnldButton from "../../../assets/ServicesPage/Global/DownloadArrow.svg"
import { Button } from 'react-scroll'

function Services1() {
  const ServicesSecurity =[
  {"ServiceName":"Política de SST(Seguridad Salud y Trabajo)", "Img":SSTimg},
  {"ServiceName":"IPERC (Identificación de Peligros y la Evaluación de Riesgos y Controles )", "Img":IPERCimg},
  {"ServiceName":"Reglamento Interno de Seguridad y Salud en el Trabajo", "Img":ReglaIntern},
  {"ServiceName":"Plan / Programa Anual de Seguridad y Salud Ocupacional", "Img":PlanSeg},
  {"ServiceName":"Plan / Programa anual de capacitación e inspecciones.", "Img":PlanCap},
  {"ServiceName":"Plan de Respuesta a Emergencias, formación de Brigada de Emergencia.", "Img":PlanEmer},
  {"ServiceName":"Investigación de Accidentes/Enfermedades", "Img":InvesAccidentes},
  {"ServiceName":"Procedimientos y estándares", "Img":ProcedEstan},
  {"ServiceName":"Estadística e indicadores de Seguridad", "Img":EstadisticaSeg},
  {"ServiceName":"Plan de Auditorías internas y externas", "Img":PlanAudit},
  {"ServiceName":"Matriz de Requisitos Legales", "Img":MatrizLegal},
  {"ServiceName":"Asesoría en conformación y gestión de Comité Paritario.", "Img":ComitePar}
];
  return (
    <div className='Services1'>
      <div className='Services1_Title'>
        <img src={SecurityBackground} alt="Security Back" />
        <div className='Services1_Title_Content'>
          <h3>
            Sistema de Gestión Seguridad y Salud en el Trabajo
          </h3>
          <span>según Ley 29783 y reglamiento sectorial</span>
        </div>
      </div>

      <button className='downloadBtn'>
        <a>
          <img src={DwnldButton} alt="DescargaBrouche" /> Descargar Brouche
        </a>
      </button>
    
      <div className='SecurityServices'>
        {
          ServicesSecurity.map((service,index)=>(
            <div className='CardService'>
              <img src={service.Img} alt="Servicio" key={index}/>
              <h4>{service.ServiceName}</h4>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Services1