import React, { useRef } from "react";
import "./List1.scss";
import Listbox from "./Listbox";
import { useSelector } from "react-redux";
const List1 = ({ title, movie }) => {
  // const PopularMovie = useSelector((store) => store?.movies?.popularMovies);
  console.log("popularrrrrrrrrrrr=>", movie);

  const getSeasonFromDate = (releaseDate) => {
    if (!releaseDate) return "Soon";
    const month = new Date(releaseDate).getMonth() + 1;
    if (month >= 3 && month <= 5) return "Spring";
    if (month >= 6 && month <= 8) return "Summer";
    if (month >= 9 && month <= 11) return "Fall";
    return "Winter";
  };

  return (
    <div
      className="list-container"
      style={{
        // backgroundColor: "orange",
        color: "white",
        width: "100%",
        height: "160vh",
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        // flexGrow: "1",
        paddingLeft: "3%",
        marginTop: "5%",
      }}
    >
      <h1 className="list-box-header">{title}</h1>

      {/* added check to make sure movie is array or else make it null */}

      {(movie ?? []).slice(0, 9).map((movies) => (
        <Listbox
          key={movies.id}
          movie_name={movies.original_title}
          rating={parseFloat(movies.vote_average).toFixed(1)}
          out_date={getSeasonFromDate(movies.release_date)}
          movie_status={movies.release_date ? "Released" : "Not Released"}
          movie_poster={movies.poster_path}
        />
      ))}
    </div>
  );
};

export default List1;
