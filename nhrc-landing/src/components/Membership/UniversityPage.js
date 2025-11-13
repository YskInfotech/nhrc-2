import React, { useState } from "react";
import "../../Styles/UniversityPage.css";
import { FaCheckCircle, FaTimesCircle, FaSyncAlt, FaEye, FaEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function UniversityPage({ personalData, onBackToPersonal }) {


  const [formData, setFormData] = useState({
    universityName: "",
    collegeName: "",
    collegeCode: "",
    qualification: "",
    department: "",
    startYear: "",
    endYear: "",
    idFront: "",
    idBack: "",
    location: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  
  const [num1, setNum1] = useState(Math.floor(Math.random() * 10));
  const [num2, setNum2] = useState(Math.floor(Math.random() * 10));
  const [num3, setNum3] = useState(Math.floor(Math.random() * 10));
  const [captchaAnswer, setCaptchaAnswer] = useState("");
  const [isCaptchaCorrect, setIsCaptchaCorrect] = useState(null);

  
  const [showPopup, setShowPopup] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const generateCaptcha = () => {
    setNum1(Math.floor(Math.random() * 10));
    setNum2(Math.floor(Math.random() * 10));
    setNum3(Math.floor(Math.random() * 10));
    setCaptchaAnswer("");
    setIsCaptchaCorrect(null);
  };

  const correctAnswer = num1 + num2 + num3;

  const handleCaptchaChange = (e) => {
    const value = e.target.value;
    setCaptchaAnswer(value);

    if (value === "") {
      setIsCaptchaCorrect(null);
    } else {
      setIsCaptchaCorrect(parseInt(value) === correctAnswer);
    }
  };

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData({
      ...formData,
      [name]: type === "file" ? files[0]?.name : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isCaptchaCorrect) {
      alert("❌ Captcha incorrect. Please try again!");
      return;
    }

    const finalData = {
      personalData,
      universityData: formData,
    };

    localStorage.setItem("studentUniversityData", JSON.stringify(finalData));
    setShowPopup(true);
  };

  return (
    <div className="university-wrapper">
      
      <div className="step-progress">
        <div className="step active">1</div>
        <div className="line"></div>
        <div className="step active">2</div>
      </div>
      <div className="step-labels">
        <span>Personal Details</span>
        <span>Education Details</span>
      </div>

      
      <div className="university-card">
        <h3 className="university-title">STUDENT UNIVERSITY DETAILS</h3>

        <form className="university-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <input
              type="text"
              name="universityName"
              placeholder="University Name*"
              value={formData.universityName}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="collegeName"
              placeholder="Enter College Name*"
              value={formData.collegeName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-row">
            <input
              type="text"
              name="collegeCode"
              placeholder="College Code*"
              value={formData.collegeCode}
              onChange={handleChange}
              required
            />
            <select
              name="qualification"
              value={formData.qualification}
              onChange={handleChange}
              required
            >
              <option value="">Qualification*</option>
              <option>B.Tech</option>
              <option>M.Tech</option>
              <option>B.Sc</option>
              <option>MBA</option>
            </select>
          </div>

          <div className="form-row">
            <select
              name="department"
              value={formData.department}
              onChange={handleChange}
              required
            >
              <option value="">Department*</option>
              <option>Computer Science</option>
              <option>Electronics</option>
              <option>Mechanical</option>
              <option>Civil</option>
            </select>

            <div className="year-group">
              <select
                name="startYear"
                value={formData.startYear}
                onChange={handleChange}
                required
              >
                <option value="">Starting Year*</option>
                {Array.from({ length: 10 }, (_, i) => 2016 + i).map((year) => (
                  <option key={year}>{year}</option>
                ))}
              </select>
              <select
                name="endYear"
                value={formData.endYear}
                onChange={handleChange}
                required
              >
                <option value="">Ending Year*</option>
                {Array.from({ length: 10 }, (_, i) => 2020 + i).map((year) => (
                  <option key={year}>{year}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="form-row">
            <div className="file-group">
              <label>Upload Front</label>
              <input type="file" name="idFront" onChange={handleChange} required />
            </div>
            <div className="file-group">
              <label>Upload Back</label>
              <input type="file" name="idBack" onChange={handleChange} required />
            </div>
          </div>

          <div className="form-row">
            <input
              type="text"
              name="location"
              placeholder="Location*"
              value={formData.location}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Personal Email ID*"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-row">
            <input
              type="password"
              name="password"
              placeholder="Password*"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password*"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
          </div>

          
          <div className="captcha-row">
            <span className="captcha-text">
              {num1} + {num2} + {num3} = ?
            </span>
            <input
              type="number"
              name="captcha"
              value={captchaAnswer}
              onChange={handleCaptchaChange}
              placeholder="Answer"
              required
              className={
                isCaptchaCorrect === true
                  ? "correct-input"
                  : isCaptchaCorrect === false
                  ? "wrong-input"
                  : ""
              }
            />
            {isCaptchaCorrect === true && (
              <FaCheckCircle className="captcha-icon correct" />
            )}
            {isCaptchaCorrect === false && (
              <FaTimesCircle className="captcha-icon wrong" />
            )}
            <button
              type="button"
              className="refresh-btn"
              onClick={generateCaptcha}
              title="Refresh Captcha"
            >
              <FaSyncAlt />
            </button>
          </div>

          <div className="form-buttons">
            <button
              type="button"
              className="back-btn"
              onClick={onBackToPersonal}
            >
              ← Back
            </button>
            <button type="submit" className="register-btn">
              Register
            </button>
          </div>
        </form>
      </div>

      
      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-card">
            <h2>Welcome to NHRC Student Portal 🎉</h2>
            <p>You have successfully joined the <b>Student Portal</b></p>

            <div className="popup-box">
              <h4>Your Student Account</h4>
              <p><strong>Student ID:</strong> NHRC-S-01</p>
              <p><strong>Mail ID/User ID:</strong> {personalData?.email || formData.email}</p>
              <p className="password-line">
                <strong>Password:</strong>{" "}
                <span className="password-value">
                  {showPassword ? formData.password : "********"}
                </span>
                <span
                  className="eye-icon"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </span>
              </p>
            </div>

            <button
              className="continue-btn"
              onClick={() => {
                setShowPopup(false);
                
              }}
            >
              Continue
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default UniversityPage;
