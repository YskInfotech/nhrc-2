import React, { useState } from "react";
import "../../Styles/RepresentativeForm.css";

function RepresentativeFormUniversity({ onBack }) {
  const [showSuccess, setShowSuccess] = useState(false);

  const handleRegister = (e) => {
    e.preventDefault();
    setShowSuccess(true);
  };

  const handleClosePopup = () => {
    setShowSuccess(false);
  };

  return (
    <div className="repuni-wrapper">
      {!showSuccess ? (
        <div className="repuni-card">
          <h2 className="repuni-title">🎓 REPRESENTATIVE UNIVERSITY DETAILS</h2>
          <form onSubmit={handleRegister} className="repuni-form">
            <div className="repuni-grid">
              <div className="repuni-field">
                <label>College Name*</label>
                <input type="text" placeholder="College Name" required />
              </div>

              <div className="repuni-field">
                <label>University Name*</label>
                <input type="text" placeholder="University Name" required />
              </div>

              <div className="repuni-field">
                <label>College Code*</label>
                <input type="text" placeholder="College Code" required />
              </div>

              <div className="repuni-field">
                <label>Designation*</label>
                <select required>
                  <option value="">Select Designation</option>
                  <option value="TPO">TPO</option>
                  <option value="Principal">Principal</option>
                  <option value="HOD">HOD</option>
                  <option value="Others">Others</option>
                </select>
              </div>

              <div className="repuni-field">
                <label>Department Name*</label>
                <input type="text" placeholder="Department" required />
              </div>

              <div className="repuni-field">
                <label>State*</label>
                <select required>
                  <option value="">Select State</option>
                  <option value="Andhra Pradesh">Andhra Pradesh</option>
                  <option value="Telangana">Telangana</option>
                  <option value="Tamil Nadu">Tamil Nadu</option>
                  <option value="Karnataka">Karnataka</option>
                </select>
              </div>

              <div className="repuni-field">
                <label>District*</label>
                <select required>
                  <option value="">Select District</option>
                  <option value="Hyderabad">Hyderabad</option>
                  <option value="Vijayawada">Vijayawada</option>
                  <option value="Chennai">Chennai</option>
                </select>
              </div>

              <div className="repuni-field">
                <label>Pin Code*</label>
                <input type="text" placeholder="Pin Code" required />
              </div>

              <div className="repuni-field">
                <label>College Address*</label>
                <textarea placeholder="College Address" required></textarea>
              </div>

              <div className="repuni-field">
                <label>Experience*</label>
                <input type="text" placeholder="Experience" required />
              </div>

              <div className="repuni-field">
                <label>ID Proof Front*</label>
                <input type="file" required />
              </div>

              <div className="repuni-field">
                <label>ID Proof Back*</label>
                <input type="file" required />
              </div>

              <div className="repuni-field">
                <label>Official Mail ID*</label>
                <input type="email" placeholder="Official Mail ID" required />
              </div>

              <div className="repuni-field">
                <label>Personal Mail ID*</label>
                <input type="email" placeholder="Personal Mail ID" required />
              </div>

              <div className="repuni-field">
                <label>Password*</label>
                <input type="password" placeholder="Password" required />
              </div>

              <div className="repuni-field">
                <label>Confirm Password*</label>
                <input
                  type="password"
                  placeholder="Confirm Password"
                  required
                />
              </div>

              <div className="repuni-field">
                <label>Mobile Number*</label>
                <input type="tel" placeholder="+91" required />
              </div>
            </div>

            <div className="repuni-captcha">
              <p>
                🔒 Please solve the problem below
              </p>
              <div className="repuni-captcha-box">
                <span>2 + 3 + 6 = ?</span>
                <input type="number" placeholder="Answer" required />
              </div>
            </div>

            <div className="repuni-footer">
              <button type="button" className="repuni-back-btn" onClick={onBack}>
                ← Back
              </button>
              <button type="submit" className="repuni-register-btn">
                Register
              </button>
            </div>
          </form>
        </div>
      ) : (
        <div className="repuni-popup">
          <h2>🎉 Welcome to NHRC Representative Portal</h2>
          <p>You have successfully joined the Representative Portal.</p>
          <div className="repuni-popup-info">
            <p><strong>Representative ID:</strong> NHRC-C01</p>
            <p><strong>Mail ID/User ID:</strong> kayalamekiran781@gmail.com</p>
            <p><strong>Password:</strong> ********</p>
          </div>
          <button className="repuni-continue-btn" onClick={handleClosePopup}>
            Continue
          </button>
        </div>
      )}
    </div>
  );
}

export default RepresentativeFormUniversity;
