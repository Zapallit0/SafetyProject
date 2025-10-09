import React from 'react'
import './ContactPage.css'
import ContactForm from '../../SmallComponents/ContactForm/ContactForm.jsx'
function ContactPage() {
  return (
    <div className='ContactPage'>
        <div className='ContactHelp'>
            <h4>Contáctanos</h4>
            <h2>Hablanos de tu proyecto</h2>
            <span>Comentanos tu idea llenando el siguiente formulario te contactaremos lo mas pronto posible</span>
            <ContactForm />
        </div>
        <div className='ContactInfo'>
            <h4>Si requiere mas información especifica, porfavor usar los siguientes canales de contacto:</h4>
            <ul className='ContactList'>
              <li>Para contacto directo, correo <a href='mailto:contacto@safetyadvisors.io'>contacto@safetyadvisors.io</a></li>
              <li>Para solución de problemas <a href='mailto:contacto@safetyadvisors.io'>contacto@safetyadvisors.io</a></li>
              <li>Nuestra ubicación <a href='https://www.google.com/maps/place/Condominio+Ambassador,+cuadra+25+del+Jr.+Brigadier+Mateo+Pumacahua,+Urb.+Risso,+Per%C3%BA.,+Jr.+Brigadier+Pumacahua+2550,+Lince+15073/@-12.0875571,-77.04555,17z/data=!3m1!4b1!4m6!3m5!1s0x9105c8584260ca6b:0x959f6c5a7bc92394!8m2!3d-12.0875624!4d-77.0429751!16s%2Fg%2F1hjgrdc65?entry=ttu'> Jr. Brigadier Pumacahua 2550 – Lince</a></li>
              <li>Llámanos al <a href='tel:964197982'>964197982</a></li>
            </ul>
        </div>
        <div className='ContactSupport'>
            <h2>Estamos para ayudarte en todo lo que necesites</h2>
            <ul className='ContactSupportList'>
              <li>Soporte sin bots</li>
              <li>Respuesta Rápida</li>
              <li>100% Confiables</li>
            </ul>
        </div>
    </div>
  )
}

export default ContactPage