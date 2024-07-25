import React from 'react';
import profileImage from '../assets/Pic.jpg';
import Footer from './Footer';
const Home = () => {
  return (
    <div className='container-fluid'>
    <section className="home">
      <div className="home-content">
        <h1> HI,I'M Amit!</h1>
  <h2 class="animated-text">
  <span>F</span>
  <span>R</span>
  <span>O</span>
  <span>N</span>
  <span>T</span>
  <span>E</span>
  <span>N</span>
  <span>D</span>
  <span>&nbsp;</span>
  <span>D</span>
  <span>E</span>
  <span>V</span>
  <span>E</span>
  <span>L</span>
  <span>O</span>
  <span>P</span>
  <span>E</span>
  <span>R</span>
</h2>

        <p>Hi, I’m a Frontend Developer with six months of experience specializing in React. I’m passionate about creating dynamic, user-friendly web applications that deliver exceptional user experiences.
            <br></br> <br></br> Over the past few months, I’ve gained hands-on experience with React, where I’ve been able to build and manage interactive user interfaces using component-based architecture and hooks. My journey has also included working extensively with modern JavaScript, HTML, and CSS, enabling me to craft responsive and visually appealing web pages.
            <br></br> <br></br>I enjoy translating design concepts into functional applications and continuously seek opportunities to refine my skills and tackle new challenges. <br></br><br></br>
             Feel free to explore my portfolio to see some of the projects I’ve worked on. If you have any questions or would like to discuss potential collaborations, I’d love to hear from you!
        </p>
      </div>
      <div className="home-image-container">
        <div className="tilted-frame">
          <img src={profileImage} alt="Amit Kumar Singh" />
        </div>
      </div>
    </section>
    <div className="skills">
        <h2>Programing Skills</h2>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>BOOTSTRAP</li>
          <li>TAILWIND</li>
          <li>JAVASCRIPT</li>
          <li>REACT JS</li>
          <li>REDUX</li>
          <li>RESPONSIVE DESIGN</li>
          <li>GIT</li>
          <li>ADOBE PHOTOSHOP</li>
        </ul>
      </div>
      <Footer/>
    </div>  
  );
};

export default Home;