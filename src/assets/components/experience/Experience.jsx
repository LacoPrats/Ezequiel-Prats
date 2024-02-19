import React from 'react'
import './experience.css'
import {AiFillCheckCircle} from 'react-icons/ai'

const Experience = () => {
  return (
   <section id='experience'>
    <h5>What Skills I Have</h5>
    <h2>My Experience</h2>
    <div className="container experience__container">
      <div className="experience_frontend">
        <h3>Frontend Development</h3>
        <div className="experience__content">
          <article className='experience__details'>
            <AiFillCheckCircle className='experience__detail-icon'/>
          <div>
          <h4>HTML</h4>
            <small className='text-light'>Experienced</small>
          </div>
          </article>
          <article className='experience__details'>
            <AiFillCheckCircle className='experience__detail-icon'/>
          <div>
           <div>
           <h4>CSS</h4>
            <small className='text-light'>Experienced</small>
           </div>
          </div>
          </article>
          <article className='experience__details'>
            <AiFillCheckCircle className='experience__detail-icon'/>
          <div>
          <h4>Javascript</h4>
            <small className='text-light'>Experienced</small>
          </div>
          </article>
          <article className='experience__details'>
            <AiFillCheckCircle className='experience__detail-icon'/>
            <div>
            <h4>React</h4>
            <small className='text-light'>Experienced</small>
            </div>
          </article>
          <article className='experience__details'>
            <AiFillCheckCircle className='experience__detail-icon'/>
          <div>
          <h4>Bootsrap</h4>
            <small className='text-light'>Experienced</small>
          </div>
          </article>
        </div>
      </div>
      
      <div className="experience_designer">
      <h3>Designer</h3>
        <div className="experience__content">
          <article className='experience__details'>
            <AiFillCheckCircle className='experience__detail-icon'/>
            <div>
            <h4>Illustrator</h4>
            <small className='text-light'>Experienced</small>
            </div>
          </article>
          <article className='experience__details'>
            <AiFillCheckCircle className='experience__detail-icon'/>
          <div>
          <h4>Photoshop</h4>
            <small className='text-light'>Experienced</small>
          </div>
          </article>
          <article className='experience__details'>
            <AiFillCheckCircle className='experience__detail-icon'/>
            <div>
            <h4>UXUI</h4>
            <small className='text-light'>Experienced</small>
            </div>
            
          </article>
          <article className='experience__details'>
            <AiFillCheckCircle className='experience__detail-icon'/>
            <div>
            <h4>Blender</h4>
            <small className='text-light'>Experienced</small>
            </div>
            
          </article>
        </div>
      </div>
      <div className="experience_designer">
      <h3>GAME Development</h3>
        <div className="experience__content">
          <article className='experience__details'>
            <AiFillCheckCircle className='experience__detail-icon'/>
           <div>
           <h4>Unreal</h4>
            <small className='text-light'>Experienced</small>
           </div>
          </article>
        </div>
      </div>
    </div>
   </section>
  )
}

export default Experience