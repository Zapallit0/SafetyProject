import React,{ useRef,useState } from 'react'
import './ContactForm.css'
import emailjs from '@emailjs/browser';
import { Service_ID,Template_ID,Public_Key } from "../../../config.js"

function ContactForm() {
    const form = useRef(); 
    const [btnSend,setButtonSend] = useState(false) 

    const sendEmail = (e) => {
    e.preventDefault();
    setButtonSend(true)
    emailjs.sendForm(Service_ID, Template_ID, form.current, {
        publicKey: Public_Key,})
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
          setButtonSend(false)
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
    }

    return (
    <form className='ContactForm' ref={form} onSubmit={sendEmail}>
        {/* Datos personales */}
        <div className="ContactInput" > 
            <input type="email" placeholder='Correo Electronico*' name="email" required/>
        </div>
        <div className="ContactInput">
            <input type="text" placeholder='Nombres y Apellidos*' name="name" required/>
        </div>
        <div className="ContactInput" >
            <input type="text" placeholder='Numero de celular*' name="phone" required/>
        </div>
        {/* Datos de empresa */}
        <div className="ContactInput" >
            <input type="text" placeholder='Nombre de Empresa*' name="company_name" required/>
        </div>
        {/* Mensaje */}
        <div className="ContactInput" >
            <textarea  className='MessageForm' rows="5" name="message" placeholder='Cuentanos un poco sobre tus metas, que buscas lograr con nuestra ayuda'/>         
        </div>
        <input type="submit" className='ContactSubmit' value={btnSend?"Enviando..":"Enviar"}/>
    </form>
  )
}

export default ContactForm