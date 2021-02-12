import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAlignLeft,
  faFlask,
  faEnvelopeOpenText,
} from '@fortawesome/free-solid-svg-icons';
import './Nav.css';

const Nav = () => {
  return (
    <nav className="nav-portfolio d-flex justify-content-around align-items-center flex-lg-column justify-content-lg-around align-items-lg-start">
      <NavLink
        exact
        to="/"
        activeClassName="nav-button-active"
        className="nav-button"
      >
        <button className="d-flex flex-column flex-lg-row justify-content-center align-items-center">
          <div className="d-flex justify-content-center align-items-center nav-icon shadow">
            <FontAwesomeIcon icon={faAlignLeft} />
          </div>
          <span className="nav-title">Bio/Skills</span>
        </button>
      </NavLink>
      <NavLink
        to="/lab"
        activeClassName="nav-button-active"
        className="nav-button"
      >
        <button className="d-flex flex-column flex-lg-row justify-content-center align-items-center">
          <div className="d-flex justify-content-center align-items-center nav-icon shadow">
            <FontAwesomeIcon icon={faFlask} />
          </div>
          <span className="nav-title">Lab</span>
        </button>
      </NavLink>
      <NavLink
        to="/contact"
        activeClassName="nav-button-active"
        className="nav-button"
      >
        <button className="d-flex flex-column flex-lg-row justify-content-center align-items-center">
          <div className="d-flex justify-content-center align-items-center nav-icon shadow">
            <FontAwesomeIcon icon={faEnvelopeOpenText} />
          </div>
          <span className="nav-title">Contact me</span>
        </button>
      </NavLink>
    </nav>
  );
};

export default Nav;
