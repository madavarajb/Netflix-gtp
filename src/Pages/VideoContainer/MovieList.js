import React from "react";
//@ts-ignore
import MovieCard from "./MovieCard";
import { useNavigate } from "react-router-dom";
import "./MovieCardsContainder.scss";

const MovieList = ({ title, movies }) => {
  console.log("imageofMovies=========>", movies);

  return (
    <div>
      <h1 className="header-titles">{title}</h1>
      <div className="movie-cards-display">
        {movies.map((movies) => (
          <MovieCard
            key={movies.id}
            posters={movies.poster_path}
            id={movies.id}
          />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
