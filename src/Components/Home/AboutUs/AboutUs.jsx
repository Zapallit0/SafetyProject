import './AboutUs.css'
import {Link} from 'react-router-dom'
import { motion, useReducedMotion } from 'framer-motion'
import Nosotros from'../../../assets/HomePageImgs/Especializacion/Nosotros.webp';
import SeguridadImg from '../../../assets/HomePageImgs/Especializacion/Gestion_Seguridad.webp';
import SaludImg from '../../../assets/HomePageImgs/Especializacion/Salud_Ocupacional.webp';
import MedioAmbienteImg from '../../../assets/HomePageImgs/Especializacion/Medio_Ambiente.webp';
import HomologacionesImg from '../../../assets/HomePageImgs/Especializacion/Homologacion.webp';
import TalentoImg from '../../../assets/HomePageImgs/Especializacion/Gestion_Talento.webp';

function AboutUs() {
    const reduceMotion = useReducedMotion();
    const areas_especializacion = [
    {
        index: 1,
        area: 'Gestión de Seguridad',
        image: SeguridadImg,
    },
    {
        index: 2,
        area: 'Salud Ocupacional',
        image: SaludImg,
    },
    {
        index: 3,
        area: 'Medio Ambiente',
        image: MedioAmbienteImg,
    },
    {
        index: 4,
        area: 'Homologaciones',
        image: HomologacionesImg,
    },
    {
        index: 5,
        area: 'Gestión de Talento y Capacitaciones',
        image: TalentoImg,
    },
    ];

    const gridVariants = {
        hidden: {},
        visible: { transition: { staggerChildren: 0.1 } },
    };
    const cardVariants = {
        hidden: { opacity: 0, y: reduceMotion ? 0 : 40 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.55, ease: 'easeOut' },
        },
    };
    const missionVariants = {
        hidden: { opacity: 0, y: reduceMotion ? 0 : 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
    };

  return (
    <section className='AboutUs hv-section hv-section-dark' id='About_Us'>
            <div className="CardsContainer">
                <span className="hv-eyebrow">
                    <span className="hv-eyebrow-index">02</span>
                    <span className="hv-eyebrow-rule" aria-hidden="true"></span>
                    <span className="hv-eyebrow-text">Experiencia</span>
                </span>
                <h4>Áreas de Especialización</h4>
                <motion.div
                    className="cardsGrid"
                    variants={gridVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-80px' }}
                >
                    {areas_especializacion.map((item) => (
                    <motion.div className="cardEspecializacion" key={item.index} variants={cardVariants}>
                        <div
                        className="card-bg"
                        style={{ backgroundImage: `url(${item.image})` }}
                        >
                        <span className="card-number">
                            {item.index.toString().padStart(2, '0')}
                        </span>
                        <h3>{item.area}</h3>
                        </div>
                    </motion.div>
                    ))}
                </motion.div>
            </div>
            <motion.div
                className='textOurMission'
                variants={missionVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-80px' }}
            >
                <div className='MissionContainer'>
                <img src={Nosotros} alt="Equipo Safety Advisors" />
                <div className='cardOurMission'>
                    <h3>No solo te protegemos y cuidamos</h3>
                    <p>
                        Transformamos su organización hacia un futuro más seguro, saludable y sostenible.
                    </p>
                    <Link className='linkAboutUs' to={'/Nosotros'}>
                        <button>
                            Conócenos más <span aria-hidden="true">→</span>
                        </button>
                    </Link>
                </div>
                </div>
            </motion.div>
    </section>
  )
}

export default AboutUs
