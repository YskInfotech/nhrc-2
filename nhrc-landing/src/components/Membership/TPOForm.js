import React, { useState, useEffect } from "react";
import "../../Styles/TPOForm.css";
import { FaSyncAlt } from "react-icons/fa";

function TPOForm({ onBackToPersonal }) {
  const [captcha, setCaptcha] = useState("");
  const [inputCaptcha, setInputCaptcha] = useState("");
  const [formData, setFormData] = useState({
    collegeName: "",
    universityName: "",
    location: "",
    experience: "",
    personalMail: "",
    officialMail: "",
    userName: "",
    password: "",
    confirmPassword: "",
  });

  useEffect(() => {
    generateCaptcha();
  }, []);

  const generateCaptcha = () => {
    const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
    let newCaptcha = "";
    for (let i = 0; i < 5; i++) newCaptcha += chars.charAt(Math.floor(Math.random() * chars.length));
    setCaptcha(newCaptcha);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.(com|in|org)$/;
    if (!formData.collegeName || !formData.universityName)
      return alert("College and University names are required.");
    if (!formData.location) return alert("Location is required.");
    if (!formData.experience) return alert("Experience is required.");
    if (!emailRegex.test(formData.personalMail))
      return alert("Invalid Personal Email ID.");
    if (!emailRegex.test(formData.officialMail))
      return alert("Invalid Official Email ID.");
    if (!formData.userName) return alert("Username is required.");
    if (formData.password.length < 6)
      return alert("Password must be at least 6 characters.");
    if (formData.password !== formData.confirmPassword)
      return alert("Passwords do not match.");
    if (inputCaptcha !== captcha)
      return alert("Incorrect CAPTCHA. Please try again.");
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    localStorage.setItem("tpoData", JSON.stringify(formData));
    sessionStorage.setItem("tpoData", JSON.stringify(formData));

    alert("TPO Details Submitted Successfully!");
    onBackToPersonal();
  };

  return (
    <div className="tpoform-wrapper">
      <div className="tpoform-container shadow-lg rounded-4">
        <h4 className="tpoform-title text-center mb-4">COLLEGE DETAILS</h4>
        <form className="row g-4 p-3" onSubmit={handleSubmit}>
         
          <div className="col-md-6">
            <label className="form-label">
              College Name <span className="text-danger">*</span>
            </label>
            <input
              type="text"
              name="collegeName"
              className="form-control"
              value={formData.collegeName}
              onChange={handleChange}
              placeholder="College Name"
              required
            />
          </div>

          
          <div className="col-md-6">
            <label className="form-label">
              University Name <span className="text-danger">*</span>
            </label>
            <input
              type="text"
              name="universityName"
              className="form-control"
              value={formData.universityName}
              onChange={handleChange}
              placeholder="University Name"
              required
            />
          </div>

          
          <div className="col-md-6">
            <label className="form-label">
              Location <span className="text-danger">*</span>
            </label>
            <input
              type="text"
              name="location"
              className="form-control"
              value={formData.location}
              onChange={handleChange}
              placeholder="Location"
              required
            />
          </div>

          
          <div className="col-md-6">
            <label className="form-label">
              Experience <span className="text-danger">*</span>
            </label>
            <input
              type="text"
              name="experience"
              className="form-control"
              value={formData.experience}
              onChange={handleChange}
              placeholder="Experience"
              required
            />
          </div>

         
          <div className="col-md-6">
            <label className="form-label">
              Personal Mail Id <span className="text-danger">*</span>
            </label>
            <input
              type="email"
              name="personalMail"
              className="form-control"
              value={formData.personalMail}
              onChange={handleChange}
              placeholder="Personal Mail Id"
              required
            />
          </div>

          
          <div className="col-md-6">
            <label className="form-label">
              Official Mail Id <span className="text-danger">*</span>
            </label>
            <input
              type="email"
              name="officialMail"
              className="form-control"
              value={formData.officialMail}
              onChange={handleChange}
              placeholder="Official Mail Id"
              required
            />
          </div>

          
          <div className="col-md-6">
            <label className="form-label">
              User Name <span className="text-danger">*</span>
            </label>
            <input
              type="text"
              name="userName"
              className="form-control"
              value={formData.userName}
              onChange={handleChange}
              placeholder="Enter User Name"
              required
            />
          </div>

          
          <div className="col-md-6">
            <label className="form-label">
              Password <span className="text-danger">*</span>
            </label>
            <input
              type="password"
              name="password"
              className="form-control"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
              required
            />
          </div>

          
          <div className="col-md-6">
            <label className="form-label">
              Confirm Password <span className="text-danger">*</span>
            </label>
            <input
              type="password"
              name="confirmPassword"
              className="form-control"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Confirm Password"
              required
            />
          </div>

         
          <div className="col-md-6">
            <label className="form-label">
              CAPTCHA <span className="text-danger">*</span>
            </label>
            <div className="captcha-box d-flex align-items-center justify-content-between">
              <div className="captcha-text">{captcha}</div>
              <FaSyncAlt className="captcha-refresh" onClick={generateCaptcha} />
            </div>
            <input
              type="text"
              className="form-control mt-2"
              placeholder="Enter Captcha"
              value={inputCaptcha}
              onChange={(e) => setInputCaptcha(e.target.value)}
              required
            />
          </div>

          
          <div className="col-12 d-flex justify-content-between mt-4">
            <button
              type="button"
              className="tpoform-btn tpoform-back-btn"
              onClick={onBackToPersonal}
            >
              Back
            </button>
            <button type="submit" className="tpoform-btn tpoform-register-btn">
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default TPOForm;
