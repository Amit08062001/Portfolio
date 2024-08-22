import React from 'react';
import './Experience.css';
import Footer from './Footer'
const Experience = () => {
  return (
    <>
    <section className="experience-section">
      <div className="experience-container">
        <h2 className="section-title">EXPERIENCE</h2>
        <div className="timeline-experience">
          <div className="timeline-item">
            <div className="timeline-icon">»</div>
            <div className="timeline-content">
              <div>
              <h3 className='timeline-content-h'>CodersVoice</h3>
              <h4>Frontend Developer </h4>
              <h4>Sep 2023 - March2024</h4>
              </div>
              <span className='timeline-content-p'><p>I am a frontend developer with 6 months of experience building responsive web applications using React, HTML, CSS, and JavaScript. I excel at creating user-friendly interfaces and collaborating effectively with teams to deliver high-quality solutions. My attention to detail and passion for learning drive me to continuously improve my skills. I am eager to contribute to innovative projects and grow in the field of frontend development.</p></span> 
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-icon">»</div>
            <div className="timeline-content">
              <div>
              <h3 className='timeline-content-h'>Pepcoding Edu Pvt Ltd</h3>
              <h4>Web Developer Intern </h4>
              <h4>Jul 2022 - Sep 2022</h4>
              </div>
              <span className='timeline-content-p2'><p>I undertook an internship as a Web Developer where I actively participated in the creation and refinement of web applications. My role involved working closely with the development team to implement features, troubleshoot issues, and improve user interfaces. This experience provided me with valuable insights into web development.</p></span> 
            </div>
          </div>
        </div>
      </div>
    </section>
    <Footer/>
    </>  
  );
};

export default Experience;
