import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaInstagram ,FaLinkedin,FaGithub} from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-container">
      <h1 className="contact-title">GET IN TOUCH</h1>
      <h2 className="contact-subtitle">Let's Work Together</h2>
      
      <div className="contact-info">
        <div className="contact-item">
          <FaPhone className="contact-icon" />
          <h3> Mobile</h3>
          <p>+91 8825236600</p>
        </div>
        <div className="contact-item">
          <FaEnvelope className="contact-icon" />
          <h3>Email </h3>
          <p>Amitsingh08062001@gmail.com</p>
        </div>
        <div className="contact-item">
          <FaMapMarkerAlt className="contact-icon" />
          <h3>Address</h3>
          <p>Sector 66, Noida, UttarPradesh <br></br> 201301</p>
        </div>
        <div className="contact-item">
          <FaLinkedin className="contact-icon" />
          <h3>Linkedin</h3>
          <a href='www.linkedin.com/in/amit-kumar-singh-a82a18224'>www.linkedin.com/in/amit-kumar-singh-a82a18224</a>
        </div>
        <div className="contact-item">
          <FaGithub className="contact-icon" />
          <h3>Github</h3>
          <a href='https://github.com/Amit08062001'>https://github.com/Amit08062001</a>
        </div>
      </div>

    </div>
  );
};

export default Contact;