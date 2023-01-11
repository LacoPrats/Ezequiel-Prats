import React from 'react'
import './contact.css'
import{AiOutlineMail}from'react-icons/ai'
import{BsMessenger}from'react-icons/bs'
import{BsWhatsapp}from'react-icons/bs'

const Contact = () => {
  return (
  <section id='contact'>
    <h5>Get in touch</h5>
    <h2>Contact Me</h2>
    <div className="container contact__container">
      <div className="contact__options">
      <article className="contact__option">
        <AiOutlineMail className="contact__option-icon"/>
        <h4>Email</h4>
        <h5>ezequielprats74@gmail.com</h5>
        <a href="mailto:ezequielprats74@gmail.com">Send message</a>
      </article>
      <article className="contact__option">
        <BsMessenger className="contact__option-icon"/>
        <h4>messenger</h4>
        <h5>Ezequiel Prats</h5>
        <a href="mailto:ezequielprats74@gmail.com">Send message</a>
      </article>
      <article className="contact__option">
        <BsWhatsapp className="contact__option-icon"/>
        <h4>Whatsapp</h4>
        <h5>Ezequiel Prats</h5>
        <a href="https://api.whatsapp.com/send?phone+5491157207088">Send message</a>
      </article>
      </div>
      <form action="">
        <input type="text" name='name' placeholder='Your Full Name' required/>
        <input type="email" name='email'placeholder='Your Email' required />
        <textarea name="message" rows="7" placeholder='Your message' required></textarea>
        <button type='submit' className='btn btn-primary'>Send Message</button>
      </form>
    </div>
  </section>
  )
}

export default Contact