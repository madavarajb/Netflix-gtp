import React from "react";
import { ImageLinks } from "../../Images/ImageLinks";
import "./MovieCardsContainder.scss";

const MovieCard = ({ posters }) => {
  return (
    <div>
      <img
        alt="movie's cards"
        className="cards"
        src={ImageLinks.CDN_IMAGE_LINK + posters}
      ></img>
    </div>
  );
};

export default MovieCard;
