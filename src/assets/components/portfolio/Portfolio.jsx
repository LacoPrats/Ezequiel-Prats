import React, { useState } from 'react'
import './portfolio.css'
import { IoIosLink } from 'react-icons/io'

import IMG1 from '../../assets/imag/bcharq.png'
import IMG2 from '../../assets/imag/hoopsworlds2.png'
import IMG3 from '../../assets/imag/proyect3.jpg'
import IMG4 from '../../assets/imag/astronaut.png'
import IMG5 from '../../assets/imag/puntoycoma.png'
import IMG7 from '../../assets/imag/Ali.png'
import IMG8 from '../../assets/imag/SmartB.png'
import IMG9 from '../../assets/imag/Clima.jpeg'
import IMG10 from '../../assets/imag/PRESENAPP.png'
import IMG_AIUxAudit from '../../assets/imag/UXUI.png'

const heroProjects = [
    {
    id: 'hero-aiux',
    image: IMG_AIUxAudit,
    title: 'AI UX Audit',
    subtitle: 'UX + AI Concept',
    description:
      'AI-powered tool that evaluates UI screenshots and returns prioritized UX improvements based on heuristics, impact, and effort.',
    scope: 'UX audit flow · Findings system · Prioritization model',
    outcome:
      'Turns heuristic evaluation into clear, actionable recommendations in seconds.',
    tags: ['UX', 'AI', 'Product Design'],
    live: 'https://v0-ai-ux-audit.vercel.app/',
    case: null,
    imageFit: 'contain',
  },
  {
    id: 'hero-bch',
    image: IMG1,
    title: 'BCH Arquitectura',
    subtitle: 'UI/UX + Frontend',
    description:
      'Portfolio website design and development for an architecture studio, focused on visual hierarchy, project clarity, and a clean responsive system.',
    scope: 'UI redesign · Layout hierarchy · Responsive implementation',
    outcome:
      'Delivered a stronger digital presence that showcases projects with clarity and structure.',
    tags: ['UI Design', 'React', 'Figma'],
    live: 'https://www.bcharquitectura.com.ar/',
    case: null,
    imageFit: 'contain',
  },

  {
    id: 'feat-smartbuy',
    image: IMG8,
    title: 'SmartBuy Consulting',
    subtitle: 'UI/UX + Frontend',
    description:
      'End-to-end marketing site: information architecture, clean visual system, and responsive components to improve credibility and lead generation.',
    scope: 'IA & structure · Responsive UI · Component system · Deployment',
    outcome:
      'Launched a responsive site that clarifies services and strengthens brand credibility.',
    tags: ['UI/UX', 'Information Architecture', 'Next.js', 'Tailwind'],
    live: 'https://smartbuyconsulting.com/',
    case: null,
    imageFit: 'contain',
  },
]

const otherProjects = [
  {
    id: 'feat-mobile',
    image: IMG10,
    title: 'Mobile UI Prototype',
    subtitle: 'Figma Prototype',
    description:
      'Mobile prototype focused on key screens and flows, emphasizing hierarchy, navigation patterns, and component consistency.',
    tags: ['Figma', 'UX Flows', 'Prototyping'],
    live: 'https://www.figma.com/proto/uk5aak90ZNDAYhAij3yM1r/Formula-1-App?page-id=0%3A1&node-id=1-3',
    case: null,
    imageFit: 'cover',
  },
  {
    id: 'organi',
    image: IMG3,
    title: 'Organi',
    subtitle: 'UX Concept (Figma)',
    description:
      'Concept to organize household tasks. User-centered prototypes and iterations.',
    tags: ['Figma', 'UX', 'Prototyping'],
    live: 'https://www.figma.com/proto/vFxzEVRYbqUjC0t4S2EojN/Untitled?node-id=305-257&starting-point-node-id=302%3A159',
    case: 'https://www.behance.net/gallery/159935735/Organi',
    imageFit: 'cover',
  },
  {
    id: 'puntoycoma',
    image: IMG5,
    title: 'Punto y Coma',
    subtitle: 'Branding',
    description:
      'Visual identity for a typographic event at Biblioteca Nacional, inspired by ASCII art.',
    tags: ['Illustrator', 'Branding'],
    live: 'https://www.behance.net/gallery/162103830/Punto-y-Coma',
    case: null,
    imageFit: 'cover',
  },
  {
    id: 'hoops',
    image: IMG2,
    title: 'Hoops World',
    subtitle: 'E-commerce',
    description:
      'Personal e-commerce with catalog and filters by category and price.',
    tags: ['React', 'Tailwind', 'Vite'],
    live: 'https://hoops-world.vercel.app/',
    case: null,
    imageFit: 'cover',
  },
  {
    id: 'astronaut',
    image: IMG4,
    title: 'Astronaut 8Bit Landing',
    subtitle: 'Motion / Audiovisual',
    description:
      '8-bit aesthetic piece with rhythm-driven narrative. After Effects + Resolume.',
    tags: ['After Effects', 'Illustrator', 'Resolume'],
    live: 'https://www.youtube.com/watch?v=pVh4dL0rCSA',
    case: null,
    imageFit: 'cover',
  },
  {
    id: 'ali',
    image: IMG7,
    title: 'Ali Timeline',
    subtitle: 'Interactive Prototype (Figma)',
    description:
      'Interactive timeline of Ali’s life. Design + functional prototype.',
    tags: ['Figma', 'Illustrator'],
    live: 'https://www.figma.com/proto/vLabmKSgiqI7tf1JXFINGz/Alifinal?node-id=4-217&t=9koBURdw3uNc6EaP-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=4%3A217',
    case: null,
    imageFit: 'contain',
  },
  {
    id: 'clima',
    image: IMG9,
    title: 'Clima en Movimiento',
    subtitle: 'Installation',
    description:
      'Immersive installation about climate change through interactive projections.',
    tags: ['TouchDesigner', 'After Effects'],
    live: 'https://github.com/LacoPrats/weather-app',
    case: null,
    imageFit: 'cover',
  },
]

const ProjectCard = ({ project, variant = 'default' }) => {
  const {
    image,
    title,
    subtitle,
    description,
    scope,
    outcome,
    tags,
    live,
    case: caseStudy,
    imageFit = 'cover',
  } = project

  const isHero = variant === 'hero'

  return (
    <article className={`portfolio__item ${isHero ? 'portfolio__item--hero' : ''}`}>
      <div className={`portfolio__item-image portfolio__item-image--${imageFit}`}>
        <img src={image} alt={title} loading="lazy" />
      </div>

      <div className="portfolio__item-content">
        <div className="portfolio__item-top">
          <h3>{title}</h3>
          {subtitle && <span className="portfolio__subtitle">{subtitle}</span>}
          <p>{description}</p>

          {(scope || outcome) && (
            <div className="portfolio__meta-card">
              {scope && (
                <div className="portfolio__meta-row">
                  <div className="portfolio__meta-label">Scope</div>
                  <div className="portfolio__meta-value">{scope}</div>
                </div>
              )}
              {outcome && (
                <div className="portfolio__meta-row">
                  <div className="portfolio__meta-label">Outcome</div>
                  <div className="portfolio__meta-value">{outcome}</div>
                </div>
              )}
            </div>
          )}

          {tags?.length > 0 && (
            <div className="portfolio__technologies">
              {tags.map((t) => (
                <span key={t} className="portfolio__tech-tag">
                  {t}
                </span>
              ))}
            </div>
          )}
        </div>

        <div className="portfolio__item-cta">
          {live && (
            <a className="btn btn-primary" href={live} target="_blank" rel="noreferrer">
              Live site <IoIosLink className="link-icon" />
            </a>
          )}
          {caseStudy && (
            <a className="btn btn-secondary" href={caseStudy} target="_blank" rel="noreferrer">
              Case study <IoIosLink className="link-icon" />
            </a>
          )}
        </div>
      </div>
    </article>
  )
}

const Portfolio = () => {
  const [showAll, setShowAll] = useState(false)

  return (
    <section id="portfolio">
      <div className="portfolio__title_container">
        <h1>Portfolio</h1>
        <p>Featured projects</p>
      </div>

      <div className="portfolio__container">
        <div className="portfolio__hero-stack">
          {heroProjects.map((p) => (
            <ProjectCard key={p.id} project={p} variant="hero" />
          ))}
        </div>
      </div>

      <div className="portfolio__toggle">
        <button className="btn btn-secondary" onClick={() => setShowAll(!showAll)}>
          {showAll ? 'Show less' : 'View more projects'}
        </button>
      </div>

      {showAll && (
        <>
          <div className="portfolio__title_container portfolio__title_container--secondary">
            <p>Other work</p>
          </div>

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