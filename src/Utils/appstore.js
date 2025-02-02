import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./UserSlice";
import moviesReducer from "./movieSlice";
import gptReducer from "./GtpSlice";

const appstore = configureStore({
  reducer: {
    user: userReducer,
    movies: moviesReducer,
    gtp: gptReducer,
  },
});

export default appstore;
