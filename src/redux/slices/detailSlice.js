import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { API_KEY, API_MOVIE_DETAIL, API_SERIES_DETAIL } from "../../api";

const initialState = {
  detail: {},
  status: "idle",
  error: null,
};

export const getMovieDetailById = createAsyncThunk(
  "getMovieDetailById",
  async ({ type, id }) => {
    const endpoint =
      type === "movie"
        ? `${API_MOVIE_DETAIL}/${id}?api_key=${API_KEY}`
        : `${API_SERIES_DETAIL}/${id}?api_key=${API_KEY}`;
    const res = await axios.get(endpoint);
    return res.data;
  }
);

export const detailSlice = createSlice({
  name: "detail",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getMovieDetailById.pending, (state, action) => {
      state.status = "loading";
    });
    builder.addCase(getMovieDetailById.fulfilled, (state, action) => {
      state.detail = action.payload;
      state.status = "succeeded";
    });
    builder.addCase(getMovieDetailById.rejected, (state, action) => {
      state.error = action.error.message;
      state.status = "failed";
    });
  },
});

export const {} = detailSlice.actions;
export default detailSlice.reducer;
