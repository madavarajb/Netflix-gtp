import React from "react";
//@ts-ignore
import MovieCard from "./MovieCard";
import "./MovieCardsContainder.scss";

const MovieList = ({ title, movies }) => {
  console.log("imageofMovies=========>", movies);
  return (
    <div>
      <h1>{title}</h1>
      <div className="movie-cards-display">
        {movies.map((movies) => (
          <MovieCard key={movies.id} posters={movies.poster_path} />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
