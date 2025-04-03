import React from "react";
import "../App.css";

export default function AdminHome() {
  // Logout function
  const logOut = () => {
    window.localStorage.clear();
    window.location.href = "/";
  };

  return (
    <div className="auth-wrapper" style={{ height: "auto", marginTop: 50 }}>
      <div className="auth-inner" style={{ width: "fit-content" }}>
        <h3>Welcome Admin</h3>
        <button
          onClick={logOut}
          className="btn btn-primary"
          style={{ marginTop: 10 }}
        >
          Log Out
        </button>
      </div>
    </div>
  );
}