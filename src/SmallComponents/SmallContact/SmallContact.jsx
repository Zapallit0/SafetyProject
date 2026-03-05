import React from 'react'
import './SmallContact.css'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

function SmallContact() {
  return (
    <motion.div
      className='MasInfo'
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
        <div className='MasInfoTexto'>
            <h3>¿Tienes más dudas?</h3>
            <p>No dudes en contactarnos </p>
        </div>
        <Link className='MasInfoButton' to={'/Contacto'} >
            <button>
                Llámanos
            </button>
        </Link>
    </motion.div>
  )
}

export default SmallContact
