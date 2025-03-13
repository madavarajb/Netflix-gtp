import React from "react";
import "./Category.scss";
import Box from "./Box";
import { useSelector } from "react-redux";
import { Category_backdrop } from "../../../../Images/ImageLinks";

const Category = ({ title }) => {
  const genres = useSelector((store) => store?.movies?.genres) || [];
  const bg_photos = Category_backdrop;
  console.log("bggggggggG:", bg_photos);

  return (
    <div className="category-container">
      <h1 className="header-title">{title}</h1>
      <div className="x">
        <div className="box-row">
          {genres.map((catlog, id) => (
            <Box
              key={catlog.id}
              title={catlog.name}
              back_drop={bg_photos[id]?.bg_poster}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Category;
