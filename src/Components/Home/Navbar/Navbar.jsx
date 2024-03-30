import React,{useState} from 'react'
import './Navbar.css'
import {Link} from 'react-router-dom'
import userlogin from '../../../assets/user_login_n.webp';
import logo from '../../../assets/Logos/logo3.svg';
import {Squash as Hamburger} from 'hamburger-react'

const Navbar = () => {
    const [showMenu, setShowMenu]=useState(false);
    return (
        <div className='navbar'>
            <div className='mobMenu'>
                <Hamburger color="#fff" duration={0.3} toggled={showMenu} toggle={setShowMenu} easing="ease-in"/>
            </div>
            
            <img src={logo} alt="Logo" className='logo' />
            <ul className='desktopMenu'>
                <Link className='link' to={'/'}><li onClick={()=>{document.getElementById('Main_Page').scrollIntoView({behavior:'smooth'})}}>Home</li></Link>
                <li onClick={()=>{document.getElementById('Services').scrollIntoView({behavior:'smooth'})}}>Servicios</li>
                <li onClick={()=>{document.getElementById('About_Us').scrollIntoView({behavior:'smooth'})}}>Nosotros</li>
                <li onClick={()=>{document.getElementById('Main_Page').scrollIntoView({behavior:'smooth'})}}>Contacto</li>
            </ul>
            <div className='login'>
                <img src={userlogin} alt="" className='imgLogin' />
            </div>
            

            {/* <img src={burgerMenu} alt="Menu" className='mobMenu' onClick={()=>(setShowMenu(!showMenu))} /> */}
            <ul className='navMenu' style={{display:showMenu? 'flex':'none'}}>
                <li onClick={()=>{document.getElementById('Main_Page').scrollIntoView({behavior:'smooth'}),setShowMenu(!showMenu)}}>Home</li>
                <li onClick={()=>{document.getElementById('Services').scrollIntoView({behavior:'smooth'}),setShowMenu(!showMenu)}}>Servicios</li>
                <li onClick={()=>{document.getElementById('About_Us').scrollIntoView({behavior:'smooth'}),setShowMenu(!showMenu)}}>Nosotros</li>
                <li onClick={()=>{document.getElementById('Main_Page').scrollIntoView({behavior:'smooth'}),setShowMenu(!showMenu)}}>Contacto</li>
            </ul>
        </div>

  )
}

export default Navbar