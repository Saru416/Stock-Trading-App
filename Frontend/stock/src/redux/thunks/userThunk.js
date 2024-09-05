import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const registerUser = createAsyncThunk(
    'user/registerUser',
    async (userData, {rejectWithValue}) => {
        try{
            const response = await axios.post('http://localhost:3000/api/users/addUser', userData);
            return response.data
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);

export const loginUser = createAsyncThunk(
    'user/loginUser',
    async (userData, {rejectWithValue}) => {
        try{
            const response = await axios.post('http://localhost:3000/api/users/login', userData);
            return {user: response.data.user, token: response.data.token};
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
)

