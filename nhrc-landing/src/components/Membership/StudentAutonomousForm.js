import React, { useState, useEffect } from "react";
import "../../Styles/StudentAutonomousForm.css";
import { FaEye, FaEyeSlash } from "react-icons/fa";

function StudentAutonomousForm({ personalData, onBackToPersonal }) {
  const [formData, setFormData] = useState({
    collegeName: "",
    collegeCode: "",
    qualification: "",
    department: "",
    startYear: "",
    endYear: "",
    location: "",
    idFront: null,
    idBack: null,
    email: "",
    password: "",
    confirmPassword: "",
    puzzleAnswer: "",
  });

  const [puzzle, setPuzzle] = useState({ num1: 0, num2: 0, num3: 0, answer: 0 });
  const [isCorrect, setIsCorrect] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

 
  const generatePuzzle = () => {
    const num1 = Math.floor(Math.random() * 9) + 1;
    const num2 = Math.floor(Math.random() * 9) + 1;
    const num3 = Math.floor(Math.random() * 9) + 1;
    const answer = num1 + num2 + num3;
    setPuzzle({ num1, num2, num3, answer });
    setFormData((prev) => ({ ...prev, puzzleAnswer: "" }));
    setIsCorrect(null);
  };

  useEffect(() => {
    generatePuzzle();
  }, []);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      setFormData({ ...formData, [name]: files[0] });
      return;
    }
    setFormData({ ...formData, [name]: value });

    if (name === "puzzleAnswer") {
      setIsCorrect(parseInt(value) === puzzle.answer);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isCorrect) {
      alert("Incorrect puzzle answer. Please try again!");
      return;
    }

    const finalData = {
      personalData,
      autonomousData: { ...formData },
    };

    localStorage.setItem("studentAutonomousData", JSON.stringify(finalData));
    setShowPopup(true); 
  };

  return (
    <div className="autonomous-wrapper">
      
      <div className="step-progress">
        <div className="step active">1</div>
        <div className="line"></div>
        <div className="step active">2</div>
      </div>

      <div className="step-labels">
        <span>Personal Details</span>
        <span>Education Details</span>
      </div>

      <div className="autonomous-card">
        <h3 className="autonomous-title">STUDENT AUTONOMOUS DETAILS</h3>

        <form className="autonomous-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>College Name</label>
            <input
              type="text"
              name="collegeName"
              value={formData.collegeName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>College Code</label>
            <input
              type="text"
              name="collegeCode"
              value={formData.collegeCode}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Qualification</label>
            <input
              type="text"
              name="qualification"
              value={formData.qualification}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Department</label>
            <input
              type="text"
              name="department"
              value={formData.department}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Start Year</label>
              <input
                type="number"
                name="startYear"
                value={formData.startYear}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>End Year</label>
              <input
                type="number"
                name="endYear"
                value={formData.endYear}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label>Location</label>
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Upload ID Front</label>
            <input
              type="file"
              name="idFront"
              accept="image/*"
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Upload ID Back</label>
            <input
              type="file"
              name="idBack"
              accept="image/*"
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
          </div>

         
          <div className="puzzle-section">
            <label>Please solve the problem below</label>
            <div className="puzzle-row">
              <span className="puzzle-text">
                {puzzle.num1} + {puzzle.num2} + {puzzle.num3} = ?
              </span>
              <input
                type="number"
                name="puzzleAnswer"
                placeholder="Answer"
                value={formData.puzzleAnswer}
                onChange={handleChange}
                required
              />
              {isCorrect === true && <span className="result-icon correct">✔</span>}
              {isCorrect === false && formData.puzzleAnswer !== "" && (
                <span className="result-icon wrong">✘</span>
              )}
              <button type="button" className="refresh-btn" onClick={generatePuzzle}>
                🔄
              </button>
            </div>
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
              <p>
                <strong>Student ID:</strong> NHRC-S-01
              </p>
              <p>
                <strong>Mail ID/User ID:</strong>{" "}
                {personalData?.email || formData.email}
              </p>
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
              onClick={() => setShowPopup(false)}
            >
              Continue
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default StudentAutonomousForm;
