import React, { useState } from "react";

export default function LoginUseState() {
  const onSubmit = async e => {
    e.preventDefault();
  };

  return (
    <div className="App">
      <div className="login-container">
        <form className="form" onSubmit={onSubmit}>
          <p>Please Login!</p>
          <input type="text" placeholder="username" />
          <input
            type="password"
            placeholder="password"
            autoComplete="new-password"
          />
          <button className="submit" type="submit">
            Log In
          </button>
        </form>
      </div>
    </div>
  );
}
