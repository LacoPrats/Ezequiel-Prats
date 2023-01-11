    import React from 'react'
    import './about.css'
    import ME from '../../assets/imag/metwo.jpg'
    import {FaGithub} from 'react-icons/fa'
    import {BiUser} from 'react-icons/bi'
    import {HiOutlineFolderOpen} from 'react-icons/hi'

    const About = () => {
      return (
     <section id='about'>
      <h5>Get to know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
<div className="about__me">
  <div className="about__me-image">
<img src={ME} alt="About image" />
  </div>
</div>
<div className="about__content">
  <div className="about__cards">
    <article className='about__card'>
    <FaGithub className='about__icon'/>
      <h5>experience</h5>
      <small>3+ Years of Working</small>
    </article>
    <article className='about__card'>
    <BiUser className='about__icon'/>
      <h5>Clients</h5>
      <small>200+ worldwide</small>
    </article>
    <article className='about__card'>
    <HiOutlineFolderOpen className='about__icon'/>
      <h5>Projects</h5>
      <small>80+ completed</small>
    </article>
  </div>
  <p>I'm a Designer with knowledge in areas such as FrontEnd, UXUI and Unreal Engine. I have a good eye and knowledge to be able to perform to the best of my abilities</p>
  <a href="#contact" className='btn btn-primary'>Lets Talk</a>
</div>
      </div>
     </section>
      )
    }
    
    export default About