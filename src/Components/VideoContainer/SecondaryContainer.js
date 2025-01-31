import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";
import "./MovieCardsContainder.scss";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies) || {};
  return (
    <div className="secondary-container">
      <div className="movie-cards-list">
        <div style={{ margin: "10px" }}>
          <MovieList
            title={"Now Playing"}
            movies={movies.nowPlayingMovies || []}
          />
          <MovieList title={"Top Rated"} movies={movies.trendingMovies || []} />
          <MovieList
            title={"UpComming"}
            movies={movies.UpCommingMovies || []}
          />
        </div>
      </div>
    </div>
  );
};

export default SecondaryContainer;
