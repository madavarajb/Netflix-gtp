import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    trendingMovies: null,
    UpCommingMovies: null,
    trailerVideo: null,
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
  addMovieDetails,
} = movieSlice.actions;
export default movieSlice.reducer;
