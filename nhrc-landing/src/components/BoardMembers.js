import React from "react";
import { FaLinkedin, FaTwitter, FaFacebook } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Styles/BoardMembers.css";

import img1 from "../assets/board1.jpg";
import img2 from "../assets/board3.jpg";
import img3 from "../assets/board4.jpg";
import img4 from "../assets/board2.jpg";
import img5 from "../assets/board6.jpg";
import img6 from "../assets/board5.jpg";

const boardMembers = [
  {
    name: "Siva Krishna",
    title1: "National President, NHRC",
    title2: "Manager Director, YSK Infotech",
    image: img1,
    linkedin: "#",
    twitter: "#",
    facebook: "#",
  },
  {
    name: "Veera Chappi",
    title1: "Vice President(NHRC)",
    title2: "Head of Talent Acquisitions Foxconn Interconnect Technology",
    image: img5,
    linkedin: "#",
    twitter: "#",
    facebook: "#",
  },
  {
    name: "Murali Krishna",
    title1: "Secretary (NHRC)",
    title2: "Head of Talent Acquisitions, Synergy Workforce Pvt Ltd",
    image: img3,
    linkedin: "#",
    twitter: "#",
    facebook: "#",
  },
  {
    name: "Rajasekhar",
    title1: "Treasurer (NHRC)",
    title2: "HR Business Partner, SVV Infotech Pvt Ltd",
    image: img2,
    linkedin: "#",
    twitter: "#",
    facebook: "#",
  },
  {
    name: "Anil",
    title1: "Ex-Officio Member (NHRC)",
    title2: " Sr HR Genaralist YSK InfoTech Pvt. Ltd.",
    image: img6,
    linkedin: "#",
    twitter: "#",
    facebook: "#",
  },
  {
    name: "Yeswanth Tangudu",
    title1: "Trustee (NHRC)",
    title2: " Human Resource Business Partner Jubilant FoodWorks Ltd",
    image: img4,
    linkedin: "#",
    twitter: "#",
    facebook: "#",
  },
];

const BoardMembers = () => {
  return (
    <div className="board-section container py-5" id="board-members">
      <h4 className="board-title mb-5 text-center">Our Board Members</h4>

      <div className="row justify-content-center g-4">
        {boardMembers.map((member, index) => (
          <div key={index} className="col-12 col-md-6 col-lg-6">
            <div className="card board-card d-flex flex-row align-items-center h-100 mx-auto">
              <img
                src={member.image}
                alt={member.name}
                className="board-image me-3"
              />

              <div className="board-content">
                <div className="board-icons">
                  <a href={member.linkedin} target="_blank" rel="noreferrer">
                    <FaLinkedin />
                  </a>
                  <a href={member.twitter} target="_blank" rel="noreferrer">
                    <FaTwitter />
                  </a>
                  <a href={member.facebook} target="_blank" rel="noreferrer">
                    <FaFacebook />
                  </a>
                </div>

                <div className="board-text">
                  <h5 className="board-name mb-1">{member.name}</h5>
                  <p className="board-title1 mb-1">{member.title1}</p>
                  <p className="board-title2 mb-0">{member.title2}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BoardMembers;
