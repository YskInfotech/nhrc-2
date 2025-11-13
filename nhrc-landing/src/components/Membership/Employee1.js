import React, { useEffect, useState } from "react";
import { FaSyncAlt, FaEye, FaEyeSlash, FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import "../../Styles/Employee1.css";

function Employee1({ employeeData = {}, onBack }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [captcha, setCaptcha] = useState({ question: "", answer: 0 });
  const [inputCaptcha, setInputCaptcha] = useState("");
  const [isCaptchaCorrect, setIsCaptchaCorrect] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const [employeeId, setEmployeeId] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    
    const maybeEmail =
      employeeData?.employerData?.officialEmail ||
      employeeData?.personalData?.email ||
      (() => {
        try {
          const saved = JSON.parse(localStorage.getItem("employeeDetails"));
          return saved?.employerData?.officialEmail || saved?.personalData?.email || "";
        } catch {
          return "";
        }
      })();

    if (maybeEmail) setEmail(maybeEmail);

    generateCaptcha();
  }, [employeeData]);

  const generateCaptcha = () => {
    const n1 = Math.floor(Math.random() * 5) + 1;
    const n2 = Math.floor(Math.random() * 5) + 1;
    const n3 = Math.floor(Math.random() * 5) + 1;
    setCaptcha({
      question: `${n1} + ${n2} + ${n3} = ?`,
      answer: n1 + n2 + n3,
    });
    setInputCaptcha("");
    setIsCaptchaCorrect(null);
  };

  const handleCaptchaChange = (value) => {
    setInputCaptcha(value);
    if (value === "") {
      setIsCaptchaCorrect(null);
      return;
    }
    if (parseInt(value) === captcha.answer) {
      setIsCaptchaCorrect(true);
    } else {
      setIsCaptchaCorrect(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!password || !confirmPassword) return alert("Please enter password and confirm password");
    if (password !== confirmPassword) return alert("Passwords do not match!");
    if (!isCaptchaCorrect) return alert("Please solve the captcha correctly before submitting.");

    const newEmployeeId = `NHRC-E-${Math.floor(Math.random() * 100).toString().padStart(2, "0")}`;
    setEmployeeId(newEmployeeId);
    setShowPopup(true);

    
    const account = {
      email,
      employeeId: newEmployeeId,
      password,
      createdAt: new Date().toISOString(),
      personalData: employeeData?.personalData || null,
      employerData: employeeData?.employerData || null,
    };
    localStorage.setItem("nhrcAccount", JSON.stringify(account));
  };

  const handleContinue = () => {
    alert("Redirecting to login page (placeholder)");
    setShowPopup(false);
  };

  return (
    <div className="emp1-container">
      {!showPopup ? (
        <>
          <h3 className="emp1-title mb-3">EMPLOYEE DETAILS</h3>

          <form className="emp1-form" onSubmit={handleSubmit}>
            <div className="emp1-box">
              <div className="row">
                <div className="col-md-6">
                  <label>Email ID/User ID</label>
                  <input type="email" value={email} className="emp1-input form-control" readOnly />
                </div>

                <div className="col-md-6">
                  <label>Password *</label>
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    className="emp1-input form-control"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>

                <div className="col-md-6">
                  <label>Confirm Password</label>
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Confirm Password"
                    className="emp1-input form-control"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                  />
                </div>

                <div className="col-md-6 emp1-captcha-section">
                  <label>Please solve the problem below</label>
                  <div className="emp1-captcha-box">
                    <FaSyncAlt className="emp1-refresh-icon" onClick={generateCaptcha} title="Refresh Captcha" />
                    <span className="emp1-captcha-text">{captcha.question}</span>
                    <div className="emp1-captcha-input-wrapper">
                      <input
                        type="number"
                        className={`emp1-captcha-input ${
                          isCaptchaCorrect === true ? "emp1-border-success" : isCaptchaCorrect === false ? "emp1-border-danger" : ""
                        }`}
                        value={inputCaptcha}
                        onChange={(e) => handleCaptchaChange(e.target.value)}
                        required
                      />
                      {isCaptchaCorrect === true && <FaCheckCircle className="emp1-captcha-icon emp1-success" />}
                      {isCaptchaCorrect === false && <FaTimesCircle className="emp1-captcha-icon emp1-error" />}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="emp1-buttons mt-4 d-flex justify-content-between">
              <button type="button" className="emp1-btn emp1-btn-secondary" onClick={onBack}>
                ← Back
              </button>
              <button type="submit" className="emp1-btn emp1-btn-success" disabled={!isCaptchaCorrect}>
                Submit
              </button>
            </div>
          </form>
        </>
      ) : (
        <div className="emp1-popup-container">
          <div className="emp1-popup-card shadow-lg rounded-4 p-4 text-center">
            <h3>🎉 Welcome to NHRC Family 🎉</h3>
            <p>You have successfully joined the <b>NHRC Community</b></p>

            <div className="emp1-account-box mt-3 p-3 rounded-3">
              <h5>Your NHRC Account</h5>
              <p><b>Employee ID:</b> {employeeId}</p>
              <p><b>Mail ID/User ID:</b> {email}</p>
              <p className="emp1-password-line">
                <b>Password:</b>{" "}
                {showPassword ? password : "**********"}{" "}
                <span className="emp1-eye-icon" onClick={() => setShowPassword(!showPassword)}>
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </span>
              </p>
            </div>

            <button className="emp1-btn emp1-btn-primary mt-3" onClick={handleContinue}>
              Continue
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Employee1;
