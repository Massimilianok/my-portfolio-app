import React, { useEffect, useState } from 'react';
import storageRef from '../../firebase';
import './Logo.css';

const Logo = () => {
  const [logo, setLogo] = useState();

  useEffect(() => {
    storageRef
      .child('profile-photo.jpg')
      .getDownloadURL()
      .then((url) => setLogo(url));
  }, []);

  return (
    <div className="logo-box shadow">
      <img src={logo} alt="Logo" className="logo" />
      <div className="logo-greetings d-flex justify-content-center align-items-center">
        <span>Hi!</span>
      </div>
    </div>
  );
};

export default Logo;
