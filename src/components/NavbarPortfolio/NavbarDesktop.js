import React from 'react';
import './NavbarPortfolio.css';

const NavbarDesktop = ({ children }) => {
  return (
    <div className="navbar-portfolio d-flex justify-content-center align-items-center d-none d-lg-block">
      {children}
    </div>
  );
}

export default NavbarDesktop;
