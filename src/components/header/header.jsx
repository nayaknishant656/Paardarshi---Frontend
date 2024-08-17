import React from 'react';
import "./header.css"
import logo from "./niti-logo-website.jpg"

// Header component
const Header = () => {
  return (

    <>
    <header>
      <div className='right-parent'><h2>पारदर्शी</h2><p>सत्य ही विश्वास है</p></div>
      
      <div className='left-parent'>
        <nav>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <a href="whatsapp://send?text=https://fron-pardar.vercel.app/" data-action="share/whatsapp/share">Share via Whatsapp</a>
        </ul>
      </nav></div>
    </header>
   
    </>
    
  );
}

export default Header;