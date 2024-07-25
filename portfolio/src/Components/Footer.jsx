import React from 'react';
import './Footer.css'; 
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p> Copyright &copy; 2024 Amit Kumar Singh. All rights reserved.</p>
        <div className="social-links">
          <a href="https://www.linkedin.com/in/amitkumar" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://github.com/amitkumar" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="mailto:amit@example.com">Email</a>
        </div>
      </div>
 </footer>
  );
};

export default Footer;
