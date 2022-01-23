import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../store';

const taskState = (state: RootState) => state.task;

export const selectIsCreatingTask = createSelector(
  [taskState],
  (t) => t.isCreatingTask
);
export const selectIsFetchingOpenTasks = createSelector(
  [taskState],
  (t) => t.isFetchingOpenTask
);

export const selectOpenTasks = createSelector([taskState], (t) => t.openTasks);

export const selectIsFetchingWorkingTasks = createSelector(
  [taskState],
  (t) => t.isFetchingWorkingTask
);

export const selectWorkingTasks = createSelector(
  [taskState],
  (t) => t.workingTask
);
export const selectIsFetchingCompletedTasks = createSelector(
  [taskState],
  (t) => t.isFetchingCompletedTask
);

export const selectCompletedTasks = createSelector(
  [taskState],
  (t) => t.completeTask
);
