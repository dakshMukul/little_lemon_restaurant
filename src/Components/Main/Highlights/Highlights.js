import React from 'react';
import "./Highlights.css";
import Card from '../../Cards/Card';
import CTA from "../../Buttons/CTA";

function Highlights() {

    const ctaMsg = "Onlline Menu";
  return (
    <section className='highlighs section'>
        <div className='highlights-content'>
        <div className='head'>
            <h1>This Week's Specials!</h1>
            <CTA ctaMsg={ctaMsg}/>
        </div>
        <div className='highlights-cards'>
            <Card />
            <Card />
            <Card />
            <Card />
        </div>
        </div>
    </section>
  )
}

export default Highlights