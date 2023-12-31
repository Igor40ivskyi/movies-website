import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {AxiosError} from "axios";

import {movieService} from "../../services";
import {IMoviesSortParams} from "../../interfaces";
import {IMovieData} from "../../interfaces";
import {IMovie} from "../../interfaces";

interface IState {
    sortedMoviesList: IMovie[];
    page: number;
    total_pages: number;
    total_results: number;
}

const initialState: IState = {
    sortedMoviesList: [],
    page: null,
    total_pages: null,
    total_results: null,
};


const getSortedMoviesList = createAsyncThunk<IMovieData,IMoviesSortParams>(
    'findMoviesSlice/getSortedMoviesList',
    async (sortParams, {rejectWithValue}) => {
        try {
            const {data} = await movieService.getSortedMoviesList(sortParams);
            return data;
        }catch (e) {
            const err = e as AxiosError;
            return rejectWithValue(err.response.data);
        }
    }
);

const slice = createSlice({
    name: 'findMoviesSlice',
    initialState,
    reducers: {},
    extraReducers: builder =>
        builder
            .addCase(getSortedMoviesList.fulfilled, (state, action) => {
                const {results, page, total_results, total_pages} = action.payload;
                state.sortedMoviesList = results;
                state.page = page;
                state.total_pages = total_pages;
                state.total_results = total_results;
            }),
});

const {reducer: findMoviesReducer, actions} = slice;

const findMoviesActions = {
    ...actions,
    getSortedMoviesList,
};

export {
    findMoviesReducer,
    findMoviesActions,
};

