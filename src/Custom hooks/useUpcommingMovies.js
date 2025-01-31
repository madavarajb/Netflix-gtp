import { useEffect } from "react";
import { API, options } from "../ApiUrls/apiUrls";
import { useDispatch } from "react-redux";
import { addUpCommingMovies } from "../Utils/movieSlice";

const useUpcommingMovies = () => {
  const dispatch = useDispatch();
  const UpcommingMovies = async () => {
    const data = await fetch(API.getUpcommingMovies, options);
    const json = await data.json();
    console.log("======>UpcommingMovies", json.results);
    dispatch(addUpCommingMovies(json.results));
  };

  useEffect(() => {
    UpcommingMovies();
  }, []);
};
export default useUpcommingMovies;
