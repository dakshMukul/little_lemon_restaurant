import React from 'react';
import './Card.css';
import greekSalad from "../../Assets/greek salad.jpg";
import bikeIcon from "../../Assets/motorbike.png";

function Card() {
  return (
    <div className='card' >
                <img src={greekSalad}/>
                <div className='card-title'>
                    <h3>Greek Salad</h3>
                    <span>$12.99</span>
                </div>
                <div className='card-discription'>
                    <p>The famous greek salad of crispy lettus, peppers, olives and our Chicago style feta chees, garnished with crunchy garlic and rosemary croutons.</p>
                </div>
                <div className='card-cta'>
                    <h3>Order a delivery</h3>
                    <img src={bikeIcon}/>
                </div>
            </div>
  )
}

export default Card