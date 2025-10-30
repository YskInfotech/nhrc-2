import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../Styles/GlobalNetwork.css";

import event1Image from "../../assets/globel2.png";
import event2Image from "../../assets/global3.png";
import video from "../../assets/globe.mp4";

const GlobalNetwork = () => {
  const events = [
    {
      image: event1Image,
      title: "HR EVENT",
      organizer: "K. Siva Krishna",
      speaker: "K. Rajashekar",
      schedule: "Aug 20 - Aug 23",
      time: "10AM - 4PM",
      location: "Ameerpet",
    },
    {
      image: event2Image,
      title: "HR EVENT",
      organizer: "K. Siva Krishna",
      speaker: "K. Rajashekar",
      schedule: "Jun 20 - Jun 23",
      time: "10AM - 4PM",
      location: "Ameerpet",
    },
  ];

  return (
    <div className="global-network-wrapper" id="global">
      <div className="global-network-section container-fluid">
        <div className="row align-items-center">
          <div className="col-lg-6 text-center mb-4 mb-lg-0">
            <video
              src={video}
              autoPlay
              loop
              muted
              className="global-network-image img-fluid"
            />
          </div>

          <div className="col-lg-6">
            <h3 className="global-network-title">GLOBAL NETWORKING</h3>
            <p className="global-network-description">
              We provide global networking solutions that help businesses
              connect, collaborate, and scale across borders. With secure
              infrastructure and 24/7 support, we help you establish a reliable
              network that grows with your business and ensures uninterrupted
              operations.
            </p>
          </div>
        </div>
      </div>

      <div className="global-event-list container-fluid mt">
        <div className="row">
          {events.map((event, index) => (
            <div className="col-lg-6 mb-4" key={index}>
              <div className="global-event-card">
                <div className="global-event-content">
                  <p className="global-event-title">
                    <b>{event.title}</b>
                  </p>
                  <p className="global-event-text">
                    Organizer Name: {event.organizer}
                  </p>
                  <p className="global-event-text">
                    Speaker Name: {event.speaker}
                  </p>
                  <p className="global-event-text">
                    Event Schedule: {event.schedule}
                  </p>
                  <p className="global-event-text">Time: {event.time}</p>
                  <p className="global-event-text">
                    Location: {event.location}
                  </p>
                  <button className="global-register-btn">REGISTER NOW</button>
                </div>

                <div className="global-event-image-wrapper">
                  <img
                    src={event.image}
                    alt="event"
                    className="global-event-image"
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

export default GlobalNetwork;
