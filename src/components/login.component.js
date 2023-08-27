import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
    fetch("https://mern-backend-07k9.onrender.com/login-user", {
      method: "POST",
      crossDomain: true,
      headers: {
        "content-type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({ email, password }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "userRegister");
        if (data.status === "0") {
          alert("User not exits! Click 'Signup' in navbar to register");
        } else if (data.status === "ok") {
          alert("login is successful");
          navigate("/data");
        } else {
          alert(
            "Invalid Password!! Click 'forgot password' to reset your password"
          );
        }
      });
  };
  return (
    <form onSubmit={handleSubmit}>
      <h3>Log In</h3>

      <div className="mb-3">
        <label>Email</label>
        <input
          type="email"
          className="form-control"
          placeholder="Enter email"
          value={email}
          onChange={handleEmailChange}
        />
      </div>

      <div className="mb-3">
        <label>Password</label>
        <input
          type="password"
          className="form-control"
          placeholder="Enter password"
          value={password}
          onChange={handlePasswordChange}
        />
      </div>

      <div className="d-grid">
        <button type="submit" className="btn btn-primary">
          login
        </button>
      </div>
      <p className="forgot-password text-right">
        <Link to="/forgot-password"> Forgot password?</Link>
      </p>
    </form>
  );
};

export default Login;
