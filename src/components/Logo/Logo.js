import React from 'react';
import logo from '../../logo.jpg';
import './Logo.css';

const Logo = () => {
  return (
    <div className="logo-box shadow">
      <img src={logo} alt="Logo" className="logo" />
      <div className="logo-greetings d-flex justify-content-center align-items-center">
        <span>Hi!</span>
      </div>
    </div>
  );
}

export default Logo;
