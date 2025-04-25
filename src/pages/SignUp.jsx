import React, { useState } from "react";
import "/styles/login.scss";
import { FaFacebookF, FaTwitter, FaGithub, FaGoogle } from "react-icons/fa";
import { useAuth } from "../app/AuthContext";
import { Link, useNavigate } from "react-router-dom";

function SignUp() {
  const { signup } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    if (!email || !password) {
      setError("Email and password are required");
      return;
    }
    signup({ email, password });
    navigate("/login");
  };

  return (
    <div className="login-container">
      <div className="login-left">
        <img src="/images/signup.jpg" alt="Designed by slidesgo / Freepik" />
      </div>
      <div className="login-right">
        <form action="" onSubmit={handleSubmit}>
          <div className="login-box">
            <h2 className="logo">Registration</h2>
            <h3>Hey New User 👋🏻</h3>
            <p>Please sign-in to your account and start the adventure</p>

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
              SIGN IN
            </button>

            <p className="signup-text">
              Already have an account <Link to="/login">Login Here</Link>
            </p>

            <div className="social-login">
              {/* <FaFacebookF /> <FaTwitter /> <FaGithub /> <FaGoogle /> */}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
