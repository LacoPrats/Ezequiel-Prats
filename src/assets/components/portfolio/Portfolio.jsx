import React, { useState } from 'react'
import './portfolio.css'
import { IoIosLink } from "react-icons/io"

import IMG1 from '../../assets/imag/bcharq.png'
import IMG2 from '../../assets/imag/hoopsworlds2.png'
import IMG3 from '../../assets/imag/proyect3.jpg'
import IMG4 from '../../assets/imag/astronaut.png'
import IMG5 from '../../assets/imag/puntoycoma.png'
import IMG7 from '../../assets/imag/Ali.png'
import IMG8 from '../../assets/imag/SmartB.png'
import IMG9 from '../../assets/imag/Clima.jpeg'
import IMG10 from '../../assets/imag/PRESENAPP.png'

const featuredProjects = [
  {
    id: 1,
    img: IMG8,
    title: 'SmartBuy Consulting',
    info: 'UI/UX + Frontend. End-to-end website with information architecture, a clean visual system, and responsive implementation.',
    link: 'https://smartbuyconsulting.com/',
    technologies: ['UI/UX', 'Information Architecture', 'Next.js', 'Tailwind'],
    scope: 'IA & structure · Responsive UI · Component system · Deployment',
    outcome: 'Launched a responsive site that clarifies services and strengthens brand credibility for lead generation.',
  },
  {
    id: 2,
    img: IMG1,
    title: 'BCH Arquitectura',
    info: 'Website design and development for an architecture studio, aligned with its visual identity and focused on showcasing projects with clarity.',
    link: 'https://www.bcharquitectura.com.ar/',
    technologies: ['UI Design', 'Responsive', 'React', 'Figma'],
  },
  {
    id: 3,
    img: IMG10,
    title: 'Mobile UI Prototype (Figma)',
    info: 'Mobile prototype with key screens and flows, focused on visual hierarchy, navigation patterns, and component consistency.',
    demo: 'https://www.figma.com/proto/uk5aak90ZNDAYhAij3yM1r/Formula-1-App?page-id=0%3A1&node-id=1-3',
    technologies: ['Figma', 'UX Flows', 'Prototyping'],
  },
]

const otherProjects = [
  {
    id: 10,
    img: IMG3,
    title: 'Organi (Figma)',
    info: 'Concept to organize household tasks. User-centered prototypes and iterations.',
    behance: 'https://www.behance.net/gallery/159935735/Organi',
    demo: 'https://www.figma.com/proto/vFxzEVRYbqUjC0t4S2EojN/Untitled?node-id=305-257&starting-point-node-id=302%3A159',
    technologies: ['Figma', 'UX', 'Prototyping'],
  },
  {
    id: 11,
    img: IMG5,
    title: 'Punto y Coma (Branding)',
    info: 'Final project for a typographic event at Biblioteca Nacional. Visual identity based on ASCII art.',
    behance: 'https://www.behance.net/gallery/162103830/Punto-y-Coma',
    technologies: ['Illustrator', 'Branding'],
  },
  {
    id: 12,
    img: IMG2,
    title: 'Hoops World',
    info: 'Personal e-commerce with catalog and filters by category and price.',
    link: 'https://hoops-world.vercel.app/',
    technologies: ['React', 'Tailwind', 'Vite'],
  },
  {
    id: 13,
    img: IMG4,
    title: 'Astronaut 8Bit Landing',
    info: 'Audiovisual project with 8-bit aesthetics and rhythm-driven narrative. After Effects + Resolume.',
    youtube: 'https://www.youtube.com/watch?v=pVh4dL0rCSA',
    technologies: ['After Effects', 'Illustrator', 'Resolume'],
  },
  {
    id: 14,
    img: IMG7,
    title: 'Ali Timeline (Figma)',
    info: 'Interactive timeline of Ali’s life. Design + functional prototype.',
    demo: 'https://www.figma.com/proto/vLabmKSgiqI7tf1JXFINGz/Alifinal?node-id=4-217&t=9koBURdw3uNc6EaP-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=4%3A217',
    technologies: ['Figma', 'Illustrator'],
  },
  {
    id: 15,
    img: IMG9,
    title: 'Clima en Movimiento',
    info: 'Immersive installation about climate change through interactive projections.',
    github: 'https://github.com/LacoPrats/weather-app',
    technologies: ['TouchDesigner', 'After Effects'],
  },
]

const ProjectCard = ({ project, variant }) => {
  const { img, title, info, link, behance, demo, drive, github, technologies, youtube, scope, outcome } = project

  // HERO layout (SmartBuy)
// HERO layout (SmartBuy)
if (variant === "hero") {
  return (
    <article className="portfolio__item portfolio__item--hero">
      {/* IZQUIERDA: Imagen */}
      <div className="portfolio__item-image">
        <img src={img} alt={title} />
      </div>

      {/* DERECHA: Contenido */}
      <div className="portfolio__item-content">
        <h3>{title}</h3>
        <span className="portfolio__hero-subtitle">UI/UX + Frontend</span>

        <p>{info}</p>

        {(scope || outcome) && (
          <div className="portfolio__meta-card">
            {scope && (
              <div className="portfolio__meta-row">
                <span className="portfolio__meta-label">Scope</span>
                <span className="portfolio__meta-value">{scope}</span>
              </div>
            )}
            {outcome && (
              <div className="portfolio__meta-row">
                <span className="portfolio__meta-label">Outcome</span>
                <span className="portfolio__meta-value">{outcome}</span>
              </div>
            )}
          </div>
        )}

        {technologies?.length > 0 && (
          <div className="portfolio__technologies">
            {technologies.map((tech, index) => (
              <span key={index} className="portfolio__tech-tag">
                {tech}
              </span>
            ))}
          </div>
        )}

        <div className="portfolio__item-cta">
          {link && (
            <a
              href={link}
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary"
            >
              Live site <IoIosLink className="link-icon" />
            </a>
          )}
          {demo && (
            <a
              href={demo}
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary"
            >
              Figma prototype <IoIosLink className="link-icon" />
            </a>
          )}
        </div>
      </div>
    </article>
  )
}


  // DEFAULT cards
  return (
    <article className="portfolio__item">
      <div className="portfolio__item-image">
        <img src={img} alt={title} />
      </div>

      <div className="portfolio__item-content">
        <h3>{title}</h3>
        <p>{info}</p>

        {technologies?.length > 0 && (
          <div className="portfolio__technologies">
            {technologies.map((tech, index) => (
              <span key={index} className="portfolio__tech-tag">{tech}</span>
            ))}
          </div>
        )}

        <div className="portfolio__item-cta">
          {link && (
            <a href={link} target="_blank" rel="noreferrer" className='btn btn-primary'>
              Live site <IoIosLink className="link-icon" />
            </a>
          )}
          {demo && (
            <a href={demo} target="_blank" rel="noreferrer" className='btn btn-primary'>
              Figma prototype <IoIosLink className="link-icon" />
            </a>
          )}
          {behance && (
            <a href={behance} target="_blank" rel="noreferrer" className='btn btn-secondary'>
              Behance <IoIosLink className="link-icon" />
            </a>
          )}
          {github && (
            <a href={github} target="_blank" rel="noreferrer" className='btn btn-secondary'>
              GitHub <IoIosLink className="link-icon" />
            </a>
          )}
          {youtube && (
            <a href={youtube} target="_blank" rel="noreferrer" className='btn btn-primary'>
              Video <IoIosLink className="link-icon" />
            </a>
          )}
          {drive && (
            <a href={drive} target="_blank" rel="noreferrer" className='btn btn-secondary'>
              Files <IoIosLink className="link-icon" />
            </a>
          )}
        </div>
      </div>
    </article>
  )
}

const Portfolio = () => {
  const [showAll, setShowAll] = useState(false)

  const heroProject = featuredProjects[0]
  const secondaryFeatured = featuredProjects.slice(1)

  return (
    <section id='portfolio'>
      <div className='portfolio__title_container'>
        <h1>Portfolio</h1>
        <p>Featured projects</p>
      </div>

      {/* ✅ Removed global "container" class to avoid max-width cap from index.css */}
      <div className="portfolio__container">
        {/* HERO FEATURED */}
        <div className="portfolio__featured-hero">
          <ProjectCard project={heroProject} variant="hero" />
        </div>

        {/* SECONDARY FEATURED */}
        <div className="portfolio__featured-grid">
          {secondaryFeatured.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
      </div>

      <div className="portfolio__toggle">
        <button className='btn btn-secondary' onClick={() => setShowAll(!showAll)}>
          {showAll ? 'Show less' : 'View more projects'}
        </button>
      </div>

      {showAll && (
        <>
          <div className='portfolio__title_container portfolio__title_container--secondary'>
            <p>Other work</p>
          </div>

          {/* ✅ Removed global "container" here too */}
          <div className="portfolio__container">
            <div className="portfolio__other-grid">
              {otherProjects.map((p) => (
                <ProjectCard key={p.id} project={p} />
              ))}
            </div>
          </div>
        </>
      )}
    </section>
  )
}

export default Portfolio
