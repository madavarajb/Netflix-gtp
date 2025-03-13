import React from "react";
import "./Broser.scss";
import Header from "../Header/Header";
import useNowPlayingMovie from "../../Custom hooks/useNowPlayingMovies";
import MainCantainer from "../VideoContainer/MainCantainer";
import useTrendingMovies from "../../Custom hooks/useTrendingMovies";
import useUpcommingMovies from "../../Custom hooks/useUpcommingMovies";
import SearchGTP from "../SearchGtp/SearchGTP";
import { useSelector } from "react-redux";
import Header2 from "../Header/Header2";
import useGenres from "../../Custom hooks/useGenres";
import usePopularMovies from "../../Custom hooks/usePopularMovies";

const Browser = () => {
  useNowPlayingMovie();
  useTrendingMovies();
  useUpcommingMovies();
  usePopularMovies();
  useGenres();

  const gtpSearch = useSelector((store) => store?.gtp?.showGtp);
  console.log("state===>", gtpSearch);

  return (
    <div className="browser-main-container">
      <div className="boxx-1">
        <Header2 />
      </div>
      <div className="boxx-2">
        <div className="inner-1">
          <Header />
        </div>
        <div className="inner-2">
          <MainCantainer />
        </div>
      </div>

      {/* {gtpSearch ? <SearchGTP /> : <MainCantainer />} */}
    </div>
  );
};

export default Browser;
