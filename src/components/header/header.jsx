import React from 'react';
import "./header.css"
import logo from "./niti-logo-website.jpg"
// Header component
const Header = () => {
  return (
    <header>
      <div className='right-parent'><h2>Pardharshni</h2></div>
      <div className='left-parent'>
        <nav>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav></div>
    </header>
  );
}

export default Header;