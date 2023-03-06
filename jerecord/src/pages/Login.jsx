import React from "react";

const Login = () => {
  return (
    <div className="container-form">
      <div className="wrapper-form">
        <span className="logo">jerecord</span>
        <span className="title">Login</span>
        <form>
          <input type="email" placeholder="email"></input>
          <input type="password" placeholder="password"></input>
          <button className="signup-button">Log in</button>
        </form>
        <p>Do you have an account? Register.</p>
      </div>
    </div>
  );
};

export default Login;
