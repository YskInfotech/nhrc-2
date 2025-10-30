import React, { useState } from "react";
import { FaDownload } from "react-icons/fa";
import "../../Styles/TalentPublication.css";

import pub1 from "../../assets/TalentPublication1.jpg";
import pub2 from "../../assets/TalentPublication2.jpg";
import pub3 from "../../assets/TalentPublication4.jpeg";

const publications = [
  { id: 1, title: "Talent Publication Vol. 1", img: pub1, link: pub1 },
  { id: 2, title: "Talent Publication Vol. 2", img: pub2, link: pub2 },
  { id: 3, title: "Talent Publication Vol. 3", img: pub3, link: pub3 },
];

const TalentPublication = () => {
  const [selected, setSelected] = useState(null);

  const handleDownload = () => {
    if (selected) {
      const link = document.createElement("a");
      link.href = selected.link;
      link.download = selected.title;
      link.click();
    }
  };

  return (
    <section className="talent-section" id="talent">
      
      <div className="talent-content">
        <h2>TALENT PUBLICATION</h2>
        <p>
          Showcase your top talent and attract more of it. Our Talent
          Publication service highlights your team's expertise and achievements,
          positioning your company as an industry leader and a top destination
          for candidates.
        </p>
      </div>

      <div className="talent-left">
        <div className="talent-cards">
          {publications.map((item) => (
            <div
              key={item.id}
              className={`talent-card ${
                selected?.id === item.id ? "selected" : ""
              }`}
              onClick={() => setSelected(item)}
            >
              <img src={item.img} alt={item.title} className="talent-image" />
            </div>
          ))}
        </div>

        <div className="talent-download-center">
          <button
            className="download-btn single-download-btn"
            onClick={handleDownload}
            disabled={!selected}
          >
            <FaDownload className="download-icon" /> Download
          </button>
        </div>
      </div>
    </section>
  );
};

export default TalentPublication;
