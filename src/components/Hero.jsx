import React from 'react';
import gallery from "./images/Group 77.png";

const Hero = () => {
  return (
    <div>
        <div className="hero">
            <div className="hero-text">
            <h1>Introducing Airbnb Plus</h1>
            <p>A new selection of homes verified for quality & comfort</p>
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