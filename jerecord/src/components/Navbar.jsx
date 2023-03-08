import React from "react";

const Navbar = () => {
  return (
    <div className="navbar">
      <span className="logo">jerecord</span>
      <div className="user">
        {/* get user pfp from register */}
        <img src="https://i.pinimg.com/736x/fc/46/81/fc4681b4a454a312f9b98a2d66bd5582.jpg" alt="" />
        <span>John</span>
        <button>logout</button>
      </div>
    </div>
  );
};

export default Navbar;
