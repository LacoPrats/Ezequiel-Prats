import React from 'react'
import './portfolio.css'
import { IoIosLink } from "react-icons/io"
import IMG1 from '../../assets/imag/bcharq.png'
import IMG2 from '../../assets/imag/hoopsworlds2.png'
import IMG3 from '../../assets/imag/proyect3.jpg'
import IMG4 from '../../assets/imag/astronaut.png'
import IMG5 from '../../assets/imag/puntoycoma.png'
import IMG6 from '../../assets/imag/newsapi.png'
import IMG7 from '../../assets/imag/Ali.png'
import IMG8 from '../../assets/imag/nft.png'
import IMG9 from '../../assets/imag/Clima.jpeg'
import IMG10 from '../../assets/imag/PRESENAPP.png'


const projects = [
  {
    id: 1,
    img: IMG1,
    title: 'BCH Arquitectura',
    info: 'Fully responsive website for BCH Arquitectura built through close collaboration with the client to align with their vision.',
    link: 'https://www.bcharquitectura.com.ar/',
    technologies: ['React', 'CSS', 'Figma']
  },
  {
    id: 3,
    img: IMG3,
    title: 'Organi App',
    info: 'Organize household chores efficiently. Built in Figma with prototypes and user-centric iterations.',
    behance: 'https://www.behance.net/gallery/159935735/Organi',
    demo: 'https://www.figma.com/proto/vFxzEVRYbqUjC0t4S2EojN/Untitled?node-id=305-257&starting-point-node-id=302%3A159',
    technologies: ['Figma', 'UX Research','Prototyping']
  },
  {
    id: 4,
    img: IMG10,
    title: 'Formula 1 App',
    info: 'Figma prototype for the 2025 F1 season. View races, teams, and results.',
    demo: 'https://www.figma.com/proto/uk5aak90ZNDAYhAij3yM1r/Formula-1-App?page-id=0%3A1&node-id=1-3',
    technologies: ['Figma','Redesign']
  },
  {
    id: 2,
    img: IMG2,
    title: 'Hoops World',
    info: 'Personal project: e-commerce platform with product catalog and filters for category and price.',
    link: 'https://hoops-world.vercel.app/',
    technologies: ['React', 'Tailwind', 'Vite']
  },
  {
    id: 5,
    img: IMG4,
    title: 'Astronaut 8Bit Landing',
    info: 'Audiovisual mapping project inspired by the song "Fugue State" by Vulfpeck. It combines retro 8-bit visuals with rhythm-driven narrative, created using After Effects and Resolume.',
    youtube: 'https://www.youtube.com/watch?v=pVh4dL0rCSA',
    technologies: ['After Effect','Illustrator','Resoloume']
  },
  {
    id: 6,
    img: IMG5,
    title: 'Punto y Coma Branding',
    info: 'Punto y Coma was a final project developed for a typographic event held at the National Library of Buenos Aires. We designed the entire visual identity from scratch, using ASCII art as a conceptual and aesthetic foundation.',
    behance: 'https://www.behance.net/gallery/162103830/Punto-y-Coma',
    technologies: ['Illustrator', 'Branding']
  },
  {
    id: 8,
    img: IMG7,
    title: 'Ali Timeline',
    info: 'A timeline recounting Ali life and his battles both inside and outside the ring. This project was created in Illustrator and Figma to provide functionality',
    demo: 'https://www.figma.com/proto/vLabmKSgiqI7tf1JXFINGz/Alifinal?node-id=4-217&t=9koBURdw3uNc6EaP-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=4%3A217 ',
    technologies: ['Figma', 'Illustrator']
  },
  {
    id: 9,
    img: IMG6,
    title: 'News Api',
    info: 'A news site where I practiced working with APIs and displaying dynamic data. Users can view real-time news and filter articles by category in a clean and responsive layout.',
    github: 'https://github.com/LacoPrats/Api-news',
    technologies: ['CSS Grid', 'React','Api']
  },
  {
    id: 10,
    img: IMG9,
    title: 'Clima en Movimiento',
    info: 'Clima en Movimiento is an immersive installation that illustrates the impact of human actions on climate change through interactive projections',
    youtube: 'https://github.com/LacoPrats/weather-app',
    drive: 'https://github.com/LacoPrats/weather-app',
    technologies: ['Touch Designer', 'Illustrator', 'After Effects']
  }
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
    <div className='portfolio__title_container'>
      <h1>Portfolio</h1>
      <p>My recent work</p>
    </div>
      <div className="container portfolio__container">
        {projects.map(({ id, img, title, info, link, behance, demo, drive, github, technologies,youtube }) => (
          <article key={id} className="portfolio__item">
            <div className="portfolio__item-image">
              <img src={img} alt={title} />
            </div>
            <div className="portfolio__item-content">
              <h3>{title}</h3>
              <p>{info}</p>

              {technologies && (
                <div className="portfolio__technologies">
                  {technologies.map((tech, index) => (
                    <span key={index} className="portfolio__tech-tag">{tech}</span>
                  ))}
                </div>
              )}

              <div className="portfolio__item-cta">
                {link && <a href={link} className='btn btn-primary'>Link<IoIosLink className="link-icon" /></a>}
                {demo && <a href={demo} className='btn btn-primary'>Live Demo<IoIosLink className="link-icon" /></a>}
                {behance && <a href={behance} className='btn btn-secondary'>Behance<IoIosLink className="link-icon" /></a>}
                {github && <a href={github} className='btn btn-secondary'>Github<IoIosLink className="link-icon" /></a>}
                {youtube && <a href={youtube} className='btn btn-primary'>Youtube<IoIosLink className="link-icon" /></a>}
                {drive && <a href={drive} className='btn btn-secondary'>Drive<IoIosLink className="link-icon" /></a>}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Portfolio
