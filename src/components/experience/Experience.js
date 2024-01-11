import React from 'react'
import "./Experience.css"
import img from "../../assets/wipro.png"
import {BsPatchCheckFill} from "react-icons/bs"
const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience-container">
        <div className='experience-section'>
        <h3>Experience</h3>
        <div className='experience-content'>
          <img src={img} style = {{height : "80px", width : "100px" }} alt="" />
          <h2>Wipro Limited</h2>
          <p>I've worked at Wipro Limited for 9 months. I've worked on various aspects of SAP Systems such as ABAP, S4/HANA , etc</p>
        </div>

        </div>


     
        <div className="skills-section">
          <h3>Tech Stack & Tools</h3>
          <div className='skills-content'>
            <article className='skills-details'>
              <BsPatchCheckFill  className="skills-details-icon" />
              <h4>HTML5</h4>
            </article>
            <article className='skills-details'>
              <BsPatchCheckFill  className="skills-details-icon" />
              <h4>CSS3</h4>
            </article>
            <article className='skills-details'>
              <BsPatchCheckFill  className="skills-details-icon" />
              <h4>Javascript</h4>
            </article>
            <article className='skills-details'>
              <BsPatchCheckFill className="skills-details-icon" />
              <h4>ReactJS</h4>
            </article>
            
            <article className='skills-details'>
              <BsPatchCheckFill  className="skills-details-icon"/>
              <h4>TailwindCSS</h4>
            </article>
            <article className='skills-details'>
              <BsPatchCheckFill  className="skills-details-icon"/>
              <h4>Redux TK</h4>
            </article>
            <article className='skills-details'>
              <BsPatchCheckFill  className="skills-details-icon"/>
              <h4>NEXTJS*</h4>
            </article>
            <article className='skills-details'>
              <BsPatchCheckFill  className="skills-details-icon"/>
              <h4>C++*</h4>
            </article>
            
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience