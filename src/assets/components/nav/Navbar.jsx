import React from 'react';
import './navbar.css';
import CV from '../header/Prats-EnglishCV.pdf'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <span className="logo">
          <span className="logo-e">E</span>
          <span className="logo-p">P</span>
        </span>
      </div>

      <div className="navbar-links">
      <a href="#header">About</a>
        <a href="#experience">Skills</a>
        <a href="#academic">Education</a>
        <a href="#portfolio">Portfolio</a>
        <a href="#contact">Contact</a>
        <a 
  href={CV}
  download="Ezequiel_Prats_CV.pdf"
  className="cv-download-btn"
>
  Download CV
</a>
      </div>
    </nav>
  );
};

export default Navbar;
