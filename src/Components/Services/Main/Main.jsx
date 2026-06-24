import { LazyLoadImage } from 'react-lazy-load-image-component'
import GestionIcon from '../../../assets/Icons/Gestion_de_Seguridad.svg'
import SaludIcon from '../../../assets/Icons/Salud_Ocupacional.svg'
import RiesgosIcon from '../../../assets/Icons/Prevencion_de_Riesgos.svg'
import HomologacionIcon from '../../../assets/Icons/Homologacion.svg'
import './Main.css'

const categories = [
  { icon: GestionIcon, label: 'Sistema de Gestión', id: 'srv-gestion' },
  { icon: SaludIcon, label: 'Salud Ocupacional', id: 'srv-salud' },
  { icon: RiesgosIcon, label: 'Prevención de Riesgos', id: 'srv-riesgos' },
  { icon: HomologacionIcon, label: 'Homologación', id: 'srv-homologacion' },
]

function Main() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="MainServ">
      <div className="MainServ_text">
        <span className="hv-eyebrow MainServ_eyebrow">
          <span className="hv-eyebrow-rule" aria-hidden="true"></span>
          <span className="hv-eyebrow-text">Catálogo de servicios</span>
          <span className="hv-eyebrow-rule hv-eyebrow-rule--rev" aria-hidden="true"></span>
        </span>
        <h1>Servicios de <span>Seguridad</span> y Salud Ocupacional</h1>
        <p>
          Protegemos a tu empresa, cumplimos la normativa y reducimos riesgos reales.
        </p>
      </div>
      <div className="MainServ_grid">
        {categories.map((cat, i) => (
          <button
            key={i}
            className="MainServ_card"
            onClick={() => scrollTo(cat.id)}
          >
            <span className="MainServ_cardNum" aria-hidden="true">
              {(i + 1).toString().padStart(2, '0')}
            </span>
            <div className="MainServ_cardIcon">
              <LazyLoadImage src={cat.icon} alt={cat.label} />
            </div>
            <h4>{cat.label}</h4>
            <span className="MainServ_cardArrow" aria-hidden="true">↓</span>
          </button>
        ))}
      </div>
    </div>
  )
}

export default Main
