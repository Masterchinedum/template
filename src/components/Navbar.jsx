import React from 'react';
import logo from './images/airbnb 1.png';

const Navbar = () => {
  return (
    <nav className ="navbar">
        <img src={logo} alt='airbnb logo image' className='logo' />
    </nav>
  )
}

export default Navbar