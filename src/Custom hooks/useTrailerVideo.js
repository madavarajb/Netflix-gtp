import { useDispatch, useSelector } from "react-redux";
import { API, options } from "../ApiUrls/apiUrls";
import { addTrailerVideo } from "../Utils/movieSlice";
import { useEffect } from "react";

const useTrailerVideo = (movieId) => {
  const dispatch = useDispatch();

  const getVideos = async () => {
    const data = await fetch(API.getVideoss(movieId), options);
    const json = await data.json();

    const trailerFilter = json.results.filter(
      (video) => video.type === "Trailer"
    );
    const trailer = trailerFilter.length ? trailerFilter[0] : json.results[0];
    console.log("page====>trailer", trailer);
    dispatch(addTrailerVideo(trailer));
  };

  useEffect(() => {
    getVideos();
  }, []);
};
export default useTrailerVideo;
