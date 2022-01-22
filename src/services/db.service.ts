import {
  getFirestore,
  Firestore,
  getDoc,
  doc,
  setDoc,
} from '@firebase/firestore';
import { FirebaseApp } from '@firebase/app';
import { User } from '@src/types';
import { usersCollection } from '@src/containers/db.constants';

const nodb = 'Please initialize db first';

class _DBService {
  db?: Firestore;

  init(app: FirebaseApp) {
    if (!this.db) {
      this.db = getFirestore(app);
    }
  }

  async getUserProfile(uid: string = ''): Promise<User> {
    try {
      if (!uid) {
        throw new Error('No User Id');
      }
      if (!this.db) {
        throw new Error(nodb);
      }
      const docPath = `${usersCollection}/${uid}`;
      const docRef = doc(this.db, docPath);
      const userDoc = await getDoc(docRef);
      if (!userDoc.exists) {
        throw new Error('No user exists with this id');
      }
      const user = userDoc.data();
      return user as User;
    } catch (error) {
      throw error;
    }
  }

  async createUserProfile(data: User): Promise<User> {
    try {
      if (!this.db) {
        throw new Error(nodb);
      }
      const docPath = `${usersCollection}/${data.uid}`;
      const docRef = doc(this.db, docPath);
      await setDoc(docRef, data);
      return data;
    } catch (error) {
      throw error;
    }
  }
}

const dbService = new _DBService();

export default dbService;
