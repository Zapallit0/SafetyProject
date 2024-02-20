import React from 'react'
import Serv from '../../../assets/ServicesPage/Services.webp'
import CapacitacionBackground from '../../../assets/ServicesPage/BackgroundCapacitacion.webp'
function Services3() {
  const ServicesEnvironment =[{
    "Service": "Capacitacion1",
    "Description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus felis dolor, euismod eu justo vel, pharetra tempor nibh. Duis vel tempor augue. "
  }, {
    "Service": "Capacitacion2",
    "Description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus felis dolor, euismod eu justo vel, pharetra tempor nibh. Duis vel tempor augue. "
  },{
    "Service": "Capacitacion3",
    "Description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus felis dolor, euismod eu justo vel, pharetra tempor nibh. Duis vel tempor augue. "
  },{
    "Service": "Capacitacion4",
    "Description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus felis dolor, euismod eu justo vel, pharetra tempor nibh. Duis vel tempor augue. "
  }
];
  return (
    <div className='Services1'>
      <div className='Services1_Title'>
        <img src={CapacitacionBackground} alt="Security Back" />
        <h3>
          Soluciones <span>Sostenibles</span>
        </h3>
      </div>
      <div className='SecurityServices'>
        {
          ServicesEnvironment.map((service,index)=>(
            <div className='CardService'>
              <img src={Serv} alt="Servicio"/>
              <h4>{service.Service}</h4>
              <p>{service.Description}</p>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Services3