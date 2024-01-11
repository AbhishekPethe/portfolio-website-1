import React from 'react'
import "./about.css"
import Img from "../../assets/2nd.png"
import {BsPersonWorkspace} from "react-icons/bs"
import {IoMdSchool} from "react-icons/io"
import {AiFillGithub} from "react-icons/ai"
const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about-container">
        <div className="about-me">
          <div className="about-me-image">
            <img src={Img} alt="" />
          </div>
        </div>
        <div className="about-content">
          <div className="about-cards">
          <article className="about-card"> 
            <BsPersonWorkspace className='about-icon' />
            <h5>Experience</h5>
            <small>&lt; 1 year working experience</small>
          
          </article>
          <article className="about-card"> 
            <IoMdSchool className='about-icon' />
            <h5>Education</h5>
            <small>Computer Science</small>
          
          </article>
          <article className="about-card"> 
          
            <AiFillGithub className='about-icon' />
            <h5>Projects</h5>
            <small>10+ counting...</small>
          
          </article>
          </div>

          <p>Hello I'm Abhishek. I'm a front-end developer located in Maharashtra , India. I love to create simple yet beautiful websites with great user experience.

          I'm interested in the whole frontend stack especially in React. Currently trying new things and building great projects.

          My inbox is always open. Feel free to drop a message. Can't wait to collaborate and work with you !</p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
          
        </div>
      </div>
    </section>
  )
}

export default About