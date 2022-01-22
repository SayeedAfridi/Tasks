import { StackActions } from '@react-navigation/routers';
import { createSlice } from '@reduxjs/toolkit';
import { rootNavRef } from '@src/navigator';
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
      rootNavRef.current?.dispatch(StackActions.replace('Startup'));
    },

    syncUser: (state, action) => {
      state.user = action.payload;
    },
  },

  extraReducers: (builder) => {},
});

export const { logout, syncUser } = authSlice.actions;

export const authReducer = authSlice.reducer;
