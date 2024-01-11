/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react'
import {AiOutlineHome , AiOutlineUser , AiFillMessage} from "react-icons/ai"
import {MdWork} from "react-icons/md"

import {FaFileCode} from "react-icons/fa"



import "./Nav.css"
const Nav = () => {

  const [activeNav , setActiveNav] = useState("#")

 

  return (
   <nav>
    <a href="#" onClick={()=> setActiveNav("#")}className={activeNav === "#" ? "active": ""} ><AiOutlineHome/></a>
    <a href="#about" onClick={()=> setActiveNav("#about")}className={activeNav === "#about" ? "active": ""} ><AiOutlineUser/></a>
    <a href="#experience" onClick={()=> setActiveNav("#experience")}className={activeNav === "#experience" ? "active": ""} ><MdWork/></a>
    <a href="#portfolio" onClick={()=> setActiveNav("#portfolio")}className={activeNav === "#portfolio" ? "active": ""} ><FaFileCode/></a>
    <a href="#contact" onClick={()=> setActiveNav("#contact")}className={activeNav === "#contact" ? "active": ""} ><AiFillMessage/></a>

   </nav>
  )
}

export default Nav