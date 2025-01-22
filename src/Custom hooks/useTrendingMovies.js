import { useEffect } from "react";
import { API, options } from "../ApiUrls/apiUrls";
import { useDispatch } from "react-redux";
import { addTrendingMovies } from "../Utils/movieSlice";

const useTrendingMovies = () => {
  const dispatch = useDispatch();
  const TrendingMovie = async () => {
    const data = await fetch(API.getTrendingMovies, options);
    const json = await data.json();
    console.log("trending moviess======>", json.results);
    dispatch(addTrendingMovies(json.results));
  };
  useEffect(() => {
    TrendingMovie();
  }, []);
};
export default useTrendingMovies;
