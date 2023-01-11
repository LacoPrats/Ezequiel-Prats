import React from 'react'
import './footer.css'
import  {BsLinkedin}  from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FaBehanceSquare} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer>
      <a href="#"className='footer__logo'>Ezequiel Prats</a>
      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="footer__socials">
      <a href="https://www.linkedin.com/in/ezequiel-prats-4369311b1/" target="_blank"><BsLinkedin/></a>
<a href="https://www.github.com" target="_blank"><FaGithub/></a>
<a href="https://www.behance.net/ezequielprats" target="_blank"><FaBehanceSquare/></a>
      </div>
      <div className="footer__copyright">
        <small>copy; Ezequiel Prats</small>
      </div>
    </footer>
  )
}

export default Footer