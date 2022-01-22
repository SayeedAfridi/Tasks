import { initializeApp, getApps, FirebaseApp } from '@firebase/app';

class _FirebaseService {
  app?: FirebaseApp = undefined;
  private config = {
    apiKey: 'AIzaSyAJFh-59MJBhFAFBaVPsYCyeE9nRaELgaQ',
    authDomain: 'tasks-ac236.firebaseapp.com',
    projectId: 'tasks-ac236',
    storageBucket: 'tasks-ac236.appspot.com',
    messagingSenderId: '1053883501335',
    appId: '1:1053883501335:web:07f156df49cd4cdfa28552',
  };

  init() {
    const apps = getApps();
    if (apps.length) {
      this.app = apps[0];
      return this.app;
    }
    this.app = initializeApp(this.config);
    return this.app;
  }

  getApp() {
    if (!this.app) {
      return this.init();
    }
    return this.app;
  }
}

const firebaseService = new _FirebaseService();

export default firebaseService;
