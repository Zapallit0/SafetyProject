import React from 'react'
import './SmallContact.css'
import { Link } from 'react-router-dom'

function SmallContact() {
  return (
    <div className='MasInfo'>
        <div className='MasInfoTexto'>
            <h3>¿Tienes más dudas?</h3>
            <p>No dudes en contactarnos </p>
        </div>
        <Link className='MasInfoButton' to={'/Contacto'} >
            <button>
                Llámanos
            </button>
        </Link>
    </div>
  )
}

export default SmallContact