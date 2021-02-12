import React from 'react';
import './Header.css';

const Header = ({ children }) => {
  return (
    <header className="header shadow">
      <div className="h-100 d-flex justify-content-around align-items-center flex-lg-column">
        {children}
      </div>
    </header>
  );
};

export default Header;
