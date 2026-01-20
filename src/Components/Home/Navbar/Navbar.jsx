import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Squash as Hamburger } from 'hamburger-react';
import './Navbar.css';
import { UserRound } from 'lucide-react';

import { AnimatePresence,motion} from 'framer-motion';

const links = [
  { to: '/', label: 'Inicio' },
  { to: '/Servicios', label: 'Servicios' },
  { to: '/Nosotros', label: 'Nosotros' },
  { to: '/Contacto', label: 'Contacto' },
];
const menuVariants = {
  hidden: {
    opacity: 0,
    y: -20,
    height: 0,
    transition: { duration: 0.2 }
  },
  visible: {
    opacity: 1,
    y: 0,
    height: 'auto',
    transition: {
      duration: 0.3,
      when: "beforeChildren",
      staggerChildren: 0.08
    }
  },
  exit: {
    opacity: 0,
    y: -20,
    height: 0,
    transition: { duration: 0.2 }
  }
};

const linkVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: { opacity: 1, y: 0 }
};

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
      <AnimatePresence>
        {open && (
          <motion.ul
            className="mobile-menu"
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {links.map(({ to, label }) => (
              <motion.li
                key={to}
                variants={linkVariants}
              >
                <NavLink
                  to={to}
                  className="mobile-link"
                  onClick={() => setOpen(false)}
                >
                  {label}
                </NavLink>
              </motion.li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
