import React from 'react';
import './header.css';
import CTA from './CTA';
import ME from '../../assets/imag/perfil.jpg';
import Headersocials from './Headersocials';

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <div className="header__text">
          <h5>Hello, I am</h5>
          <h1>Ezequiel Prats</h1>
          <h5 className="text-light">Front End Developer</h5>
          <h5 className="text-light">UX UI Designer</h5>
          <CTA />
          <Headersocials />
          <a href="#contact" className="scroll_down">Scroll Down</a>
        </div>
        <div className="header__image">
          <img src={ME} alt="Ezequiel Prats" className="header__img" />
        </div>
      </div>
    </header>
  );
}

export default Header;
