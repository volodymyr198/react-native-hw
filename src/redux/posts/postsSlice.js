import { createSlice } from '@reduxjs/toolkit';
import { uploadPhoto, createPost, getAllPosts } from './postsOperations';

const initialState = {
    posts: [],
    error: null,
    isLoading: false,
    uri: null,
};

const handlePending = state => {
    state.error = null;
    state.isLoading = true;
};
const handleFulfilled = (state, action) => {
    state.posts = action.payload;
    state.error = null;
    state.isLoading = false;
};
const handleRejected = (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
};

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    extraReducers: builder => {
        builder
            .addCase(uploadPhoto.pending, state => handlePending(state))
            .addCase(uploadPhoto.fulfilled, (state, action) => {
                state.uri = action.payload;
                state.isLoading = false;
                state.error = null;
            })
            .addCase(uploadPhoto.rejected, (state, action) =>
                handleRejected(state, action)
            )

            .addCase(createPost.pending, state => handlePending(state))
            .addCase(createPost.fulfilled, (state, action) =>
                handleFulfilled(state, action)
            )
            .addCase(createPost.rejected, (state, action) =>
                handleRejected(state, action)
            )

            .addCase(getAllPosts.pending, state => handlePending(state))
            .addCase(getAllPosts.fulfilled, (state, action) =>
                handleFulfilled(state, action)
            )
            .addCase(getAllPosts.rejected, (state, action) =>
                handleRejected(state, action)
            );
    },
});
export const postsReducer = postsSlice.reducer;
