import React, { useState } from "react";
import "../App.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    setErrorMessage(""); // Clear previous error

    fetch("http://localhost:5000/login-user", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({ email, password }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status === "ok") {
          alert("Login successful!");
          localStorage.setItem("token", data.data);
          localStorage.setItem("userType", data.userType);
          localStorage.setItem("loggedIn", "true");

          window.location.href =
            data.userType === "Admin" ? "./admin-dashboard" : "./userDetails";
        } else {
          setErrorMessage("Invalid email or password. Please try again.");
        }
      })
      .catch(() => setErrorMessage("Something went wrong. Please try again."));
  }

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit}>
        <h3>Login</h3>

        <div className="form-group">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        {errorMessage && <p className="error-message">{errorMessage}</p>}

        <button type="submit" className="login-btn">
          Submit
        </button>

        <p className="forgot-password">
          Don't have an account? <a href="/signup">Register</a>
        </p>
      </form>
    </div>
  );
}
