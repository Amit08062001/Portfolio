import React, { useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import './MobileMenu.css';
import { IoIosClose } from "react-icons/io";

const MobileMenu = ({ isOpen, closeMenu }) => {
const closeButtonRef = useRef(null);

  useEffect(() => {
    if (isOpen && closeButtonRef.current) {
      closeButtonRef.current.focus(); 
    }
  }, [isOpen]);

  return (
    <div className={`mobile-menu ${isOpen ? 'open' : ''}`}>
      <button
        className="close-btn"
        onClick={closeMenu}
        aria-label="Close menu"
        ref={closeButtonRef}
      >
        <IoIosClose />
      </button>
      <ul>
        <li><NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''}>HOME</NavLink></li>
        <li><NavLink to="/project" className={({ isActive }) => isActive ? 'active' : ''}>PROJECT</NavLink></li>
        <li><NavLink to="/experience" className={({ isActive }) => isActive ? 'active' : ''}>EXPERIENCE</NavLink></li>
        <li><NavLink to="/contact" className={({ isActive }) => isActive ? 'active' : ''}>CONTACT</NavLink></li>
        <li><NavLink to="/education" className={({ isActive }) => isActive ? 'active' : ''}>EDUCATION</NavLink></li>
      </ul>
    </div>
  );
};

export default MobileMenu;
