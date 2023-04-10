export const selectUser = state => state.auth;
export const selectId = state => state.auth.id;
export const selectName = state => state.auth.displayName;
export const selectEmail = state => state.auth.email;
export const selectIsLoggedIn = state => state.auth.isLoggedIn;
export const selectIsLoading = store => store.auth.isLoading;
export const selectError = state => state.auth.error;
