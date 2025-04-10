import React from 'react'
import './Hero.css';
import Restaurantfood from '../../../Assets/restauranfood.jpg';
import CTA from '../../Buttons/CTA';

function Hero() {

  const ctaMsg = "Reserve a Table";


  return (
    <section className='hero-section'>
        <div className='hero-content '>
            <div className='hero-text'>
                <h1>Little Lemon</h1>
                <h2>New Delhi</h2>
                <p>We are a family-owned Mediterranean restaurant focused on traditional recipes served with a modern twist.</p>
                <CTA ctaMsg={ctaMsg} />
            </div>
            <div className='hero-image'>
                <img src={Restaurantfood} />
            </div>
        </div>
    </section>
  )
}

export default Hero