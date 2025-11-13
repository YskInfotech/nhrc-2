import React, { useState } from "react";
import "../../Styles/StudentForm.css";
import UniversityPage from "./UniversityPage";
import AutonomousPage from "./StudentAutonomousForm";

function StudentForm({ personalData, onBackToPersonal }) {
  const [universityType, setUniversityType] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!universityType) {
      alert("Please select either University or Autonomous.");
      return;
    }

    localStorage.setItem(
      "studentSelection",
      JSON.stringify({
        personalData,
        universityType,
      })
    );

    setSubmitted(true);
  };

 
  const handleBackToStudentSelection = () => {
    setSubmitted(false); 
  };

  
  if (submitted && universityType === "University") {
    return (
      <UniversityPage
        personalData={personalData}
        onBackToPersonal={handleBackToStudentSelection} 
      />
    );
  }

  if (submitted && universityType === "Autonomous") {
    return (
      <AutonomousPage
        personalData={personalData}
        onBackToPersonal={handleBackToStudentSelection} 
      />
    );
  }

  return (
    <div className="student-wrapper">
      
      <div className="step-progress">
        <div className="step active">1</div>
        <div className="line"></div>
        <div className="step active">2</div>
      </div>

      <div className="step-labels">
        <span>Personal Details</span>
        <span>Student Details</span>
      </div>

      <div className="student-card">
        <h3 className="student-title">STUDENT UN/AU DETAILS</h3>

        <form className="student-form" onSubmit={handleSubmit}>
          <label className="student-label">
            University or Autonomous <span className="text-danger">*</span>
          </label>
          <select
            className="student-select"
            value={universityType}
            onChange={(e) => setUniversityType(e.target.value)}
          >
            <option value="">Select One</option>
            <option value="University">University</option>
            <option value="Autonomous">Autonomous</option>
          </select>

          <div className="student-buttons">
            <button
              type="button"
              className="back-btn"
              onClick={onBackToPersonal} 
            >
              ← Back
            </button>
            <button type="submit" className="student-btn">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default StudentForm;
