import React from "react";
import "./Broser.scss";
import Header from "../Header/Header";
import useNowPlayingMovie from "../../Custom hooks/useNowPlayingMovies";
import MainCantainer from "../VideoContainer/MainCantainer";
import useTrendingMovies from "../../Custom hooks/useTrendingMovies";
import useUpcommingMovies from "../../Custom hooks/useUpcommingMovies";

const Browser = () => {
  useNowPlayingMovie();
  useTrendingMovies();
  useUpcommingMovies();

  return (
    <div className="browser-main-container">
      <Header />
      <MainCantainer />
      <div className="content"></div>
    </div>
  );
};

export default Browser;
