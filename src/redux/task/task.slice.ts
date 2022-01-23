import { TaskState } from './task.types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  createTaskAsync,
  fetchCompletedTasksAsync,
  fetchOpenTasksAsync,
  fetchWorkingTasksAsync,
} from './task.async';

const INITIAL_STATE: TaskState = {
  openTasks: [],
  workingTask: [],
  completeTask: [],
  isFetchingOpenTask: false,
  isFetchingWorkingTask: false,
  isFetchingCompletedTask: false,
  isCreatingTask: false,
};

const taskSlice = createSlice({
  name: 'task',
  initialState: INITIAL_STATE,
  reducers: {
    moveTaskToWorking: (state, action: PayloadAction<string>) => {
      const index = state.openTasks.findIndex((t) => t.id === action.payload);
      if (index === -1) {
        return;
      }
      const task = state.openTasks[index];
      task.status = 'working';
      state.workingTask = [task, ...state.workingTask];
      state.openTasks.splice(index, 1);
    },
    moveTaskToCompleted: (state, action: PayloadAction<string>) => {
      const index = state.workingTask.findIndex((t) => t.id === action.payload);
      if (index === -1) {
        return;
      }
      const task = state.workingTask[index];
      task.status = 'completed';
      state.completeTask = [task, ...state.completeTask];
      state.workingTask.splice(index, 1);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(createTaskAsync.pending, (state) => {
      state.isCreatingTask = true;
    });
    builder.addCase(createTaskAsync.rejected, (state) => {
      state.isCreatingTask = false;
    });
    builder.addCase(createTaskAsync.fulfilled, (state, action) => {
      state.isCreatingTask = false;
      state.openTasks = [action.payload, ...state.openTasks];
    });
    builder.addCase(fetchOpenTasksAsync.pending, (state) => {
      state.isFetchingOpenTask = true;
    });
    builder.addCase(fetchOpenTasksAsync.rejected, (state) => {
      state.isFetchingOpenTask = false;
    });
    builder.addCase(fetchOpenTasksAsync.fulfilled, (state, action) => {
      state.isFetchingOpenTask = false;
      state.openTasks = action.payload;
    });
    builder.addCase(fetchWorkingTasksAsync.pending, (state) => {
      state.isFetchingWorkingTask = true;
    });
    builder.addCase(fetchWorkingTasksAsync.rejected, (state) => {
      state.isFetchingWorkingTask = false;
    });
    builder.addCase(fetchWorkingTasksAsync.fulfilled, (state, action) => {
      state.isFetchingWorkingTask = false;
      state.workingTask = action.payload;
    });
    builder.addCase(fetchCompletedTasksAsync.pending, (state) => {
      state.isFetchingCompletedTask = true;
    });
    builder.addCase(fetchCompletedTasksAsync.rejected, (state) => {
      state.isFetchingCompletedTask = false;
    });
    builder.addCase(fetchCompletedTasksAsync.fulfilled, (state, action) => {
      state.isFetchingCompletedTask = false;
      state.completeTask = action.payload;
    });
  },
});

export const { moveTaskToWorking, moveTaskToCompleted } = taskSlice.actions;

export const taskReducer = taskSlice.reducer;
