import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../Styles/JobsFairs.css";

import jobCardImage1 from "../../assets/jobfairs4.png";
import jobCardImage2 from "../../assets/JobsFairs3.png";
import jobfairs from "../../assets/jobfairs.mp4";

const JobsFairs = () => {
  const jobs = [
    {
      title: "National Job Fair",
      company: "Infosys",
      date: "Sep 20",
      time: "10AM - 5PM",
      location: "Ameerpet",
      image: jobCardImage1,
    },
    {
      title: "National Job Fair",
      company: "Infosys",
      date: "Sep 20",
      time: "10AM - 5PM",
      location: "Ameerpet",
      image: jobCardImage2,
    },
  ];

  return (
    <div className="jobs-wrapper" id="jobs">
      <div className="jobs-section container-fluid">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <h3 className="jobs-title">JOBS & JOB FAIRS</h3>
            <p className="jobs-description">
              Explore the latest job opportunities and career fairs. Connect
              with top employers, discover new roles, and advance your career.
              <br />
              Attend events to network with industry leaders and gain insights.
              Stay updated on trends and unlock new opportunities for growth.
              Take charge of your career and open doors to exciting professional
              opportunities.
            </p>
          </div>

          <div className="col-lg-6 text-center mt-4 mt-lg-0">
            <video
              src={jobfairs}
              autoPlay
              loop
              muted
              className="jobs-image img-fluid"
            />
          </div>
        </div>
      </div>

      <div className="jobs-list container-fluid">
        <div className="row">
          {jobs.map((job, index) => (
            <div className="col-lg-6 mb-4" key={index}>
              <div className="jobs-card">
                <div className="jobs-card-content">
                  <p className="job-title">
                    <b>{job.title}</b>
                  </p>
                  <p className="job-text">Job Conducting Company: {job.company}</p>
                  <p className="job-text">Date: {job.date}</p>
                  <p className="job-text">Time: {job.time}</p>
                  <p className="job-text">Location: {job.location}</p>
                  <button className="job-register-btn">REGISTER NOW</button>
                </div>

                <div className="jobs-card-image-wrapper">
                  <img
                    src={job.image}
                    alt="job fair"
                    className="jobs-card-image"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default JobsFairs;
