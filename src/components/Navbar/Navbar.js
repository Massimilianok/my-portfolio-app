import React from 'react';
import './Navbar.css';

const Navbar = ({ children }) => {
  window.onscroll = () => {
    const navMobile = document.getElementById('navbarMobile');
    window.scrollY !== 0
      ? navMobile.classList.add('navbar-portfolio-scroll')
      : navMobile.classList.remove('navbar-portfolio-scroll');
  };

  return (
    <div
      className="navbar-portfolio d-flex justify-content-center align-items-center d-lg-none d-block"
      id="navbarMobile"
    >
      {children}
    </div>
  );
}

export default Navbar;
