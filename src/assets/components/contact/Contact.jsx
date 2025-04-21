import React, { useEffect, useRef } from 'react';
import './contact.css';
import { MdEmail, MdLocationOn } from 'react-icons/md';
import { FiPhone } from 'react-icons/fi';
import { motion, useAnimation, useInView } from 'framer-motion';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, threshold: 0.2 });

  const controlsTitle = useAnimation();
  const controlsCards = useAnimation();

  useEffect(() => {
    if (isInView) {
      controlsTitle.start({ opacity: 1, y: 0 });
      controlsCards.start((i) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, delay: i * 0.2 },
      }));
    } else {
      controlsTitle.start({ opacity: 0, y: 30 });
      controlsCards.start({ opacity: 0, y: 40 });
    }
  }, [isInView, controlsTitle, controlsCards]);

  const contactItems = [
    {
      icon: <MdEmail className="contact-icon" />,
      title: "Email",
      text: "eze.prats13@gmail.com",
    },
    {
      icon: <FiPhone className="contact-icon" />,
      title: "Teléfono",
      text: "+54 115 720 7088",
    },
    {
      icon: <MdLocationOn className="contact-icon" />,
      title: "Ubicación",
      text: "Buenos Aires, Argentina",
    },
  ];

  return (
    <section className="contact-title" id="contact" ref={ref}>
      <motion.div
        className="contact__title_container"
        initial={{ opacity: 0, y: 30 }}
        animate={controlsTitle}
      >
        <h1 className="contact__title">Contacto</h1>
        <p>
          ¿Tienes un proyecto en mente? ¡Hablemos! Estoy disponible para trabajar en nuevos proyectos y colaboraciones.
        </p>
      </motion.div>

      <div className="contact-cards">
        {contactItems.map((item, index) => (
          <motion.div
            className="contact-card"
            key={index}
            custom={index}
            initial={{ opacity: 0, y: 40 }}
            animate={controlsCards}
          >
            {item.icon}
            <div className="contact-info">
              <h4>{item.title}</h4>
              <p>{item.text}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Contact;
