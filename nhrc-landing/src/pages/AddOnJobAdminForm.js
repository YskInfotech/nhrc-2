import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Styles/AddOnJobAdminForm.css"; 

const AddOnJobAdminForm = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    salaryMin: "",
    salaryMax: "",
    perks: [],
    jobLocation: "",
    jobLocality: "",
    openings: "",
    deadline: "",
    banner: null,
  });

  const perkOptions = [
    "PF/ESI",
    "Health insurance",
    "Paid leave",
    "Food",
    "PF",
    "ESI",
    "Incentives",
    "Bonus",
    "Food Allowances",
    "Two-way cab",
  ];

  useEffect(() => {
    const prevData = JSON.parse(localStorage.getItem("jobFormData"));
    if (!prevData) navigate("/add-job");
  }, [navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handlePerkClick = (perk) => {
    setFormData((prev) => {
      const exists = prev.perks.includes(perk);
      return {
        ...prev,
        perks: exists
          ? prev.perks.filter((p) => p !== perk)
          : [...prev.perks, perk],
      };
    });
  };

  const handleBannerUpload = (e) => {
    const file = e.target.files[0];
    if (file) setFormData((prev) => ({ ...prev, banner: file.name }));
  };

  const handleBack = () => {
    navigate("/AddOnJobForm");
  };

  const handleSubmit = () => {
    const prevData = JSON.parse(localStorage.getItem("jobFormData"));
    const combinedData = { ...prevData, ...formData, id: Date.now() };

    const allJobs = JSON.parse(localStorage.getItem("allJobs")) || [];
    allJobs.push(combinedData);
    localStorage.setItem("allJobs", JSON.stringify(allJobs));

    localStorage.setItem("finalJobData", JSON.stringify(combinedData));

    alert("Job Posted Successfully!");
    navigate("/AddOnJobForm");
  };

  return (
    <div className="addonjobadmin-container mt-4 mb-5">
      <h4 className="addonjobadmin-title">ADD ON JOB - Admin Form</h4>

      <div className="addonjobadmin-card">
      
        <div className="row mb-3">
          <div className="col-md-6">
            <label className="addonjobadmin-label">
              Salary Range (Minimum)*
            </label>
            <select
              className="addonjobadmin-select"
              name="salaryMin"
              value={formData.salaryMin}
              onChange={handleChange}
            >
              <option value="">Minimum</option>
              <option value="10000">10,000</option>
              <option value="20000">20,000</option>
              <option value="30000">30,000</option>
              <option value="40000">40,000</option>
            </select>
          </div>

          <div className="col-md-6">
            <label className="addonjobadmin-label">
              Salary Range (Maximum)*
            </label>
            <select
              className="addonjobadmin-select"
              name="salaryMax"
              value={formData.salaryMax}
              onChange={handleChange}
            >
              <option value="">Maximum</option>
              <option value="30000">30,000</option>
              <option value="40000">40,000</option>
              <option value="50000">50,000</option>
              <option value="60000">60,000</option>
            </select>
          </div>
        </div>

        
        <div className="mb-3">
          <label className="addonjobadmin-label">Perks & Benefits*</label>
          <div className="addonjobadmin-perks">
            {perkOptions.map((perk) => (
              <span
                key={perk}
                className={`addonjobadmin-perk ${
                  formData.perks.includes(perk) ? "selected" : ""
                }`}
                onClick={() => handlePerkClick(perk)}
              >
                {perk} +
              </span>
            ))}
          </div>
        </div>

       
        <div className="row mb-3">
          <div className="col-md-6">
            <label className="addonjobadmin-label">Job Location*</label>
            <input
              type="text"
              className="addonjobadmin-input"
              name="jobLocation"
              placeholder="Enter location"
              value={formData.jobLocation}
              onChange={handleChange}
            />
          </div>

          <div className="col-md-6">
            <label className="addonjobadmin-label">Job Locality*</label>
            <input
              type="text"
              className="addonjobadmin-input"
              name="jobLocality"
              placeholder="Enter locality"
              value={formData.jobLocality}
              onChange={handleChange}
            />
          </div>
        </div>

        
        <div className="row mb-3">
          <div className="col-md-6">
            <label className="addonjobadmin-label">Number of Openings*</label>
            <input
              type="number"
              className="addonjobadmin-input"
              name="openings"
              placeholder="Number of openings"
              value={formData.openings}
              onChange={handleChange}
            />
          </div>

          <div className="col-md-6">
            <label className="addonjobadmin-label">Application Deadline*</label>
            <input
              type="date"
              className="addonjobadmin-input"
              name="deadline"
              value={formData.deadline}
              onChange={handleChange}
            />
          </div>
        </div>

     
        <div className="mb-4">
          <label className="addonjobadmin-label">Job Banner*</label>
          <input
            type="file"
            accept=".jpg,.png"
            className="addonjobadmin-file"
            onChange={handleBannerUpload}
          />
          {formData.banner && (
            <small className="addonjobadmin-fileinfo">
              Uploaded: {formData.banner}
            </small>
          )}
        </div>

      
        <div className="addonjobadmin-btnbox">
          <button
            className="addonjobadmin-btn back"
            onClick={handleBack}
          >
            « Back
          </button>
          <button
            className="addonjobadmin-btn post"
            onClick={handleSubmit}
          >
            Post Job
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddOnJobAdminForm;
