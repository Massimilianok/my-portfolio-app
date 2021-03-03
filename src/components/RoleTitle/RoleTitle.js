import React from 'react';
import './RoleTitle.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTerminal } from '@fortawesome/free-solid-svg-icons';

const RoleTitle = ({ view }) => {
  return (
    <div className={'roletitle shadow ' + view}>
      <div className=" d-flex justify-content-center align-items-center">
        <FontAwesomeIcon icon={faTerminal} className="roletitle-icon" />
        <h1 className="mb-0 roletitle-title">Junior Frontend Developer</h1>
      </div>
    </div>
  );
};

export default RoleTitle;
