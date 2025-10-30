import React, { useState, useEffect } from "react";
import "../../Styles/EducationForm.css";
import nhrcLogo from "../../assets/nhrc-stu-logo.png";

function EducationForm({ onBackToPersonal, candidateType }) {
  const [step, setStep] = useState(1);
  const [captcha, setCaptcha] = useState("");
  const [inputCaptcha, setInputCaptcha] = useState("");
  const [formData, setFormData] = useState({
    university: "",
    college: "",
    qualification: "",
    department: "",
    passout: "",
    location: "",
    idProof: "",
    userName: "",
    password: "",
    confirmPassword: "",
    careerOption: "",
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
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0]?.name : value,
    }));
  };

  const validateForm = () => {
    if (!formData.university || !formData.college)
      return alert("University and College names are required.");
    if (!formData.password || formData.password.length < 6)
      return alert("Password must be at least 6 characters.");
    if (formData.password !== formData.confirmPassword)
      return alert("Passwords do not match.");
    if (inputCaptcha !== captcha)
      return alert("Incorrect CAPTCHA. Please try again.");
    return true;
  };

  const handleNext = (e) => {
    e.preventDefault();
    if (validateForm()) setStep(2);
  };

  const handleBack = () => {
    if (step === 2) {
      setStep(1);
    } else {
      onBackToPersonal();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    const storedData = JSON.parse(localStorage.getItem("memberData")) || {};
    storedData[candidateType] = formData;
    localStorage.setItem("memberData", JSON.stringify(storedData));

    alert("Educational details saved successfully!");
    onBackToPersonal();
  };

  return (
    <div className="edu-wrapper">
      <div className="edu-card">
        <h4 className="edu-title">EDUCATIONAL DETAILS</h4>

        
        <div className="edu-tracker">
          <div className={`edu-step ${step >= 1 ? "active" : ""}`}>
            <div className="circle">1</div>
            <p>Personal Details</p>
          </div>
          <div className={`arrow ${step === 2 ? "filled" : ""}`}>➜</div>
          <div className={`edu-step ${step === 2 ? "active" : ""}`}>
            <div className="circle">2</div>
            <p>Education Details</p>
          </div>
        </div>

        
        {step === 1 && (
          <form className="row g-3 p-3" onSubmit={handleNext}>
            {[
              ["university", "University/Deem Name"],
              ["college", "College Name"],
              ["qualification", "Qualification"],
              ["department", "Department"],
              ["passout", "Year Of Passout"],
              ["location", "Location"],
            ].map(([field, label]) => (
              <div className="col-md-6" key={field}>
                <label className="edu-label">
                  {label} <span className="text-danger">*</span>
                </label>
                <input
                  type="text"
                  name={field}
                  className="edu-input"
                  value={formData[field]}
                  onChange={handleChange}
                  required
                />
              </div>
            ))}

            <div className="col-md-6">
              <label className="edu-label">
                ID Proof <span className="text-danger">*</span>
              </label>
              <input
                type="file"
                name="idProof"
                className="edu-input"
                onChange={handleChange}
                required
              />
            </div>

            <div className="col-md-6">
              <label className="edu-label">
                User Name <span className="text-danger">*</span>
              </label>
              <input
                type="text"
                name="userName"
                className="edu-input"
                value={formData.userName}
                onChange={handleChange}
                required
              />
            </div>

            <div className="col-md-6">
              <label className="edu-label">
                Password <span className="text-danger">*</span>
              </label>
              <input
                type="password"
                name="password"
                className="edu-input"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>

            <div className="col-md-6">
              <label className="edu-label">
                Confirm Password <span className="text-danger">*</span>
              </label>
              <input
                type="password"
                name="confirmPassword"
                className="edu-input"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />
            </div>

            
            <div className="col-md-6 edu-captcha-section">
              <label className="edu-label">CAPTCHA*</label>
              <div className="edu-captcha-box">
                <div className="edu-captcha-code">{captcha}</div>
                <button type="button" className="edu-refresh-btn" onClick={generateCaptcha}>
                  ↻
                </button>
              </div>
              <input
                type="text"
                className="edu-input"
                placeholder="Enter Captcha"
                value={inputCaptcha}
                onChange={(e) => setInputCaptcha(e.target.value)}
                required
              />
            </div>

            <div className="col-12 d-flex justify-content-between mt-3">
              <button type="button" className="edu-btn edu-back-btn" onClick={handleBack}>
                Back
              </button>
              <button type="submit" className="edu-btn edu-next-btn">
                Next
              </button>
            </div>
          </form>
        )}

       
        {step === 2 && (
          <form className="p-4" onSubmit={handleSubmit}>
            <div className="row align-items-center">
              <div className="col-md-6">
                <label className="edu-label">Choose your career option*</label>
                <select
                  name="careerOption"
                  className="edu-input"
                  value={formData.careerOption}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Option</option>
                  <option>Training</option>
                  <option>JOB</option>
                  <option>Abroad</option>
                </select>
              </div>

              <div className="col-md-6 text-center">
                <img src={nhrcLogo} alt="NHRC Logo" className="edu-logo" />
              </div>
            </div>

            <div className="d-flex justify-content-between mt-4">
              <button type="button" className="edu-btn edu-back-btn" onClick={handleBack}>
                Back
              </button>
              <button type="submit" className="edu-btn edu-submit-btn">
                Submit
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

export default EducationForm;
