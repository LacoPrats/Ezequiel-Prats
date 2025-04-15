import React from 'react';
import './experience.css'; // Asegúrate de tener los estilos actualizados
import { IoIosRocket } from "react-icons/io";
// iconos design
import ICON1 from "../../assets/imag/icons/illustrator.png";

import ICON3 from "../../assets/imag/icons/figma.png";
import ICON4 from "../../assets/imag/icons/photoshop.png";
import ICON5 from "../../assets/imag/icons/after-effects.png";

// iconos frontend
import ICON6 from "../../assets/imag/icons/react.png";
import ICON7 from "../../assets/imag/icons/html.png";
import ICON8 from "../../assets/imag/icons/css-3.png";
import ICON9 from "../../assets/imag/icons/js.png";
import ICON10 from "../../assets/imag/icons/github-sign.png";

// Array de iconos para diseño
const iconsdesign = [
  { id: 1, src: ICON1, title: 'Illustrator' },
  { id: 3, src: ICON3, title: 'Figma' },
  { id: 4, src: ICON4, title: 'Photoshop' },
  { id: 5, src: ICON5, title: 'After Effects' },
];

// Array de iconos para frontend
const iconsfront = [
  { id: 1, src: ICON6, title: 'React' },
  { id: 2, src: ICON7, title: 'HTML' },
  { id: 3, src: ICON8, title: 'CSS' },
  { id: 4, src: ICON9, title: 'JavaScript' },
  { id: 5, src: ICON10, title: 'GitHub' },
];

const Experience = () => {
  return (
    <section id='experience' className="experience">
      <div className='experience__title_container'>
      <h1>Skills</h1>
      <IoIosRocket className='iconskill' />
      </div>
      <div className="experience-container">
        <div className="icons-container">
          {iconsfront.map((icon) => (
            <div key={icon.id} className="experience-item">
              <img src={icon.src} alt={icon.title} className="experience-icon" />
              <h4>{icon.title}</h4>
            </div>
          ))}
        </div>
      </div>
      {/* Sección de diseño */}
      <div className="experience-container">
        <div className="icons-container">
          {iconsdesign.map((icon) => (
            <div key={icon.id} className="experience-item">
              <img src={icon.src} alt={icon.title} className="experience-icon" />
              <h4>{icon.title}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
