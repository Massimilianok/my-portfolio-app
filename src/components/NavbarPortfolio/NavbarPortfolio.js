import React, { useEffect, useRef } from 'react';
import './NavbarPortfolio.css';

const NavbarPortfolio = ({ children }) => {
  const navBarMobile = useRef();

  useEffect(() => {
    window.onscroll = () => {
      window.scrollY !== 0
        ? navBarMobile.current.classList.add('navbar-portfolio-scroll')
        : navBarMobile.current.classList.remove('navbar-portfolio-scroll');
    };
  }, []);

  return (
    <div
      className="navbar-portfolio d-flex justify-content-center align-items-center d-lg-none d-block"
      ref={navBarMobile}
    >
      {children}
    </div>
  );
};

export default NavbarPortfolio;
