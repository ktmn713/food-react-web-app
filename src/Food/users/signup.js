import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as client from "./client";
import "../style.css";

function Signup() {
  const [error, setError] = useState("");
  const [credentials, setCredentials] = useState({
    username: "", password: ""
  });
  const navigate = useNavigate();
  const signup = async () => {
    try {
      await client.signup(credentials);
      navigate("/Profile/Account");
    } catch (err) {
      setError(err.response.data.message);
    }
  };


  return (
    <div className="signup-grid">
      <div className="signup-one">
        <img src="https://www.themealdb.com//images//media//meals//wvpsxx1468256321.jpg" className="signup-img" />
      </div>

      <div className="signup-two">
        Create an Account

        <br />
        <br />

        <div className="signup-form-text">
          {error && <div>{error}</div>}
          Email Address
          <br />
          <input
            className="signup-form-input"
            placeholder="yourname@example.com"
            value={credentials.username}
            onChange={(e) => setCredentials({
              ...credentials,
              username: e.target.value
            })} />
          <br />
          Password
          <br />
          <input
            className="signup-form-input"
            placeholder="Enter your password"
            value={credentials.password}
            onChange={(e) => setCredentials({
              ...credentials,
              password: e.target.value
            })} />
          <br />
          <button onClick={signup} className="signup-button">
            Join Now
          </button>
        </div>
      </div>
    </div>



  );
}
export default Signup;