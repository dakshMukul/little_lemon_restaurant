import React from 'react'
import './Hero.css';
import Restaurantfood from '../../Assets/restauranfood.jpg';

function Hero() {
  return (
    <section className='hero-section'>
        <div className='hero-content '>
            <div className='hero-text'>
                <h1>Little Lemon</h1>
                <h2>New Delhi</h2>
                <p>We are a family-owned Mediterranean restaurant focused on traditional recipes served with a modern twist.</p>
                <button>Reserve a Table</button>
            </div>
            <div className='hero-image'>
                <img src={Restaurantfood} />
            </div>
        </div>
    </section>
  )
}

export default Hero