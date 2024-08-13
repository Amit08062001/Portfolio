import React from 'react';
import './About.css'
import Footer from './Footer'
export default function About(){
    return(
        <div className='container'>
            <div className='about-div'>
                <h1>ABOUT</h1>
                <p>
                Hi, I’m a Frontend Developer specializing in React. I’m passionate about creating dynamic, user-friendly web applications that deliver exceptional user experiences. I’ve gained hands-on experience with React, where I’ve been able to build and manage interactive user interfaces using component-based architecture and hooks. My journey has also included working extensively with modern JavaScript, HTML, and CSS, enabling me to craft responsive and visually appealing web pages. I enjoy translating design concepts into functional applications and continuously seek opportunities to refine my skills and tackle new challenges. Feel free to explore my portfolio to see some of the projects I’ve worked on. If you have any questions or would like to discuss potential collaborations, I’d love to hear from you!
                </p>
            </div>

            <section className="education">
            <h1>EDUCATION</h1>
            <div className="timeline">
                <ul>
                <li>
                    <h3>Roorkee College Of Engineering , Roorkee</h3>
                    <p>Bachelor Of Technology</p>
                    <p>Computer Science</p>
                </li>
                <li><h2 className='education-time'>2019 - 2023</h2></li>
                </ul>
                <ul>
                <li>
                    <h3>S.S. High School,Basantpur</h3>
                    <p>Higher Secondary Education   </p>
                    <p>Science</p>
                </li>
                <li><h2>2017 - 2019</h2></li>
                </ul>
                <ul>
                <li>
                    <h3>S.S. High School,Basantpur</h3>
                    <p>Secondary Education</p>
                </li>
                <li><h2>2015 - 2017</h2></li>
                </ul>
            </div> 
            </section>
            <Footer/>
        </div>
    )
}