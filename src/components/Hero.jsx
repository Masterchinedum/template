import React from 'react';
import gallery from "./images/Group 77.png";

const Hero = () => {
  return (
    <div>
        <div className="hero">
            <div className="hero-text">
            <h1>Online Experiences</h1>
            <p>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
            <button className="btn">Explore Airbnb Plus</button>
            </div>
            <div className="hero-image">
            <img src={gallery} alt="airbnb-gallery" />
            </div>
        </div>
    </div>
  )
}

export default Hero