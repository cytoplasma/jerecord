import React from "react";

const Register = () => {
  return (
    <div className="container-form">
      <div className="wrapper-form">
        <span className="logo">jerecord</span>
        <span className="title">Register</span>
        <form>
          <input type="text" placeholder="display name"></input>
          <input type="email" placeholder="email"></input>
          <input type="password" placeholder="password"></input>
          <input style={{display: "none"}}type="file" id="file"></input>
          <label htmlFor="file">
            add a profile picture
          </label>
          <button className="signup-button">Sign Up</button>
        </form>
        <p>Do you have an account? Log in.</p>
      </div>
    </div>
  );
};

export default Register;
