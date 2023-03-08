import React from "react";
import { SocialIcon } from 'react-social-icons';

const Users = () => {
  return (
    <div className="info">
      <div className="socials-container">
        {/* incorporate icons later on */}
        <SocialIcon url="https://github.com/cytoplasma" fgColor="white" bgColor="#7289da"/>
        <SocialIcon url="https://linkedin.com" fgColor="white" bgColor="#7289da"/>
      </div>
      <img
        src="https://i.pinimg.com/564x/fc/46/81/fc4681b4a454a312f9b98a2d66bd5582.jpg"
        alt="PLACEHOLDER"
      />
      <h4>welcome to jerecord!</h4>
    </div>
  );
};

export default Users;
