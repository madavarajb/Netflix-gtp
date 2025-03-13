import React from "react";
import { ImageLinks } from "../../Images/ImageLinks";
import "./MovieCardsContainder.scss";
import { useNavigate } from "react-router-dom";

const MovieCard = ({ posters, id }) => {
  const navigate = useNavigate();
  const handleDetailPage = () => {
    navigate("/details/" + id);
    console.log("clicked mee!!", id);
  };
  return (
    <div>
      <img
        style={{ cursor: "pointer" }}
        onClick={handleDetailPage}
        alt="movie's cards"
        className="cards"
        src={ImageLinks.CDN_IMAGE_LINK + posters}
      ></img>
    </div>
  );
};

export default MovieCard;
