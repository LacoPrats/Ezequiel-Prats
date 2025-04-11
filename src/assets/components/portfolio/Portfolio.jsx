import React from 'react';
import './portfolio.css';
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
      demo: 'https://www.figma.com/proto/vFxzEVRYbqUjC0t4S2EojN/Untitled?node-id=305-257&starting-point-node-id=302%3A159'
    },
    {
      id: 3,
      img: IMG10,
      title: 'Formula 1 APP',
      info: 'A Formula 1 app designed in Figma for the 2025 season, where you can view the race calendar, explore the teams and their lineups, and check last season’s results. ',
      link: 'https://www.figma.com/proto/uk5aak90ZNDAYhAij3yM1r/Formula-1-App?page-id=0%3A1&node-id=1-3&p=f&viewport=1785%2C297%2C0.32&t=xj4BdCe3hpmFmOzn-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=1%3A3',
    },
    {
      id: 3,
      img: IMG9,
      title: 'Clima en Movimiento',
      info: '"Clima en movimiento" is an interactive and immersive experience where users learn about the consequences of global warming on our planet and how their actions have long-term impacts. The immersive room features projections that respond to the users actions. Proyect carried out with illustrator, After Effect and Touch designer ',
      link: 'https://www.youtube.com/watch?v=89y1H3mPIAs',
      drive: 'https://drive.google.com/drive/u/0/folders/1i_ZMFxFH7E6IvlGBqQkiY4XgWhRMhkf6'
    },

    {
      id: 2,
      img: IMG2,
      title: 'Hoops World(React Ecommerce)',
      info: 'Personal proyect where i created and e-commerce platform. This involved developing a fully responsive website featuring a product catalog with filters for both category and price',
      link: 'https://hoops-world.vercel.app/'
    },
    {
      id: 4,
      img: IMG5,
      title: 'Punto Y Coma Proyect',
      info: 'Punto y Coma was a final project where we developed a typographic event at the National Library of Buenos Aires. In this project, we created the events identity and graphics from scratch, combining design with typography, specifically ASCII art. ',
      behance: 'https://www.behance.net/gallery/159608087/PuntoyComa'
    },
    {
      id: 5,
      img: IMG4,
      title: 'Astronaut 8bit Audiovisual',
      info: 'Audiovisual mapping project using the song "Fugue State" by Vulfpeck. I used an 8-bit retro game identity to create a narrative that matches the rhythm of the song. This project was carried out using After Effects and Resolume. ',
      drive: 'https://drive.google.com/drive/folders/1bzGCH-M95ZwKp1VSi5ZcbWmrOxRyYvEA?usp=sharing',
      link: 'https://www.youtube.com/watch?v=pVh4dL0rCSA'
    },
    {
      id: 7,
      img: IMG7,
      title: 'Ali The Greatest',
      info: 'A timeline recounting Ali life and his battles both inside and outside the ring. This project was created in Illustrator and Figma to provide functionality. ',
      link: 'https://www.figma.com/proto/vLabmKSgiqI7tf1JXFINGz/Alifinal?node-id=4-217&t=9koBURdw3uNc6EaP-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=4%3A217'
    },
    {
      id: 7,
      img: IMG8,
      title: 'Hot Dog World',
      info: 'A playful NFT concept art exploration of art and imagination. By combining the bold, satirical style of Pop Art with the whimsical concept of a sausage-centric universe. ',
      link: 'https://www.figma.com/proto/vLabmKSgiqI7tf1JXFINGz/Alifinal?node-id=4-217&t=9koBURdw3uNc6EaP-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=4%3A217https://www.behance.net/gallery/159748355/NFT-Concept-Art-Hot-Dog-World'
    }
    
  ];

  return (
    <section id='portfolio'>
      <h5>My recent work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {projects.map(({ id, img, title, info, link, behance, demo, drive, github }) => (
          <article key={id} className="portfolio__item">
            <div className="portfolio__item-bg" style={{ backgroundImage: `url(${img})` }}></div>
            <div className="portfolio__item-content">
              <h3>{title}</h3>
              <p>{info}</p>
              <div className="portfolio__item-cta">
                {link && <a href={link} className='btn'>Link</a>}
                {behance && <a href={behance} className='btn'>Behance</a>}
                {demo && <a href={demo} className='btn btn-primary'>Live Demo</a>}
                {drive && <a href={drive} className='btn'>Drive</a>}
                {github && <a href={github} className='btn'>Github</a>}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Portfolio;
