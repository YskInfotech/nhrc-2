import React from "react";
import "../Styles/CurrentJobs.css";
import { FaMapMarkerAlt, FaClock, FaMoneyBillWave } from "react-icons/fa";

import hrInternImg from "../assets/CurrentJobs1.png";
import trainerImg from "../assets/CurrentJobs2.png";
import analystImg from "../assets/CurrentJobs3.png";
import hrIntern2Img from "../assets/CurrentJobs4.png";

const jobs = [
  {
    title: "HR Intern",
    company: "YSK INFOTECH PVT LTD",
    experience: "0 YEARS",
    stipend: "₹ 8000",
    location: "AMEERPET  Hyderabad",
    period: "3 Months or 6 Months Benefits",
    qualification: "Any Degree",
    image: hrInternImg,
  },
  {
    title: "Trainer",
    company: "YSK INFOTECH PVT LTD",
    experience: "0 YEARS",
    stipend: "₹ 8000",
    location: "AMEERPET  Hyderabad",
    period: "3 Months or 6 Months Benefits",
    qualification: "Any Degree",
    image: trainerImg,
  },
  {
    title: "Business Analyst",
    company: "YSK INFOTECH PVT LTD",
    experience: "0 YEARS",
    stipend: "₹ 8000",
    location: "AMEERPET  Hyderabad",
    period: "3 Months or 6 Months Benefits",
    qualification: "Any Degree",
    image: analystImg,
  },
  {
    title: "HR Intern",
    company: "YSK INFOTECH PVT LTD",
    experience: "0 YEARS",
    stipend: "₹ 8000",
    location: "AMEERPET  Hyderabad",
    period: "3 Months or 6 Months Benefits",
    qualification: "Any Degree",
    image: hrIntern2Img,
  },
];

const handleViewAll = (type) => {
  alert(`View all ${type} jobs`);
};

const CurrentJobs = () => {
  return (
    <div className="jobs-section" id="current">
      <div className="jobs-header">
        <h2 className="jobs-title">CURRENT JOBS</h2>
        <button className="view-all" onClick={() => handleViewAll("Current")}>
          View All
        </button>
      </div>

      <div className="jobs-grid">
        {jobs.map((job, index) => (
          <div key={index} className="job-card">
            <div className="job-details">
              <h3>{job.title}</h3>
              <p>
                <strong>Company:</strong> {job.company}
              </p>
              <p className="job-meta">
                <FaClock className="icon" /> {job.experience}{" "}
                <FaMoneyBillWave className="icon" /> {job.stipend}
              </p>
              <p>
                <FaMapMarkerAlt className="icon" /> {job.location}
              </p>
              <p>
                <strong>Period:</strong> {job.period}
              </p>
              <p>
                <strong>Qualification:</strong> {job.qualification}
              </p>
              <button className="apply-btn">APPLY NOW</button>
            </div>

            <div className="job-image">
              <img src={job.image} alt={job.title} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CurrentJobs;
