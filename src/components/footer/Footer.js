/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import "./Footer.css"
import {FaFacebookF} from "react-icons/fa";
import {FiInstagram} from "react-icons/fi"
import {BsLinkedin} from "react-icons/bs"
const Footer = () => {
  return (
    <footer id="footer">
      <a href="#" className='footer-logo'>AB.dev</a>
      
      <ul className="paramlinks">
        <li><a href="#">Home</a>
        </li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer-socials">
        <a href="https://www.facebook.com"><FaFacebookF/></a>
        <a href="https://www.instagram.com"><FiInstagram/></a>
        <a href="https://linkedin.com"><BsLinkedin/></a>
      </div>

      <div className='footer-copyright'>
        <small>&copy; AB.dev. All rights reserved.</small>
      </div>

    </footer>
  )
}

export default Footer