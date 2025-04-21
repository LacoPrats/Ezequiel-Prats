import React, { useRef, useEffect } from 'react';
import './header.css';
import ME from '../../assets/imag/perfil.jpg';
import { motion, useInView, useAnimation } from 'framer-motion';
import Headersocials from './Headersocials';
import ParticlesBackground from '../Particles/ParticlesBackground';

const Header = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: false, margin: "-50% 0px -50% 0px" });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [inView, controls]);

  const fadeLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 }
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <header id="header" ref={ref}>
      <ParticlesBackground />

      <div className="container header__container">
        <motion.div
          className="header__text"
          variants={fadeLeft}
          initial="hidden"
          animate={controls}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          <motion.h5 variants={fadeLeft} transition={{ delay: 0.1 }}>
            Hello, I am
          </motion.h5>

          <motion.h1
            className="header__title"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Ezequiel Prats
          </motion.h1>

          <motion.div
            className='header__titles'
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ delay: 0.4 }}
          >
            <h5>Front End Developer & UX UI Designer</h5>
          </motion.div>

          <motion.p
            className="header__description"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
           I'm a designer with a strong passion for UX/UI. I enjoy crafting intuitive digital experiences that seamlessly combine aesthetics, usability, and thoughtful interaction design to enhance user engagement.
          </motion.p>

          <motion.div className='header-contact-container' variants={fadeUp} transition={{ delay: 0.8 }}>
            <a href="#contact" className='btn btn-primary'>Contact</a>
            <div><Headersocials /></div>
          </motion.div>
        </motion.div>

        <motion.div
          className="header__image"
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0, x: 50 },
            visible: { opacity: 1, x: 0 }
          }}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.6 }}
        >
          <img src={ME} alt="Ezequiel Prats" className="header__img" />
        </motion.div>
      </div>
    </header>
  );
};

export default Header;
