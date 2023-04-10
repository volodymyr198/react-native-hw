import { createAsyncThunk } from '@reduxjs/toolkit';

import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    updateProfile,
    onAuthStateChanged,
} from 'firebase/auth';

import { auth } from '../../firebase/config';

export const registerUser = createAsyncThunk(
    'auth/register',
    async (credentials, thunkAPI) => {
        try {
            const { email, login, password } = credentials;
            const response = await createUserWithEmailAndPassword(
                auth,
                email,
                password
            );
            await updateProfile(auth.currentUser, {
                displayName: login,
            });
            return response.user;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

export const loginUser = createAsyncThunk(
    'auth/login',
    async (credentials, thunkAPI) => {
        try {
            const { email, password } = credentials;
            const response = await signInWithEmailAndPassword(
                auth,
                email,
                password
            );
            return response.user;
        } catch (error) {
            console.log(error);
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

export const currentUser = createAsyncThunk(
    'auth/current',
    async (_, thunkAPI) => {
        try {
            await onAuthStateChanged(auth, user => {
                if (user) {
                    return user;
                }
                return null;
            });
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

export const logoutUser = createAsyncThunk(
    'auth/logout',
    async (_, thunkAPI) => {
        try {
            await signOut(auth);
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);
