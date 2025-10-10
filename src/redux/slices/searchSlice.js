import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { API_KEY, API_SEARCH } from "../../api";

const initialState = {
  results: [],
  loading: false,
  error: null,
};

export const getSearchResults = createAsyncThunk(
  "searchResults",
  async (query) => {
    if (!query.trim()) return []; //boşsa istek atma
    const res = await axios.get(`${API_SEARCH}?api_key=${API_KEY}&query=${query}`);
    return res.data.results;
  }
);

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    clearResults: (state) => {
      state.results = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getSearchResults.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getSearchResults.fulfilled, (state, action) => {
        state.loading = false;
        state.results = action.payload || [];
      })
      .addCase(getSearchResults.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { clearResults } = searchSlice.actions;
export default searchSlice.reducer;
