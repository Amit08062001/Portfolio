import React from 'react';
import profileImage from '../assets/Pic.jpg';
import Footer from './Footer';
import '../Components/Home.css'; // Ensure this path matches your project structure
import resume from'../assets/Amit_Resume.pdf';

const Home = () => {
  return (
    <div className='App'>
      <section className="home">
        <div className="home-content">
          <h1> Hi, I'm Amit!</h1>
          <div className='container'>
            <p className='text'>Frontend Developer</p>
          </div>
          <p className='home-p-2'>Hi, I’m a Frontend Developer specializing in React. I’m passionate about creating dynamic, user-friendly web applications. With hands-on experience in React, modern JavaScript, HTML, and CSS, I build responsive and visually appealing interfaces. </p>
          <button className='resume'><a href= {resume}>Download Resume </a></button>
        </div>
        <div className="home-image-container">
          <div className="tilted-frame">
            <img src={profileImage} alt="Amit Kumar Singh" />
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Home;
