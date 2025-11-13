import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import loginimage from "../assets/login.jpg";
import "../Styles/Login.css";
import hr from "../assets/hr.png";
import tpo from "../assets/tpo.png";
import admin from "../assets/admin.png";
import student from "../assets/student.png";
import { FcGoogle } from "react-icons/fc";

function Login() {
  const navigate = useNavigate();

 
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");

 
  const dummyAdmin = {
    email: "sivakrishnaysk@example.com",
    password: "admin123",
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!role) {
      alert("Please select a role before logging in.");
      return;
    }

   
    if (
      role === "ADMIN" &&
      username === dummyAdmin.email &&
      password === dummyAdmin.password
    ) {
      alert("Admin login successful!");
      navigate("/dashboard"); 
    } else {
      alert("Invalid credentials or role. Try again.");
    }
  };

  return (
    <div className="unique-login-wrapper">
      <div className="unique-login-card">
        <div className="row g-0">
          
          <div className="col-md-5 d-none d-md-block">
            <img
              src={loginimage}
              className="unique-login-image"
              alt="login-profile"
            />
          </div>

          
          <div className="col-md-7 col-12 d-flex flex-column justify-content-center">
            <div className="unique-login-body">
              <h3 className="unique-login-title text-center mb-3">Log In</h3>

              <form onSubmit={handleSubmit}>
                
                <div className="mb-2">
                  <label className="fw-semibold small-label">Email *</label>
                  <input
                    type="email"
                    className="form-control unique-login-input"
                    placeholder="Enter email"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                  />
                </div>

               
                <div className="mb-2">
                  <label className="fw-semibold small-label">Password *</label>
                  <input
                    type="password"
                    className="form-control unique-login-input"
                    placeholder="Enter password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>

                
                <div className="d-flex justify-content-between mb-3">
                  <p className="unique-register">Register</p>
                  <p className="unique-forget">Forgot Password?</p>
                </div>

                
                <p className="text-center fw-semibold mb-2 small-label">
                  Select the image that represents an ADMIN
                </p>

                <div className="unique-role-container mb-3">
                  {[{ src: hr, label: "HR" },
                    { src: tpo, label: "TPO" },
                    { src: admin, label: "ADMIN" },
                    { src: student, label: "STUDENT" }].map((r, i) => (
                    <label key={i} className="unique-role-option">
                      <input
                        type="radio"
                        name="role"
                        className="unique-role-radio"
                        value={r.label}
                        onChange={(e) => setRole(e.target.value)}
                      />
                      <img
                        src={r.src}
                        alt={r.label}
                        className={`unique-role-icon ${role === r.label ? "selected" : ""}`}
                      />
                      <p className="unique-role-label">{r.label}</p>
                    </label>
                  ))}
                </div>

                
                <button
                  type="submit"
                  className="btn w-100 mb-2 rounded-pill unique-btn1"
                >
                  Sign In
                </button>

                <p className="text-center mb-2 fw-light small-label">Or With</p>

                <button
                  type="button"
                  className="btn btn-outline-danger w-100 rounded-pill unique-btn2"
                >
                  <FcGoogle className="me-2" />
                  Log in with Google
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
