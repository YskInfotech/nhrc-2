import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Styles/AboutUs.css";

import meetingImg from "../assets/about1.png";
import hrLadyImg from "../assets/about.jpg";

const AboutUs = () => {
  return (
    <div className="aboutus-wrapper" id="about">
      <section className="aboutus-section container py-4">
        <div className="row align-items-center g-4">
          <div className="col-lg-4 position-relative">
            <div className="blue-shape"></div>
            <div className="card aboutus-card">
              <img
                src={meetingImg}
                alt="Team Meeting"
                className="img-fluid rounded"
              />
            </div>
          </div>

          <div className="col-lg-8 aboutus-text">
            <h6 className="aboutus-subheading">About Us</h6>
            <h3 className="aboutus-heading mb-3">
              A GLOBAL HR COMMUNITY DRIVING GROWTH, COLLABORATION, AND
              KNOWLEDGE-SHARING
            </h3>
            <p>
              Join the National Human Resources Club — a vibrant global
              community of HR professionals dedicated to growth, collaboration,
              and innovation. We provide global networking opportunities, foster
              knowledge-sharing, and support lasting excellence in human
              resources.
            </p>
          </div>
        </div>
      </section>

      <section className="aboutus-section container py-4">
        <div className="row align-items-center g-4">
          <div className="col-lg-8 aboutus-text">
            <h3 className="aboutus-heading mb-3">Our Goals & Purpose</h3>
            <p>
              At NHRC, our purpose is simple — to be a global hub for HR
              knowledge and networking. We connect professionals across
              industries, support personal and professional growth, and create a
              space for sharing expertise and experiences to advance the HR
              community Together, we aim to shape the future of human resources
              globally.
            </p>
          </div>
          <div className="col-lg-4 position-relative">
            <div className="blue-shape"></div>
            <div className="card aboutus-card">
              <img
                src={hrLadyImg}
                alt="Team Meeting"
                className="img-fluid rounded"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
