/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react'
import "./contact.css"
import {MdOutlineEmail} from "react-icons/md"
import {RiMessengerLine} from "react-icons/ri"
import {BsWhatsapp} from "react-icons/bs"
import {IoIosCheckmarkCircle} from "react-icons/io"
import { useRef } from 'react'
import emailjs from "emailjs-com"


const Contact = () => {

  const form  = useRef();

  const [done , setDone] = useState(false)
 

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_7shkuwq', 'template_1ek4ysk', form.current, 'K97Cd9Y4UQyqn3mZX')
      .then((result) => {
          // console.log(result.text);
          setDone(true)
      }, (error) => {
          // console.log(error.text);
      });

      
      
      setTimeout(()=>{
        setDone(false)
      } , 5000)

      e.target.reset();

};


  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact-container">
        <div className="contact-options">
          <article className="contact-option">
            <MdOutlineEmail className='contact-option-icon' />
            <h4>Email</h4>
            
            <a onClick={()=>{
              window.open("mailto:abhishekpethe433@gmail.com")
            }}>Send an Email</a>
          </article>
          <article className="contact-option">
            <RiMessengerLine className='contact-option-icon' />
            <h4>Messenger</h4>
            
            <a onClick={()=>{
              window.open("https://m.me/abhishekpethe433")
            }}>Send a Message</a>
          </article>
          <article className="contact-option">
            <BsWhatsapp className='contact-option-icon' />
            <h4>Whatsapp</h4>
            
        
            {/* <a href="https://wa.me/919834050312" target="_blank">Send a Whatsapp Message</a> */}

            <a onClick={()=>{
              window.open("https://wa.me/919834050312")
            }}>Send a Whatsapp Message</a>
            
          </article>
        </div>

          <form ref={form} onSubmit={sendEmail}>
            <input type="text" name="name" placeholder='Your Full Name' required />
            <input type="email" name="email" placeholder='Your Email Address' required />
            <textarea name="message" id="" cols="30" rows="7" placeholder='Your Message' required></textarea>
            <button type="submit" className='btn btn-primary'>Send Message</button>
            {done && <h2 className='sent'>Email Sent <IoIosCheckmarkCircle /></h2> }
          </form>

      </div>
    </section>
  )
}

export default Contact