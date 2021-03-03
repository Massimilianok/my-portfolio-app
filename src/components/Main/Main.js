import React from 'react';
import './Main.css';

const Main = ({ children }) => {
  return (
    <main className="main">
      <div className="d-flex justify-content-start align-items-center flex-column">
        {children}
      </div>
    </main>
  );
};

export default Main;
