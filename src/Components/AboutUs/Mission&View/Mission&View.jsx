import React from 'react'
import './Mission&View.css'
import LastImg from '../../../assets/AboutUsPage/lastImg.webp'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { motion } from 'framer-motion'

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.2, ease: 'easeOut' }
  })
}

function MissionView() {
  return (
    <div className='Mission_View'>
        <div className='paragraphsMission_View'>
            <motion.div
              className='missionView'
              custom={0}
              variants={cardVariants}
              initial='hidden'
              whileInView='visible'
              viewport={{ once: true, margin: '-80px' }}
            >
              <h3>Visión</h3>
              <p>Para el 2030, ser <span>reconocidos</span> como una empresa de calidad por nuestros servicios.</p>
            </motion.div>
            <motion.div
              className='missionView'
              custom={1}
              variants={cardVariants}
              initial='hidden'
              whileInView='visible'
              viewport={{ once: true, margin: '-80px' }}
            >
              <h3>Misión</h3>
              <p>Brindar <span>soluciones especializadas</span> en asesorías, homologaciones y gestión de talento en Minería, Construcción, Logística, Servicios.</p>
            </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <LazyLoadImage src={LastImg} alt="imgMission_View" />
        </motion.div>
    </div>
  )
}

export default MissionView
