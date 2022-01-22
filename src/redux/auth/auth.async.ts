import { StackActions } from '@react-navigation/native';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { getErrorMessage } from '@src/error-handler/helper';
import { rootNavRef } from '@src/navigator';
import { authService, dbService } from '@src/services';
import { User } from '@src/types';
import {
  showErrorSnackbar,
  showSuccessSnackbar,
} from '../snackbar/snackbar.slice';

export const signinAsync = createAsyncThunk<
  User,
  { email: string; password: string }
>('auth/signin', async (data, thunk) => {
  try {
    const { email, password } = data;
    const userCred = await authService.signinWithEmailPassword(email, password);
    const user = dbService.getUserProfile(userCred.user.uid);
    thunk.dispatch(
      showSuccessSnackbar({
        message: 'Signin Successfull!',
      })
    );
    rootNavRef.current?.dispatch(StackActions.replace('Home'));
    return user;
  } catch (error) {
    const msg = getErrorMessage(error);
    thunk.dispatch(
      showErrorSnackbar({
        message: msg,
      })
    );
    return Promise.reject();
  }
});

export const signupAsync = createAsyncThunk<
  User,
  { email: string; password: string; name: string }
>('auth/signup', async (data, thunk) => {
  try {
    const { email, password } = data;
    const userCred = await authService.signupWithEmailAndPassword(
      email,
      password
    );
    const dataUser: User = {
      name: data.name,
      email: data.email,
      uid: userCred.user.uid,
    };
    const user = await dbService.createUserProfile(dataUser);
    thunk.dispatch(
      showSuccessSnackbar({
        message: 'Signup Successfull!',
      })
    );
    rootNavRef.current?.dispatch(StackActions.replace('Home'));
    return user;
  } catch (error) {
    const msg = getErrorMessage(error);
    console.log(error);
    thunk.dispatch(
      showErrorSnackbar({
        message: msg,
        actionPress: () => {},
      })
    );
    return Promise.reject();
  }
});
