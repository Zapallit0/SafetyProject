import React,{useState} from 'react'
import './Navbar2.css'
import {Link} from 'react-router-dom'
import userlogin from '../../../assets/user_login_n.webp';
import logo from '../../../assets/logo-white.webp';
import {Squash as Hamburger} from 'hamburger-react'

const Navbar2 = () => {
    const [showMenu, setShowMenu]=useState(false);
    return (
        <div className='navbar'>
            <div className='mobMenu'>
                <Hamburger color="#fff" duration={0.3} toggled={showMenu} toggle={setShowMenu} easing="ease-in"/>
            </div>
            
            <img src={logo} alt="Logo" className='logo' />
            <ul className='desktopMenu'>
                <Link className='link' to={'/'}><li onClick={()=>{document.getElementById('Main_Page').scrollIntoView({behavior:'smooth'})}}>Home</li></Link>
                <Link className='link' to={'/Servicios'}><li>Servicios</li></Link>
                <Link className='link' to={'/Nosotros'}><li>Nosotros</li></Link>
                <Link className='link' to={'/Contacto'}><li>Contacto</li></Link>
            </ul>
            <div className='login'>
                <img src={userlogin} alt="" className='imgLogin' />
            </div>
            

            {/* <img src={burgerMenu} alt="Menu" className='mobMenu' onClick={()=>(setShowMenu(!showMenu))} /> */}
            <ul className='navMenu' style={{display:showMenu? 'flex':'none'}}>
                <Link className='link' to={'/'}><li onClick={()=>{setShowMenu(!showMenu)}}>Home</li></Link>
                <Link className='link' to={'/Servicios'}><li onClick={()=>{setShowMenu(!showMenu)}}>Servicios</li></Link>
                <Link className='link' to={'/Nosotros'}><li onClick={()=>{setShowMenu(!showMenu)}}>Nosotros</li></Link>
                <Link className='link' to={'/Contacto'}><li onClick={()=>{setShowMenu(!showMenu)}}>Contacto</li></Link>
            </ul>
        </div>

  )
}

export default Navbar2