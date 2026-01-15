import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Squash as Hamburger } from 'hamburger-react';
import './Navbar.css';

import logoCell from '../../../assets/Logos/LogoHome.svg';
import { UserRound } from 'lucide-react';

const links = [
  { to: '/', label: 'Inicio' },
  { to: '/Servicios', label: 'Servicios' },
  { to: '/Nosotros', label: 'Nosotros' },
  { to: '/Contacto', label: 'Contacto' },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="navbar-wrapper">
      <nav className="navbar">
        <ul className="menu">
          {links.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `nav-link ${isActive ? 'active' : ''}`
              }
            >
              <li>{label}</li>
            </NavLink>
          ))}
        </ul>

        <div className="hamburger">
          <Hamburger toggled={open} toggle={setOpen} size={20} color="#fff" />
        </div>
      </nav>

      {/* Login */}
    <div className="login">
        <div className="login-btn">
            <UserRound size={25} />
        </div>
    </div>

      {/* Mobile Menu */}
      {open && (
        <ul className="mobile-menu">
          {links.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              className="mobile-link"
              onClick={() => setOpen(false)}
            >
              <li>{label}</li>
            </NavLink>
          ))}
        </ul>
      )}
    </header>
  );
};

export default Navbar;
