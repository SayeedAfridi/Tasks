import {
  getFirestore,
  Firestore,
  getDoc,
  doc,
  setDoc,
  Timestamp,
  collection,
  addDoc,
  getDocs,
  query,
  where,
  updateDoc,
} from '@firebase/firestore';
import { FirebaseApp } from '@firebase/app';
import { Task, TaskStatus, User } from '@src/types';
import { taskCollection, usersCollection } from '@src/containers/db.constants';
import { isBefore } from 'date-fns';

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

  async createTask(data: any): Promise<Task> {
    try {
      if (!this.db) {
        throw new Error(nodb);
      }
      const finalData = {
        ...data,
        createdAt: Timestamp.now(),
        updatedAt: Timestamp.now(),
      };
      const tRef = collection(this.db, taskCollection);
      const docRef = await addDoc(tRef, finalData);
      return {
        ...finalData,
        createdAt: finalData.createdAt.toDate().toISOString(),
        updatedAt: finalData.updatedAt.toDate().toISOString(),
        id: docRef.id,
      };
    } catch (error) {
      throw error;
    }
  }

  async fetchTasks(userUid: string, status: TaskStatus): Promise<Task[]> {
    try {
      if (!this.db) {
        throw new Error(nodb);
      }
      const tRef = collection(this.db, taskCollection);
      const q = query(
        tRef,
        where('userUid', '==', userUid),
        where('status', '==', status)
      );
      const snapshots = await getDocs(q);
      const tasks: Task[] = [];
      snapshots.forEach((d) => {
        if (!d.exists) {
          return;
        }
        const data = d.data();
        const task: Task = {
          id: d.id,
          ...(data as any),
          createdAt: data.createdAt.toDate().toISOString(),
          updatedAt: data.updatedAt.toDate().toISOString(),
        };
        tasks.push(task);
      });
      return tasks.sort((a, b) => {
        const aDate = new Date(a.createdAt);
        const bDate = new Date(b.createdAt);
        if (isBefore(aDate, bDate)) {
          return 1;
        } else {
          return -1;
        }
      });
    } catch (error) {
      throw error;
    }
  }

  async updateTask(id: string, status: TaskStatus): Promise<void> {
    try {
      if (!this.db) {
        throw new Error(nodb);
      }
      const docRef = doc(this.db, `${taskCollection}/${id}`);
      await updateDoc(docRef, {
        status,
        updatedAt: Timestamp.now(),
      });
    } catch (error) {
      throw error;
    }
  }
}

const dbService = new _DBService();

export default dbService;
