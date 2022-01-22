import {
  getAuth,
  Auth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  UserCredential,
} from '@firebase/auth';
import { FirebaseApp } from '@firebase/app';
import firebaseService from './firebase.service';

const noauth = 'Please initialize auth first';

class _AuthService {
  auth?: Auth;
  init(app: FirebaseApp) {
    if (!this.auth) {
      this.auth = getAuth(app);
    }
  }

  async signinWithEmailPassword(
    email: string,
    password: string
  ): Promise<UserCredential> {
    try {
      if (!this.auth) {
        throw new Error(noauth);
      }
      const userCred = await signInWithEmailAndPassword(
        this.auth,
        email,
        password
      );
      return userCred;
    } catch (error) {
      throw error;
    }
  }

  async signupWithEmailAndPassword(
    email: string,
    password: string
  ): Promise<UserCredential> {
    try {
      if (!this.auth) {
        throw new Error(noauth);
      }
      const userCred = await createUserWithEmailAndPassword(
        this.auth,
        email,
        password
      );
      return userCred;
    } catch (error) {
      throw error;
    }
  }
}

const authService = new _AuthService();

export default authService;
