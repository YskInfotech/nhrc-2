import React, { useState } from "react";
import "../Styles/GetInTouch.css";
import { IoReloadCircle } from "react-icons/io5";

function GetInTouch() {
const [showPopup, setShowPopup] = useState(false);

const togglePopup = () => setShowPopup(!showPopup);

return (
<> <button className="git-btn" onClick={togglePopup}>
Get in Touch </button>


  {showPopup && (
    <div className="git-overlay" onClick={togglePopup}>
      <div
        className="git-popup"
        onClick={(e) => e.stopPropagation()} 
      >
        <span className="git-close" onClick={togglePopup}>
          &times;
        </span>
        <h2 className="git-title">Get in Touch</h2>

        <form className="git-form">
          <label>Name:</label>
          <input type="text" placeholder="Enter your name" required />

          <label>Email:</label>
          <input type="email" placeholder="Enter your email" required />

          <label>Mobile:</label>
          <input type="text" placeholder="Enter your phone number" required />

          <label>Message:</label>
          <textarea placeholder="Your message" rows="4"></textarea>

          <div className="captcha-section">
            <div className="captcha-container">
              <label>Captcha*</label>
              <div className="captcha-box">
                <span className="captcha-text">1S7mT</span>
                <IoReloadCircle className="reload-icon" />
              </div>
            </div>

            <div className="captcha-input">
              <label>Enter Captcha*</label>
              <input type="text" placeholder="Enter Captcha" required />
            </div>
          </div>

          <button type="submit" className="git-submit">
            Send Message
          </button>
        </form>
      </div>
    </div>
  )}
</>


);
}

export default GetInTouch;
