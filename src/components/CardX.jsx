import React from 'react';
import './Cardx.css';
import starimg from './images/Star 1.png';

const CardX = (props) => {
    const {img, title, star, voteNumber, country, cost } = props;
  return (
    <div className='cardconatiner'>
        <img src= {img} alt="profile photo"  className = "cardx-image" />
        <div className='card--satus'>
            <img src={starimg} alt='star-icon' />
            <span>{star}</span>
            <span className='gray'>
              ({voteNumber}) <svg xmlns="http://www.w3.org/2000/svg" width="2" height="2" viewBox="0 0 2 2" fill="none">
              <circle cx="1" cy="1" r="1" fill="#918E9B"/>
              </svg> 
            </span>
            <span>{country}</span>
        </div>
        <p> {title} </p>
        <p> 
          <span className='bold'>From ${cost}</span> /person
        </p>
    </div>
  );
}

export default CardX