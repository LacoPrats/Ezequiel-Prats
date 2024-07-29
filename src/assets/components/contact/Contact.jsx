import React from 'react';
import './contact.css';
import { AiOutlineMail } from 'react-icons/ai';
import { BsMessenger } from 'react-icons/bs';
import { BsWhatsapp } from 'react-icons/bs';

const Contact = () => {
  return (
    <section id='contact'>
      <h5>Get in touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <AiOutlineMail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>eze.prats13@gmail.com</h5>
          </article>
          <article className="contact__option">
            <BsMessenger className="contact__option-icon" />
            <h4>Whatsapp</h4>
            <h5>+5491157207088</h5>
          </article>
        </div>
      </div>
    </section>
  );
}

export default Contact;
