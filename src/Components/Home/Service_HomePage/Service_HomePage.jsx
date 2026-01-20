import "./Service_HomePage.css"
import {Link} from 'react-router-dom'
import GestionIcon from '../../../assets/Icons/Gestion_de_Seguridad.svg'
import SaludIcon from '../../../assets/Icons/Salud_Ocupacional.svg'
import RiesgosIcon from '../../../assets/Icons/Prevencion_de_Riesgos.svg'
import ProveedorIcon from '../../../assets/Icons/Homologacion.svg'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { motion } from "framer-motion";

function Service_HomePage() {
    const Services=[
        {
            "ServiceName":"Sistema de Gestión de Seguridad y Salud en el Trabajo",
            "Info":"según Ley 29783 y reglamento sectorial",
            "Icon":GestionIcon
    },
        {"ServiceName":"Gestión de Salud Ocupacional",
        "Info":"según Ley 29783, DS 005-2012 TR,RM 375-2088 TR",
        "Icon":SaludIcon},
        {"ServiceName":"Gestión de Prevención de Riesgos",
        "Info":"Riesgos Psicosociales,Perfil de Accidentabilidad",
        "Icon":RiesgosIcon},
        {"ServiceName":"Homologación para proveedores",
        "Info":" en Minería, Construcción, Logística y Servicios",
        "Icon":ProveedorIcon}]

    const containerVariants = {
        hidden: {},
        visible: {
            transition: {
            staggerChildren: 0.15
            }
        }
        };

        const cardVariants = {
        hidden: {
            opacity: 0,
            y: 40
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
            duration: 0.5,
            ease: "easeOut"
            }
        }
    };
  return (
    
    <div className='Service2' id='Services'>
        <div className='Service2Text'>
            <h3>Nuestros Servicios</h3>
            <p>Diseñamos e implementamos soluciones en seguridad y salud ocupacional 
                que protegen a tu empresa, cumplen la normativa y reducen riesgos reales.</p>
            <Link to={'/Servicios'} className='btnServicio2'>
                <button className='btnMasInfo'>Todos los servicios</button>
            </Link>
        </div>
        <motion.div
            className="ServicesPresentation"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            >
            {Services.map((service, index) => (
                <motion.div
                className="ServiceCard horizontal"
                key={index}
                variants={cardVariants}
                whileHover={{ y: -6 }}
                whileTap={{ scale: 0.97 }}
                >
                <div className="ServiceCardContent">
                    <h4>{service.ServiceName}</h4>
                    <p>{service.Info}</p>
                    <span className="ServiceLink">
                    Conocer más →
                    </span>
                </div>

                <div className="ServiceCardIcon">
                    <LazyLoadImage
                    src={service.Icon}
                    alt={service.ServiceName}
                    />
                </div>
            </motion.div>
            ))
            }
        </motion.div>
        <Link to={'/Servicios'} className='btnServicio2'>
                <motion.button
                    className="btnMasInfoCel"
                    whileHover={{ y: -3 }}
                    whileTap={{ scale: 0.96 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                >
                    Todos los servicios →
                </motion.button>
        </Link>
    </div>
  )
}

export default Service_HomePage