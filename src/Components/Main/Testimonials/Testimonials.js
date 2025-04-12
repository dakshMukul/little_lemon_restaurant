import React, { useState } from 'react'
import "./Testimonials.css"
import testimonials from "../../../Data/testimonials.json";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



function Testimonials() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        },
    ]
  };

  return (
    <section className='testimonials-section'>
      <h1 className='section-title'>Testimonials</h1>
      <Slider {...settings} className='slider'>
      {testimonials.map(t => (
        <div key={t.id} className='testimonial-card'>
          <div className='card-content'>
          <img src={t.image} className='avatar'/>
          <h3>{t.name}</h3>
          <p className='rating'>{"⭐".repeat(t.rating)}</p>
          <div className='review-text-wrapper'>
          <p className='review-text'>{t.review}</p>
          </div>
          </div>
        </div>
      ))}
      </Slider>
    </section>
  )
}

export default Testimonials


{/*
        {testimonials.map(t => (
        <div key={t.id} className='testimonial-card'>
          <div className='profile'>
          <img src={t.image}/>
          <h3>{t.name}</h3>
          <span>{"⭐".repeat(t.rating)}</span>
          </div>
          <div className='review'>
            <p>{t.review}</p>
          </div>
        </div>
      ))}
 */}