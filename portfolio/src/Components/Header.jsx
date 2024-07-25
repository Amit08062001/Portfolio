import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <div className="logo">PORTFOLIO</div>
      <nav>
        <ul>
          <li><NavLink exact to="/" activeClassName="active">HOME</NavLink></li>
          <li><NavLink to="/project" activeClassName="active">PROJECT</NavLink></li>
          <li><NavLink to="/experience" activeClassName="active">EXPERIENCE</NavLink></li>
          <li><NavLink to="/contact" activeClassName="active">CONTACT</NavLink></li>
          <li><NavLink to="/education" activeClassName="active">EDUCATION</NavLink></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
