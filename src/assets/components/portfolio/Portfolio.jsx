import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/imag/project2.jpg'
import IMG2 from '../../assets/imag/project1.jpg'
import IMG3 from '../../assets/imag/proyect3.jpg'
import IMG4 from '../../assets/imag/project4.jpg'
import IMG5 from '../../assets/imag/project5.jpg'
import IMG6 from '../../assets/imag/proyect6.jpg'

const Portfolio = () => {
  return (
<section id='portfolio'>
  <h5>My recent work</h5>
  <h2>Portfolio</h2>
  <div className="container portfolio__container">
    <article className='portfolio__item'>
      <div className="portfolio item__imag">
        <img src={IMG1} alt="" />
      </div>
      <h3>Gaming Zone(HTML,CSS)</h3>
  <div className="portfolio__item-cta">
  <a href=" https://lacoprats.github.io/gamingzonegit/" className='btn'>Github</a>
  <a href="" className='btn btn-primary'>Live Demo</a>
  </div>
    </article>
    <article className='portfolio__item'>
      <div className="portfolio item__image">
        <img src={IMG2} alt="" />
      </div>
      <h3>Hoops World(React Ecommerce)</h3>
      <div className="portfolio__item-cta">
  <a href="https://e-prats-finalreact.vercel.app/" className='btn'>Web</a>
  <a href="" className='btn btn-primary'>Live Demo</a>
  </div>
    </article>
    <article className='portfolio__item'>
      <div className="portfolio item__imag">
        <img src={IMG3} alt="" />
      </div>
      <h3>Organi App(UXUI)</h3>
      <div className="portfolio__item-cta">
  <a href="https://www.behance.net/gallery/159935735/Organi" className='btn'>Behance</a>
  <a href="" className='btn btn-primary'>Live Demo</a>
  </div>
    </article>
    <article className='portfolio__item'>
      <div className="portfolio item__imag">
        <img src={IMG4} alt="" />
      </div>
      <h3>Hill Castle(Unreal Engine 5)</h3>
      <div className="portfolio__item-cta">
  <a href="" className='btn'>Github</a>
  <a href="" className='btn btn-primary'>Live Demo</a>
  </div>
    </article>
    <article className='portfolio__item'>
      <div className="portfolio item__imag">
        <img src={IMG5} alt="" />
      </div>
      <h3>Target Shooting(FPS Game)</h3>
      <div className="portfolio__item-cta">
  <a href="" className='btn'>Github</a>
  <a href="" className='btn btn-primary'>Live Demo</a>
  </div>
    </article>
    <article className='portfolio__item'>
      <div className="portfolio item__imag">
        <img src={IMG6} alt="" />
      </div>
      <h3>Zombie Pistol Madness(FPS Game)</h3>
      <div className="portfolio__item-cta">
  <a href="" className='btn'>Github</a>
  <a href="" className='btn btn-primary'>Live Demo</a>
  </div>
    </article>
  </div>
</section>
  )
}

export default Portfolio