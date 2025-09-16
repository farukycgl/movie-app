import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { API_KEY, API_MOVIE_LIST } from "../../api";

const initialState = {
  movies: [],
  status: "idle",
  error: null,
};

export const getMovieList = createAsyncThunk("getMovieList", async () => {
  const res = await axios.get(`${API_MOVIE_LIST}?api_key=${API_KEY}`);
  return res.data.results;
});

export const getMovieListByGenre = createAsyncThunk(
  "getMovieListByGenre",
  async (id) => {
    const res = await axios.get(
      `${API_MOVIE_LIST}?api_key=${API_KEY}&with_genres=${id}`
    );
    return res.data.results;
  }
);

export const movieListSlice = createSlice({
  name: "movieList",
  initialState,
  reducers: {}, //HTTP istekeleri yoksa burası kullanılır.
  extraReducers: (builder) => {
    // HTTP request varsa burası kullanılır.
    builder.addCase(getMovieList.pending, (state, action) => {
      state.status = action.meta.requestStatus;
    });
    builder.addCase(getMovieList.fulfilled, (state, action) => {
      state.movies = action.payload;
      state.status = action.meta.requestStatus;
    });
    builder.addCase(getMovieList.rejected, (state, action) => {
      state.error = action.error.message;
      state.status = action.meta.requestStatus;
    });
    builder.addCase(getMovieListByGenre.pending, (state, action) => {
      state.status = action.meta.requestStatus;
    });
    builder.addCase(getMovieListByGenre.fulfilled, (state, action) => {
      state.movies = action.payload;
      state.status = action.meta.requestStatus;
    });
    builder.addCase(getMovieListByGenre.rejected, (state, action) => {
      state.error = action.error.message;
      state.status = action.meta.requestStatus;
    });
  },
});

export const {} = movieListSlice.actions;
export default movieListSlice.reducer;
