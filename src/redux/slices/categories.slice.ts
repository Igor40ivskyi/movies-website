import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {AxiosError} from "axios";

import {IMovieData} from "../../interfaces";
import {movieService} from "../../services";
import {IMovie} from "../../interfaces";

interface IState {
    popular_page: number;
    popular_total_pages: number;
    popular_total_results: number;
    popular_movies: IMovie[];
    top_rated_page: number;
    top_rated_total_pages: number;
    top_rated_total_results: number;
    top_rated_movies: IMovie[];
    upcoming_page: number;
    upcoming_total_pages: number;
    upcoming_total_results: number;
    upcoming_movies: IMovie[];
    now_playing_page: number;
    now_playing_total_pages: number;
    now_playing_total_results: number;
    now_playing_movies: IMovie[];

}

const initialState: IState = {
    popular_page: null,
    popular_total_pages: null,
    popular_total_results: null,
    popular_movies: [],
    top_rated_page: null,
    top_rated_total_pages: null,
    top_rated_total_results: null,
    top_rated_movies: [],
    upcoming_page: null,
    upcoming_total_pages: null,
    upcoming_total_results: null,
    upcoming_movies: [],
    now_playing_page: null,
    now_playing_total_pages: null,
    now_playing_total_results: null,
    now_playing_movies: [],
};

const getPopularMoviesList = createAsyncThunk<IMovieData,void>(
    'categoriesSlice/getPopularMoviesList',
    async (_, {rejectWithValue}) => {
        try {
            const {data} = await movieService.getPopularMoviesList();
            return data;
        }catch (e) {
            const err = e as AxiosError;
            return rejectWithValue(err.response.data);
        }
    }
);

const getTop_ratedMoviesList = createAsyncThunk<IMovieData, void>(
    'categoriesSlice/getTop_ratedMoviesList',
    async (_, {rejectWithValue}) => {
        try {
            const {data} = await movieService.getTop_ratedMoviesList();
            return data;
        }catch (e) {
            const err = e as AxiosError;
            return rejectWithValue(err.response.data);
        }
    }
);

const getUpcomingMoviesList = createAsyncThunk<IMovieData, void>(
    'categoriesSlice/getUpcomingMoviesList',
    async (_, {rejectWithValue}) => {
        try {
            const {data} = await movieService.getUpcomingMoviesList();
            return data;
        }catch (e) {
            const err = e as AxiosError;
            return rejectWithValue(err.response.data);
        }
    }
);

const getNow_playingMoviesList = createAsyncThunk<IMovieData, void>(
    'categoriesSlice/getNow_playingMoviesList',
    async (_, {rejectWithValue}) => {
        try {
            const {data} = await movieService.getNow_playingMoviesList();
            return data;
        }catch (e) {
            const err = e as AxiosError;
            return rejectWithValue(err.response.data);
        }
    }
);

const slice = createSlice({
    name: 'categoriesSlice',
    initialState,
    reducers: {},
    extraReducers: builder =>
        builder
            .addCase(getPopularMoviesList.fulfilled, (state, action) => {
                const {page, total_pages, total_results, results} = action.payload;
                state.popular_page = page;
                state.popular_total_pages = total_pages;
                state.popular_total_results = total_results;
                state.popular_movies = results;
            })
            .addCase(getTop_ratedMoviesList.fulfilled, (state, action) => {
                const {page, total_pages, total_results, results} = action.payload;
                state.top_rated_page = page;
                state.top_rated_total_pages = total_pages;
                state.top_rated_total_results = total_results;
                state.top_rated_movies = results;
            })
            .addCase(getUpcomingMoviesList.fulfilled, (state, action) => {
                const {page, total_pages, total_results, results} = action.payload;
                state.upcoming_page = page;
                state.upcoming_total_pages = total_pages;
                state.upcoming_total_results = total_results;
                state.upcoming_movies = results;
            })
            .addCase(getNow_playingMoviesList.fulfilled, (state, action) => {
                const {page, total_pages, total_results, results} = action.payload;
                state.now_playing_page = page;
                state.now_playing_total_pages = total_pages;
                state.now_playing_total_results = total_results;
                state.now_playing_movies = results;
            })
});

const {reducer: categoriesReducer, actions} = slice;

const categoriesActions = {
    ...actions,
    getPopularMoviesList,
    getTop_ratedMoviesList,
    getUpcomingMoviesList,
    getNow_playingMoviesList,
};

export {
    categoriesReducer,
    categoriesActions,
};
