import axios from "axios";
import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { Navigate, useNavigate } from "react-router-dom";
import { Base_url } from "../utils/constants";

const Login = () => {
  const [emailId, setEmailId] = useState("ashish@gmail.com");
  const [password, setPassword] = useState("Ashish@123");
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogin = async () => {
    try {
      const $response = await axios.post(
        Base_url + "/login",
        { emailId, password },
        { withCredentials: true }
      );

      dispatch(addUser($response.data.user));
      return navigate("/");
    } catch (error) {
      console.log("Login error", error);
      setError(error?.response?.data || "Something went Wrong");
    }
  };
  return (
    <div className="card bg-base-300 w-96 shadow-xl mx-auto my-10">
      <div className="card-body ">
        <h2 className="card-title justify-center">Login</h2>

        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Email</span>
          </div>
          <input
            type="text"
            value={emailId}
            placeholder="Enter your email"
            className="input input-bordered input-accent w-full max-w-xs"
            onChange={(e) => setEmailId(e.target.value)}
          />
        </label>

        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Password</span>
          </div>
          <input
            type="password"
            value={password}
            placeholder="Enter your password"
            className="input input-bordered input-accent w-full max-w-xs"
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <div className="text-xs text-error my-2 mx-2">{error}</div>
        <div className="card-actions justify-center mt-4">
          <button className="btn btn-accent bg- text-white" onClick={handleLogin}>
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
