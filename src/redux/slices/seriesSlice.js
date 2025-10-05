import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { API_KEY, API_TV_SERİES_LIST } from "../../api";

const initialState = {
    series: [],
    status: "idle",
    error: null,
};

export const getSeriesList = createAsyncThunk("getSeriesList", async() => {
    const res = await axios.get(`${API_TV_SERİES_LIST}?api_key=${API_KEY}`);
    return res.data.results;
});


export const seriesListSlice = createSlice({
    name: "seriesList",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getSeriesList.pending, (state,action)=> {
            state.status = action.meta.requestStatus;
        });
        builder.addCase(getSeriesList.fulfilled, (state,action)=> {
            state.series = action.payload;
            state.status = action.meta.requestStatus;
        });
        builder.addCase(getSeriesList.rejected, (state,action)=> {
            state.error = action.error.message;
            state.status = action.meta.requestStatus;
        });
    },
});

export const {} = seriesListSlice.actions;
export default seriesListSlice.reducer;