import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../store';

const snackbarState = (state: RootState) => state.snackbar;

export const selectShowSnackbar = createSelector(
  [snackbarState],
  (snackbar) => snackbar.visible
);

export const selectSnackbarMessage = createSelector(
  [snackbarState],
  (snackbar) => snackbar.message
);

export const selectSnackbarActionText = createSelector(
  [snackbarState],
  (snackbar) => snackbar.actionText
);

export const selectSnackbarAction = createSelector(
  [snackbarState],
  (snackbar) => snackbar.actionPress
);

export const selectSnackbarColor = createSelector(
  [snackbarState],
  (snackbar) => snackbar.color
);
