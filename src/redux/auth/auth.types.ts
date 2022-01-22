import { User } from '@src/types';

export type AuthState = {
  user?: User;
  isSigningIn: boolean;
  isSigningUp: boolean;
  isSyncing: boolean;
};
