import React from "react";
import loginimage from "../assets/login.jpg";
import "../Styles/Login.css";
import hr from "../assets/hr.png";
import tpo from "../assets/tpo.png";
import admin from "../assets/admin.png";
import student from "../assets/student.png";
import { FcGoogle } from "react-icons/fc";

function Login() {
  return (
    <div className="login-wrapper d-flex justify-content-center align-items-center vh-100 m-5">
      <div
        className="card shadow-lg border-0 rounded-4 overflow-hidden"
        style={{ maxWidth: "900px", width: "100%" }}
      >
        <div className="row g-0">
          <div className="col-md-6 d-none d-md-block">
            <img
              src={loginimage}
              className="img-fluid h-100 w-100 object-fit-cover"
              alt="loginprofile"
            />
          </div>
          <div className="col-md-6 col-12  d-flex flex-column justify-content-center">
            <div className="card-body">
              <h3 className="card-title text-center mb-3 fw-bold ">
                ADMIN LOGIN
              </h3>

              <form>
                <label className="fw-semibold">User Name *</label>
                <input
                  type="text"
                  className="form-control mb-3 name"
                  placeholder="Enter username"
                  required
                />

                <label className="fw-semibold">Password *</label>
                <input
                  type="password"
                  className="form-control mb-2 password"
                  placeholder="Enter password"
                  required
                />

                <div className="text-end mb-3">
                  <p 
                    className="text-decoration-none small text-muted forget"
                  >
                    Forgot Password?
                  </p>
                </div>

                <p className="text-center fw-semibold mb-2">
                  Select the image that represents an ADMIN
                </p>

                <div className="d-flex justify-content-start gap-2 mb-3 flex-wrap">
                  {[
                    { src: hr, alt: "hrlogo", value: "hr" },
                    { src: tpo, alt: "tpologo", value: "tpo" },
                    { src: admin, alt: "adminlogo", value: "admin" },
                    { src: student, alt: "studentlogo", value: "student" },
                  ].map((item) => (
                    <label
                      key={item.value}
                      className="role-option position-relative"
                    >
                      <input
                        type="radio"
                        name="role"
                        value={item.value}
                        className="role-radio"
                      />
                      <img
                        src={item.src}
                        alt={item.alt}
                        className="role-icon"
                      />
                    </label>
                  ))}
                </div>

                <button
                  type="submit"
                  className="btn btn-primary w-100 mb-3 rounded-pill btn1"
                >
                  Sign In
                </button>

                <p className="text-center mb-2 fw-light">Or With</p>

                <button
                  type="button"
                  className="btn btn-outline-danger w-100 rounded-pill"
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
