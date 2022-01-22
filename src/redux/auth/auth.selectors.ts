import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../store';

const selectAuth = (state: RootState) => state.auth;

export const selectUser = createSelector([selectAuth], (auth) => auth.user);

export const selectIsSigningUp = createSelector(
  [selectAuth],
  (auth) => auth.isSigningUp
);
export const selectIsSigningIn = createSelector(
  [selectAuth],
  (auth) => auth.isSigningIn
);
