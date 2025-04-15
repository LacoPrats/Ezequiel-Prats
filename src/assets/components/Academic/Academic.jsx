import React from 'react';
import './academic.css';
import { HiOutlineAcademicCap } from "react-icons/hi2";

const Academic = () => {
  return (
    <section id='academic'>
      <div className='about-title-container'>
        <HiOutlineAcademicCap className='about-icon'/>
        <h1>Academic Background</h1>
      </div>
      <div className='about-content-container'>
        <div className='academic-background-content'>
          <div className='academic-content-item'>
            <h2>Bachelor Degree in Design</h2>
            <h4>Torcuato Di Tella University</h4>
            <p>The Design program at Di Tella combines visual creativity, critical thinking, and technological experimentation. It encourages a multidisciplinary approach where students explore product design, communication, space, and digital interfaces. With a strong emphasis on conceptual development and innovation, the program prepares designers to create meaningful and forward-thinking solutions across various industries.</p>
          </div>
          <hr />
            <div  className='academic-content-item'>
              <h2>Front End Development</h2>
              <h4>Coderhouse</h4>
              <p>This program focuses on building responsive, user-friendly websites using modern technologies like HTML, CSS, JavaScript, and React. It emphasizes hands-on learning, real-world projects, and best practices in UI implementation and code optimization, preparing students to create dynamic and interactive user experience</p>
            </div>
            <hr />
            <div  className='academic-content-item'>
              <h2>App Development</h2>
              <h4>Coderhouse</h4>
              <p>This course focuses on mobile app development using React Native, enabling cross-platform applications for iOS and Android. Students learn how to design intuitive user interfaces, structure app architecture, and connect functionalities through real-world projects. The program emphasizes both visual design and functional logic to deliver complete, user-friendly mobile solutions.

</p>
            </div>
          </div>
        </div>
    </section>
  );
}


export default Academic;
