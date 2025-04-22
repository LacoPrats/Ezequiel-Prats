import React, { useRef } from 'react';
import './academic.css';
import { motion, useInView } from 'framer-motion';

const programs = [
  {
    title: "Bachelor Degree in Design",
    place: "Torcuato Di Tella University",
    years: "2019 - 2024",
    description: "A multidisciplinary program combining visual communication, interaction design, and creativity to develop strategic, user-centered solutions.",
  },
  {
    title: "Frontend Development",
    place: "CoderHouse",
    years: "2020 - 2021",
    description: "Practical training in HTML, CSS, JavaScript, and React, with focus on responsive design and building dynamic interfaces.",
  },
  {
    title: "App Development",
    place: "Coderhouse",
    years: "2023",
    description: "Intro to mobile development using React Native, teaching how to design and build cross-platform apps with strong UX foundations.",
  },
];

const Academic = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  return (
    <section id="academic" ref={ref}>
      <motion.div
        className="academic-title-container"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6 }}
      >
        <h1>Education</h1>
        <p className="academic-subtitle">
          Mi formación académica y cursos especializados que han fortalecido mis habilidades técnicas y creativas.
        </p>
      </motion.div>

      <div className="academic-background-content">
        {programs.map((item, index) => (
          <motion.div
            className="academic-content-block"
            key={index}
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.6, delay: index * 0.3 }}
          >
            <h2>{item.title}</h2>
            <div className="academic-meta">
              <h4>{item.place}</h4>
              <span className="academic-years">{item.years}</span>
            </div>
            <p>{item.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Academic;
