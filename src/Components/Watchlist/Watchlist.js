import React from "react";
import Header from "../Header/Header";
import { useSelector } from "react-redux";
import { ImageLinks } from "../../Images/ImageLinks";

const Watchlist = () => {
  const moviecards = useSelector((store) => store?.watchlist?.movies);
  console.log("cards in watch list-->", moviecards);

  return (
    <div>
      <Header />
      <div>
        {moviecards.map((movie, index) => (
          <img
            key={index}
            style={{ cursor: "pointer" }}
            //   onClick={handleDetailPage}
            alt="movie's cards"
            className="cards"
            src={ImageLinks.CDN_IMAGE_LINK + movie}
          ></img>
        ))}
      </div>
    </div>
  );
};

export default Watchlist;
