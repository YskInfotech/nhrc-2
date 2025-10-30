import React, { useState } from "react";
import "../../Styles/Youtube.css";
import bgyoutube from "../../assets/bg-youtube.jpg";

const Youtube = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayVideo = () => setIsPlaying(true);

  return (
    <section className="youtube-section">
      <div className="video-container">
        {!isPlaying ? (
          <div className="thumbnail" onClick={handlePlayVideo}>
            <img
              src={bgyoutube}
              alt="How to Boost Your Business"
              className="thumbnail-image"
            />
            <div className="overlay">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/7/75/YouTube_social_white_squircle_%282017%29.svg"
                alt="YouTube Icon"
                className="youtube-icon"
              />
              <p className="overlay-text">Watch on YouTube</p>
            </div>
          </div>
        ) : (
          <div className="video-wrapper">
            <iframe
              src="https://www.youtube.com/embed/3x4zM7O8pZI?autoplay=1"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        )}
      </div>
    </section>
  );
};

export default Youtube;
