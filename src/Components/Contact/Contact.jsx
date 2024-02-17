import React from 'react'
import './Contact.css'
import Facebook from '../../assets/social/facebook.svg';
import Linkedin from '../../assets/social/linkedin.svg';
import Instagram from '../../assets/social/instagram.svg';
function Contact() {
  return (
    <div className='Contacto'>
      <div className='DatosForm'>
        <div className='DatosContacto'>
          <h3>Ubicación</h3>
          <p>Jr. Brigadier Mateo <br /> Pumacahua 2550</p>
          <h3>Redes</h3>
          <p><span>+51</span> 964197982 <br />
          <span >gerencia@safeadvisors.com</span></p>
          <div className='logosRedes'>
            <img src={Facebook} alt="Facebook" />
            <img src={Instagram} alt="Instagram" />
            <img src={Linkedin} alt="Linkedin" />
          </div>
        </div>
        <div className='FormContacto'>
                <h2 className='contactPageTitle'>Contáctanos</h2>
                {/* <span className='contactDesc'>Para asistencia experta en seguridad y certificación, contáctenos utilizando el formulario a continuación.  Aseguremos su negocio juntos.</span> */}
                <form action="" className='Forma'>
                    <h5>Correo:</h5>
                    <input type='text' className='name' placeholder='Your Email' name='from_name'></input>
                    <div className='DatosPersonalesContacto'>
                      <div className='DatoPersonal'>
                        <h5>Nombre:</h5>
                        <input type='email' className='name' placeholder='Your Name' name='from_email'></input>
                      </div>
                      <div className='DatoPersonal'>
                        <h5>Número:</h5>
                        <input type='text' className='email' placeholder='Your Number' name='from_name'></input>
                      </div>
                    </div>
                    <h5>Mensaje:</h5>
                    <textarea className='msg' name='message' rows="5" placeholder='Your Message' ></textarea>
                    <input type='button' value='Enviar' className='submitBtn' />
                </form>
        </div>
      </div> 
      <div className='Mapa'>
        uwu
      </div> 
    </div>
  )
}

export default Contact
