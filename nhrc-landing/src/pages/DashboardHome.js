import React from "react";
import { FaUserTie, FaUserGraduate, FaUserShield } from "react-icons/fa";
import "../Styles/DashboardHome.css";

function DashboardHome() {
  const sections = [
    {
      title: "Registration",
      cards: [
        { icon: <FaUserTie />, label: "EMPLOYEE" },
        { icon: <FaUserGraduate />, label: "STUDENT" },
        { icon: <FaUserShield />, label: "TPO" },
      ],
    },
    {
      title: "Current Jobs",
      cards: [
        { icon: <FaUserTie />, label: "EMPLOYEE" },
        { icon: <FaUserGraduate />, label: "STUDENT" },
        { icon: <FaUserShield />, label: "TPO" },
      ],
    },
    {
      title: "Permission",
      cards: [
        { icon: <FaUserTie />, label: "EMPLOYEE" },
        { icon: <FaUserGraduate />, label: "STUDENT" },
        { icon: <FaUserShield />, label: "TPO" },
      ],
    },
    {
      title: "Services",
      cards: [
        { icon: <FaUserTie />, label: "EMPLOYEE" },
        { icon: <FaUserGraduate />, label: "STUDENT" },
        { icon: <FaUserShield />, label: "TPO" },
      ],
    },
  ];

  return (
    <div className="dashboard-home">
      {sections.map((section, index) => (
        <div key={index} className="dashboard-section">
          <h2>{section.title}</h2>
          <div className="card-grid">
            {section.cards.map((card, i) => (
              <div className="dashboard-card" key={i}>
                <div className="icon">{card.icon}</div>
                <h3>{card.label}</h3>
                <div className="status">
                  <div className="approved">
                    <p>50</p>
                    <span>Approved</span>
                  </div>
                  <div className="pending">
                    <p>20</p>
                    <span>Pending</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default DashboardHome;
