import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    trendingMovies: null,
    trailerVideo: null,
  },
  reducers: {
    addNowPlayinMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addTrailerVideo: (state, action) => {
      state.trailerVideo = action.payload;
    },
    addTrendingMovies: (state, aciton) => {
      state.trendingMovies = aciton.payload;
    },
  },
});

export const { addNowPlayinMovies, addTrendingMovies, addTrailerVideo } =
  movieSlice.actions;
export default movieSlice.reducer;
