import React, { useState } from "react";
import "../../Styles/Both.css";

function Both({ onBack }) {
  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowPopup(true);
  };

  const handleContinue = () => {
    setShowPopup(false);
  };

  return (
    <div className="repuni-container">
      {!showPopup ? (
        <div className="repuni-card">
         
          <div className="repuni-progress-bar">
            <div className="repuni-step completed">
              <div className="repuni-circle">1</div>
              <p>Personal Details</p>
            </div>
            <div className="repuni-arrow">→</div>
            <div className="repuni-step active">
              <div className="repuni-circle">2</div>
              <p>TPO Details</p>
            </div>
          </div>

          <h2 className="repuni-heading">
            REPRESENTATIVE UNIVERSITY / AUTONOMOUS DETAILS
          </h2>

          
          <form onSubmit={handleSubmit} className="repuni-form">
            <div className="repuni-grid">
              <div>
                <label>College Name*</label>
                <input type="text" placeholder="College Name" required />
              </div>
              <div>
                <label>University Name*</label>
                <input type="text" placeholder="University Name" required />
              </div>

              <div>
                <label>College Code*</label>
                <input type="text" placeholder="College Code" required />
              </div>
              <div>
                <label>Designation*</label>
                <select required>
                  <option value="">Designation</option>
                  <option>TPO</option>
                  <option>Principal</option>
                  <option>HOD</option>
                  <option>Others</option>
                </select>
              </div>

              <div>
                <label>Department Name*</label>
                <input type="text" placeholder="Department" required />
              </div>
              <div>
                <label>State*</label>
                <select required>
                  <option value="">State</option>
                  <option>Andhra Pradesh</option>
                  <option>Telangana</option>
                  <option>Tamil Nadu</option>
                  <option>Karnataka</option>
                </select>
              </div>

              <div>
                <label>District*</label>
                <select required>
                  <option value="">District</option>
                  <option>Hyderabad</option>
                  <option>Vijayawada</option>
                  <option>Chennai</option>
                </select>
              </div>
              <div>
                <label>Pin Code*</label>
                <input type="text" placeholder="Pin Code" required />
              </div>

              <div>
                <label>University Address*</label>
                <textarea placeholder="University Address" required></textarea>
              </div>
              <div>
                <label>Experience*</label>
                <select required>
                  <option value="">Experience</option>
                  <option>0–2 Years</option>
                  <option>3–5 Years</option>
                  <option>6–10 Years</option>
                  <option>10+ Years</option>
                </select>
              </div>

              <div>
                <label>ID Proof*</label>
                <div className="repuni-file-group">
                  <input type="file" required />
                  <input type="file" required />
                </div>
              </div>
              <div>
                <label>Official Mail ID*</label>
                <input type="email" placeholder="Official Mail ID" required />
              </div>

              <div>
                <label>Personal Mail ID*</label>
                <input type="email" placeholder="Personal Mail ID" required />
              </div>
              <div>
                <label>Password*</label>
                <input type="password" placeholder="Password" required />
              </div>

              <div>
                <label>Confirm Password*</label>
                <input type="password" placeholder="Confirm Password" required />
              </div>
              <div>
                <label>Mobile Number*</label>
                <input type="tel" placeholder="+91" required />
              </div>
            </div>

           
            <div className="repuni-captcha">
              <p>🔒 Please solve the problem below</p>
              <div className="repuni-captcha-box">
                <span>2 + 3 + 6 = ?</span>
                <input type="number" placeholder="Answer" required />
              </div>
            </div>

            
            <div className="repuni-btn-row">
              <button type="button" className="repuni-back" onClick={onBack}>
                ← Back
              </button>
              <button type="submit" className="repuni-register">
                Register
              </button>
            </div>
          </form>
        </div>
      ) : (
        
        <div className="repuni-popup">
          <h2>🎉 Welcome to NHRC Representative Portal</h2>
          <p>You have successfully joined the Representative Portal.</p>
          <div className="repuni-popup-box">
            <p><strong>Representative ID:</strong> NHRC-R01</p>
            <p><strong>Mail ID/User ID:</strong> representative@nhrc.edu.in</p>
            <p><strong>Password:</strong> ********</p>
          </div>
          <button onClick={handleContinue} className="repuni-continue">
            Continue
          </button>
        </div>
      )}
    </div>
  );
}

export default Both;
