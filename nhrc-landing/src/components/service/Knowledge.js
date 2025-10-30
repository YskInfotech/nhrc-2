import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../Styles/Knowledge.css";

import event1Image from "../../assets/Knowledge2.png";
import event2Image from "../../assets/knowledge3.png";
import knowledge from "../../assets/know.mp4";

const Knowledge = () => {
  const events = [
    {
      image: event1Image,
      title: "KNOWLEDGE SHARING",
      organizer: "Y. Siva Krishna",
      speaker: "K. Rajashekar",
      schedule: "Aug 20 - Aug 23",
      time: "10AM - 4PM",
      location: "Ameerpet",
    },
    {
      image: event2Image,
      title: "KNOWLEDGE SHARING",
      organizer: "Y. Siva Krishna",
      speaker: "K. Rajashekar",
      schedule: "Jun 20 - Jun 23",
      time: "10AM - 4PM",
      location: "Ameerpet",
    },
  ];

  return (
    <section className="knowledge-wrapper" id="knowledge">
      <div className="container knowledge-section">
        <div className="row align-items-center g-4">
          <div className="col-lg-6 col-12 text-center mb-4 mb-lg-0">
            <video
              src={knowledge}
              autoPlay
              loop
              muted
              playsInline
              className="knowledge-video"
            />
          </div>
          <div className="col-lg-6 col-12 text-center text-lg-start">
            <h3 className="knowledge-title">KNOWLEDGE SHARING</h3>
            <p className="knowledge-description">
              We offer tailored knowledge-sharing solutions that foster
              collaboration and streamline resources. Our platforms enable teams
              to innovate and make informed decisions. With our expertise, we
              help businesses drive productivity and growth, empowering
              organizations to turn knowledge into action.
            </p>
          </div>
        </div>

        <div className="row mt-5 g-4">
          {events.map((event, index) => (
            <div className="col-lg-6 col-md-12" key={index}>
              <div className="knowledge-event-card">
                <div className="knowledge-event-content p-3">
                  <p className="knowledge-event-title">
                    <b>{event.title}</b>
                  </p>
                  <p className="knowledge-event-text">
                    Organizer: {event.organizer}
                  </p>
                  <p className="knowledge-event-text">
                    Speaker: {event.speaker}
                  </p>
                  <p className="knowledge-event-text">
                    Schedule: {event.schedule}
                  </p>
                  <p className="knowledge-event-text">Time: {event.time}</p>
                  <p className="knowledge-event-text">
                    Location: {event.location}
                  </p>
                  <button className="knowledge-register-btn">
                    REGISTER NOW
                  </button>
                </div>
                <div className="knowledge-event-image-wrapper">
                  <img
                    src={event.image}
                    alt="event"
                    className="knowledge-event-image"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Knowledge;
