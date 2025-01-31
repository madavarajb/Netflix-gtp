import React from "react";
import VideoContainer from "./VideoContainer";
import VideoTitle from "./VideoTitle";
import { useSelector } from "react-redux";
import SecondaryContainer from "./SecondaryContainer";

const MainCantainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);

  if (!movies) return;
  const mainmovie = movies[1];

  const { original_title, overview, id } = mainmovie;

  return (
    <div>
      <VideoContainer movieId={id} />
      <VideoTitle title={original_title} description={overview} />
      <SecondaryContainer />
    </div>
  );
};

export default MainCantainer;
