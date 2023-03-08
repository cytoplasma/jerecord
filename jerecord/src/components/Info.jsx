import React from "react";
import { SocialIcon } from 'react-social-icons';

const Users = () => {
  return (
    <div className="info">
      <img
        src="https://i.pinimg.com/564x/fc/46/81/fc4681b4a454a312f9b98a2d66bd5582.jpg"
        alt="PLACEHOLDER"
      />
      <div className="socials-container">
        {/* incorporate icons later on */}
        <SocialIcon url="https://github.com/cytoplasma" />
        <SocialIcon url="https://linkedin.com"/>
        <a href="#">Github</a>
        <a href="#">Twitter</a>
        <a href="#">Discord</a>
      </div>
    </div>
  );
};

export default Users;
