import { LazyLoadImage } from 'react-lazy-load-image-component'
import { motion } from 'framer-motion'
import CheckList from '../../../assets/IconsList/checklist.svg'
import DwnldButton from '../../../assets/IconsList/DownloadArrow.svg'
import GestionIcon from '../../../assets/Icons/Gestion_de_Seguridad.svg'
import SaludIcon from '../../../assets/Icons/Salud_Ocupacional.svg'
import RiesgosIcon from '../../../assets/Icons/Prevencion_de_Riesgos.svg'
import HomologacionIcon from '../../../assets/Icons/Homologacion.svg'
import pdf from '../../../pdf/SAFETY ADVISORS BROCHURE.pdf'
import BgGestion from '../../../assets/ServicesPage/BackgroundGestionSeg.webp'
import BgSalud from '../../../assets/ServicesPage/BackgroundSaludOcupacional.webp'
import BgRiesgos from '../../../assets/ServicesPage/gecosa-prevencion-riesgos.webp'
import BgHomologacion from '../../../assets/ServicesPage/BackgroundCapacitacion.webp'
import './ServiceSection.css'

const servicesData = [
  {
    id: 'srv-gestion',
    icon: GestionIcon,
    kicker: 'Gestión',
    title: 'Sistema de Gestión Seguridad y Salud en el Trabajo',
    subtitle: 'según Ley 29783 y reglamiento sectorial',
    image: BgGestion,
    scheme: 'unified',
    items: [
      'Política de SST (Seguridad Salud y Trabajo)',
      'IPERC (Identificación de Peligros y la Evaluación de Riesgos y Controles)',
      'Reglamento Interno de Seguridad y Salud en el Trabajo',
      'Plan / Programa Anual de Seguridad y Salud Ocupacional',
      'Plan / Programa anual de capacitación e inspecciones.',
      'Plan de Respuesta a Emergencias, formación de Brigada de Emergencia.',
      'Investigación de Accidentes/Enfermedades',
      'Procedimientos y estándares',
    ],
  },
  {
    id: 'srv-salud',
    icon: SaludIcon,
    kicker: 'Salud',
    title: 'Gestión de Salud Ocupacional',
    subtitle: 'según Ley 29783, DS 005-2012 TR, RM 375-2088 TR',
    image: BgSalud,
    scheme: 'unified',
    items: [
      'Programas de vigilancia médica ocupacional',
      'Monitoreos de Agentes Ocupacionales',
      'Programas de Higiene Ocupacional',
    ],
  },
  {
    id: 'srv-riesgos',
    icon: RiesgosIcon,
    kicker: 'Prevención',
    title: 'Gestión de Prevención de Riesgos',
    subtitle: 'según Ley 29783, DS 005-2012 TR, RM 375-2088 TR',
    image: BgRiesgos,
    scheme: 'unified',
    items: [
      'Programas de vigilancia médica ocupacional',
      'Monitoreos de Agentes Ocupacionales',
      'Programas de Higiene Ocupacional',
    ],
  },
  {
    id: 'srv-homologacion',
    icon: HomologacionIcon,
    kicker: 'Homologación',
    title: 'Homologación para proveedores',
    subtitle: 'Requisitos técnicos, legales, de seguridad, éticos y financieros necesarios en los rubros:',
    image: BgHomologacion,
    scheme: 'unified',
    items: [
      'Minería',
      'Construcción',
      'Logística',
    ],
  },
]

const imgVariants = {
  hidden: { opacity: 0, scale: 1.08 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.7, ease: 'easeOut' } },
}

const bodyVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
}

const itemUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

const cardContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07, delayChildren: 0.1 } },
}

const cardItem = {
  hidden: { opacity: 0, x: -16 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.35, ease: 'easeOut' } },
}

const viewportOpts = { once: true, margin: '-80px' }

function ServiceSection() {
  return (
    <div className="SrvSections">
      {servicesData.map((service, i) => (
        <div
          key={i}
          id={service.id}
          className={`SrvWrap SrvWrap--${service.scheme} ${i < servicesData.length - 1 ? 'SrvWrap--bordered' : ''}`}
        >
        <section
          className={`Srv ${i % 2 !== 0 ? 'Srv--imgRight' : ''}`}
        >
          <motion.div
            className="Srv_imageWrap"
            variants={imgVariants}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOpts}
          >
            <img
              className="Srv_image"
              src={service.image}
              alt={service.title}
              loading="lazy"
            />
            <div className="Srv_imageTag">
              <span className="Srv_imageNum">{(i + 1).toString().padStart(2, '0')}</span>
              <span className="Srv_imageKicker">{service.kicker}</span>
            </div>
          </motion.div>

          <motion.div
            className="Srv_body"
            variants={bodyVariants}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOpts}
          >
            <motion.div className="Srv_iconBadge" variants={itemUp}>
              <img src={service.icon} alt="" />
            </motion.div>
            <motion.h3 className="Srv_title" variants={itemUp}>
              {service.title}
            </motion.h3>
            <motion.span className="Srv_subtitle" variants={itemUp}>
              {service.subtitle}
            </motion.span>

            <motion.div className="Srv_cards" variants={cardContainer}>
              {service.items.map((item, j) => (
                <motion.div className="Srv_card" key={j} variants={cardItem}>
                  <span className="Srv_check"><LazyLoadImage src={CheckList} alt="" /></span>
                  <h4>{item}</h4>
                </motion.div>
              ))}
            </motion.div>

            <motion.a
              className="Srv_download"
              href={pdf}
              target="_blank"
              rel="noopener noreferrer"
              download
              variants={itemUp}
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.96 }}
            >
              <span className="Srv_downloadIcon">
                <LazyLoadImage src={DwnldButton} alt="" />
              </span>
              <span className="Srv_downloadLabel">Descargar brochure</span>
            </motion.a>
          </motion.div>
        </section>
        </div>
      ))}
    </div>
  )
}

export default ServiceSection
