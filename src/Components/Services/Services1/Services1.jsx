import React from 'react'
import './Services1.css'
import Serv from '../../../assets/ServicesPage/Services.webp'
import SecurityBackground from '../../../assets/ServicesPage/BackgroundSecurity.webp'
function Services1() {
  const ServicesSecurity =[{
    "Service": "Implementación de Sistema de Gestión Seguridad y Salud en el Trabajo según Ley 29783 y reglamento sectorial. ",
    "Description": ["Política de SST", "IPERC – Mapa de Riesgo","Reglamento Interno de Seguridad y Salud en el Trabajo", "Plan / Programa Anual de Seguridad y Salud Ocupacional" ,
    " Plan / Programa anual de Capacitación e inspecciones","Plan de Respuesta a Emergencias, formación de Brigada de Emergencia", 
    "Investigación de Accidentes/Enfermedades", "Procedimientos y estándares","Estadística e indicadores de Seguridad" ,"Auditorías internas y externas k. Matriz de Requisitos Legales"]
  }, {
    "Service": "SafetyNet",
    "Description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus felis dolor, euismod eu justo vel, pharetra tempor nibh. Duis vel tempor augue. "
  }, {
    "Service": "SafetyNet",
    "Description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus felis dolor, euismod eu justo vel, pharetra tempor nibh. Duis vel tempor augue. "
  }, {
    "Service": "DefendPro",
    "Description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus felis dolor, euismod eu justo vel, pharetra tempor nibh. Duis vel tempor augue. "
  }
];
  return (
    <div className='Services1'>
      <div className='Services1_Title'>
        <img src={SecurityBackground} alt="Security Back" />
        <h3>
          Seguridad <span>Estratégica</span>
        </h3>
      </div>
      <div className='SecurityServices'>
        {
          ServicesSecurity.map((service,index)=>(
            <div className='CardService'>
              <img src={Serv} alt="Servicio" key={index}/>
              <h4>{service.Service}</h4>
              <ul className='descripcion'>
              {/* {service.Description.map((item,index2)=>(
                  <li key={index2}> {item}</li>
              ))} */}
              </ul>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Services1