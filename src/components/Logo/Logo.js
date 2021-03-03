import React from 'react';
import './Logo.css';
import logo from '../../logo.jpg';

const Logo = () => {
  return (
    <div
      className="logo-box shadow"
      style={{ backgroundImage: `url(${logo})` }}
    >
      <div className="logo-greetings d-flex justify-content-center align-items-center">
        <span>Hi!</span>
      </div>
    </div>
  );
};

export default Logo;
