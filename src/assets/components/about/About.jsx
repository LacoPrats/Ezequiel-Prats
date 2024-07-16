import React from 'react';
import './about.css';
import ME from '../../assets/imag/metwo.jpg';
import { FaGithub } from 'react-icons/fa';
import { BiUser } from 'react-icons/bi';
import { HiOutlineFolderOpen } from 'react-icons/hi';

const About = () => {
  return (
    <section id='about'>
      <h5>Get to know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About image" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaGithub className='about__icon'/>
              <h5>Service</h5>
              <small></small>
            </article>
            <article className='about__card'>
              <BiUser className='about__icon'/>
              <h5>Clients</h5>
              <small></small>
            </article>
            <article className='about__card'>
              <HiOutlineFolderOpen className='about__icon'/>
              <h5>Projects</h5>
              <small></small>
            </article>
          </div>
          <p className='info1'>
            I'm a proactive, social person who likes to take on a challenge and is constantly looking for self-improvement. Having worked on both websites and mobile apps, I have a well-rounded understanding of design, user experience, and front-end development. I have a good understanding of how to combine the visual and the functional to give the user the best experience possible.
          </p>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  );
}

export default About;
