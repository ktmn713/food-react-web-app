import * as client from "./client";
import Signup from "./signup";
import "../style.css";
import { useState } from "react";
import {Link} from "react-router-dom";
import { useLocation } from "react-router-dom";
import { Routes, Route, Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Signin() {
  const [credentials, setCredentials] = useState({ username: "", password: "" });
  const navigate = useNavigate();
  const signin = async () => {
    await client.signin(credentials);
    navigate("/Profile");
  };
  const {pathname} = useLocation();
  const [error, setError] = useState("");

  return (
    // <div>
    //   <h1>Signin</h1>
    //   <input value={credentials.username} onChange={(e) => setCredentials({...credentials, username: e.target.value})}/>
    //   <input value={credentials.password} onChange={(e) => setCredentials({...credentials, password: e.target.value})}/>
    //   <button onClick={signin}> Signin </button>



    // </div>

    <div className="signup-grid">
      <div className="signup-one">
        <img src="https://www.themealdb.com//images//media//meals//wvpsxx1468256321.jpg" className="signup-img" />
      </div>

      <div className="signup-two">
        Log in to your account

        <br />
        <br />

        <div className="signup-form-text">
          {error && <div>{error}</div>}
          Email Address
          <br />
          <input className="signup-form-input"
          placeholder="yourname@example.com"
           value={credentials.username} onChange={(e) => setCredentials({ ...credentials, username: e.target.value })} />
          <br />
          Password
          <br />
          <input className="signup-form-input" 
          placeholder="Enter your password"
          value={credentials.password} onChange={(e) => setCredentials({ ...credentials, password: e.target.value })} />
          <br />
          <button onClick={signin} className="signup-button">
            Login
          </button>

          
        </div>
        <div >


          <Link 
          className="signup-redirect"
          to="./Signup">Don't have an account? Signup now</Link>
          <Routes> 
          <Route path="Signup" element={<Signup />} />
          </Routes>

      
{/* <Link to="./Signup"
        className={`nav-link ${pathname.includes("Signup") ? "active" : ""}`}>Signup</Link> */}
        </div>
      </div>
    </div>
  );
}
export default Signin;