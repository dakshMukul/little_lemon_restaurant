import React from 'react'
import Logo from "../Assets/Logo.svg";
import Nav from "./Nav";



function Header() {
  return (
    <div>
      <img src={Logo}/>
      <Nav/>
    </div>
  )
}

export default Header