import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/imag/ME.png'
import Headersocials from './Headersocials'
const Header = () => {
  return (
   <header>
    <div className="container header__container">
      <h5 >hello i am </h5>
      <h1 >Ezequiel Prats</h1>
      <h5 className='text-light'>Game UXUI Designer</h5>
      <CTA></CTA>
  <Headersocials></Headersocials>
      <div className='me'>
<img src={ME} alt="me" />
      </div>
      <a href="#contact" className='scroll_down'>Scroll Down</a>
    </div>
   </header>
  )
}

export default Header