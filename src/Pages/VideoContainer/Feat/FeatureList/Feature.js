import React from "react";
import "./Feat.scss";
import { Button } from "@radix-ui/themes";
import { ImageLinks } from "../../../../Images/ImageLinks";

const Feature = ({
  title,
  movie_name,
  movie_discription,
  movie_poster,
  movie_backdrop,
}) => {
  return (
    <div className="feature-container">
      <h1 className="header-title">{title}</h1>
      <div
        className="feature-cover"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url(${ImageLinks.CDN_IMAGE_LINK2 + movie_backdrop})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",

          backgroundPosition: "top center",
        }}
      >
        <div className="feature-poster">
          <img
            className=""
            src={ImageLinks.CDN_IMAGE_LINK + movie_poster}
            alt="poster"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: "20px",
            }}
          ></img>
        </div>
        <div className="text-content">
          <h1>{movie_name}</h1>
          <p>{movie_discription}</p>
          <Button radius="full" color="orange" style={{ marginTop: "10px" }}>
            View More
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Feature;
