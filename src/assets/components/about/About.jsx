import React from 'react';
import './about.css';
import { HiOutlineAcademicCap } from "react-icons/hi2";

const About = () => {
  return (
    <section id='about'>
      <div className='about-title-container'>
        <HiOutlineAcademicCap className='about-icon'/>
        <h1>Academic Background</h1>
      </div>
      <hr />
      <div className='about-content-container'>
        <div className='about-content'>
          <h4>
          I'm a designer with a strong passion for UX/UI and frontend development. I enjoy crafting intuitive digital experiences that merge visual creativity with functional code. I believe in simplicity and minimalism as key principles to enhance usability and aesthetics. My background allows me to approach each project from both a user-centered and technical perspective.
          </h4>
        </div>
        <div className='academic-background-content'>
          <div>
            <h2>Bachelor Degree in Design</h2>
            <h4>Torcuato Di Tella University</h4>
          </div>
          <hr />
          <div className='course-pair'>
            <div>
              <h2>Front End Development</h2>
              <h4>Coderhouse</h4>
            </div>
            <hr />
            <div>
              <h2>App Development</h2>
              <h4>Coderhouse</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
