import React from "react";
import "./ListBox.scss";
import { StarIcon } from "@radix-ui/react-icons";
import { Text } from "@radix-ui/themes";
import { ImageLinks } from "../../../../Images/ImageLinks";

const Listbox = ({
  movie_name,
  rating,
  out_date,
  movie_status,
  movie_poster,
}) => {
  return (
    <div className="list-box-container">
      <div
        className="poster-card"
        style={{
          backgroundImage: `url(${ImageLinks.CDN_IMAGE_LINK + movie_poster})`,
          backgroundSize: "cover",
        }}
      ></div>
      <div className="list-content-box">
        <Text weight={"bold"} size={"5"}>
          {movie_name}
        </Text>
        {/* <StarIcon /> */}
        <Text size={"2"}>
          {rating} . {out_date} . {movie_status}
        </Text>
      </div>
    </div>
  );
};

export default Listbox;
