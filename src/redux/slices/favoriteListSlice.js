import { createSlice } from "@reduxjs/toolkit";
import {
  getItemFromStorage,
  setItemToStorage,
} from "../storage/storageService";

const initialState = {
  favoriteMovies: getItemFromStorage("favorite"),
  status: "idle",
  error: null,
};

export const favoriteListSlice = createSlice({
  name: "favoriteListSlice",
  initialState,
  reducers: {
    addToFavorite: (state, action) => {
      const findMovie = state.favoriteMovies?.some(
        (movie) => movie.id === action.payload.id
      ); //storage içinde var olup olmadıgı kontrolu.
      if (!findMovie) {
        state.favoriteMovies = [...state.favoriteMovies, action.payload];
        setItemToStorage("favorite", state.favoriteMovies);
      }
    },
    removeFromFavorite: (state, action) => {
      const filtredMovies = state.favoriteMovies?.filter(
        (movie) => movie.id !== action.payload.id
      );
      state.favoriteMovies = filtredMovies;
      setItemToStorage("favorite", state.favoriteMovies);
    },
  },
});

export const { addToFavorite, removeFromFavorite } = favoriteListSlice.actions;
export default favoriteListSlice.reducer;
