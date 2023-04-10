import { createSlice } from '@reduxjs/toolkit';
import { createComment, getAllComments } from './commentsOperations';

const initialState = {
    comments: [],
    error: null,
    isLoading: false,
};

const handlePending = state => {
    state.error = null;
    state.isLoading = true;
};
const handleFulfilled = (state, action) => {
    state.comments = action.payload;
    state.error = null;
    state.isLoading = false;
};
const handleRejected = (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
};

const commentsSlice = createSlice({
    name: 'comments',
    initialState,
    extraReducers: builder => {
        builder
            .addCase(getAllComments.pending, state => handlePending(state))
            .addCase(getAllComments.fulfilled, (state, action) =>
                handleFulfilled(state, action)
            )
            .addCase(getAllComments.rejected, (state, action) =>
                handleRejected(state, action)
            )
            .addCase(createComment.pending, state => handlePending(state))
            .addCase(createComment.fulfilled, (state, action) =>
                handleFulfilled(state, action)
            )
            .addCase(createComment.rejected, (state, action) =>
                handleRejected(state, action)
            );
    },
});

export const commentsReducer = commentsSlice.reducer;
