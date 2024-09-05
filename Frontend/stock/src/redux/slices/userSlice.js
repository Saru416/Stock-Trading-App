import {createSlice} from '@reduxjs/toolkit'
import { registerUser, loginUser } from '../thunks/userThunk';

const initialState = {
    userInfo: null,
    users: [],
    loading: false,
    error: null,
    token: null,
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        logoutUser: (state) => {
            state.userInfo = null;
            state.token = null;
            localStorage.removeItem('token');
        },
    },
    extraReducers: (builder) => {
        builder
            // register user
            .addCase(registerUser.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(registerUser.fulfilled, (state,action) => {
                state.loading = false;
                state.userInfo = action.payload;
            })
            .addCase(registerUser.rejected, (state,action) =>{
                state.loading = false;
                state.error = action.payload;
            })

            // Login User
            .addCase(loginUser.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(loginUser.fulfilled, (state,action) => {
                state.loading = false;
                state.userInfo = action.payload.user;
                state.token = action.payload.token;
                localStorage.setItem('token', action.payload.token);
            })
            .addCase(loginUser.rejected, (state,action) =>{
                state.loading = false;
                state.error = action.payload;
            })
    }
});

export const {logoutUser} = userSlice.actions;

export default userSlice.reducer;