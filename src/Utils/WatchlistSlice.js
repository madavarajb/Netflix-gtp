import { createSlice } from "@reduxjs/toolkit";

const WatchlistSlice = createSlice({
  name: "watchlist",
  initialState: {
    movies: [],
  },
  reducers: {
    addMovies: (state, action) => {
      // we are pusching the movie to this
      state.movies.push(action.payload);
    },
    removeMovies: (state, action) => {
      state.movies.pop();
    },
  },
});

export const { addMovies, removeMovies } = WatchlistSlice.actions;
export default WatchlistSlice.reducer;
