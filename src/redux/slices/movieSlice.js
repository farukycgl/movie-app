import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { API_KEY, API_MOVIE_LIST } from "../../api";

const initialState = {
  movies: [],
  isLoading: false,
};

export const getMovieList = createAsyncThunk("getMovieList", async () => {
  const res = await axios.get(`${API_MOVIE_LIST}?api_key=${API_KEY}`);
  return res.data.results;
});

export const movieListSlice = createSlice({
  name: "movieList",
  initialState,
  reducers: {}, //HTTP istekeleri yoksa burası kullanılır.
  extraReducers: (builder) => {
    // HTTP request olursa burası kullanılır.
    builder.addCase(getMovieList.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(getMovieList.fulfilled, (state, action) => {
      state.isLoading = false;
      state.movies = action.payload;
    });
  },
});

export const {} = movieListSlice.actions;
export default movieListSlice.reducer;
