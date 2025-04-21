import React from 'react';
import './experience.css';
import { motion } from 'framer-motion';
import { FaCode } from "react-icons/fa";
import { FaFigma } from "react-icons/fa";
import { IoLayersOutline } from "react-icons/io5";
import { IoMdColorPalette } from "react-icons/io";

const categories = [
  {
    title: "Frontend Development",
    iconTitle: FaCode,
    info: "HTML, CSS, JavaScript, React,Git",
  },
  {
    title: "UX/UI Design",
    iconTitle: FaFigma,
    info: "Figma, Wireframing, Prototyping",
  },
  {
    title: "CSS Frameworks",
    iconTitle: IoLayersOutline,
    info: "Bootstrap, Material UI, Styled Components, Responsive Design",
  },
  {
    title: "Visual Design",
    iconTitle: IoMdColorPalette,
    info: "Color Theory, Typography",
  },
];

const Experience = () => {
  return (
    <section className="experience">
   <motion.div
  className="experience__title_container"
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: false, amount: 0.5 }}
>
  <h1>Skills</h1>
  <motion.p
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 0.6, delay: 0.2 }}
    viewport={{ once: false, amount: 0.5 }}
  >
    A set of technical and creative skills that allow me to design and develop exceptional digital experiences.
  </motion.p>
</motion.div>
      <div className="experience-categories">
        {categories.map((category, index) => {
          const Icon = category.iconTitle;

          return (
            <motion.div
              className="experience-category"
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: false, amount: 0.5 }}
            >
              <div className="category-header">
                {Icon && <Icon className="category-icon" />}
                <h3>{category.title}</h3>
              </div>

              <p className="experience-info">{category.info}</p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Experience;
