import React, { memo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "../../api";
import "./login.scss";
import logo from '../../assets/lgo.svg'; 

const Login = () => {
  let navigate = useNavigate();
  const [username, setUsername] = useState("kminchelle");
  const [password, setPassword] = useState("0lelplR");
  const [loading, setLoading] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    let user = { username, password };
    setLoading(true);

    axios
      .post("/auth/login", user)
      .then((res) => {
        console.log(res.data);
        localStorage.setItem("x-auth-token", res.data.token);
        navigate("/admin/create");
      })
      .catch((err) => {
        console.log(err);
        toast.error("Username or password is incorrect");
      })
      .finally(() => setLoading(false));
  };

  return (
    <div className="login-container">
      <div className="login-frame">
        <img src={logo} alt="Nest Mart & Grocery" className="logo" />
        <form onSubmit={handleLogin} className="form-container">
          <label className="input-label">Email Address*</label>
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            type="text"
            placeholder="Enter Your Email"
            className="input-field"
            required
          />
          <label className="input-label">Password*</label>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Enter Your Password"
            className="input-field"
            required
          />
          <div className="options">
            <div className="op">
              <input type="checkbox" id="rememberMe" />
              <label htmlFor="rememberMe" className="checkbox-label">Remember Me</label>
            </div>
            <a href="/" className="forgot-password">Forgot Password?</a>
          </div>
          <button type="submit" disabled={loading} className="submit-button">
            {loading ? "Loading..." : "Login"}
          </button>
        </form>
        <a href="/" className="signup-link">Signup?</a>
      </div>
    </div>
  );
};

export default memo(Login);
