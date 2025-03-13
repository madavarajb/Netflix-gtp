import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    trendingMovies: null,
    UpCommingMovies: null,
    trailerVideo: null,
    genres: null,
    popularMovies: null,
    movieDetails: null,
  },
  reducers: {
    addNowPlayinMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addTrailerVideo: (state, action) => {
      state.trailerVideo = action.payload;
    },
    addTrendingMovies: (state, action) => {
      state.trendingMovies = action.payload;
    },
    addUpCommingMovies: (state, action) => {
      state.UpCommingMovies = action.payload;
    },
    addGenres: (state, action) => {
      state.genres = action.payload;
    },
    addPopularMovies: (state, action) => {
      state.popularMovies = action.payload;
    },
    addMovieDetails: (state, action) => {
      state.movieDetails = action.payload;
    },
  },
});

export const {
  addNowPlayinMovies,
  addTrendingMovies,
  addTrailerVideo,
  addUpCommingMovies,
  addPopularMovies,
  addMovieDetails,
  addGenres,
} = movieSlice.actions;
export default movieSlice.reducer;
