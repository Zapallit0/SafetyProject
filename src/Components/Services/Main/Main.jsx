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
        <h2>Nuestros <span>Servicios</span></h2>
        <p>
          Diseñamos e implementamos soluciones en seguridad y salud ocupacional
          que protegen a tu empresa, cumplen la normativa y reducen riesgos reales.
        </p>
      </div>
      <div className="MainServ_grid">
        {categories.map((cat, i) => (
          <button
            key={i}
            className="MainServ_card"
            onClick={() => scrollTo(cat.id)}
          >
            <div className="MainServ_cardIcon">
              <LazyLoadImage src={cat.icon} alt={cat.label} />
            </div>
            <h4>{cat.label}</h4>
          </button>
        ))}
      </div>
    </div>
  )
}

export default Main
