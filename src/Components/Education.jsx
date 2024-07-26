import React from 'react';
import '../App.css'
const Education = () => {
  return (
    <section className="education">
      <h1>EDUCATION</h1>
      <hr className="education-underline" />
      <div className="timeline">
        <h2>2019 - 2023</h2>
        <ul>
          <li>
            <h3>Roorkee College Of Engineering , Roorkee</h3>
            <p>Bachelor Of Technology</p>
            <p>Computer Science</p>
          </li>
          <li>
            <h2>2017 - 2019</h2>
            <h3>S.S. High School,Basantpur</h3>
            <p>Higher Secondary Education   </p>
            <p>Science</p>
          </li>
          <li>
            <h2>2015 - 2017</h2>
            <h3>S.S. High School,Basantpur</h3>
            <p>Secondary Education</p>
          </li>
        </ul>
      </div>
    
    </section>
  );
};

export default Education;