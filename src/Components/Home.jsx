import React from 'react';
import profileImage from '../assets/Pic.jpg';
import Footer from './Footer';
import '../Components/Home.css'; // Ensure this path matches your project structure

const Home = () => {
  return (
    <div className='App'>
      <section className="home">
        <div className="home-content">
          <h1> HI, I'M Amit!</h1>
          <h2 className="animated-text">
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
          <p>
            Hi, I’m a Frontend Developer with six months of experience specializing in React. I’m passionate about creating dynamic, user-friendly web applications that deliver exceptional user experiences.
            <br /><br />
            Over the past few months, I’ve gained hands-on experience with React, where I’ve been able to build and manage interactive user interfaces using component-based architecture and hooks. My journey has also included working extensively with modern JavaScript, HTML, and CSS, enabling me to craft responsive and visually appealing web pages.
            <br /><br />
            I enjoy translating design concepts into functional applications and continuously seek opportunities to refine my skills and tackle new challenges.
            <br /><br />
            Feel free to explore my portfolio to see some of the projects I’ve worked on. If you have any questions or would like to discuss potential collaborations, I’d love to hear from you!
          </p>
        </div>
        <div className="home-image-container">
          <div className="tilted-frame">
            <img src={profileImage} alt="Amit Kumar Singh" />
          </div>
        </div>
      </section>
      <section class="skills">
    <h2>Programming Skills</h2>
    <div class="skills-container">
        <div class="skills-part">
            <h3>Front-End</h3>
            <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
            </ul>
        </div>
        <div class="skills-part">
            <h3>Framework</h3>
            <ul>
                <li>React</li>
                <li>Bootstrap</li>
                <li>Material UI</li>

            </ul>
        </div>
        <div class="skills-part">
            <h3>Tools & Technologies</h3>
            <ul>
                <li>Git</li>
                <li>VS Code</li>
                <li>Webpack</li>

            </ul>
        </div>
    </div>
</section>

      <Footer />
    </div>
  );
};

export default Home;
