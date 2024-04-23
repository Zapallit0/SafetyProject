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
              <li>Para contacto directo, correo <a href=''>gerencia@safetyadvisors.io</a></li>
              <li>Para solución de problemas <a href=''>support@safetyadvisors.io</a></li>
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