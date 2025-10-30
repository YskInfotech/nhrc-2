import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Styles/Events.css";

import upcoming1 from "../assets/upcoming1.png";
import upcoming2 from "../assets/upcoming2.png";
import past1 from "../assets/past1.png";
import past2 from "../assets/past2.png";

const upcomingEvents = [
  {
    title: "HR EVENT",
    organizer: "Y. Siva Krishna",
    speaker: "K. Rajasekhar",
    schedule: "Aug 20 - Aug 23",
    time: "10AM - 4PM",
    location: "Hyderabad",
    image: upcoming1,
    button: "REGISTER NOW",
  },
  {
    title: "KNOWLEDGE",
    organizer: "Y. Siva Krishna",
    speaker: "K. Rajasekhar",
    schedule: "Jun 20 - Jun 23",
    time: "10AM - 4PM",
    location: "Kakinada",
    image: upcoming2,
    button: "REGISTER NOW",
  },
];

const pastEvents = [
  {
    title: "HR EVENT",
    organizer: "Y. Siva Krishna",
    speaker: "K. Rajasekhar",
    schedule: "Aug 20 - Aug 23",
    time: "10AM - 4PM",
    location: "Hyderabad",
    image: past1,
    button: "COMPLETED",
  },
  {
    title: "JOB DRIVE",
    organizer: "Y. Siva Krishna",
    speaker: "K. Rajasekhar",
    schedule: "Aug 20 - Aug 23",
    time: "10AM - 4PM",
    location: "Hyderabad",
    image: past2,
    button: "COMPLETED",
  },
];

export default function Events() {
  const handleViewAll = (type) => {
    alert(`View all ${type} events`);
  };

  const renderCard = (event, index) => (
    <div key={index} className="col-12 col-md-6">
      <div className="event-card  d-flex justify-content-between align-items-center gap-3 ">
        <div className="event-info p-3">
          <p>
            <strong>Event Title :</strong> {event.title}
          </p>
          <p>
            <strong>Organizer Name :</strong> {event.organizer}
          </p>
          <p>
            <strong>Speaker Name :</strong> {event.speaker}
          </p>
          <p>
            <strong>Event Schedule :</strong> {event.schedule}
          </p>
          <p>
            <strong>Time :</strong> {event.time}
          </p>
          <p>
            <strong>Location :</strong> {event.location}
          </p>
          <button
            className={`btn ${
              event.button === "COMPLETED" ? "btn-secondary" : "btn-success"
            } register-btn1`}
          >
            {event.button}
          </button>
        </div>
        <div className="event-img">
          <img src={event.image} alt={event.title} className="img-fluid" />
        </div>
      </div>
    </div>
  );

  return (
    <div className="container my-5" id="events">
      <div className="text-center mb-4">
        <h3 className="section-title">EVENTS</h3>
        <div className="underline"></div>
      </div>

      <div className="d-flex justify-content-between align-items-center mb-2">
        <h5 className="section-subtitle">Up Coming Events :</h5>
        <button
          className="view-all-btn"
          onClick={() => handleViewAll("Upcoming")}
        >
          View All
        </button>
      </div>
      <div className="row g-4 mb-3">
        {upcomingEvents.map((event, i) => renderCard(event, i))}
      </div>

      <div className="d-flex justify-content-between align-items-center mb-2">
        <h5 className="section-subtitle">Past/Completed Events :</h5>
        <button className="view-all-btn" onClick={() => handleViewAll("Past")}>
          View All 
        </button>
      </div>
      <div className="row g-4">
        {pastEvents.map((event, i) => renderCard(event, i))}
      </div>
    </div>
  );
}
