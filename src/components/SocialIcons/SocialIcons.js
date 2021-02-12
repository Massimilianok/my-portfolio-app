import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLinkedin,
  faGithub,
  faHackerrank,
} from '@fortawesome/free-brands-svg-icons';
import './SocialIcons.css';

const SocialIcons = () => {
  return (
    <div className="social-buttons d-flex justify-content-center">
      <a
        href="https://www.linkedin.com/in/massimiliano-rizzuto"
        rel="noreferrer"
        target="_blank"
        className="social-button shadow d-flex align-items-center justify-content-center"
      >
        <FontAwesomeIcon icon={faLinkedin} />
      </a>
      <a
        href="https://github.com/Massimilianok"
        rel="noreferrer"
        target="_blank"
        className="social-button shadow d-flex align-items-center justify-content-center"
      >
        <FontAwesomeIcon icon={faGithub} />
      </a>
      <a
        href="https://www.hackerrank.com/massimilianok"
        rel="noreferrer"
        target="_blank" className="social-button shadow d-flex align-items-center justify-content-center">
        <FontAwesomeIcon icon={faHackerrank} />
      </a>
    </div>
  );
};

export default SocialIcons;
