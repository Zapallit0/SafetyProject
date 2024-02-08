import React from 'react'
import './MasServicios.css'
import background from '../../assets/services/backgroundServices.jpg';
function MasServicios() {
  return (
    <div className='Mas_Servicios'>
        <div className='backgroundMasServicios'>
            <img src={background} alt="Fondo" />
        </div>
        <div className='contentMasServicios'>
            <h2>Soluciones</h2>
            <div className='serviciosCards'>
                <div className="servicioCard">
                    <h3>Implementación de sistema de seguridad <br /> y salud ocupacional</h3>
                    <p>Según Ley 29783 y DS.024-2016 EM</p>
                </div>
                <div className="servicioCard">
                    <h3>Asesoría en homologación <br /> para proveedores</h3>
                    <p>Mineria, Construcción Logística,Servicios</p>
                </div>
                <div className="servicioCard">
                    <h3>Implementación de gestión <br /> de salud ocupacional</h3>
                    <p>Según Ley 29783, DS 005-2012 TR, RM 375-2088 TR</p>
                </div>
                <div className="servicioCard">
                    <h3>Implementación de gestión <br /> de prevención de riesgos</h3>
                    <p>Evaluaciones, SBC, programas preventivos, elaboración de Perfil</p>
                </div>
                <div className="servicioCard">
                    <h3>Implementación de gestión <br /> de riesgos críticos</h3>
                    <p>Mineria, Construcción Logística,Servicios</p>
                </div>
                <div className="servicioCard">
                    <h3>Implementación de gestión <br /> de medio ambiente</h3>
                    <p>Permisos de uso de aguas, plan manejo ambiental</p>
                </div>
            </div>
            <button className='btnMasServicios'>
                Todos los servicios
        </button>
        </div>
    </div>
  )
}

export default MasServicios