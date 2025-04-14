import React from 'react';
import './portfolio.css';
import { IoIosLink } from "react-icons/io";

import IMG1 from '../../assets/imag/bcharq.png';
import IMG2 from '../../assets/imag/hoopsworlds2.png';
import IMG3 from '../../assets/imag/proyect3.jpg';
import IMG4 from '../../assets/imag/astronaut.png';
import IMG5 from '../../assets/imag/puntoycoma.png';
import IMG6 from '../../assets/imag/proyect6.jpg';
import IMG7 from '../../assets/imag/Ali.png';
import IMG8 from '../../assets/imag/nft.png';
import IMG9 from '../../assets/imag/Clima.jpeg';
import IMG10 from '../../assets/imag/PRESENAPP.png';

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      img: IMG1,
      title: 'BCH Arquitectura(Client)',
      info: 'Fully responsive website for BCH Arquitectura bt leveraging my design expertise, This collaborative process between the client and myself was both challenging and rewarding as we worked together to ensure the final outcome aligned with their ides and need',
      link: 'https://www.bcharquitectura.com.ar/'
    },
    {
      id: 3,
      img: IMG3,
      title: 'Organi App(UXUI)',
      info: 'Organi an app to organize household chores in an orderly and effective manner. The application was developed using Figma, where through prototypes and iterations we reached this final version of the app. ',
      behance: 'https://www.behance.net/gallery/159935735/Organi',
      demo: 'https://www.figma.com/proto/vFxzEVRYbqUjC0t4S2EojN/Untitled?...'
    },
    {
      id: 3,
      img: IMG10,
      title: 'Formula 1 APP',
      info: 'A Formula 1 app designed in Figma for the 2025 season, where you can view the race calendar, explore the teams and their lineups, and check last season’s results',
      link: 'https://www.figma.com/proto/uk5aak90ZNDAYhAij3yM1r/...'
    },
    {
      id: 2,
      img: IMG2,
      title: 'Hoops World(React Ecommerce)',
      info: 'Personal proyect where i created and e-commerce platform. This involved developing a fully responsive website featuring a product catalog with filters for both category and price',
      link: 'https://hoops-world.vercel.app/'
    },
  ];

  return (
    <section id='portfolio'>
      <h5>My recent work</h5>
      <h1>Portfolio</h1>
      <div className="container portfolio__container">
        {projects.map(({ id, img, title, info, link, behance, demo, drive, github }) => (
          <article key={id} className="portfolio__item">
            <div className="portfolio__item-image">
              <img src={img} alt={title} />
            </div>
            <div className="portfolio__item-content">
              <h3>{title}</h3>
              <p>{info}</p>
              <div className="portfolio__item-cta">
                {link && (
                  <a href={link} className='btn' target='_blank' rel='noopener noreferrer'>
                    Link <IoIosLink className='link-icon' />
                  </a>
                )}
                {behance && (
                  <a href={behance} className='btn' target='_blank' rel='noopener noreferrer'>
                    Behance <IoIosLink className='link-icon' />
                  </a>
                )}
                {demo && (
                  <a href={demo} className='btn btn-primary' target='_blank' rel='noopener noreferrer'>
                    Live Demo <IoIosLink className='link-icon' />
                  </a>
                )}
                {drive && (
                  <a href={drive} className='btn' target='_blank' rel='noopener noreferrer'>
                    Drive <IoIosLink className='link-icon' />
                  </a>
                )}
                {github && (
                  <a href={github} className='btn' target='_blank' rel='noopener noreferrer'>
                    GitHub <IoIosLink className='link-icon' />
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
