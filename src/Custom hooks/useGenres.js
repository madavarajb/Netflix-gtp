import { useDispatch } from "react-redux";
import { API, options } from "../ApiUrls/apiUrls";
import { addGenres } from "../Utils/movieSlice";
import { useEffect } from "react";

const useGenres = () => {
  const dispatch = useDispatch();
  const generes = async () => {
    const data = await fetch(API.getGenres, options);
    const json = await data.json();
    console.log("genresssssssss:", json.genres);
    dispatch(addGenres(json.genres));
  };

  useEffect(() => {
    generes();
  }, []);
};

export default useGenres;
