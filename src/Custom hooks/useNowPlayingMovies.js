import { useDispatch } from "react-redux";
import { API, options } from "../ApiUrls/apiUrls";
import { addNowPlayinMovies } from "../Utils/movieSlice";
import { useEffect } from "react";

const useNowPlayingMovie = () => {
  const dispatch = useDispatch();
  const nowPlayingMovies = async () => {
    const data = await fetch(API.getNowPlayingMovies, options);
    const json = await data.json();
    console.log("movies----->", json.results);
    dispatch(addNowPlayinMovies(json.results));
  };

  useEffect(() => {
    nowPlayingMovies();
  }, []);
};

export default useNowPlayingMovie;
