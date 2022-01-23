import { createAsyncThunk } from '@reduxjs/toolkit';
import { getErrorMessage } from '@src/error-handler/helper';
import { dbService } from '@src/services';
import { Task } from '@src/types';
import {
  showErrorSnackbar,
  showSuccessSnackbar,
} from '../snackbar/snackbar.slice';

export const createTaskAsync = createAsyncThunk<
  Task,
  { title: string; userUid: string }
>('task/create', async (data, thunk) => {
  try {
    const createData = {
      ...data,
      status: 'open',
    };
    const task = await dbService.createTask(createData);
    thunk.dispatch(showSuccessSnackbar({ message: 'Task created' }));
    return task;
  } catch (error) {
    const message = getErrorMessage(error);
    thunk.dispatch(showErrorSnackbar({ message }));
    return Promise.reject();
  }
});

export const fetchOpenTasksAsync = createAsyncThunk<Task[], string>(
  'task/fetchOpenTasks',
  async (userUid, thunk) => {
    try {
      const tasks = await dbService.fetchTasks(userUid, 'open');
      return tasks;
    } catch (error) {
      const message = getErrorMessage(error);
      thunk.dispatch(showErrorSnackbar({ message }));
      return Promise.reject();
    }
  }
);

export const fetchWorkingTasksAsync = createAsyncThunk<Task[], string>(
  'task/fetchWorkingTasks',
  async (userUid, thunk) => {
    try {
      const tasks = await dbService.fetchTasks(userUid, 'working');
      return tasks;
    } catch (error) {
      const message = getErrorMessage(error);
      thunk.dispatch(showErrorSnackbar({ message }));
      return Promise.reject();
    }
  }
);

export const fetchCompletedTasksAsync = createAsyncThunk<Task[], string>(
  'task/fetchCompletedTasks',
  async (userUid, thunk) => {
    try {
      const tasks = await dbService.fetchTasks(userUid, 'completed');
      return tasks;
    } catch (error) {
      const message = getErrorMessage(error);
      thunk.dispatch(showErrorSnackbar({ message }));
      return Promise.reject();
    }
  }
);
