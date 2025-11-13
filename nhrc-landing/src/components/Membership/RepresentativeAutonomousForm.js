import React, { useState } from "react";
import "../../Styles/RepresentativeAutonomousForm.css";

function RepresentativeAutonomousForm({ onBack }) {
  const [showSuccess, setShowSuccess] = useState(false);

  const handleRegister = (e) => {
    e.preventDefault();
    setShowSuccess(true);
  };

  const handleClosePopup = () => {
    setShowSuccess(false);
  };

  return (
    <div className="autonomous-wrapper">
      {!showSuccess ? (
        <div className="autonomous-card">
         
          <div className="autonomous-progress">
            <div className="autonomous-step completed">
              <div className="autonomous-circle">1</div>
              <p>Personal Details</p>
            </div>
            <div className="autonomous-arrow">→</div>
            <div className="autonomous-step active">
              <div className="autonomous-circle">2</div>
              <p>TPO Details</p>
            </div>
          </div>

          <h2 className="autonomous-title">
            REPRESENTATIVE AUTONOMOUS DETAILS
          </h2>

          <form onSubmit={handleRegister} className="autonomous-form">
            <div className="autonomous-grid">
              <div className="autonomous-field">
                <label>College Name*</label>
                <input type="text" placeholder="College Name" required />
              </div>

              <div className="autonomous-field">
                <label>College Code*</label>
                <input type="text" placeholder="College Code" required />
              </div>

              <div className="autonomous-field">
                <label>Designation*</label>
                <select required>
                  <option value="">Designation</option>
                  <option value="TPO">TPO</option>
                  <option value="Principal">Principal</option>
                  <option value="HOD">HOD</option>
                  <option value="Others">Others</option>
                </select>
              </div>

              <div className="autonomous-field">
                <label>Department*</label>
                <input type="text" placeholder="Department" required />
              </div>

              <div className="autonomous-field">
                <label>State*</label>
                <select required>
                  <option value="">State</option>
                  <option>Andhra Pradesh</option>
                  <option>Telangana</option>
                  <option>Tamil Nadu</option>
                  <option>Karnataka</option>
                </select>
              </div>

              <div className="autonomous-field">
                <label>District*</label>
                <select required>
                  <option value="">District</option>
                  <option>Hyderabad</option>
                  <option>Vijayawada</option>
                  <option>Chennai</option>
                </select>
              </div>

              <div className="autonomous-field">
                <label>Pin Code*</label>
                <input type="text" placeholder="Pincode" required />
              </div>

              <div className="autonomous-field">
                <label>College Address*</label>
                <textarea placeholder="College Address" required></textarea>
              </div>

              <div className="autonomous-field">
                <label>Upload ID Proof*</label>
                <div className="autonomous-file-row">
                  <input type="file" required />
                  <input type="file" required />
                </div>
              </div>

              <div className="autonomous-field">
                <label>Experience*</label>
                <select required>
                  <option value="">Experience</option>
                  <option value="0-2">0-2 years</option>
                  <option value="3-5">3-5 years</option>
                  <option value="6-10">6-10 years</option>
                  <option value="10+">10+ years</option>
                </select>
              </div>

              <div className="autonomous-field">
                <label>Official Mail ID*</label>
                <input type="email" placeholder="Official Mail ID" required />
              </div>

              <div className="autonomous-field">
                <label>Personal Email ID*</label>
                <input type="email" placeholder="Personal Email ID" required />
              </div>

              <div className="autonomous-field">
                <label>Password*</label>
                <input type="password" placeholder="Password" required />
              </div>

              <div className="autonomous-field">
                <label>Confirm Password*</label>
                <input type="password" placeholder="Confirm Password" required />
              </div>

              <div className="autonomous-field">
                <label>Mobile Number*</label>
                <input type="tel" placeholder="+91" required />
              </div>
            </div>

          
            <div className="autonomous-captcha">
              <p className="captcha-label">Please solve the problem below</p>
              <div className="captcha-row">
                <p className="captcha-text">🔒 2 + 3 + 6 = ?</p>
                <input type="number" placeholder="Answer" required />
              </div>
            </div>

            
            <div className="autonomous-footer">
              <button
                type="button"
                className="autonomous-back-btn"
                onClick={onBack}
              >
                ← Back
              </button>
              <button type="submit" className="autonomous-register-btn">
                Register
              </button>
            </div>
          </form>
        </div>
      ) : (
        <div className="autonomous-popup">
          <h2>🎉 Welcome to NHRC Representative Portal</h2>
          <p>You have successfully joined the Representative Portal.</p>
          <div className="popup-info">
            <p>
              <strong>Representative ID:</strong> NHRC-A01
            </p>
            <p>
              <strong>Mail ID/User ID:</strong> representative@nhrc.edu.in
            </p>
            <p>
              <strong>Password:</strong> ********
            </p>
          </div>
          <button
            className="autonomous-continue-btn"
            onClick={handleClosePopup}
          >
            Continue
          </button>
        </div>
      )}
    </div>
  );
}

export default RepresentativeAutonomousForm;
