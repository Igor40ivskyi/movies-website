import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {IRegister} from "../../interfaces";
import {AxiosError} from "axios";
import {authService} from "../../services";
import {IMe} from "../../interfaces/me.interface";
import {ILogin} from "../../types";

interface IState {
    me: IMe;
}

const initialState: IState = {
    me: null,
};

const register = createAsyncThunk<void, IRegister>(
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

const login = createAsyncThunk<IMe, ILogin>(
    'authSlice/login',
    async (user, {rejectWithValue}) => {
        try {
            return await authService.login(user);
        }catch (e) {
            const err = e as AxiosError;
            return rejectWithValue(err.response.data);
        }
    }
);

const slice = createSlice({
    name: 'authSlice',
    initialState,
    reducers: {},
    extraReducers: builder =>
        builder
            .addCase(login.fulfilled, (state, action) => {
                state.me = action.payload;
            }),
});

const {reducer: authReducer, actions} = slice;

const authActions = {
    ...actions,
    register,
    login,
};

export {
    authReducer,
    authActions,
};
