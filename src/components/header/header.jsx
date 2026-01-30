import React from 'react';
import "./header.css"

import logo from "./niti-logo-website.jpg"
import {Link} from "react-router-dom"

// Header component
const Header = () => {
  return (

    <>
    <header>
      <div className='right-parent'>
        <h1>Donors List</h1>
        <p>Welcome — browse donors, view details, and contribute to support causes.</p>
      </div>
      
      <div className='left-parent'>
        <nav>
        <ul>
        {/* <Link to="/jamin" >Certificate Generation</Link><br></br> */}
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