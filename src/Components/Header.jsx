import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <div className="logo">PORTFOLIO</div>
      <nav>
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
