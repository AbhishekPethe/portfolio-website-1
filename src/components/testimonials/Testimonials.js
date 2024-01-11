import React from 'react'
import "./Testimonials.css"
import img from "../../assets/client-avatar.jpg"

import {Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/pagination';



const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Reviews from clients</h5>
      <h2>Testimonials</h2>

      <Swiper pagination={true} modules={[Pagination]} className="container testimonial-container">

        <SwiperSlide className="testimonial">
          <div className="client-avatar">
            <img src={img} style={{
              height : "60px",
              width : "60px",
              borderRadius : "50%"
            }}alt="" />
          </div>
          <h5 className="client-name">
            Mohit
          </h5>
          <small className="client-review">
            I was a bit hesitant to give Abhishek my portfolio website work, but after talking to him and listening to his ideas and seeing his work, I have no regrets giving this opportunity to him...
            The end result was exactly what I was looking for. I'll be giving few more projects to him soon...
          </small>
        </SwiperSlide>


        <SwiperSlide className="testimonial">
          <div className="client-avatar">
            <img src={img} style={{
              height : "60px",
              width : "60px",
              borderRadius : "50%"
            }}alt="" />
          </div>
          <h2 className="client-name" style={{margin : "4rem 0"}}>
            More reviews coming soon :)
          </h2>
          
        </SwiperSlide>

      </Swiper>

    </section>
  )
}

export default Testimonials