import React, { useState } from 'react';
import './navbar.css';
import CV from '../header/CV_EzequielPrats.English.pdf';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      {/* Mobile top bar */}
      <div className="navbar-mobile-bar">
        <div className="logo">
          <span className="logo-e">E</span>
          <span className="logo-p">P</span>
        </div>

        <a 
          href={CV}
          download="CV_EzequielPrats.English.pdf"
          className="cv-download-btn"
        >
          Download CV
        </a>

        <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      {/* Desktop navbar (logo + links + cv) */}
      <div className="navbar-desktop">
        <div className="logo">
          <span className="logo-e">E</span>
          <span className="logo-p">P</span>
        </div>

        <div className="navbar-links">
          <a href="#header">About</a>
          <a href="#experience">Skills</a>
          <a href="#academic">Education</a>
          <a href="#portfolio">Portfolio</a>
          <a href="#contact">Contact</a>
          <a 
            href={CV}
            download="CV_EzequielPrats.English.pdf"
            className="cv-download-btn"
          >
            Download CV
          </a>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      <div className={`navbar-links-mobile ${menuOpen ? 'active' : ''}`}>
        <a href="#header" onClick={() => setMenuOpen(false)}>About</a>
        <a href="#experience" onClick={() => setMenuOpen(false)}>Skills</a>
        <a href="#academic" onClick={() => setMenuOpen(false)}>Education</a>
        <a href="#portfolio" onClick={() => setMenuOpen(false)}>Portfolio</a>
        <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;
