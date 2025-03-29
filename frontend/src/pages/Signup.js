import React, { useState } from "react";
import "../App.css";

export default function SignUp() {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState("");
  const [secretKey, setSecretKey] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userType === "Admin" && secretKey !== "AdarshT") {
      setErrorMessage("Invalid Admin");
      return;
    }

    fetch("http://localhost:5000/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ fname, lname, email, password, userType }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status === "ok") {
          alert("Registration Successful");
        } else {
          setErrorMessage("Something went wrong");
        }
      })
      .catch(() => setErrorMessage("Server error. Please try again later."));
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit}>
        <h3>Register</h3>
        <div className="login-tabs">
          <label>
            <input
              type="radio"
              name="UserType"
              value="User"
              onChange={(e) => setUserType(e.target.value)}
            />
            User
          </label>
          <label>
            <input
              type="radio"
              name="UserType"
              value="Admin"
              onChange={(e) => setUserType(e.target.value)}
            />
            Admin
          </label>
        </div>
        {userType === "Admin" && (
          <div className="form-group">
            <label>Secret Key</label>
            <input
              type="text"
              placeholder="Secret Key"
              onChange={(e) => setSecretKey(e.target.value)}
            />
          </div>
        )}
        <div className="form-group">
          <label>First Name</label>
          <input
            type="text"
            placeholder="First Name"
            onChange={(e) => setFname(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Last Name</label>
          <input
            type="text"
            placeholder="Last Name"
            onChange={(e) => setLname(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Email Address</label>
          <input
            type="email"
            placeholder="Enter email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            placeholder="Enter password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        <button type="submit" className="login-btn">Register</button>
        <p className="forgot-password text-right">
          Already registered? <a href="/login">Login</a>
        </p>
      </form>
    </div>
  );
}
