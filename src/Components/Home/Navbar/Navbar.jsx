import React,{useState} from 'react'
import './Navbar.css'
import {Link} from 'react-router-dom'
import userlogin from '../../../assets/user_login_n.webp';
import logo from '../../../assets/Logos/LogoTitle.svg';
import logoCell from '../../../assets/Logos/LogoHome.svg';
import {Squash as Hamburger} from 'hamburger-react'

const Navbar = () => {
    const [showMenu, setShowMenu]=useState(false);
    return (
        <header className='navbar'>
            <div className='mobMenu'>
                <Hamburger color="#fff" duration={0.3} toggled={showMenu} toggle={setShowMenu} easing="ease-in"/>
            </div>           
            <Link to='/' className='logo'><img src={logo} alt="Logo" className='logo' /></Link>
            <Link to='/' className='logoCell'><img src={logoCell} alt="Logo" className='logoCell' /></Link>
            <ul className='desktopMenu'>
                <Link className='link2' to='/'><li>Home</li></Link>
                <Link className='link2' to='/Servicios'><li>Servicios</li></Link>
                <Link className='link2' to='/Nosotros'><li>Nosotros</li></Link>
                <Link className='link2' to='/Contacto'><li>Contacto</li></Link>
            </ul>
            <div className='login'>
                <img src={userlogin} alt="" className='imgLogin' />
            </div>      
            {/* Menu Mobile */}
            <ul className='navMenu' style={{display:showMenu? 'flex':'none'}}>
                <Link className='link' to='/'><li onClick={()=>{setShowMenu(!showMenu)}}>Home</li></Link>
                <Link className='link' to='/Servicios'><li onClick={()=>{setShowMenu(!showMenu)}}>Servicios</li></Link>
                <Link className='link' to='/Nosotros'><li onClick={()=>{setShowMenu(!showMenu)}}>Nosotros</li></Link>
                <Link className='link' to='/Contacto'><li onClick={()=>{setShowMenu(!showMenu)}}>Contacto</li></Link>
            </ul>
        </header>
  )}

export default Navbar