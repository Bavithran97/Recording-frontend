import React, { useState } from "react";

const SignUp = () => {
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
    fetch("https://mern-backend-07k9.onrender.com/register", {
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
        if (data.status === "ok") {
          alert("user is registered in database!! login to proceed");
        }
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>CREATE ACCOUNT</h3>

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
          Create
        </button>
      </div>
      <p className="forgot-password text-right">
        Account Created? <a href="/sign-in">login here</a>
      </p>
    </form>
  );
};

export default SignUp;
