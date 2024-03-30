import React,{useState} from 'react'
import './Navbar2.css'
import {Link} from 'react-router-dom'
import userlogin from '../../../assets/user_login_n.webp';
import logo from '../../../assets/Logos/LogoTitle.svg';
import {Squash as Hamburger} from 'hamburger-react'

const Navbar2 = () => {
    const [showMenu, setShowMenu]=useState(false);
    return (
        <div className='navbar2'>
            <div className='mobMenu2'>
                <Hamburger color="#fff" duration={0.3} toggled={showMenu} toggle={setShowMenu} easing="ease-in"/>
            </div>
            
            <img src={logo} alt="Logo" className='logo2' />
            <ul className='desktopMenu2'>
                <Link className='link2' to={'/'}><li onClick={()=>{document.getElementById('Main_Page').scrollIntoView({behavior:'smooth'})}}>Home</li></Link>
                <Link className='link2' to={'/Servicios'}><li>Servicios</li></Link>
                <Link className='link2' to={'/Nosotros'}><li>Nosotros</li></Link>
                <Link className='link2' to={'/Contacto'}><li>Contacto</li></Link>
            </ul>
            <div className='login2'>
                <img src={userlogin} alt="" className='imgLogin' />
            </div>
            

            {/* <img src={burgerMenu} alt="Menu" className='mobMenu' onClick={()=>(setShowMenu(!showMenu))} /> */}
            <ul className='navMenu2' style={{display:showMenu? 'flex':'none'}}>
                <Link className='link' to={'/'}><li onClick={()=>{setShowMenu(!showMenu)}}>Home</li></Link>
                <Link className='link' to={'/Servicios'}><li onClick={()=>{setShowMenu(!showMenu)}}>Servicios</li></Link>
                <Link className='link' to={'/Nosotros'}><li onClick={()=>{setShowMenu(!showMenu)}}>Nosotros</li></Link>
                <Link className='link' to={'/Contacto'}><li onClick={()=>{setShowMenu(!showMenu)}}>Contacto</li></Link>
            </ul>
        </div>

  )
}

export default Navbar2