import React, { useState } from "react";
import "./login.css";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  function handleCheckbox() {
    setShowPassword(!showPassword);
  }

  function handleLogin(event) {
    event.preventDefault();
    setIsSuccess(true);
  }

  return (
    <div className="login-page">
      <div className="login-page-container">
        <h1>Login</h1>
        <form onSubmit={handleLogin}>
          <div>
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              id="email"
              className="form-control"
              type="email"
              name="email"
              required
            ></input>
          </div>

          <div className="div">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <div className="password-container">
              <input
                id="password"
                className="form-control"
                type={showPassword ? "text" : "password"}
                name="password"
                required
              />
              <label htmlFor="show-checkbox" className="checkBox">
                <input
                  id="show-checkbox"
                  className="checkBox"
                  type="checkbox"
                  onClick={handleCheckbox}
                />
                Show password
              </label>
            </div>
          </div>
          <button type="submit" className="btn-submit">
            Sign in
          </button>
          {isSuccess && <div className="alert">Signed in successfully !</div>}
        </form>
      </div>
    </div>
  );
}

//
