import { useDispatch } from "react-redux";
import { API, options } from "../ApiUrls/apiUrls";
import { addPopularMovies } from "../Utils/movieSlice";
import { useEffect } from "react";

const usePopularMovies = () => {
  const dispatch = useDispatch();
  const PopularMovies = async () => {
    const data = await fetch(API.getPopularMovies, options);
    const json = await data.json();
    console.log("popularrrrr:", json.results);
    dispatch(addPopularMovies(json.results));
  };
  useEffect(() => {
    PopularMovies();
  }, []);
};

export default usePopularMovies;
