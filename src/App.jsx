import React from 'react'
import Footer from './assets/components/footer/Footer'
import Header from './assets/components/header/Header'
import Navbar from './assets/components/nav/Navbar'
import Services from './assets/components/services/Services'
import About from './assets/components/about/About'
import Contact from './assets/components/contact/Contact'
import Testimonial from './assets/components/testimonial/Testimonial'
import Experience from './assets/components/experience/Experience'
import Portfolio from './assets/components/portfolio/Portfolio'

const App = () => {
  return (
  <>
  <Header />
  <Navbar />
  <About />
  <Experience />

  <Portfolio />
  <Contact />
    <Footer/>
  </>
  )
}

export default App
