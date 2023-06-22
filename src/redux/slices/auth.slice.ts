import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {IAuth} from "../../interfaces";
import {AxiosError} from "axios";
import {authService} from "../../services";

interface IState {

}

const initialState: IState = {};

const register = createAsyncThunk<void, IAuth>(
    'authSlice/register',
    async (user, {rejectWithValue}) => {
        try {
            console.log(user);
            await authService.register(user);
        } catch (e) {
            const err = e as AxiosError;
            return rejectWithValue(err.response?.data);
        }
    }
);

const slice = createSlice({
    name: 'authSlice',
    initialState,
    reducers: {},
    extraReducers: builder =>
        builder
});

const {reducer: authReducer, actions} = slice;

const authActions = {
    ...actions,
    register,
};

export {
    authReducer,
    authActions,
};
