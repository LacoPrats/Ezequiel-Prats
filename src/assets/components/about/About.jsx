import React from 'react';
import './about.css';
import { motion } from 'framer-motion';
import { HiOutlineAcademicCap } from "react-icons/hi2";
import CTA from '../header/CTA';
import ME from '../../assets/imag/perfil.jpg';

const About = () => {
  return (
    <section id="about">
      <motion.div
        className="about-main"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: false, amount: 0.6 }} // 👈 reiniciar animación cada vez que entra en vista
      >
        <motion.div
          className="about-left"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.6 }}
        >
          <div className="about-title-container">
            <h1>More About Ezequiel</h1>
          </div>

          <motion.p
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { delay: 0.3, duration: 0.6 } },
            }}
          >
            I'm a designer with a strong passion for UX/UI. I enjoy crafting intuitive digital experiences that emphasize both function and form. My approach blends aesthetic sensibility with a deep understanding of user needs, striving to create products that feel effortless to use.
          </motion.p>

          <motion.p
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { delay: 0.5, duration: 0.6 } },
            }}
          >
            Guided by the principles of Gestalt design, I focus on clarity, alignment, and hierarchy to enhance user flow and comprehension. I believe minimalism and simplicity are essential—not just stylistically, but as tools to reduce friction and increase usability.
          </motion.p>

          <motion.p
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { delay: 0.7, duration: 0.6 } },
            }}
          >
            My academic and professional background allows me to merge the artistic with the practical, approaching each project from a user-centered perspective that respects both emotional design and interface logic.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.6 }}
            viewport={{ once: false, amount: 0.6 }}
          >
            <CTA />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
