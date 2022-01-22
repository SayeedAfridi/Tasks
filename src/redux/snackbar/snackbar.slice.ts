import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SnackbarPayload, SnackbarState } from './snackbar.types';

const INITIAL_STATE: SnackbarState = {
  visible: false,
  message: '',
  actionText: '',
  // actionPress: () => {},
  color: '#484848',
};

const snackbarSlice = createSlice({
  name: 'snackbar',
  initialState: INITIAL_STATE,
  reducers: {
    showSnackbar: (state, action: PayloadAction<SnackbarPayload>) => {
      state.message = action.payload.message;
      // state.actionPress =
      //   action.payload.actionPress || INITIAL_STATE.actionPress;
      state.actionText = action.payload.actionText;
      state.visible = true;
    },
    showSuccessSnackbar: (state, action: PayloadAction<SnackbarPayload>) => {
      state.message = action.payload.message;
      // state.actionPress =
      //   action.payload.actionPress || INITIAL_STATE.actionPress;
      state.actionText = action.payload.actionText;
      state.color = '#4caf50';
      state.visible = true;
    },
    showErrorSnackbar: (state, action: PayloadAction<SnackbarPayload>) => {
      state.message = action.payload.message;
      // state.actionPress =
      //   action.payload.actionPress || INITIAL_STATE.actionPress;
      state.actionText = action.payload.actionText;
      state.color = '#f44336';
      state.visible = true;
    },
    hideSnackbar: (state) => {
      state.visible = false;
      state.message = INITIAL_STATE.message;
      state.actionPress = INITIAL_STATE.actionPress;
      state.actionText = INITIAL_STATE.actionText;
      state.color = '#484848';
    },
  },
});

export const {
  showErrorSnackbar,
  showSnackbar,
  showSuccessSnackbar,
  hideSnackbar,
} = snackbarSlice.actions;

export const snackbarReducer = snackbarSlice.reducer;
