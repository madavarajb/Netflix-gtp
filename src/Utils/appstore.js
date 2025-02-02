import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./UserSlice";
import moviesReducer from "./movieSlice";
import gptReducer from "./GtpSlice";
import watchlistReducer from "./WatchlistSlice";

const appstore = configureStore({
  reducer: {
    user: userReducer,
    movies: moviesReducer,
    gtp: gptReducer,
    watchlist: watchlistReducer,
  },
});

export default appstore;
