import React, { useRef } from 'react';
import './portfolio.css';
import { IoIosLink } from "react-icons/io";
import { motion,useInView} from 'framer-motion';

import IMG1 from '../../assets/imag/bcharq.png';
import IMG2 from '../../assets/imag/hoopsworlds2.png';
import IMG3 from '../../assets/imag/proyect3.jpg';
import IMG10 from '../../assets/imag/PRESENAPP.png';

const projects = [
  {
    id: 1,
    img: IMG1,
    title: 'BCH Arquitectura(Client)',
    info: 'Fully responsive website for BCH Arquitectura built through close collaboration with the client to align with their vision.',
    link: 'https://www.bcharquitectura.com.ar/',
  },
  {
    id: 2,
    img: IMG3,
    title: 'Organi App (UX/UI)',
    info: 'An app to organize household chores. Designed with Figma through multiple iterations to achieve an optimal user interface.',
    behance: 'https://www.behance.net/gallery/159935735/Organi',
    demo: 'https://www.figma.com/proto/vFxzEVRYbqUjC0t4S2EojN/Untitled?node-id=305-257&starting-point-node-id=302%3A159',
  },
  {
    id: 3,
    img: IMG10,
    title: 'Formula 1 App',
    info: 'Figma-designed app for 2025 F1 season, including race calendar, teams, drivers, and past results.',
    link: 'https://www.figma.com/proto/uk5aak90ZNDAYhAij3yM1r/Formula-1-App',
  },
  {
    id: 4,
    img: IMG2,
    title: 'Hoops World (React Ecommerce)',
    info: 'A personal e-commerce project with a responsive product catalog and dynamic filters for category and price.',
    link: 'https://hoops-world.vercel.app/',
  },
];

const Portfolio = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 }); // ✅ animaciones solo una vez
  
  return (
    <section id="portfolio">
      <h5>My recent work</h5>
      <h2>Portfolio</h2>

      <motion.div
        className="container portfolio__container"
        ref={ref}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.25
            }
          }
        }}
      >
        {projects.map(({ id, img, title, info, link, behance, demo, drive, github }) => (
          <motion.article
            key={id}
            className="portfolio__item"
            variants={{
              hidden: { opacity: 0, y: 60 },
              visible: { opacity: 1, y: 0 }
            }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="portfolio__item-image">
              <img src={img} alt={title} />
            </div>
            <div className="portfolio__item-content">
              <h3>{title}</h3>
              <p>{info}</p>
              <div className="portfolio__item-cta">
                {link && (
                  <a href={link} className='btn' target='_blank' rel='noopener noreferrer'>
                    Link <IoIosLink className="link-icon" />
                  </a>
                )}
                {behance && (
                  <a href={behance} className='btn' target='_blank' rel='noopener noreferrer'>
                    Behance <IoIosLink className="link-icon" />
                  </a>
                )}
                {demo && (
                  <a href={demo} className='btn btn-primary' target='_blank' rel='noopener noreferrer'>
                    Live Demo <IoIosLink className="link-icon" />
                  </a>
                )}
                {drive && (
                  <a href={drive} className='btn' target='_blank' rel='noopener noreferrer'>
                    Drive <IoIosLink className="link-icon" />
                  </a>
                )}
                {github && (
                  <a href={github} className='btn' target='_blank' rel='noopener noreferrer'>
                    Github <IoIosLink className="link-icon" />
                  </a>
                )}
              </div>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
};

export default Portfolio;
