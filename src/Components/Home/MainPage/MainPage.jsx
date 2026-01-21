import './MainPage.css'
import { useState, useEffect} from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom';
import Logo_Fullname from '../../../assets/Logos/Logo_FullName_W.svg'
import Facebook from '../../../assets/social/facebook-SafetyAdvisors.svg';
import Linkedin from '../../../assets/social/linkedin-SafetyAdvisors.svg';
import Instagram from '../../../assets/social/instagram-SafetyAdvisors.svg';


function MainPage() {
  const [index, setIndex] = useState(0)
  const words = [
    'SEGURIDAD',
    'SALUD OCUPACIONAL',
    'CAPACITACIONES',
    'HOMOLOGACIONES'
  ]
  useEffect(() => {
      const interval = setInterval(() => {
        setIndex((prev) => (prev + 1) % words.length)
      }, 2000)

      return () => clearInterval(interval)
    }, [])
  return (
    <div className='mainPage' id='Main_Page'> 
      <div className='information'>
        <img src={Logo_Fullname} alt="Logo Safety Advisor" height={"100px"} width={"300px"}/>
        <div className='wrapper'>
          <h2>ESPECIALISTAS EN</h2>
           <div className='motion-words'>
            <AnimatePresence mode="wait">
              <motion.span
                key={index}
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -30, opacity: 0 }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
              >
                {words[index]}
              </motion.span>
            </AnimatePresence>
          </div>
        </div>
        <p>Creando entornos de trabajo seguros para tu empresa</p>
        <div className='buttonsMainPage'>
          <Link to={"/Servicios"} className='buttonServicesMP'><button type='button'>Servicios</button></Link>
          <Link to={"/Contacto"} className='buttonCTA'> <button>Contáctanos</button></Link>
        </div>
      </div>
      <div className='RedesMP'>
        <a href="https://www.facebook.com/profile.php?id=61557920314806&mibextid=ZbWKwL" target='_blank'><LazyLoadImage src={Facebook} alt="Safety Advisors Facebook" title='FacebookSA'/></a>
        <a href="https://www.linkedin.com/company/safety-advisors24/about/" target='_blank'><LazyLoadImage src={Linkedin} alt="Safety Advisors Linkedin" title='LinkedinSA'/></a>
        <a href="https://www.instagram.com/safety__advisors/?igsh=dGNvN3ZiMGtsMDlm" target='_blank'><LazyLoadImage src={Instagram}  alt="Safety Advisors Instagram" title='InstagramSA'/></a>
      </div>
    </div>
  )
}

export default MainPage