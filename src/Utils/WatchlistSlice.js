import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import {
  addToFirestoreWatchlist,
  removeFromFirestoreWatchlist,
  fetchFirestoreWatchlist,
} from "../Utils/FirebaseDB";

export const fetchWatchlist = createAsyncThunk(
  "watchlist/fetch",
  async (userId) => {
    return await fetchFirestoreWatchlist(userId);
  }
);

const WatchlistSlice = createSlice({
  name: "watchlist",
  initialState: {
    movies: JSON.parse(localStorage.getItem("watchlist")) || [],
    // movies: [],
  },
  reducers: {
    addMovies: (state, action) => {
      // we are pusching the movie to this
      state.movies.push(action.payload);
      localStorage.setItem("watchlist", JSON.stringify(state.movies));
      // addToFirestoreWatchlist(action.meta.arg, action.payload);
      // if (userId) {
      //   addToFirestoreWatchlist(userId, movie);
      // }
    },
    removeMovies: (state, action) => {
      state.movies.pop();
    },
    clearWatchlist: (state) => {
      state.movies = [];
      localStorage.removeItem("watchlist"); // Clear storage when user logs out
    },
  },
});

export const { addMovies, removeMovies, clearWatchlist } =
  WatchlistSlice.actions;
export default WatchlistSlice.reducer;
