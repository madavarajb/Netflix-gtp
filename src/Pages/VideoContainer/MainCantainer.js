import React, { useState } from "react";
import VideoContainer from "./VideoContainer";
import VideoTitle from "./VideoTitle";
import { useSelector } from "react-redux";
import SecondaryContainer from "./SecondaryContainer";
import Feature from "./Feat/FeatureList/Feature";
import Category from "./Feat/CategoryList/Category";
import List1 from "./Feat/TopList/List1";
import Footer from "../Footer/Footer";

const MainCantainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  const featureMovies = useSelector((store) => store.movies?.trendingMovies);
  const movie = useSelector((store) => store.movies) || {};
  // const [randomMovie] = useState(
  //   featureMovies[Math.floor(Math.random() * featureMovies.length)]
  // );

  if (!movies || !featureMovies) return;
  const mainmovie = movies[5];
  const featMovie = featureMovies[4];

  console.log("feat/", featureMovies);

  const { original_title, overview, id } = mainmovie;
  const {
    poster_path: poster,
    original_title: movie_title,
    overview: discription,
    backdrop_path,
  } = featMovie;

  console.log();

  return (
    <div>
      <VideoContainer movieId={id} />
      <VideoTitle title={original_title} description={overview} />
      <Feature
        title={"| Feature"}
        movie_poster={poster}
        movie_name={movie_title}
        movie_discription={discription}
        movie_backdrop={backdrop_path}
      />
      <Category title={"| Category"} />
      <SecondaryContainer />
      <div style={{ display: "flex" }}>
        <List1 title={"| Most Watched"} movie={movie.trendingMovies} />
        <List1 title={"| All Time Popular"} movie={movie.popularMovies} />
      </div>
      <Footer />
    </div>
  );
};

export default MainCantainer;
