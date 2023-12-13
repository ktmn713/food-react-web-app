import axios from "axios";
import * as client from "./client";
import Account from "./account";
import Signin from "./signin";
import Signup from "./signup";
import { useEffect, useState } from "react";
import { HashRouter, Link, useNavigate, useParams } from "react-router-dom";
import { Routes, Route } from "react-router-dom";


function Profile() {
  return (
    <div>
      <Link to="/Profile/Signin"
      element={Signin}>Signin</Link>


    </div>
  )
  
}

export default Profile;