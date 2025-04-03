import React, { useState, useEffect } from "react";
import axios from "axios";
import "../App.css";

export default function AdminHome() {
  const [submissions, setSubmissions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  // Logout function
  const logOut = () => {
    localStorage.removeItem("loggedIn");
    window.location.href = "/";
  };

  // Fetch submissions
  useEffect(() => {
    const fetchSubmissions = async () => {
      try {
        const response = await axios.get('/api/submissions');
        setSubmissions(response.data);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch submissions');
        setLoading(false);
        console.error(err);
      }
    };

    fetchSubmissions();
  }, []);

  return (
    <div className="auth-wrapper" style={{ height: "auto", marginTop: 50 }}>
      <div className="auth-inner" style={{ width: "80%", maxWidth: "1200px" }}>
        <h3>Welcome Admin</h3>
        
        {loading ? (
          <p>Loading submissions...</p>
        ) : error ? (
          <p className="text-danger">{error}</p>
        ) : (
          <div>
            <h4>Form Submissions</h4>
            <div className="table-responsive">
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th>Date</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Message</th>
                  </tr>
                </thead>
                <tbody>
                  {submissions.map((submission) => (
                    <tr key={submission._id}>
                      <td>{new Date(submission.createdAt).toLocaleString()}</td>
                      <td>{submission.name}</td>
                      <td>{submission.email}</td>
                      <td>{submission.phone || '-'}</td>
                      <td>{submission.message}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
        
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