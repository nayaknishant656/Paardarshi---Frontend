import React from 'react';
import "./header.css"

import logo from "./niti-logo-website.jpg"
import {Link} from "react-router-dom"

// Header component
const Header = () => {
  return (

    <>
    <header>
      <div className='right-parent'><h2>पारदर्शी</h2><p>सत्य ही विश्वास है</p></div>
      
      <div className='left-parent'>
        <nav>
        <ul>
        <Link to="/jamin" >Ration Card Apply</Link><br></br>
          <li><Link to="/" >Home</Link></li>
          <li><a href="#">About</a></li>
          <a href="whatsapp://send?text=https://fron-pardar.vercel.app/" data-action="share/whatsapp/share">Share via Whatsapp</a>
        </ul>
      </nav></div>
    </header>
   
    </>
    
  );
}

export default Header;