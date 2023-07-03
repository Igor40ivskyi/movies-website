import {IMovie} from "../../interfaces/movie.interface";
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {movieService} from "../../services/movie.service";
import {AxiosError} from "axios";
import {IMovieData} from "../../interfaces/movieData.interface";
import {IMovieInfo} from "../../interfaces/movieInfo.interface";
import {ITrailer} from "../../interfaces/trailer.interface";
import {IGenre} from "../../interfaces/genre.interface";

interface IState {
    movies: IMovie[];
    page: number;
    total_pages: number;
    movieInfo: IMovieInfo;
    trailer: ITrailer;
    genresList: IGenre[];
    pageByGenre: number;
    total_pagesByGenre: number;
    moviesByGenre: IMovie[];

}

const initialState: IState = {
    movies: [],
    page: null,
    total_pages: null,
    movieInfo: null,
    trailer:null,
    genresList:[],
    pageByGenre: null,
    total_pagesByGenre: null,
    moviesByGenre: [],
};

const getMoviesList = createAsyncThunk<IMovieData, { page: string;}>(
    'movieSlice/getMoviesList',
    async ({page}, {rejectWithValue}) => {
        try {
            const {data} = await movieService.getMoviesList(page);
            return data
        } catch (e) {
            const err = e as AxiosError;
            return rejectWithValue(err.response.data);
        }
    }
);

const getMovieInfo = createAsyncThunk<IMovieInfo, number>
(
    'movieSlice/getMovieInfo',
    async (id, {rejectWithValue}) => {
        try {
            const {data} = await movieService.getMovieInfo(id);
            return data;
        } catch (e) {
            const err = e as AxiosError;
            return rejectWithValue(err.response.data);
        }
    }
);

const getVideoTrailer = createAsyncThunk<ITrailer, number>(
    'movieSlice/getVideoTrailer',
    async (id, {rejectWithValue}) => {
        try {
            const {data} = await movieService.getVideoTrailer(id);
            return data;
        }catch (e) {
            const err = e as AxiosError;
            return rejectWithValue(err.response.data);
        }

    }
);

const getGenresList = createAsyncThunk<IGenre[], undefined>(
    'movieSlice/getGenresList',
    async (_, {rejectWithValue}) => {
        try {
            const {data:{genres}} = await movieService.getGenresList();
            return genres;
        } catch (e) {
            const err = e as AxiosError;
            return rejectWithValue(err.response.data);
        }
    }
);

const getMoviesListByGenreId = createAsyncThunk<IMovieData,{genreId:string, page: string;}>(
    'movieSlice/getMoviesListByGenreId',
    async ({genreId,page}, {rejectWithValue}) => {
        try {
            const {data} = await movieService.getMoviesByGenreId(genreId, page);
            return data;
        }catch (e) {
            const err = e as AxiosError;
            return rejectWithValue(err.response.data);
        }
    }
);


const slice = createSlice({
    name: 'movieSlice',
    initialState,
    reducers: {},
    extraReducers: builder =>
        builder
            .addCase(getMoviesList.fulfilled, (state, action) => {
                const {results, page, total_pages} = action.payload;
                state.movies = results;
                state.page = page;
                state.total_pages = total_pages;
            })
            .addCase(getMovieInfo.fulfilled, (state, action) => {
                state.movieInfo = action.payload;
            })
            .addCase(getVideoTrailer.fulfilled, (state, action) => {
                state.trailer = action.payload;
            })
            .addCase(getGenresList.fulfilled, (state, action) => {
                state.genresList = action.payload;
            })
            .addCase(getMoviesListByGenreId.fulfilled, (state, action) => {
                const {results, page, total_pages} = action.payload;

                state.moviesByGenre = results;
                state.pageByGenre = page;
                state.total_pagesByGenre = total_pages;
            }),
});

const {reducer: movieReducer, actions} = slice;

const movieActions = {
    ...actions,
    getMoviesList,
    getMovieInfo,
    getVideoTrailer,
    getGenresList,
    getMoviesListByGenreId,
};

export {
    movieReducer,
    movieActions,
};
