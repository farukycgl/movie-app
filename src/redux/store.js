import { configureStore } from "@reduxjs/toolkit";
import genreSlice from "./slices/genreSlice";
import movieListSlice from "./slices/movieSlice";
import detailSlice from "./slices/detailSlice";
import favoriteListSlice from "./slices/favoriteListSlice";
import seriesListSlice from "./slices/seriesSlice";
import searchSlice from "./slices/searchSlice";

export const store = configureStore({
  reducer: {
    genre: genreSlice,
    movieList: movieListSlice,
    detail: detailSlice,
    favorites: favoriteListSlice,
    seriesList: seriesListSlice,
    search: searchSlice,
  },
});
