import React from "react";
import "../Styles/HeroSection.css";
import bgvideo from "../assets/bg-video.mp4";

const HeroSection = () => {
  return (
    <div className="hero-container" id="home">
      <video className="background-video" autoPlay loop muted playsInline>
        <source src={bgvideo} type="video/mp4" />
      </video>

      <div className="hero-content text-center text-white">
        <p className="fw-semibold">
          Greetings from <span>NHRC Network.</span>
        </p>
        <h1 className="fw-bold hero-heading">
          India's Biggest HR Professional Network
        </h1>
        <p className="hero-subtext">
          We are a professionally run, self-governing, non-profit organization
          that acts as a catalyst for developing tomorrow’s leaders.
        </p>

        <div className="hero-buttons">
          <button className="btn custom-btn12">JOIN US</button>
          <button className="btn custom-border-btn">KNOW MORE</button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
