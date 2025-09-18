import { configureStore } from "@reduxjs/toolkit";
import genreSlice from "./slices/genreSlice";
import movieListSlice from "./slices/movieSlice";
import movieDetailSlice from "./slices/movieDetailSlice";
import favoriteListSlice from "./slices/favoriteListSlice";

export const store = configureStore({
  reducer: {
    genre: genreSlice,
    movieList: movieListSlice,
    movieDetail: movieDetailSlice,
    favorites: favoriteListSlice,
  },
});
