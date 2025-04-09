import React from 'react'
import Logo from "../../Assets/Logo.svg";
import './Header.css';



function Header() {
  return (
    <div className=''>
      <div className='header container'>
      <img src={Logo}/>
      <nav>
      <ul>
          <li><a>Home</a></li>
          <li><a>About</a></li>
          <li><a>Menu</a></li>
          <li><a>Reservations</a></li>
          <li><a>Order Online</a></li>
          <li><a>Login</a></li>
        </ul>
      </nav>
      </div>
    </div>
  )
}

export default Header