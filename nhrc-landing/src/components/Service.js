import React from "react";
import GlobalNetwork from "./service/GlobalNetwork";
import Knowledge from "./service/Knowledge";
import UpdateSkills from "./service/UpdateSkills";
import JobsFairs from "./service/JobsFairs";
import TalentPublication from "./service/TalentPublication";
import Youtube from "./service/Youtube";
import "../App.css";

function Service() {
  return (
    <div id="services" className="services-container">
      <h1 className="service-heading123">Services</h1>
      <div className="service-blocks">
        <GlobalNetwork />
        <Knowledge />
        <UpdateSkills />
        <JobsFairs />
        <TalentPublication />
        <Youtube />
      </div>
    </div>
  );
}

export default Service;
