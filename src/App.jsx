import React from 'react'
import Footer from './assets/components/footer/Footer'
import Header from './assets/components/header/Header'
import Navbar from './assets/components/nav/Navbar'
import Contact from './assets/components/contact/Contact'
import Experience from './assets/components/experience/Experience'
import Portfolio from './assets/components/portfolio/Portfolio'
import About from './assets/components/about/About'
import Academic from './assets/components/Academic/Academic'
import HeaderContact from './assets/components/Headercontact/Headercontact'

const App = () => {
  return (
  <>
  <Header />
  <Navbar />
  <Experience />
  <About/>
  <Academic/>
  <Portfolio />
  <Contact />
    <Footer/>
  </>
  )
}

export default App
