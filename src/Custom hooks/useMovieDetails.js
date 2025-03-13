import { useEffect } from "react";
import { API, options } from "../ApiUrls/apiUrls";
import { useDispatch } from "react-redux";
import { addMovieDetails } from "../Utils/movieSlice";
import { useParams } from "react-router-dom";

const useMovieDetails = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const movieDetails = async () => {
    const data = await fetch(API.getMovieDetails(id), options);
    const json = await data.json();
    console.log("details--->", json);
    dispatch(addMovieDetails(json));
  };

  useEffect(() => {
    movieDetails();
  }, [id]);
};
export default useMovieDetails;
