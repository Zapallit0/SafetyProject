import React from 'react'
import "./Service2.css"
import {Link} from 'react-router-dom'
import GestionIcon from '../../../assets/Icons/Sistema-de-Gestión-Seguridad.svg'
import SaludIcon from '../../../assets/Icons/Salud Ocupacional.svg'
import RiesgosIcon from '../../../assets/Icons/Prevencion de Riesgo.svg'
import ProveedorIcon from '../../../assets/Icons/Homologacion.svg'
function Service2() {
    const Services=[
        {"ServiceName":"Sistema de Gestión de Seguridad y Salud en el Trabajo",
        "Info":"según Ley 29783 y reglamento sectorial",
        "Icon":GestionIcon},
        {"ServiceName":"Gestión de Salud Ocupacional",
        "Info":"según Ley 29783, DS 005-2012 TR,RM 375-2088 TR",
        "Icon":SaludIcon},
        {"ServiceName":"Gestión de Prevención de Riesgos",
        "Info":"Riesgos Psicosociales,Perfil de Accidentabilidad",
        "Icon":RiesgosIcon},
        {"ServiceName":"Homologación para proveedores",
        "Info":" en Minería, Construcción, Logística y Servicios",
        "Icon":ProveedorIcon}]
  return (
    <div className='Service2' id='Services'>
        <div className='Service2Text'>
            <h3>Nuestros Servicios</h3>
            <p>Ofrecemos soluciones personalizadas para impulsar el éxito de tu negocio.   
            Confía en nosotros para salvaguardar lo que más valoras. 
            Descubre cómo podemos fortalecer tu seguridad hoy</p>
            <Link to={'/Servicios'} className='btnServicio2'>
                <button className='btnMasInfo'>Más Servicios</button>
            </Link>
        </div>
        <div className='ServicesPresentation'>
            {
            Services.map((service,index)=>(
                <div className='ServiceCard' key={index}>
                    <img src={service.Icon} />
                    <h4>{service.ServiceName}</h4>
                    <span>{service.Info}</span>
                </div>
            ))
            }
        </div>
        <Link to={'/Servicios'} className='btnServicio2'>
                <button className='btnMasInfoCel'>Todos los servicios</button>
        </Link>
    </div>
  )
}

export default Service2