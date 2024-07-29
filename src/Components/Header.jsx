// Header.jsx
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header>
      <div className="logo">PORTFOLIO</div>
      <div 
        className={`hamburger ${menuOpen ? 'active' : ''}`} 
        onClick={toggleMenu}
        aria-expanded={menuOpen}
        aria-controls="side-nav"
      >
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div id="side-nav" className={`side-nav ${menuOpen ? 'open' : ''}`}>
        <button className="close-btn" onClick={closeMenu}>X</button>
        <nav>
          <ul>
            <li><NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''} onClick={closeMenu}>HOME</NavLink></li>
            <li><NavLink to="/project" className={({ isActive }) => isActive ? 'active' : ''} onClick={closeMenu}>PROJECT</NavLink></li>
            <li><NavLink to="/experience" className={({ isActive }) => isActive ? 'active' : ''} onClick={closeMenu}>EXPERIENCE</NavLink></li>
            <li><NavLink to="/contact" className={({ isActive }) => isActive ? 'active' : ''} onClick={closeMenu}>CONTACT</NavLink></li>
            <li><NavLink to="/education" className={({ isActive }) => isActive ? 'active' : ''} onClick={closeMenu}>EDUCATION</NavLink></li>
          </ul>
        </nav>
      </div>
      <nav className="desktop-nav">
        <ul>
          <li><NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''}>HOME</NavLink></li>
          <li><NavLink to="/project" className={({ isActive }) => isActive ? 'active' : ''}>PROJECT</NavLink></li>
          <li><NavLink to="/experience" className={({ isActive }) => isActive ? 'active' : ''}>EXPERIENCE</NavLink></li>
          <li><NavLink to="/contact" className={({ isActive }) => isActive ? 'active' : ''}>CONTACT</NavLink></li>
          <li><NavLink to="/education" className={({ isActive }) => isActive ? 'active' : ''}>EDUCATION</NavLink></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
