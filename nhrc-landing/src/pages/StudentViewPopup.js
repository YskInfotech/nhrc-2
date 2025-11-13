import React from "react";
import { FaTimes } from "react-icons/fa";
import "../Styles/ViewStudentRegistration.css";

const StudentViewPopup = ({ data, onClose }) => {
  return (
    <div className="studentview-overlay">
      <div className="studentview-popup">
        <button className="studentview-close" onClick={onClose}>
          <FaTimes />
        </button>

        <h3 className="studentview-popup-title">Student Details</h3>
        <img src={data.photo} alt={data.name} className="studentview-popup-img" />

        <div className="studentview-popup-content">
          <div className="studentview-popup-field">
            <label>Student ID</label>
            <input value={data.id} readOnly />
          </div>
          <div className="studentview-popup-field">
            <label>Name</label>
            <input value={data.name} readOnly />
          </div>
          <div className="studentview-popup-field">
            <label>Phone</label>
            <input value={data.phone} readOnly />
          </div>
          <div className="studentview-popup-field">
            <label>Email</label>
            <input value={data.email} readOnly />
          </div>
          <div className="studentview-popup-field">
            <label>University</label>
            <input value={data.university} readOnly />
          </div>
          <div className="studentview-popup-field">
            <label>State</label>
            <input value={data.state} readOnly />
          </div>
          <div className="studentview-popup-field">
            <label>College</label>
            <input value={data.college} readOnly />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentViewPopup;
