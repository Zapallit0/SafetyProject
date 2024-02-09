import React from 'react'
import './Navbar.css'
import userlogin from '../../assets/user_login_n.png'
import logo from '../../assets/logo-white.png'
import {Link} from 'react-router-dom'
const Navbar = () => {
    // const navRef = useRef();

	// const showNavbar = () => {
	// 	navRef.current.classList.toggle(
	// 		"responsive_nav"
	// 	);
	// };
  return (
        <div className='navbar'>
            {/* {theme=='light'? logo_light:logo_dark} */}
            <img src={logo} alt="Logo" className='logo' />
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/Servicios">Servicios</Link></li>
                <li><Link to="/Nosotros">Nosotros</Link></li>
                <li><Link to="/Equipo">Equipo</Link></li>
            </ul>

            <div className='login'>
                <img src={userlogin} alt="" className='imgLogin' />
            </div>
            
            {/* <img onClick={()=>{toggle_mode()}} src={theme=='light'? day:night} alt="pageTheme" className='theme' /> */}
            
        </div>

  )
}

export default Navbar