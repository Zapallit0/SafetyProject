import React,{ useRef,useState } from 'react'
import './ContactForm.css'
import emailjs from '@emailjs/browser';
import { Service_ID,Template_ID,Public_Key } from "../../../config.js"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ContactForm() {
    const form = useRef(); 
    const [btnSend,setButtonSend] = useState(false) 

    const validateForm = () => {
      const formData = new FormData(form.current)
      const email = formData.get('email')?.trim()
      const name = formData.get('name')?.trim()
      const phone = formData.get('phone')?.trim()
      const companyName = formData.get('company_name')?.trim()

      if (!name || name.length < 2) {
        toast.warn("Ingresa tu nombre completo", { theme: "dark" })
        return false
      }
      if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        toast.warn("Ingresa un correo electrónico válido", { theme: "dark" })
        return false
      }
      if (!phone || !/^\d{7,15}$/.test(phone)) {
        toast.warn("Ingresa un número de celular válido (solo dígitos)", { theme: "dark" })
        return false
      }
      if (!companyName || companyName.length < 2) {
        toast.warn("Ingresa el nombre de tu empresa", { theme: "dark" })
        return false
      }
      return true
    }

    const sendEmail = (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    setButtonSend(true)
    emailjs.sendForm(Service_ID, Template_ID, form.current, {
        publicKey: Public_Key,})
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
          toast.success("Correo enviado correctamente",{
            theme:"dark"
          });
          setButtonSend(false)
        },
        (error) => {
          toast.error("Hubo un error intente denuevo",{
            theme:"dark"
          });
          setButtonSend(false)
        },
      );
    }

    return (
    <form className='ContactForm' ref={form} onSubmit={sendEmail}>
        {/* Datos personales */}
        <div className="ContactInput" > 
            <input type="text" placeholder='Correo Electronico*' name="email"/>
        </div>
        <div className="ContactInput">
            <input type="text" placeholder='Nombres y Apellidos*' name="name"/>
        </div>
        <div className="ContactInput" >
            <input type="text" placeholder='Numero de celular*' name="phone"/>
        </div>
        {/* Datos de empresa */}
        <div className="ContactInput" >
            <input type="text" placeholder='Nombre de Empresa*' name="company_name"/>
        </div>
        {/* Mensaje */}
        <div className="ContactInput" >
            <textarea  className='MessageForm' rows="5" name="message" placeholder='Cuentanos un poco sobre tus metas, que buscas lograr con nuestra ayuda'/>         
        </div>
        <input type="submit" className={btnSend?'ContactSubmitLocked':'ContactSubmit'}value={btnSend?"Enviando..":"Enviar"} disabled={btnSend?true:false} />
        <ToastContainer autoClose={3000}/> 
    </form>
  )
}

export default ContactForm