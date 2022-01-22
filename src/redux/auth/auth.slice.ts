import { StackActions } from '@react-navigation/routers';
import { createSlice } from '@reduxjs/toolkit';
import { rootNavRef } from '@src/navigator';
import { signinAsync, signupAsync } from './auth.async';
import { AuthState } from './auth.types';

const INITIAL_STATE: AuthState = {
  user: undefined,
  isSyncing: false,
  isSigningIn: false,
  isSigningUp: false,
};

const authSlice = createSlice({
  name: 'auth',

  initialState: INITIAL_STATE,

  reducers: {
    logout: (state) => {
      state.user = INITIAL_STATE.user;
      rootNavRef.current?.dispatch(StackActions.replace('Authentication'));
    },

    syncUser: (state, action) => {
      state.user = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(signupAsync.pending, (state) => {
      state.isSigningUp = true;
    });
    builder.addCase(signupAsync.rejected, (state) => {
      state.isSigningUp = false;
    });
    builder.addCase(signupAsync.fulfilled, (state, action) => {
      state.isSigningUp = false;
      state.user = action.payload;
    });
    builder.addCase(signinAsync.pending, (state) => {
      state.isSigningIn = true;
    });
    builder.addCase(signinAsync.rejected, (state) => {
      state.isSigningIn = false;
    });
    builder.addCase(signinAsync.fulfilled, (state, action) => {
      state.isSigningIn = false;
      state.user = action.payload;
    });
  },
});

export const { logout, syncUser } = authSlice.actions;

export const authReducer = authSlice.reducer;
