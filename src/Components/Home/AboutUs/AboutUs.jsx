import './AboutUs.css'
import {Link} from 'react-router-dom'
import Nosotros from'../../../assets/HomePageImgs/AboutUs.webp';
import { LazyLoadImage } from 'react-lazy-load-image-component';

function AboutUs() {
    const areas_especializacion=[
        {   
            "Index":"1",
            "Area":"Gestión de Seguridad",
            "Image":""
        },
        {   
            "Index":"2",
            "Area":"Salud Ocupacional",
            "Image":""
        },
        {   
            "Index":"3",
            "Area":"Medio Ambiente",
            "Image":""
        },
        {   
            "Index":"4",
            "Area":"Homologaciones",
            "Image":""
        },
        {   
            "Index":"5",
            "Area":"Gestión de Talento y Capacitaciones",
            "Image":""
        },
    ]
  return (
    <div className='AboutUs' id='About_Us'>
        <div className='textAboutUs'>
            <div className='textOurInfo'>
                <h4>ÁREAS DE ESPECIALIZACIÓN</h4>
                <div className='card'>
                    
                </div>
            </div>
            <div className='textOurMission'>
                <img src="" alt="" />
                <div className='cardOurMission'>
                    <h3>No solo te protegemos y cuidamos</h3>
                    <p>
                        Tambien transformamos tu organización hacia un futuro más
                        seguro, saludable y sostenible.
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