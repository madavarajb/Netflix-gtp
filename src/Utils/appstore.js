import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./UserSlice";
import moviesReducer from "./movieSlice";

const appstore = configureStore({
  reducer: {
    user: userReducer,
    movies: moviesReducer,
  },
});

export default appstore;
