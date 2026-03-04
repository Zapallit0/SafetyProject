import { LazyLoadImage } from 'react-lazy-load-image-component'
import CheckList from '../../../assets/IconsList/checklist.svg'
import DwnldButton from '../../../assets/IconsList/DownloadArrow.svg'
import GestionIcon from '../../../assets/Icons/Gestion_de_Seguridad.svg'
import SaludIcon from '../../../assets/Icons/Salud_Ocupacional.svg'
import RiesgosIcon from '../../../assets/Icons/Prevencion_de_Riesgos.svg'
import HomologacionIcon from '../../../assets/Icons/Homologacion.svg'
import pdf from '../../../pdf/SAFETY ADVISORS BROCHURE.pdf'
import BgGestion from '../../../assets/ServicesPage/BackgroundGestionSeg.jpg'
import BgSalud from '../../../assets/ServicesPage/BackgroundSaludOcupacional.jpg'
import BgRiesgos from '../../../assets/ServicesPage/gecosa-prevencion-riesgos.jpg'
import BgHomologacion from '../../../assets/ServicesPage/BackgroundCapacitacion.webp'
import './ServiceSection.css'

const servicesData = [
  {
    id: 'srv-gestion',
    icon: GestionIcon,
    title: 'Sistema de Gestión Seguridad y Salud en el Trabajo',
    subtitle: 'según Ley 29783 y reglamiento sectorial',
    image: BgGestion,
    scheme: 'white',
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
    title: 'Gestión de Salud Ocupacional',
    subtitle: 'según Ley 29783, DS 005-2012 TR, RM 375-2088 TR',
    image: BgSalud,
    scheme: 'dark',
    items: [
      'Programas de vigilancia médica ocupacional',
      'Monitoreos de Agentes Ocupacionales',
      'Programas de Higiene Ocupacional',
    ],
  },
  {
    id: 'srv-riesgos',
    icon: RiesgosIcon,
    title: 'Gestión de Prevención de Riesgos',
    subtitle: 'según Ley 29783, DS 005-2012 TR, RM 375-2088 TR',
    image: BgRiesgos,
    scheme: 'orange',
    items: [
      'Programas de vigilancia médica ocupacional',
      'Monitoreos de Agentes Ocupacionales',
      'Programas de Higiene Ocupacional',
    ],
  },
  {
    id: 'srv-homologacion',
    icon: HomologacionIcon,
    title: 'Homologación para proveedores',
    subtitle: 'Requisitos técnicos, legales, de seguridad, éticos y financieros necesarios en los rubros:',
    image: BgHomologacion,
    scheme: 'brown',
    items: [
      'Minería',
      'Construcción',
      'Logística',
    ],
  },
]

function ServiceSection() {
  return (
    <div className="SrvSections">
      {servicesData.map((service, i) => (
        <section
          key={i}
          id={service.id}
          className={`Srv Srv--${service.scheme} ${i % 2 !== 0 ? 'Srv--imgRight' : ''}`}
        >
          <div className="Srv_imageWrap">
            <img
              className="Srv_image"
              src={service.image}
              alt={service.title}
              loading="lazy"
            />
          </div>

          <div className="Srv_body">
            <div className="Srv_iconBadge">
              <img src={service.icon} alt="" />
            </div>
            <h3 className="Srv_title">{service.title}</h3>
            <span className="Srv_subtitle">{service.subtitle}</span>

            <div className="Srv_cards">
              {service.items.map((item, j) => (
                <div className="Srv_card" key={j}>
                  <LazyLoadImage src={CheckList} alt="" />
                  <h4>{item}</h4>
                </div>
              ))}
            </div>

            <button className="Srv_download">
              <a href={pdf} target="_blank" rel="noopener noreferrer" download>
                <LazyLoadImage src={DwnldButton} alt="Descargar Brochure" />
                BROCHURE COMPLETO
              </a>
            </button>
          </div>
        </section>
      ))}
    </div>
  )
}

export default ServiceSection
