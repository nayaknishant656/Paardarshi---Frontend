import React, { Component } from 'react'
import "./footer.css";
export default class footer extends Component {
  render() {
    return (
      <main>
        <div className='parent-div'>
          <p>Beta Version 1.0 ( i know there are many bug to be fixed )</p><br></br>
          <p>Design and Builded By <a className='link' href='https://bio.link/nishantkcu'>Nishant Nayak</a></p><br></br>
          <p>i know there is no need of this product inspite i builded for my people</p><br></br>
          <p>and i also know majority will not going to use this product, i love building stuff</p>
          <p>so yeah, i dont need anything back from this and i am not here to prove something here</p>
          <p>i have been building stuff when i was 17 so this is no new to me</p>
          <p>but it was fun project :) builded in 5 days</p><br></br>
          <p>~nishant</p>
          <p className='p_style_name'>DEPLOYED TO PRODUCTION ON 20/03/2024</p>
        </div>
      </main>
    )
  }
}
