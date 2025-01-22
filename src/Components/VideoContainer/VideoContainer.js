import React, { useState } from "react";
import "./VideoContainer.scss";
import { useSelector } from "react-redux";
import useTrailerVideo from "../../Custom hooks/useTrailerVideo";

const VideoContainer = ({ movieId }) => {
  const trailervideo = useSelector((store) => store.movies?.trailerVideo);
  useTrailerVideo(movieId);
  console.log("video===>", trailervideo);
  return (
    <div className="video-main-container">
      <div className="video-content">
        <iframe
          style={{
            width: "100vw",
            aspectRatio: "16 / 9",
          }}
          src={
            "https://www.youtube.com/embed/" +
            trailervideo?.key +
            "?&autoplay=1&mute=1&loop=1"
          }
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
        ></iframe>
      </div>
    </div>
  );
};

export default VideoContainer;
