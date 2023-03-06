import React from "react";

const Navbar = () => {
  return (
    <div className="navbar">
      <span className="logo">jerecord</span>
      <div className="user">
        {/* get user pfp from register */}
        <img src="https://i.pinimg.com/564x/e6/c7/75/e6c775335c3b21f4d1a9b63ece45dd97.jpg" alt="" />
        <span>John</span>
        <button>logout</button>
      </div>
    </div>
  );
};

export default Navbar;
