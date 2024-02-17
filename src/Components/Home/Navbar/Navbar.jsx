import React,{useState} from 'react'
import './Navbar.css'
import userlogin from '../../../assets/user_login_n.png';
import logo from '../../../assets/logo-white.png';
import burgerMenu from '../../../assets/icons/menu.png';
import {Squash as Hamburger} from 'hamburger-react'

const Navbar = () => {
    const [showMenu, setShowMenu]=useState(false);
    const [isOpen,setOpen]=useState(false);
    return (
        <div className='navbar'>
            <div className='mobMenu'>
                <Hamburger color="#fff" duration={0.3} toggled={showMenu} toggle={setShowMenu} easing="ease-in"/>
            </div>
            {/* <img src={burgerMenu} alt="Menu" className='mobMenu' onClick={()=>(setShowMenu(!showMenu))} /> */}
            <img src={logo} alt="Logo" className='logo' />
            <ul className='desktopMenu'>
                <li onClick={()=>{document.getElementById('Main_Page').scrollIntoView({behavior:'smooth'})}}>Home</li>
                <li onClick={()=>{document.getElementById('Services').scrollIntoView({behavior:'smooth'})}}>Servicios</li>
                <li onClick={()=>{document.getElementById('About_Us').scrollIntoView({behavior:'smooth'})}}>Nosotros</li>
                <li onClick={()=>{document.getElementById('Main_Page').scrollIntoView({behavior:'smooth'})}}>Equipo</li>
            </ul>
            <div className='login'>
                <img src={userlogin} alt="" className='imgLogin' />
            </div>
            

            {/* <img src={burgerMenu} alt="Menu" className='mobMenu' onClick={()=>(setShowMenu(!showMenu))} /> */}
            <ul className='navMenu' style={{display:showMenu? 'flex':'none'}}>
                <li onClick={()=>{document.getElementById('Main_Page').scrollIntoView({behavior:'smooth'})}}>Home</li>
                <li onClick={()=>{document.getElementById('Services').scrollIntoView({behavior:'smooth'})}}>Servicios</li>
                <li onClick={()=>{document.getElementById('About_Us').scrollIntoView({behavior:'smooth'})}}>Nosotros</li>
                <li onClick={()=>{document.getElementById('Main_Page').scrollIntoView({behavior:'smooth'})}}>Equipo</li>
            </ul>
        </div>

  )
}

export default Navbar