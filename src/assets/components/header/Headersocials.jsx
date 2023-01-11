import React from 'react'
import  {BsLinkedin}  from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FaBehanceSquare} from 'react-icons/fa'

const Headersocials = () => {
  return (
    <div className='header_socials'>
<a href="https://www.linkedin.com/in/ezequiel-prats-4369311b1/" target="_blank"><BsLinkedin/></a>
<a href="https://www.github.com" target="_blank"><FaGithub/></a>
<a href="https://www.behance.net/ezequielprats" target="_blank"><FaBehanceSquare/></a>
    </div>
  )
}

export default Headersocials