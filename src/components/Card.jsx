import React from 'react';
import './Card.css';
import emailIcon from './images/email-icon.jpeg';
import phoneIcon from './images/phone-icon.png' ;

const Card = (props) => {
    const {img, name, phone, email } = props;
  return (
    <div className='cardconatiner'>
        <img src= {img} alt="profile photo"  className = "card-image" />
        <h3>{name}</h3>
        <div className='info-group'>
            <img src={phoneIcon} alt='phone-icon' />
            <p className='phonenumber'> {phone} </p>
            
            <img src={emailIcon} alt='email-icon' />
            <p className='emailaddress'> {email} </p>

        </div>
    </div>
  );
}

export default Card