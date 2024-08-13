import React from 'react';
import './Project.css';
import project1Image from '../assets/project1.png'; 
import project2Image from "../assets/project2.png";
import project3Image from "../assets/project3.png";
import Footer from './Footer'
const Project = () => {
  return (
    <>
    <section id="project" className="project">
      <h2 className="project-title"> PROJECTS</h2>
      <div className="project-grid">
        <div className="project-card">
          <img src={project1Image} alt="project" />
          <h3>MelodyStream</h3>
          <p>MelodyStream is a modern music streaming web application designed to offer a seamless and interactive user experience. The application features a clean and intuitive interface where users can easily navigate through different sections, play songs, and enjoy smooth transitions and animations.</p>
          <a className='github' href='https://github.com/Amit08062001/MelodyStream1'>Github</a>
          <a className='github' href='https://amit08062001.github.io/MelodyStream1/'>Live</a>

        </div>
        <div className="project-card">
          <img src={project2Image} alt="project" />
          <h3>WheatherApp</h3>
          <p>A weather widget that fetches data from the OpenWeatherMap API, displaying dynamic background images and weather details such as temperature, 'feels like' temperature, and wind speed. It features a responsive design with HTML and CSS for styling, and JavaScript for handling API interactions.</p>
          <a className='github' href='https://github.com/Amit08062001/WheatherApp/'>Github</a>
          <a className='github' href='https://amit08062001.github.io/WheatherApp/'>Live</a>
        </div>
        <div className="project-card">
          <img src={project3Image} alt="project" />
          <h3>Fit Raho</h3>
          <p>Fit Raho is a dynamic and interactive fitness and wellness platform dedicated to empowering users to lead healthier and more active lives. The site offers a holistic approach to fitness, integrating personalized workout plans and comprehensive nutrition guides to support users health goals.</p>
          <a className='github' href='https://github.com/Amit08062001/Fit-Raho'>Github</a>
          <a className='github' href='https://amit08062001.github.io/Fit-Raho/'>Live</a>
        </div>
      </div>
    </section>
    <Footer/>
    </>  
  );
};

export default Project;
