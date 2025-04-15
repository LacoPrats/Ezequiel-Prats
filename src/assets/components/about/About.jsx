import React from 'react';
import './about.css';
import { HiOutlineAcademicCap } from "react-icons/hi2";
import CTA from '../header/CTA';
import Imgabout from '../../assets/imag/fotoperfil2.jpeg';

const About = () => {
  return (
    <section id="about">
      <div className="about-title-container">
        <HiOutlineAcademicCap className="about-icon" />
        <h1>About Me</h1>
      </div>
      <div className="about-main">
        <div className="about-left">
          <p>
            I'm a designer with a strong passion for UX/UI and frontend development. I enjoy crafting intuitive digital experiences that merge visual creativity with functional code. I believe in simplicity and minimalism as key principles to enhance usability and aesthetics. My background allows me to approach each project from both a user-centered and technical perspective.
          </p>
          <CTA />
        </div>
        <div className="about-right">
          <img src={Imgabout} alt="Ezequiel Prats" />
        </div>
      </div>
    </section>
  );
};

export default About;
