import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Styles/Chapters.css";


import HyderabadImg from "../assets/hyd.png";
import AmaravathiImg from "../assets/amaravthi.png";
import KakinadaImg from "../assets/gujrat.png";
import BangaloreImg from "../assets/karnataka.png";
import TirupathiImg from "../assets/tamilnadu.png";
import MumbaiImg from "../assets/maha.png";

const chapters = [
  {
    name: "Telangana",
    members: "more than 500",
    icon: HyderabadImg,
    btnColor: "danger",
  },
  {
    name: "Andhra Pradesh",
    members: "more than 240",
    icon: AmaravathiImg,
    btnColor: "danger",
  },
  {
    name: "Gujarat",
    members: "more than 110",
    icon: KakinadaImg,
    btnColor: "danger",
  },
  {
    name: "Karnataka",
    members: "more than 200",
    icon: BangaloreImg,
    btnColor: "danger",
  },
  {
    name: "Tamil Nadu",
    members: "more than 100",
    icon: TirupathiImg,
    btnColor: "danger",
  },
  {
    name: "Maharashtra",
    members: "more than 50",
    icon: MumbaiImg,
    btnColor: "danger",
  },
];

export default function Chapters() {
  return (
    <div className="container my-5 mt-1" id="chapters">
      <div className="text-center mb-4">
        <h3 className="section-title">CHAPTERS</h3>
        <div className="underline"></div>
      </div>

      <div className="row g-4 justify-content-center">
        {chapters.map((chapter, index) => (
          <div key={index} className="col-12 col-sm-6 col-md-4">
            <div className="chapter-card text-center p-4 h-100">
              <div className="icon-container mb-3">
                <img
                  src={chapter.icon}
                  alt={chapter.name}
                  className="chapter-icon"
                />
              </div>
              <h5 className="chapter-title">{chapter.name}</h5>
              <p className="chapter-members">
                This chapter has {chapter.members} members
              </p>
              <button className={`btn btn-${chapter.btnColor} get-btn`}>
                Get-Membership
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
