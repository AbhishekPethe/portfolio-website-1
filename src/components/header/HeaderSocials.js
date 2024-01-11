import React from 'react'
import {BsLinkedin , BsTwitter , BsInstagram , BsGithub} from "react-icons/bs"

const HeaderSocials = () => {
  return (
    <div className='header-socials'>
        <a href="https://linkdin.com" target="_blank" rel="noreferrer"><BsLinkedin /></a>
        <a href="https://twitter.com" target="_blank" rel="noreferrer" ><BsTwitter/></a>
        <a href="https://instagram.com" target="_blank" rel="noreferrer"><BsInstagram/></a>
        <a href="https://github.com" target="_blank" rel='noreferrer'><BsGithub />
        </a>
    </div>
  )
}

export default HeaderSocials