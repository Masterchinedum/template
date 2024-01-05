import React from 'react';
import './Cardx.css';
import starimg from './images/Star 1.png';

const CardX = (props) => {
    const {
      img, 
      title, 
      star, 
      voteNumber, 
      location, 
      cost, 
      openspots,
    } = props;
  let badgetest
  if (openspots === 0) {
    badgetest = "SOLD OUT"
  } else if (location === "Online") {
    badgetest = "ONLINE"
  }
  console.log(props)
    return (
    <div className='cardconatiner'>
        {badgetest && <div className='cardx-badge'> {badgetest}</div>}
        <img src= {img} alt="project profile "  className = "cardx-image" />
        <div className='card--satus'>
            <img src={starimg} alt='star-icon' />
            <span>{star}</span>
            <span className='gray'>
              ({voteNumber}) <svg xmlns="http://www.w3.org/2000/svg" width="2" height="2" viewBox="0 0 2 2" fill="none">
              <circle cx="1" cy="1" r="1" fill="#918E9B"/>
              </svg> 
            </span>
            <span>{location}</span>
        </div>
        <p> {title} </p>
        <p> 
          <span className='bold'>From ${cost}</span> /person
        </p>
    </div>
  );
}

export default CardX