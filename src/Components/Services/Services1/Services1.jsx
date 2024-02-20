import React from 'react'
import './Services1.css'
import Serv from '../../../assets/ServicesPage/Services.webp'
import SecurityBackground from '../../../assets/ServicesPage/BackgroundSecurity.webp'
function Services1() {
  const ServicesSecurity =[{
    "Service": "SecureGuard",
    "Description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus felis dolor, euismod eu justo vel, pharetra tempor nibh. Duis vel tempor augue. "
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

export default Services1