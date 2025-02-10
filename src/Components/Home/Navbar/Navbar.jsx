import React,{useState} from 'react'
import './Navbar.css'
import {Link , NavLink} from 'react-router-dom'
import userlogin from '../../../assets/SVG/user_login.svg';
import {Squash as Hamburger} from 'hamburger-react'

const Navbar = () => {
    const [showMenu, setShowMenu]=useState(false);
    return (
        <header className='navbar'>
            <div className='mobMenu'>
                <Hamburger color="#fff" duration={0.3} toggled={showMenu} toggle={setShowMenu} easing="ease-in"/>
            </div>           
        
            <ul className='desktopMenu'>
                <NavLink className={({ isActive }) => isActive ? "link2 active" : "link2"} to='/'><li>Home</li></NavLink>
                <NavLink className={({ isActive }) => isActive ? "link2 active" : "link2"} to='/Servicios'><li>Servicios</li></NavLink>
                <NavLink className={({ isActive }) => isActive ? "link2 active" : "link2"} to='/Nosotros'><li>Nosotros</li></NavLink>
                <NavLink className={({ isActive }) => isActive ? "link2 active" : "link2"} to='/Contacto'><li>Contacto</li></NavLink>
            </ul>
            <div className='login'>
                <img src={userlogin} alt="Login Safety Adivisors" className='imgLogin' title='LoginSA' width= "30px"/>
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