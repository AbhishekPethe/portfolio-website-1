import React, { useState } from 'react'
import "./Portfolio.css";
import { data } from "./data"
import {FiChevronsRight} from "react-icons/fi"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode, Pagination } from 'swiper';


const Portfolio = () => {

  const [show , setShow] = useState(false)
  

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h5>The few mentioned projects consists of API based websites as well as Figma design's turned into landing pages</h5>

      <h2>Portfolio</h2>
      
      <div className="container portfolio-container">

        {data.map((each)=>{

          const {id , image , title , github ,demo , details} = each 

          return (

        <article className="portfolio-item" key={id} onClick={() => {
          setShow(!show)
        }} >
          <div className="portfolio-item-image">
                <img src={image} alt={title} />
                <div className="details mobile" >
                  {details.map((each) => {
                    return (
                      <span>{each}</span>
                    )
                  })}
                </div>     
          </div>
              
          <h3>{title}</h3>
          <div className="portfolio-item-cta">
            <a href={github} target="_blank"className='btn' rel="noreferrer">Github</a>
            <a href={demo}
            target="_blank" className='btn btn-primary' rel="noreferrer">Live</a>
          </div>
        </article>
          )

        })}
 
      </div>

      
      
      {/* <div className='card-container'>
        {data.map((each) => {
          return (
          <div className='card-container-item'>
              <img src={each.image} alt="" className=''/>
             
            <div className='links-tab'>
                <a href={`${each.demo}`}>Visit Site</a>
                <a href={`${each.github}`}>Github</a>
            </div>
          </div>
            )
        })}
      </div> */}

    <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        
        modules={[FreeMode, Pagination]}
        className="mySwiperr"
      >
        {
          data.map((each , i) => {
            return (
              <SwiperSlide className='swiper-slide'> 
                <img src={each.image} alt="" />
                <div className='name'>
                  <h3>{each.title}</h3>
                  <h3># {i+1}</h3>
                </div>
                <div className={`techs ${show ? "show" : ""}`}>
                  {each.details.map((each) => {
                    return (
                      <span>{each}</span>
                    )
                  })}
                </div>
                <div className='visit'>
                  <a href={`${each.demo}`} target='_blank' rel="noreferrer">Visit the site</a>
                  <a href={`${each.github}`} target='_blank' rel="noreferrer" >Github</a>
                </div>
              </SwiperSlide>
            )
          })
       }
      </Swiper> 

      <div className='swipe-right'>
        Swipe <FiChevronsRight />
      </div>
      
    </section>
  )
}

export default Portfolio