import React from 'react'
import Nav from "../Header/Nav";

function Footer() {
  return (
    <div>
      <div className='nav-logo'>
        <img />
      </div>
      <div className='nav-links'>
      <h3>Doormate Navigation</h3>
        <Nav />
      </div>
      <div className='nav-contact'>
        <h3>Contact</h3>
        <p>Address: </p>
        <p>Phone number: </p>
        <p>Email: </p>
      </div>
      <div>
        <h3>Social Media Links</h3>
        <p>Facebook:</p>
        <p>Instagram:</p>
        <p>Tweteer:</p>
      </div>
    </div>
  )
}

export default Footer