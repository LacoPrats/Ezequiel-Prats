import React from 'react'
import './footer.css'


const Footer = () => {
  return (
    <footer>
      <a href="#"className='footer__logo'>Ezequiel Prats</a>
      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#experience">Skills</a></li>
        <li><a href="#academic">Education</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="footer__socials">
      </div>
      <div className="footer__copyright">
        <small>copy; Ezequiel Prats</small>
      </div>
    </footer>
  )
}

export default Footer