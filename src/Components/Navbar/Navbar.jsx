import React from 'react'
import './Navbar.css'
import userlogind from '../../assets/user_login_d.png'
import userloginn from '../../assets/user_login_n.png'
import night from '../../assets/day.png'
import day from '../../assets/night.png'
import logo_light from '../../assets/logo-black.png'
import logo_dark from '../../assets/logo-white.png'

const Navbar = ({theme, setTheme}) => {
    const toggle_mode=()=>{
        theme=='light'? setTheme('dark'):setTheme('light');
    }
  return (
        <div className='navbar'>
            <img src={theme=='light'? logo_light:logo_dark} alt="" className='logo' />
            <ul>
                <li>Home</li>
                <li>Servicios</li>
                <li>Nosotros</li>
                <li>Equipo</li>
            </ul>

            <div className='login'>
                <img src={theme=='light'? userlogind:userloginn} alt="" className='imgLogin' />
            </div>
            
            <img onClick={()=>{toggle_mode()}} src={theme=='light'? day:night} alt="pageTheme" className='theme' />

        </div>

  )
}

export default Navbar