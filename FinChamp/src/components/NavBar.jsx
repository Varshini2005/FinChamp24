import React from 'react'
import'../compoStyles/NavBar.css'
import logo_light from '../assets/logo.png'

import search_icon_light from '../assets/w.png'

const NavBar = () => {
  return (
    <div className="navbar">
      <img src={logo_light} className="logo"/>
      <ul>
        <li>Home</li>
        <li>Learning</li>
        <li>Games</li>
        <li>About</li>
        <li><div className='search-box'>
        <input type="text" placeholder='search' />
        <img src={search_icon_light} alt=""/>
      </div></li>
      </ul>
      
     
    </div>
  )
}

export default NavBar
