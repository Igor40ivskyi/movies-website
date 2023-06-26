import {IMovie} from "../../interfaces/movie.interface";
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {movieService} from "../../services/movie.service";
import {AxiosError} from "axios";
import {IMovieData} from "../../interfaces/movieData.interface";

interface IState {
    movies: IMovie[];
    page: number;
}

const initialState: IState = {
    movies: [],
    page: null,
};

const getMoviesList = createAsyncThunk<IMovieData, void>(
    'movieSlice/getMoviesList',
    async (_, {rejectWithValue}) => {
        try {
            const {data} = await movieService.getMoviesList();
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
                const {results, page} = action.payload;
                // @ts-ignore
                state.movies = results;
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
