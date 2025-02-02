import React from "react";
import "./Broser.scss";
import Header from "../Header/Header";
import useNowPlayingMovie from "../../Custom hooks/useNowPlayingMovies";
import MainCantainer from "../VideoContainer/MainCantainer";
import useTrendingMovies from "../../Custom hooks/useTrendingMovies";
import useUpcommingMovies from "../../Custom hooks/useUpcommingMovies";
import SearchGTP from "../SearchGtp/SearchGTP";
import { useSelector } from "react-redux";

const Browser = () => {
  useNowPlayingMovie();
  useTrendingMovies();
  useUpcommingMovies();

  const gtpSearch = useSelector((store) => store?.gtp?.showGtp);
  console.log("state===>", gtpSearch);

  return (
    <div className="browser-main-container">
      <Header />
      {gtpSearch ? <SearchGTP /> : <MainCantainer />}

      <div className="content"></div>
    </div>
  );
};

export default Browser;
