import { createSlice } from '@reduxjs/toolkit';

import { registerUser, loginUser, logoutUser } from './authOperations';

const initialState = {
    email: '',
    token: '',
    displayName: '',
    id: '',
    isLoggedIn: false,
    error: null,
    isLoading: false,
    // isRefreshing: false,
};

const handlePending = state => {
    state.isLoading = true;
    state.error = null;
};
const handleFulfilled = (state, action) => {
    state.isLoading = false;
    state.email = action.payload.email;
    state.displayName = action.payload.displayName;
    state.id = action.payload.uid;
    state.isLoggedIn = true;
};
const handleRejected = (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    extraReducers: builder => {
        builder
            .addCase(registerUser.pending, state => handlePending(state))
            .addCase(registerUser.fulfilled, (state, action) =>
                handleFulfilled(state, action)
            )
            .addCase(registerUser.rejected, (state, action) =>
                handleRejected(state, action)
            )

            .addCase(loginUser.pending, state => handlePending(state))
            .addCase(loginUser.fulfilled, (state, action) =>
                handleFulfilled(state, action)
            )
            .addCase(loginUser.rejected, (state, action) =>
                handleRejected(state, action)
            )

            .addCase(logoutUser.pending, state => handlePending(state))
            .addCase(logoutUser.fulfilled, (state, action) => {
                state.isLoading = false;
                state.email = '';
                state.token = '';
                state.isLoggedIn = false;
            })
            .addCase(logoutUser.rejected, (state, action) =>
                handleRejected(state, action)
            );
    },
});

export const authReducer = authSlice.reducer;
