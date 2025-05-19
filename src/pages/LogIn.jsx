import { useState } from "react";
// import "/styles/login.scss";
import "../../styles/login.scss"; // Changed from "/styles/login.scss"

import { FaFacebookF, FaTwitter, FaGithub, FaGoogle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../app/AuthContext";

const Login = () => {
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    if (!email || !password) {
      setError("Email and Password are required");
      return;
    }
    const result = login({ email, password });
    if (result === true) {
      navigate("/app");
    } else {
      setError("Invalid credentials or user not found. Try signing up.");
    }
  };

  return (
    <div className="login-container">
      <div className="login-left">
        <figure>
          <img src="/images/login.jpg" alt="Designed by slidesgo / Freepik" />
        </figure>
      </div>
      <div className="login-right">
        <form onSubmit={handleSubmit} action="">
          <div className="login-box">
            <h2 className="logo">Login</h2>
            <h3>Hi there again User 👋🏻</h3>
            <p>Please Log-in to your account and start the adventure</p>

            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              required
              autoComplete="off"
            />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              required
              autoComplete="off"
            />
            {error && <div className="error-msg">{error}</div>}
            <div className="options">
              <label>
                <input type="checkbox" />
                <p>Remember Me</p>
              </label>
              <a href="/forgot">Forgot Password?</a>
            </div>

            <button type="submit" className="sign-in">
              LOG IN
            </button>

            <p className="signup-text">
              New on our platform?
              {/* <a href="/signup">Create an account</a> */}
              <Link to="/signup">Sign up</Link>
            </p>

            <div className="social-login">
              {/* <FaFacebookF /> <FaTwitter /> <FaGithub /> <FaGoogle /> */}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
