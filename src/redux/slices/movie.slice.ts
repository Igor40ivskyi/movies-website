import {IMovie} from "../../interfaces/movie.interface";
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {movieService} from "../../services/movie.service";
import {AxiosError} from "axios";
import {IMovieData} from "../../interfaces/movieData.interface";

interface IState {
    movies: IMovie[];
    page: number;
    total_pages: number;
}

const initialState: IState = {
    movies: [],
    page: null,
    total_pages: null,
};

const getMoviesList = createAsyncThunk<IMovieData, { page: string;}>(
    'movieSlice/getMoviesList',
    async ({page}, {rejectWithValue}) => {
        try {
            const {data} = await movieService.getMoviesList(page);
            console.log(data);
            return data;
        } catch (e) {
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
                console.log(action.payload);
                const {results, page, total_pages} = action.payload;
                state.movies = results;
                state.page = page;
                state.total_pages = total_pages;
            }),
});

const {reducer: movieReducer, actions} = slice;

const movieActions = {
    ...actions,
    getMoviesList,
};

export {
    movieReducer,
    movieActions,
};
