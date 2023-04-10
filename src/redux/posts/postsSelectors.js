import { createSelector } from '@reduxjs/toolkit';

import { selectId } from '../auth/authSelectors';

export const selectAllPosts = state => state.posts.posts;

export const selectAuthPosts = createSelector(
    [selectAllPosts, selectId],
    (posts, userId) => {
        return posts.filter(post => post.userId === userId);
    }
);
