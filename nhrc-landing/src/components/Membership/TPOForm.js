import React, { useState } from "react";
import "../../Styles/TPOForm.css";
import AutonomousForm from "./RepresentativeAutonomousForm";
import UniversityForm from "./RepresentativeFormUniversity";
import BothForm from "./Both";

function TPOForm({ personalData, onBackToPersonal }) {
  const [selection, setSelection] = useState("");
  const [showNext, setShowNext] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!selection) return alert("Please select one option.");
    setShowNext(true);
  };

  if (showNext) {
    if (selection === "University")
      return <UniversityForm personalData={personalData} onBack={() => setShowNext(false)} />;
    if (selection === "Autonomous")
      return <AutonomousForm personalData={personalData} onBack={() => setShowNext(false)} />;
    if (selection === "Both")
      return <BothForm personalData={personalData} onBack={() => setShowNext(false)} />;
  }

  return (
    <div className="representative-wrapper">
      <div className="representative-card">
        <h5 className="title">REPRESENTATIVE DETAILS</h5>
        <form onSubmit={handleSubmit}>
          <label className="form-label">University or Autonomous *</label>
          <select
            className="form-select"
            value={selection}
            onChange={(e) => setSelection(e.target.value)}
          >
            <option value="">Select One</option>
            <option value="University">University</option>
            <option value="Autonomous">Autonomous</option>
            <option value="Both">Both</option>
          </select>

          <div className="text-center mt-4">
            <button type="submit" className="btn btn-success px-5">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default TPOForm;
