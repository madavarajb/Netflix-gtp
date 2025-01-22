import React from "react";
import "./VideoContainer.scss";

const VideoTitle = ({ title, description }) => {
  return (
    <div className="main-container-title">
      <div className="movie-title-content">
        <h1 className="main-title">{title}</h1>
        <p className="main-description">{description}</p>
        <button className="play-button">Play</button>
        <button className="more-button">More</button>
      </div>
    </div>
  );
};

export default VideoTitle;
