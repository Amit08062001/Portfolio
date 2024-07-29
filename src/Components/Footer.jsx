import React from 'react';
import './Footer.css'; 
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-links">
          <a href="https://www.linkedin.com/in/amit-kumar-singh-a82a18224" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://github.com/Amit08062001" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href="mailto:amitsingh08062001@gmail.com">
            <FaEnvelope />
          </a>
        </div>
        <div className="footer-copyright">
          <p>Copyright &copy; 2024 Amit Kumar Singh. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
