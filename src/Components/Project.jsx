import React from 'react';
import './Project.css';
import project1Image from '../assets/project1.png'; 
import project2Image from "../assets/project2.png";



const Project = () => {
  return (
    <section id="project" className="project">
      <h2 className="project-title"> Projects</h2>
      <hr className="section-underline" />
      <div className="project-grid">
        <div className="project-card">
          <img src={project1Image} alt="Arrowai Industries 2022" />
          <h3>MelodyStream</h3>
          <p>MelodyStream is a modern music streaming web application designed to offer a seamless and interactive user experience. The application features a clean and intuitive interface where users can easily navigate through different sections, play songs, and enjoy smooth transitions and animations.</p>
          <a className='github' href='https://github.com/Amit08062001/MelodyStream1'>Github</a>
          <a className='github' href='https://amit08062001.github.io/MelodyStream1/'>Live</a>

        </div>
        <div className="project-card">
          <img src={project2Image} alt="Arrowai Industries 2022" />
          <h3>WheatherApp</h3>
          <p>A weather widget that fetches data from the OpenWeatherMap API, displaying dynamic background images and weather details such as temperature, 'feels like' temperature, and wind speed. It features a responsive design with HTML and CSS for styling, and JavaScript for handling API interactions.</p>
          <a className='github' href='https://github.com/Amit08062001/WheatherApp/'>Github</a>
          <a className='github' href='https://amit08062001.github.io/WheatherApp/'>Live</a>
        </div>
        <div className="project-card">
          <img src={project2Image} alt="Arrowai Industries 2022" />
          <h3>Fit Raho</h3>
          <p>Fit Raho is a dynamic and interactive fitness and wellness platform dedicated to empowering users to lead healthier and more active lives. The site offers a holistic approach to fitness, integrating personalized workout plans and comprehensive nutrition guides to support users health goals.</p>
          <a className='github' href='https://github.com/Amit08062001/Fit-Raho'>Github</a>
          <a className='github' href='https://amit08062001.github.io/Fit-Raho/'>Live</a>
        </div>
      </div>
    </section>
  );
};

export default Project;
