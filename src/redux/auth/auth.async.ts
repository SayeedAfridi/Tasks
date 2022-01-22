import { createAsyncThunk } from '@reduxjs/toolkit';
import { authService, dbService } from '@src/services';
import { User } from '@src/types';

export const signinAsync = createAsyncThunk<
  User,
  { email: string; password: string }
>('auth/signin', async (data) => {
  try {
    const { email, password } = data;
    const userCred = await authService.signinWithEmailPassword(email, password);
    const user = dbService.getUserProfile(userCred.user.uid);
    return user;
  } catch (error) {
    return Promise.reject();
  }
});

export const signupAsync = createAsyncThunk<
  User,
  { email: string; password: string; name: string }
>('auth/signup', async (data) => {
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
    return user;
  } catch (error) {
    return Promise.reject();
  }
});
