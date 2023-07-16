import {combineReducers, configureStore} from "@reduxjs/toolkit";

import {authReducer} from "./slices";
import {movieReducer} from "./slices";
import {findMoviesReducer} from "./slices";
import {categoriesReducer} from "./slices";

const rootReducer = combineReducers({
    authReducer,
    movieReducer,
    findMoviesReducer,
    categoriesReducer,
});

const setupStore = () => configureStore({reducer: rootReducer});

type RootState = ReturnType<typeof rootReducer>;
type AppStore = ReturnType<typeof setupStore>;
type AppDispatch = AppStore['dispatch'];

export type {
    RootState,
    AppStore,
    AppDispatch,
};

export {
    setupStore,
};