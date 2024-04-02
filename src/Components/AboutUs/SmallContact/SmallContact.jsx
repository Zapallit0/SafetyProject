import React from 'react'
import './SmallContact.css'
import { Link } from 'react-router-dom'

function SmallContact() {
  return (
    <div className='smallContact'>
        <h4>¿Interesado?</h4>
        <h4>Reserva una cita</h4>
        <Link className='smallButton'> Contáctanos</Link>
    </div>
  )
}

export default SmallContact