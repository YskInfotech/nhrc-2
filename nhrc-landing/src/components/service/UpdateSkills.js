import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../Styles/UpdateSkills.css";

import eventImage1 from "../../assets/UpdateSkills4.png";
import eventImage2 from "../../assets/UpdateSkills3.png";
import skills from "../../assets/skills.mp4";

const UpdateSkills = () => {
  const programs = [
    {
      title: "Digital Marketing",
      category: "Marketing",
      trainer: "K. Rajashekhar",
      schedule: "Sep 20 - Oct 30",
      time: "10AM - 2PM",
      location: "Ameerpet",
      image: eventImage1,
    },
    {
      title: "Digital Marketing",
      category: "Marketing",
      trainer: "K. Rajashekhar",
      schedule: "Sep 20 - Oct 30",
      time: "10AM - 2PM",
      location: "Ameerpet",
      image: eventImage2,
    },
  ];

  return (
    <div className="update-wrapper" id="UpdateSkills">
      <div className="update-section container-fluid">
        <div className="row align-items-center">
          <div className="col-lg-6 text-center mb-4 mb-lg-0">
            <video
              src={skills}
              autoPlay
              loop
              muted
              className="update-image img-fluid"
            />
          </div>

          <div className="col-lg-6">
            <h3 className="update-title">UPDATE SKILLS & TRAINING</h3>
            <p className="update-description">
              We provide tailored knowledge-sharing solutions that foster
              collaboration, streamline resources, and help teams innovate. Our
              platforms enable businesses to tap into collective expertise and
              drive productivity and growth.
            </p>
            <div className="social-icons mt-3">
              <i className="bi bi-youtube"></i>
              <i className="bi bi-facebook ms-3"></i>
              <i className="bi bi-linkedin ms-3"></i>
            </div>
          </div>
        </div>
      </div>

      <div className="update-program-list container-fluid">
        <div className="row">
          {programs.map((program, index) => (
            <div className="col-lg-6 mb-4" key={index}>
              <div className="update-program-card">
                
                <div className="update-program-content">
                  <p className="program-title">
                    <b>{program.title}</b>
                  </p>
                  <p className="program-text">
                    Program Category: {program.category}
                  </p>
                  <p className="program-text">
                    Trainer/Host: {program.trainer}
                  </p>
                  <p className="program-text">
                    Event Schedule: {program.schedule}
                  </p>
                  <p className="program-text">Time: {program.time}</p>
                  <p className="program-text">Location: {program.location}</p>
                  <button className="register-btn">REGISTER NOW</button>
                </div>

                
                <div className="update-program-image-wrapper">
                  <img
                    src={program.image}
                    alt="program"
                    className="update-program-image"
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

export default UpdateSkills;
