import './AboutUs.css'
import {Link} from 'react-router-dom'
import Nosotros from'../../../assets/HomePageImgs/Especializacion/Nosotros.jpg';
import SeguridadImg from '../../../assets/HomePageImgs/Especializacion/Gestion_Seguridad.jpg';
import SaludImg from '../../../assets/HomePageImgs/Especializacion/Salud_Ocupacional.jpg';
import MedioAmbienteImg from '../../../assets/HomePageImgs/Especializacion/Medio_Ambiente.jpg';
import HomologacionesImg from '../../../assets/HomePageImgs/Especializacion/Homologacion.jpg';
import TalentoImg from '../../../assets/HomePageImgs/Especializacion/Gestion_Talento.jpg';

function AboutUs() {
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
  return (
    <div className='AboutUs' id='About_Us'>
            <div className="CardsContainer">
            <h4>ÁREAS DE ESPECIALIZACIÓN</h4>
                <div className="cardsGrid">
                    {areas_especializacion.map((item) => (
                    <div className="cardEspecializacion" key={item.index}>
                        <div
                        className="card-bg"
                        style={{ backgroundImage: `url(${item.image})` }}
                        >
                        <span className="card-number">
                            {item.index.toString().padStart(2, '0')}
                        </span>
                        <h3>{item.area}</h3>
                        </div>
                    </div>
                    ))}
                </div>
            </div>
            <div className='textOurMission'>
                <div className='MissionContainer'>
                <img src={Nosotros} alt=""  height={'200px'}  />
                <div className='cardOurMission'>
                    <h3>No solo te protegemos y cuidamos</h3>
                    <p>
                        Transformamos su organización hacia un futuro más seguro, saludable y sostenible
                    </p>
                    <Link className='linkAboutUs' to={'/Nosotros'}>
                        <button>
                            Conócenos más
                        </button>
                    </Link>
                </div>
                </div>
            </div>
    </div>
  )
}

export default AboutUs