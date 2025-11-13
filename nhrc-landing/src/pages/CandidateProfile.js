
import React from "react";
import "../Styles/CandidateProfile.css";

const CandidateProfile = ({ data, onClose }) => {
  if (!data) return null;

  return (
    <div className="cp-container">

   
      <h2 className="cp-title">Candidate Profile</h2>

    
      <p className="cp-breadcrumb">
        Candidate &gt; <span>{data.firstName} {data.lastName}</span>
      </p>

     
      <div className="cp-actions">
        <button className="cp-btn cp-btn-shortlist">Shortlist</button>
        <button className="cp-btn cp-btn-reject">Reject</button>
        <button className="cp-btn cp-btn-email">Email</button>
        <button className="cp-btn cp-btn-forward">Forward</button>
        <button className="cp-btn cp-btn-download">Download</button>
        <button className="cp-btn cp-btn-delete">Delete</button>
      </div>

      
      <div className="cp-section">
        <div className="cp-section-header">Personal & Contact Information</div>

        <div className="cp-form">
          <div className="cp-field">
            <label>First Name</label>
            <input value={data.firstName} readOnly />
          </div>

          <div className="cp-field">
            <label>Last Name</label>
            <input value={data.lastName} readOnly />
          </div>

          <div className="cp-field">
            <label>Phone Number</label>
            <input value={data.phone} readOnly />
          </div>

          <div className="cp-field">
            <label>Email ID</label>
            <input value={data.email} readOnly />
          </div>

          <div className="cp-field">
            <label>Date of Birth</label>
            <input value={data.dob} readOnly />
          </div>

          <div className="cp-field">
            <label>Gender</label>
            <input value={data.gender} readOnly />
          </div>

          <div className="cp-field full">
            <label>Location</label>
            <input value={data.location} readOnly />
          </div>

          <div className="cp-field">
            <label>PAN Number</label>
            <input value={data.pan} readOnly />
          </div>

          <div className="cp-field">
            <label>Upload PAN</label>
            <button className="cp-upload-btn">Upload</button>
          </div>

          <div className="cp-field">
            <label>Upload Resume</label>
            <button className="cp-upload-btn">Upload</button>
          </div>

          <div className="cp-field full">
            <label>LinkedIn / Portfolio URL</label>
            <input value={data.linkedin} readOnly />
          </div>
        </div>
      </div>

    
      <div className="cp-section">
        <div className="cp-section-header">Educational Information</div>

        <div className="cp-form">
          <div className="cp-field full">
            <label>Highest Qualification</label>
            <input value={data.qualification} readOnly />
          </div>

          <div className="cp-field full">
            <label>Specialization</label>
            <input value={data.specialization} readOnly />
          </div>

          <div className="cp-field full">
            <label>University</label>
            <input value={data.university} readOnly />
          </div>

          <div className="cp-field full">
            <label>College</label>
            <input value={data.college} readOnly />
          </div>

          <div className="cp-field">
            <label>Year of Passing</label>
            <input value={data.yearOfPassing} readOnly />
          </div>
        </div>
      </div>

   
      <div className="cp-section">
        <div className="cp-section-header">Job Details</div>

        <div className="cp-form">
          <div className="cp-field full">
            <label>Position Applied For</label>
            <input value={data.position} readOnly />
          </div>

          <div className="cp-field">
            <label>Preferred Work Mode</label>
            <input value={data.workMode} readOnly />
          </div>

          <div className="cp-field full">
            <label>Key Skills</label>
            <input value={data.skills} readOnly />
          </div>

          <div className="cp-field">
            <label>Expected Salary</label>
            <input value={data.expectedSalary} readOnly />
          </div>

          <div className="cp-field full">
            <label>Why Hire Me</label>
            <textarea value={data.whyHire} rows="3" readOnly></textarea>
          </div>
        </div>
      </div>

      
      <div className="cp-section">
        <div className="cp-section-header">Professional Experience</div>

        <div className="cp-form">
          <div className="cp-field full">
            <label>Previous Company</label>
            <input value={data.prevCompany} readOnly />
          </div>

          <div className="cp-field">
            <label>Previous Role</label>
            <input value={data.prevRole} readOnly />
          </div>

          <div className="cp-field">
            <label>Date of Joining</label>
            <input value={data.joiningDate} readOnly />
          </div>

          <div className="cp-field">
            <label>Relieving Date</label>
            <input value={data.relievingDate} readOnly />
          </div>
        </div>
      </div>

     
      <div className="cp-back-container">
        <button className="cp-back-btn" onClick={onClose}>
          ⬅ Back to Applications
        </button>
      </div>

    </div>
  );
};

export default CandidateProfile;
