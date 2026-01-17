import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer>
      {/* Logo: usar link real a una sección */}
      <a href="#header" className="footer__logo">
        Ezequiel Prats
      </a>

      <ul className="permalinks">
        {/* Home: apuntar a una sección válida */}
        <li><a href="#header">Home</a></li>
        <li><a href="#experience">Skills</a></li>
        <li><a href="#academic">Education</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials" />

      <div className="footer__copyright">
        <small>&copy; {new Date().getFullYear()} Ezequiel Prats</small>
      </div>
    </footer>
  );
};

export default Footer;
