import React from 'react'
import './SmallContact.css'
import { Link } from 'react-router-dom'

function SmallContact() {
  return (
    <div className='MasInfo'>
        <div className='MasInfoTexto'>
            <h3>¿Tienes más dudas?</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Laborum cumque sit culpa rerum porro, libero officiis nisi, beatae amet iste incidunt, nostrum dicta alias debitis. 
                Architecto illo vitae perferendis blanditiis?</p>
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