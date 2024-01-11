import React from 'react'
import "./Header.css"
import CTA from './CTA'
import profileImg from "../../assets/profile-img.png"
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header-container">
        <h5>Hello I'm</h5>
        <h1>Abhishek Pethe</h1>
        <h5 className="text-light">React Developer</h5>
        <CTA />
        <HeaderSocials />

        <div className="me">
          <img src={profileImg} alt="avatar" />
        </div>

        <a href="#contact" className='scroll-down'>Scroll Down</a>
      </div>

      
    </header>
  )
}

export default Header